import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { EntermoodComponent } from './common/entermood/entermood.component';
import { ShowStatComponent } from './common/show-stat/show-stat.component';

const routes: Routes = [
  {path: '',
  component: EntermoodComponent,},
  {path: 'show-stat',
  component: ShowStatComponent,},
  {path: 'entermood',
  component: EntermoodComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }