import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BreakPointsMap } from '@layout/constants/breakpoints.constants';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    displayNameMap = BreakPointsMap;
    destroyed = new Subject<void>();
    private _currentScreenSize = new BehaviorSubject<string>(null);
    private _navbarOpen = new BehaviorSubject<boolean>(false);

    constructor(private _breakpointObserver: BreakpointObserver) {
        this._breakpointInit();
    }

    setStatusNavbar(value: boolean) {
        this._navbarOpen.next(value);
    }

    getStatusNavbar() {
        return this._navbarOpen.asObservable();
    }

    getScreenSize() {
        return this._currentScreenSize.asObservable();
    }

    private _breakpointInit() {
        this._breakpointObserver
            .observe([
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge,
            ])
            .pipe(takeUntil(this.destroyed))
            .subscribe((result) => {
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        this._currentScreenSize.next(
                            this.displayNameMap.get(query) ?? 'Unknown'
                        );
                    }
                }
            });
    }
}
