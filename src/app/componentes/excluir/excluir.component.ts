import { Component, Inject, OnInit } from '@angular/core';
import { funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css'] // Correção para styleUrls
})
export class ExcluirComponent implements OnInit {
  public id: number;
  public funcionario!: funcionario
 
  constructor(public funcionarioService : FuncionarioService, public router : Router, public route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
 

  ngOnInit(): void {
     
      this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {
        this.funcionario = data.dados;
        console.log(this.funcionario)
    });
  }

  excluir(funcionario: funcionario){
    this.funcionarioService.ExcluirFuncionario(this.id).subscribe(() => {
      return this.router.navigate(['/'])
    })
  }
}