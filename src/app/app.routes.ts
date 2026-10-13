import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LanguageChoiceComponent } from './Pages/language-choice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'language-choice', component: LanguageChoiceComponent },
  { path: '**', redirectTo: '' }
];
