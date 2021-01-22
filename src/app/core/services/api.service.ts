import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBonus} from '../interfaces';

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}
    getBonuses(): Observable<IBonus[]> {
        return this.http.get('assets/static/bonuses.json').pipe(
            map((response: any) => {
                const bonusesList = response['data'];
                return bonusesList;
            })
        );
    }

    getCity(latitude:any,longitude:any): Observable<any>{
        console.log(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`);
        return this.http.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
        .pipe(map((data: any) =>{
           return {city: data['city'], principalSubdivision: data['principalSubdivision'], locality: data['locality']};
        }));
    }
}