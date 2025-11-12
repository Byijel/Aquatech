import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestListComponent } from './quest-list/quest-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
