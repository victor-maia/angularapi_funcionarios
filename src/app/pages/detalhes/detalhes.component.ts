import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
    
  Funcionario? : funcionario;
  id!: number;

  constructor(private funcionarioService : FuncionarioService, private route:ActivatedRoute, private router : Router){}
  ngOnInit(): void {
   
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(this.id).subscribe((data) =>{

      const dados = data.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR')
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR')

      this.Funcionario = data.dados;
    })
  }

  inativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
      this.router.navigate([''])
    })
  }

}
