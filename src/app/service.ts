import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService{
    constructor (private _http:HttpClient) {}

    getData(){
        return this._http.get('http://localhost:8080/api/v1/actors/all')
    }
}