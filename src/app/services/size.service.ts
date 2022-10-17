import { ISize } from './../models/size';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  API = `https://serverangular.vercel.app/api/size`;
  constructor(private HttpClient: HttpClient) { }

  getAllSize(): Observable<ISize[]> {
    return this.HttpClient.get<ISize[]>(`${this.API}`);
  }
  getSize(id: any): Observable<ISize[]> {
    return this.HttpClient.get<ISize[]>(`${this.API}/${id}`);
  }
}
