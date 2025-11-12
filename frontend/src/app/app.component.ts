import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mission3Component } from './quest-list/quest-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mission3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
