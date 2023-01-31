import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { vmGroups, vmServer } from '../models/vm-groups';
import { userData } from './../models/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public getUserData(): Observable<userData[]> {
    return this.http.get<userData[]>(`${this.serverUrl}/User`);
  }

  public getVmGroups(): Observable<vmGroups[]> {
    return this.http.get<vmGroups[]>(`${this.serverUrl}/vmGroups`);
  }

  public getVmServerByCategory(): Observable<vmServer[]> {
    return this.http.get<vmServer[]>(`${this.serverUrl}/vmServer?Category`);
  }
}

