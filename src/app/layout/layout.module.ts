import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
    SidenavComponent,
    LayoutComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavItemComponent,
} from './components';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
    declarations: [
        SidenavComponent,
        LayoutComponent,
        DashboardComponent,
        NavbarComponent,
        SidenavItemComponent,
    ],
    imports: [CommonModule, SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
