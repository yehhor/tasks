import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule} from "@angular/material";
import {DataService} from "./data.service";


@NgModule({
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class MaterialModule {

}

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [
        MaterialModule
    ],
    providers: [
        DataService
    ]
})
export class SharedModule {
}
