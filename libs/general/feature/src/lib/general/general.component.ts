import { Component, OnInit } from '@angular/core';
import { GeneralFacade } from '@memo-worspace/general/application';
import { tap } from 'rxjs';
import { ObservableFieldLogger } from '../../../../application/src/lib/+state/loggers';

@Component({
    selector: 'memo-worspace-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

    @ObservableFieldLogger()
    object = this.facade.object


    @ObservableFieldLogger()
    basic = this.facade.basic
    @ObservableFieldLogger()
    objectOnlyTest1 = this.facade.objectOnlyTest1
    @ObservableFieldLogger()
    objectOnlyTest2 = this.facade.objectOnlyTest2
    @ObservableFieldLogger()
    objectOnlyTest11 = this.facade.objectOnlyTest11
    @ObservableFieldLogger()
    objectOnlyTest22 = this.facade.objectOnlyTest22

    constructor(private facade: GeneralFacade) {
    }

    ngOnInit(): void {
    }

    // TODO CallMethodLogger error
    // @CallMethodLogger()
    updateObject(value: string): void {
        this.facade.updateObject({
            test1: {test11: value},
            test2: {test22: value}
        })
    }

    updateBasic(value: string): void {
        this.facade.updateBasic(value)
    }

    updateObjectOnlyTest1(value: string): void {
        this.facade.updateObjectOnlyTest1({test11: value})
    }

    updateObjectOnlyTest2(value: string): void {
        this.facade.updateObjectOnlyTest2({test22: value})
    }
}
