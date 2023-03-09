import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../../environments/environments';
import { AuthResponse } from "../interfaces/auth.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<AuthResponse> {
        const url = `${this.baseUrl}/auth/`;
        const body = { email, password }
        return this.http.post<AuthResponse>(url, body);
    }
}