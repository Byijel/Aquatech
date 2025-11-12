import { Routes } from '@angular/router';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { Query } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/quests', pathMatch: 'full' },
  { path: 'quests', component: QuestListComponent },
  { path: 'missions/:id', component: MissionDetailComponent }
];
