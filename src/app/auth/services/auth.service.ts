import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../../environments/environments';
import { AuthResponse, Usuario } from '../interfaces/auth.interface';
import { Observable, catchError, map, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl: string = environment.baseUrl;
    private _usuario!: Usuario;

    get Usuario() {
        return { ...this._usuario };
    }

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        const url = `${this.baseUrl}/auth/`;
        const body = { email, password }
        return this.http.post<AuthResponse>(url, body)
            .pipe(
                tap((resp) => {
                    if(resp.ok){
                        this._usuario = {
                            name: resp.name!,
                            uid: resp.uid!
                        }
                    }
                }),
                map(resp => resp.ok ), 
                catchError(err => of(err.error.msg))
            )	
    }
}