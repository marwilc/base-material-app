import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateDashboardComponent } from './components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [CandidateDashboardComponent],
    imports: [CommonModule, SharedModule, CandidateRoutingModule],
})
export class CandidateModule {}
