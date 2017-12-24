import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Task} from "../../models/Task";
@Component({
    selector: 'dialog-component',
    templateUrl: './dialog.template.html'
})
export class DialogComponent implements OnInit {

    item: Task;

    constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.item = Object.assign({}, this.data.item);

    }


    ngOnInit(): void {
    }

    save() {
        Object.assign(this.data.item, this.item);
        this.dialogRef.close();
    }
}