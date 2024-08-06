import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interfaces/getUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:3333/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + "customers");
  }

  remove(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.delete<any>(this.apiUrl + "customer", { params })
    
  }
}
