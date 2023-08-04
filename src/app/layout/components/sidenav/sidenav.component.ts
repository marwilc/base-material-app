import {
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SIDE_NAV_ITEMS } from '@layout/constants/sidenav-items.constants';
import { SideNavItem } from '@layout/interfaces';
import { LayoutService } from '@layout/services';
import { Subscription } from 'rxjs';
import packageJson from '../../../../../package.json';
@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
    sideOpened: boolean = false;

    @ViewChild('drawer') drawer: MatDrawer;
    sideNavItems: SideNavItem[] = SIDE_NAV_ITEMS;
    versionApp: string = packageJson.version;
    private _subs = new Subscription();

    constructor(private _layoutService: LayoutService) {}

    ngOnInit(): void {
        this._subs.add(
            this._layoutService
                .getStatusNavbar()
                .subscribe((value: boolean) => {
                    this.sideOpened = value;
                    if (this.drawer) {
                        this.drawer.toggle();
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this._subs.unsubscribe();
    }
}
