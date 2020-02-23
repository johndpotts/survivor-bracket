import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'leaderboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../leaderboard/leaderboard.module').then(m => m.LeaderboardPageModule)
          }
        ]
      },
      {
        path: 'survivors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../survivors/survivors.module').then(m => m.SurvivorsPageModule)
          }
        ]
      },
      {
        path: 'scoring',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../scoring/scoring.module').then(m => m.ScoringPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/leaderboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/leaderboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
