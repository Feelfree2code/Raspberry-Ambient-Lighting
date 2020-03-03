import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/Color.model';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/APIResponse.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'true'
  });

  private endPoint: string = environment.api + '/light';

  constructor(private http: HttpClient) { }

  public get(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.endPoint, { headers: this.headers });
  }

  public set(color: Color): Observable<any> {
    return this.http.post(this.endPoint, { mode: color.value } , { headers: this.headers });
  }
}
