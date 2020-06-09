import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TranslatorComponent } from './translator/translator.component';
//import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'translator', component: TranslatorComponent },
  
  { path: '', component: NavigatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }