import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
