import {Component, OnInit, ViewChildren} from '@angular/core';

import * as _ from 'lodash';

import data from "../data/tasks"
import {Task} from "../models/Task";
import {STATUSES} from "../models/STATUSES";
import {CardComponent} from "./card/card.component";

@Component({
    selector: 'board-component',
    templateUrl: './board.component.html'
})
export class BoardComponent {
    @ViewChildren(CardComponent) cardItems: CardComponent[];
    cards: Task[] = data;
    newCards: Task[] = [];
    progressCards: Task[] = [];
    inQaCards: Task[] = [];
    finishedCards: Task[] = [];

    constructor() {
        this.sortItems();
    }

    private sortItems() {
        this.newCards = [];
        this.progressCards = [];
        this.inQaCards = [];
        this.finishedCards = [];
        this.cards.forEach(card => {
            switch (card.status) {
                case STATUSES.NEW:
                    this.newCards.push(card);
                    break;
                case STATUSES.INPROGRESS:
                    this.progressCards.push(card);
                    break;
                case STATUSES.INQA:
                    this.inQaCards.push(card);
                    break;
                case STATUSES.FINISHED:
                    this.finishedCards.push(card);
                    break
            }
        })
    }

    getSelected(): Task[] {
        return this.cardItems.filter(c => c.isSelected).map(c => c.item);
    }

    moveToProgress() {
        this.getSelected().forEach(task => task.status = STATUSES.INPROGRESS);
        this.sortItems();
    }

    moveToQA() {
        this.getSelected().forEach(task => task.status = STATUSES.INQA)
        this.sortItems();
    }

    moveToNew() {
        this.getSelected().forEach(t => t.status = STATUSES.NEW);
        this.sortItems();
    }

    moveToFinished() {
        this.getSelected().forEach(task => task.status = STATUSES.FINISHED)
    }

}
