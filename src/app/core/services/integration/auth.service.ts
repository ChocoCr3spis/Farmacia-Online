import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}

  async login(userCredentials: any){
    await lastValueFrom(this.http.post('http://localhost:5000/api/auth/login',userCredentials));
  }

  async register(userCredentials: any){
    await lastValueFrom(this.http.post('http://localhost:5000/api/auth/register',userCredentials));
  }
}
