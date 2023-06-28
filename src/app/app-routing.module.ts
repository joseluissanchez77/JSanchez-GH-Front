import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveComponent } from './component/person/save/save.component';
import { ListComponent } from './component/person/list/list.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'person-save', component:SaveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
