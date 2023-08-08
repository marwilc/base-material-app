import { Injectable } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    private _currentRouter = new BehaviorSubject<RouterEvent>(null);
    constructor() {}

    setRouter(value: RouterEvent) {
        this._currentRouter.next(value);
    }

    getRouter() {
        return this._currentRouter.asObservable();
    }
}
