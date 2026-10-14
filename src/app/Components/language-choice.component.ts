import { Component, signal } from '@angular/core';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-language-choice',
  imports: [SiteFooterComponent, SiteHeaderComponent, RouterLink],
  templateUrl: '../Pages/language-choice.html'
})
export class LanguageChoiceComponent {
  protected readonly selectedProfile = signal<string | null>(null);

  protected selectProfile(profile: string): void {
    this.selectedProfile.set(profile);
  }
}
