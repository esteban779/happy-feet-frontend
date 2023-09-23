import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtservice: JwtHelperService = new JwtHelperService()

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    const urlEndPoint = environment.urlEndPoint + 'oauth/token'
    const credenciales = btoa('happy_feet' + ':' + 'fXj7w%E9Kv1')
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + credenciales
    })

    let params = new URLSearchParams()

    params.set('username', email)
    params.set('password', password)
    params.set('grant_type', 'password')

    return this.http.post<any>(urlEndPoint, params.toString(), { headers: httpHeaders })
  }

}
