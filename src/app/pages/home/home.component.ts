import { Component, OnInit } from '@angular/core';
import { funcionario } from '../../models/funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  funcionarios: funcionario[] = [];
  funcionariosGeral: funcionario[] = [];

  constructor( private funcionarioService: FuncionarioService){
    
  }

  ngOnInit(): void {
      this.funcionarioService.GetFuncionarios().subscribe(data => {
        const dados = data.dados;

        dados.map((item) => {
          item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-br')
          item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-br')
        
        }) 

        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;
      });

  }
}
