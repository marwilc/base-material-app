import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { LayoutService } from './layout';
import { RouterService } from './core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'base-material-app';
    private _subs: Subscription = new Subscription();
    constructor(
        private _router: Router,
        private _routerService: RouterService
    ) {}

    ngOnInit(): void {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._routerService.setRouter(event);
            }
        });
    }
    ngOnDestroy(): void {
        this._subs.unsubscribe();
    }
}
