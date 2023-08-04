import { Component, Input } from '@angular/core';
import { SIDE_NAV_ITEMS } from '@layout/constants/sidenav-items.constants';
import { SideNavItem } from '@layout/interfaces';

@Component({
    selector: 'app-sidenav-item',
    templateUrl: './sidenav-item.component.html',
    styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent {
    @Input() sideNavItem: SideNavItem;
}
