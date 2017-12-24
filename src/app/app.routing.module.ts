import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BoardComponent} from "./board/board.component";
import {UserProfile} from "./user-profile/user-profile.component";


const appRoutes = [
    {
        path: 'main', component: BoardComponent
    },
    {
        path: 'user-profile', component: UserProfile
    },
    {
        path: '', redirectTo: '/main', pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}