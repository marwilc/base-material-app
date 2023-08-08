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
    drawerClass: string = 'close';
    private _subs = new Subscription();

    constructor(private _layoutService: LayoutService) {}

    ngOnInit(): void {
        this._subs.add(
            this._layoutService
                .getStatusNavbar()
                .subscribe((value: boolean) => {
                    if (this.drawer) {
                        this.sideOpened = value;
                        this.drawerClass = this.sideOpened
                            ? 'expanded'
                            : 'close';
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this._subs.unsubscribe();
    }
}
