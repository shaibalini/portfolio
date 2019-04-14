import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TechnicalComponent } from './technical/technical.component';
import { ExtraCurricularComponent } from './extra-curricular/extra-curricular.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'extra', component: ExtraCurricularComponent },
  { path: 'tech', component: TechnicalComponent },
  { path: 'contact', component: ContactComponent},
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
