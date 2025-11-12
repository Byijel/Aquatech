import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../ApiService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quest-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './quest-list.component.html',
  styleUrl: './quest-list.component.css',
})
export class QuestListComponent implements OnInit {
  problems: any[] = [];
  loading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMissions().subscribe({
      next: (data) => {
        console.log('Quest data:', data);

        if (data.problems && Array.isArray(data.problems)) {
          this.problems = data.problems;
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading quests', err);
        this.loading = false;
      },
    });
  }
}