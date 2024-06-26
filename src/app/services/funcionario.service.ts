import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response'
import { funcionario } from '../models/funcionarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private ApiUrl = `${environment.ApiUrl}/Funcionario`

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<funcionario[]>> {
    return this.http.get<Response<funcionario[]>>(this.ApiUrl);
  }
}
