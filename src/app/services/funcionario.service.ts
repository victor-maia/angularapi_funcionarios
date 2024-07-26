import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/Response'
import { funcionario } from '../models/Funcionarios'
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

  GetFuncionario(id: number) : Observable<Response<funcionario>> {
    return this.http.get<Response<funcionario>>(`${this.ApiUrl}/${id}`);
  }

  createFuncionario(funcionario: funcionario) : Observable<Response<funcionario[]>>{
    return this.http.post<Response<funcionario[]>>(`${this.ApiUrl}`, funcionario)
  }

  EditFuncionario(funcionario : funcionario) : Observable<Response<funcionario[]>> {
    return this.http.put<Response<funcionario[]>>(`${this.ApiUrl}`, funcionario);
  }

  InativaFuncionario(id : number) : Observable<Response<funcionario[]>>{
    return this.http.put<Response<funcionario[]>>(`${this.ApiUrl}/InativaFuncionario/${id}`, id);
  }

  ExcluirFuncionario(id: number) : Observable<Response<funcionario[]>>{
    return this.http.delete<Response<funcionario[]>>(`${this.ApiUrl}?id=${id}`)
  }
}