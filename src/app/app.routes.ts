import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LanguageChoiceComponent } from './Components/language-choice.component';
import { HumanAnalysisComponent } from './Components/human-analysis.component';
import {ProgrammingAnalysisComponent} from './Components/programming-analysis.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'language-choice', component: LanguageChoiceComponent, pathMatch: 'full' },
  { path: 'human-language-analysis', component: HumanAnalysisComponent, pathMatch: 'full' },
  { path: 'programming-language-analysis', component: ProgrammingAnalysisComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
