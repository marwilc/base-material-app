import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, LayoutComponent } from './components';
import { RoutingCandidates } from '@core/constants/routing.constants';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: RoutingCandidates.root,
                loadChildren: () =>
                    import('../candidate/candidate.module').then(
                        (m) => m.CandidateModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
