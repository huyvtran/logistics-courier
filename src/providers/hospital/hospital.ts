import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hospitals from '../hospitals/hospitals'

/*
  Generated class for the HospitalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HospitalProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HospitalProvider Provider');
  }

  findAll() {
    return Promise.resolve(hospitals);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(hospitals.filter((hospital: any) =>
        (hospital.title +  ' ' +hospital.address +  ' ' + hospital.city + ' ' + hospital.description).toUpperCase().indexOf(key) > -1));
  }

  findById(id) {
    return Promise.resolve(hospitals[id - 1]);
  }
}