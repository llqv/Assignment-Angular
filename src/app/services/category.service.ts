import { ICate } from './../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API = `http://localhost:3000/category`;
  constructor(private HttpClient: HttpClient) { }

  getAllCate(): Observable<ICate[]> {
    return this.HttpClient.get<ICate[]>(`${this.API}`);
  }
  getCate(id: any): Observable<ICate[]> {
    return this.HttpClient.get<ICate[]>(`${this.API}/${id}`);
  }
}
