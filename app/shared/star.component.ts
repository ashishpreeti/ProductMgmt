/**
 * Created by ashishpatil on 13/08/2016.
 */
import {Component, Input, Output} from "angular2/src/core/metadata";
import {OnChanges} from "angular2/src/core/linker/interfaces";
import {EventEmitter} from "angular2/src/facade/async";

@Component({
    selector: 'pm-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(` Rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 85/5;
    }

}

