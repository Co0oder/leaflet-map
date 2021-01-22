import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBonus, IOffice} from '../interfaces';

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

    getOffices(): Observable<IOffice[]> {
        return this.http.get('assets/static/offices.json').pipe(
            map((response: any) => {
                const offices = response['offices'];
                return offices;
            }),
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