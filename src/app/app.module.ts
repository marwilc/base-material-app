import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(iconRegistry: MatIconRegistry) {
        const defaultFontSetClasses =
            iconRegistry.getDefaultFontSetClass();
        const outlinedFontSetClasses = defaultFontSetClasses
            .filter(
                (fontSetClass) => fontSetClass !== 'material-icons'
            )
            .concat(['material-symbols-rounded']);
        iconRegistry.setDefaultFontSetClass(
            ...outlinedFontSetClasses
        );
    }
}
