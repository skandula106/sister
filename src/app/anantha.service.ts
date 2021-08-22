import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnanthaService {
result: any;
  constructor( public x:HttpClient) { }

  getCountries(){
    return this.x.get("http://restcountries.eu/rest/v2/all")
   
  }
  getDate() {
    let date 
    date = new Date();
    return date
  }
  calculateSum() {

  }
  getYear(){
    let year
    let FullYear
    year = new Date();
    FullYear = year.getFullYear()
    return FullYear
  }
  getHours(){
    let ant
    let Hours
    ant = new Date();
    Hours = ant.getHours()
    return Hours
  }
  getMinutes(){
    let anu
    let Minutes
    anu = new Date();
    Minutes = anu.getMinutes()
    return Minutes
  }

}

