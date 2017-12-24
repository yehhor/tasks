import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BoardComponent} from "./board/board.component";
import {CardComponent} from "./board/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButton, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from "./board/card/dialog.component";
import {AppRoutingModule} from "./app.routing.module";
import {UserProfileModule} from "./user-profile/user-profile.module";

@NgModule({
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class MaterialModule {

}

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        UserProfileModule,
    ],
    declarations: [
        AppComponent,
        BoardComponent,
        CardComponent,
        DialogComponent
    ],
    bootstrap: [AppComponent],
    entryComponents: [DialogComponent]
})
export class AppModule {
}
