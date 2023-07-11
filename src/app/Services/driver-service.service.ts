import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../Common/APIEndPoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor(private http: HttpClient) { }
 
  GetDrivers(): Observable<any> {
    return this.http.get(`${ApiEndpoints.Endpoints.GetDriver}`);
  }

  GetDriverById(params:any): Observable<any> {
    return this.http.get(`${ApiEndpoints.Endpoints.GetDriverById}/${params}`);
  }

  DeleteDriver(params:any): Observable<any> {
    return this.http.delete(`${ApiEndpoints.Endpoints.DeleteDriver}/${params}`);
  }

  DownloadCSV(): Observable<any> {
    return this.http.get(`${ApiEndpoints.Endpoints.ExportData}`, {responseType: 'blob'});
  }
}


  