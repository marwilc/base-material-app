import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private _navbarOpen = new BehaviorSubject<boolean>(false);

    constructor() {}

    setStatusNavbar(value: boolean) {
        this._navbarOpen.next(value);
    }

    getStatusNavbar() {
        return this._navbarOpen.asObservable();
    }
}
