import {NgModule} from '@angular/core';
import {UserProfile} from "./user-profile.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared.module";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        UserProfile
    ],
})
export class UserProfileModule {
}
