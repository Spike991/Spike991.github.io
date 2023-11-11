import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurriculumvitaeComponent} from './curriculumvitae/curriculumvitae.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'curriculumvitae', component: CurriculumvitaeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
