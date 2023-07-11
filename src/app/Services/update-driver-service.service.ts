import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../Common/APIEndPoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../Common/Interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateDriverServiceService {

  constructor(private http: HttpClient) { }
  UpdateDriver(params:Driver): Observable<any> {
    return this.http.put(`${ApiEndpoints.Endpoints.UpdateDriver}/${params.driverId}`, params);
  }
}
