import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../Common/APIEndPoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../Common/Interface';

@Injectable({
  providedIn: 'root'
})
export class CreateDriverServiceService {

  constructor(private http: HttpClient) { }

  CreateDriver(params:Driver): Observable<any> {
    return this.http.post(`${ApiEndpoints.Endpoints.CreateDriver}`, params);
  }

}
