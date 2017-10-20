import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { slideToRight } from '../../animates/router.animate';
import { boxAnimateHover } from '../../animates/base-click';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss'],
    animations: [
        boxAnimateHover,
        slideToRight,
    ]
})
export class Page2Component implements OnInit {
    // 定义路由动画
    @HostBinding('@routerAnimate') state;
    private boxHoverState: String = 'out';
    // 绑定一个鼠标移入改变状态
    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event) {
        console.log(event);
        this.boxHoverState = 'in';
    }
    // 绑定一个鼠标移出改变状态
    @HostListener('mouseleave')
    onmouseleave() {
        this.boxHoverState = 'out';
    }
    constructor() { }

    ngOnInit() {
    }

}
