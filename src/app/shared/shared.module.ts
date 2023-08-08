import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { AvatarComponent } from './components';
import { NgChartsModule } from 'ng2-charts';

const MODULES = [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatCardModule,
    NgChartsModule,
];

const COMPONENTS = [AvatarComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
    exports: [...MODULES, ...COMPONENTS],
})
export class SharedModule {}
