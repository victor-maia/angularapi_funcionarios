import { Component, OnInit } from '@angular/core';
import { funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router: Router){}

  btnAcao: string = 'Editar'
  btnTitulo: string = 'Editar Funcionário!'
  funcionario!: funcionario;

 
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
        this.funcionario = data.dados;
        console.log(this.funcionario)
    });
  }

  editarFuncionario(funcionario: funcionario){
    this.funcionarioService.EditFuncionario(funcionario).subscribe((data) => {
      return this.router.navigate(['/'])
    })
  }

}
