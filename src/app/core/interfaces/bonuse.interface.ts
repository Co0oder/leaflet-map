import { ILocation } from './location.interface';

interface ICompany{
    name: string,
    phone: string,
    email: string
}

export interface IBonuse {
    id: number,
    dateStart: string,
    dateEnd: string,
    description: string,
    company: ICompany,
    type: string,
    discount: number,
    locations: ILocation[],
    tags: string[]
}