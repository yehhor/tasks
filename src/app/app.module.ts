import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BoardComponent} from "./board/board.component";
import {CardComponent} from "./board/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from "./board/card/dialog.component";
import {AppRoutingModule} from "./app.routing.module";
import {UserProfileModule} from "./user-profile/user-profile.module";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "./shared.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        SharedModule,
        UserProfileModule,
    ],
    declarations: [
        AppComponent,
        BoardComponent,
        CardComponent,
        DialogComponent,
        HeaderComponent
    ],
    bootstrap: [AppComponent],
    entryComponents: [DialogComponent]
})
export class AppModule {
}
