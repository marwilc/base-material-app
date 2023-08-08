import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    NavigationEnd,
    Router,
    Scroll,
} from '@angular/router';
import { RouterService } from '@core/services';
import { SideNavItem } from '@layout/interfaces';
import { LayoutService } from '@layout/services';
import { Subscription, filter, map } from 'rxjs';

@Component({
    selector: 'app-sidenav-item',
    templateUrl: './sidenav-item.component.html',
    styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit, OnDestroy {
    @Input() sideNavItem: SideNavItem;
    opened: boolean = false;
    currentModule: string = '/';
    private _subs = new Subscription();

    constructor(
        private _layoutService: LayoutService,
        private _routerService: RouterService,
        private _router: Router
    ) {}
    ngOnInit(): void {
        this._subs.add(
            this._layoutService
                .getStatusNavbar()
                .subscribe((value: boolean) => {
                    this.opened = value;
                })
        );

        this._subs.add(
            this._routerService.getRouter().subscribe((value) => {
                if (value) {
                    const splitUrl = value.url.split('/');
                    this.currentModule = splitUrl[1]
                        ? splitUrl[1]
                        : '/';
                }
            })
        );
    }

    ngOnDestroy(): void {
        this._subs.unsubscribe();
    }

    onSelectItem() {
        this._router.navigate([this.sideNavItem.path]);
    }
}
