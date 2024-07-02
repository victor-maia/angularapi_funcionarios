import { Component } from '@angular/core';
import { funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  /**
   *
   */
  constructor(private funcionarioService : FuncionarioService, private router: Router) {

  }
  


  createFuncionario(funcionario: funcionario){
    this.funcionarioService.createFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
