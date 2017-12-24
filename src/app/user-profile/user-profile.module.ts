import {NgModule} from '@angular/core';
import {UserProfile} from "./user-profile.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        UserProfile
    ],
})
export class UserProfileModule {
}
