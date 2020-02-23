import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoringPage } from './scoring.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ScoringPage }])
  ],
  declarations: [ScoringPage, ExpansionPanelComponent]
})
export class ScoringPageModule {}
