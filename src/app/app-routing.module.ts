import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';

const routes: Routes = [
  {path:'act', component: AComponent},
  {path:'ball', component: BComponent},
  {path:'cat', component: CComponent},
  {path:'dad', component: DComponent},
  {path:'eat', component: EComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
