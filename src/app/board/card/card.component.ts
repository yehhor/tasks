import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as _ from 'lodash';
import {Task} from "../../models/Task";
import {DialogComponent} from "./dialog.component";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'card',
    templateUrl: './card.component.html'
})
export class CardComponent {
    @Input() item: Task;
    isSelected: boolean = false;
    animal: any;

    constructor(public dialog: MatDialog) {
    }

    onClick(): void {
        this.isSelected = !this.isSelected;
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogComponent, {
            height: '400px',
            width: '600px',
            data: {item: this.item}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        })
    }
}
