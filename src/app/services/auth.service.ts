import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/logion`, {
      email,
      password
    });
  }
}
