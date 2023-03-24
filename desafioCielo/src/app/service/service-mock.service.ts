import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtractModel } from '../models/extract';
import { environment } from './../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ServiceMockService {

  constructor( private http: HttpClient) { }


  getExtract(): Observable<ExtractModel>{
    return this.http.get<ExtractModel>(`${environment.apiUrl}/extract`)
  }
}
