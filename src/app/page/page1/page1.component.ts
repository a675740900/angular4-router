import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { boxAnimate } from '../../animates/base-click';
import { slideToRight } from '../../animates/router.animate';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss'],
    animations: [
        boxAnimate,
        slideToRight
    ]
})
export class Page1Component implements OnInit {
    // 定义开始的状态
    private boxState: String = 'left';

    private _isTrue: Boolean = true;
    // 定义路由动画
    @HostBinding('@routerAnimate') state;

    constructor() { }

    ngOnInit() {
    }
    start(): void {
        console.log('开始运动');
        if (this._isTrue) {
            this.boxState = 'right';
        } else {
            this.boxState = 'left';
        }
        this._isTrue = !this._isTrue;
    }
}
