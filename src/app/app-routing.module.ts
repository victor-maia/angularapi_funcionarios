import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ExcluirComponent } from './componentes/excluir/excluir.component';

const routes: Routes = [

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: '', component: HomeComponent  },

    {
      path: 'editar/:id', 
      component: EditarComponent  },

      {
        path: 'detalhes/:id', 
        component: DetalhesComponent  }
,
        {
          path: 'excluir/:id', 
          component: ExcluirComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
