import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './components/router-page/blank/blank.component';
import { Sub1Component } from './components/router-page/sub1/sub1.component';
import { Sub2Component } from './components/router-page/sub2/sub2.component';


const routes: Routes = [
  { path: '', component: BlankComponent },
  { path: 'sub1', component: Sub1Component },
  { path: 'sub2', component: Sub2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class CustomLibRoutingModule { }
