import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveComponent } from './component/person/save/save.component';
import { ListComponent } from './component/person/list/list.component';
import { UpdateComponent } from './component/person/update/update.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'person-save', component:SaveComponent},
  {path:'person-update/:id', component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
