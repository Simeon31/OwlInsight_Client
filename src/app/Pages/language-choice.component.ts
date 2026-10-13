import { Component } from '@angular/core';
import { SiteFooterComponent } from '../Components/site-footer.component';
import { SiteHeaderComponent } from '../Components/site-header.component';

@Component({
  selector: 'app-language-choice',
  imports: [SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './language-choice.html'
})
export class LanguageChoiceComponent {}
