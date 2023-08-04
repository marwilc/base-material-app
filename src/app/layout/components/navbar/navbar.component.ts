import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { LayoutService } from '@layout/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    sideOpened: boolean = false;
    private _subs = new Subscription();

    constructor(private _layoutService: LayoutService) {}

    ngOnInit(): void {
        this._subs.add(
            this._layoutService
                .getStatusNavbar()
                .subscribe((value: boolean) => {
                    this.sideOpened = value;
                })
        );
    }

    ngOnDestroy(): void {
        this._subs.unsubscribe();
    }
    openSide() {
        this._layoutService.setStatusNavbar(!this.sideOpened);
    }
}
