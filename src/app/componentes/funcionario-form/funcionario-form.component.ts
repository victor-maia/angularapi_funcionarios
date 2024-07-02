import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { funcionario } from '../../models/Funcionarios';
@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<funcionario>();
  funcionarioForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      turno: new FormControl(''),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlterecao: new FormControl(new Date()),
    })

  }

  submit(){
    this.onSubmit.emit(this.funcionarioForm.value)
  }

}
