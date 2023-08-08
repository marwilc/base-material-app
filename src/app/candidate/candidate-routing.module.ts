import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDashboardComponent } from './components';
import { RoutingCandidates } from '@core/constants/routing.constants';
const routes: Routes = [
    {
        path: RoutingCandidates.dashboard,
        component: CandidateDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CandidateRoutingModule {}
