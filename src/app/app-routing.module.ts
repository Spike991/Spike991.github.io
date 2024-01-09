import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurriculumvitaeComponent} from './curriculumvitae/curriculumvitae.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {HobbyComponent} from './hobby/hobby.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'curriculum vitae', component: CurriculumvitaeComponent },
  {path: 'skills', component: SkillsComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'hobby', component: HobbyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
