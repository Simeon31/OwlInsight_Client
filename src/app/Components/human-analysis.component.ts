import { Component, signal } from '@angular/core';
import { SiteHeaderComponent } from './site-header.component';

@Component({
  selector: 'app-human-analysis',
  imports: [SiteHeaderComponent],
  templateUrl: '../Pages/human-analysis.html'
})
export class HumanAnalysisComponent {
  protected readonly language = signal('English');
  protected readonly text = signal('');
  protected readonly status = signal('Ready');

  protected textLength(): number {
    return this.text().length;
  }

  protected updateText(event: Event): void {
    this.text.set((event.target as HTMLTextAreaElement).value);
    this.status.set('Ready');
  }

  protected viewRecentAnalyses(): void {
    this.status.set('Recent analyses are up to date');
  }

  protected openHistory(title: string): void {
    this.status.set(`${title} selected`);
  }

  protected chooseLanguage(): void {
    this.language.set(this.language() === 'English' ? 'Spanish' : 'English');
  }

  protected async pasteText(): Promise<void> {
    try {
      this.text.set(await navigator.clipboard.readText());
      this.status.set('Text pasted');
    } catch {
      this.status.set('Clipboard access unavailable');
    }
  }

  protected uploadText(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.text.set(String(reader.result ?? ''));
      this.status.set('Text uploaded');
    };
    reader.onerror = () => this.status.set('Unable to read file');
    reader.readAsText(file);
  }

  protected async startAnalysis(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const content = this.text().trim();
    if (!content) {
      this.status.set('Add text to start');
      return;
    }

    this.status.set('Analyzing...');
    try {
      const response = await fetch('/api/analyze', {
        body: JSON.stringify({ language: this.language(), text: content }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      });

      if (!response.ok) {
        console.error(`Analysis request failed with status ${response.status}`);
        this.status.set('Analysis request failed');
        return;
      }

      this.status.set('Analysis complete');
    } catch (error) {
      console.error('Unable to analyze text', error);
      this.status.set('Analysis request failed');
    }
  }
}
