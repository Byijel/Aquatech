import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

interface Mission {
  id: string;
  name: string;
  objective: string;
  parameters: string;
  difficulty: number;
  remainingAttempts: string;
  solved: boolean;
  effect: string;
}

interface Problem {
  name: string;
  description: string;
  solved: boolean;
  score: number;
  badgeUrl: string;
  mission: Mission[];
  expanded?: boolean;
}

@Component({
  selector: 'app-quest-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './quest-list.component.html',
  styleUrl: './quest-list.component.css',
})
export class QuestListComponent implements OnInit {
  problem: Problem[] = [];
  loading: boolean = true;
  particles: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.generateParticles();
    
    this.apiService.getMissions().subscribe({
      next: (data) => {
        console.log('Quest data:', data);

        if (data.problems && Array.isArray(data.problems)) {
          this.problem = data.problems.map((p: Problem) => ({
            ...p,
            expanded: false
          }));
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading quests', err);
        this.loading = false;
      },
    });
  }

  generateParticles(): void {
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 3 + 1;
      const delay = Math.random() * 8;
      this.particles.push({
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        'animation-delay': `${delay}s`,
        'animation-duration': `${8 + Math.random() * 4}s`
      });
    }
  }

  toggleExpanded(problem: Problem): void {
    this.problem.forEach(p => {
      if (p !== problem) {
        p.expanded = false;
      }
    });
    problem.expanded = !problem.expanded;
  }

  getSolvedCount(problem: Problem): number {
    return problem.mission.filter(m => m.solved).length;
  }

  navigateToMission(event: Event, missionId: string): void {
    event.stopPropagation();
    this.router.navigate(['/missions', missionId]);
  }
}