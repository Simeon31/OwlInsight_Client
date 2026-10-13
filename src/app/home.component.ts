import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteFooterComponent } from './Components/site-footer.component';
import { SiteHeaderComponent } from './Components/site-header.component';

interface Benefit {
  label: string;
  icon: string;
  symbol: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class HomeComponent {
  protected readonly benefits: Benefit[] = [
    { label: 'Built for clarity', icon: 'trust-icon--yellow', symbol: '✦' },
    { label: 'Decisions with confidence', icon: 'trust-icon--brown', symbol: '↗' },
    { label: 'Always moving forward', icon: 'trust-icon--purple', symbol: '∞' }
  ];
}
