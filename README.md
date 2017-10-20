> `angular4`中动画已经拆分出去的,在项目中需要使用动画需要手动安装

### 一、基本配置

* 1、安装动画库

    ```javascript
    npm install @angular/animations --save
    ```
    
* 2、创建一个基本的项目,配置路由

### 二、动画的基本步骤

* 1、创建一个文件夹专门存放项目中的动画
* 2、创建一个动画文件,引入包(根据需要引入)

    ```javascript
    import { trigger, state, style, transition, animate } from '@angular/animations';
    ```
    
* 3、在`AppModule.ts`中引入运动的模块`BrowserAnimationsModule`

    ```javascript
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    ```
    
* 3、通过鼠标点击修改状态实现动画(参考`page1`下面的正方形)


    ```javascript
    **定义动画的ts文件**
    import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
    
    // 定义一个鼠标点击运动的动画
    
    export const boxAnimate = trigger('box', [
        // 定义一个状态left
        state('left', style({ 'background-color': '#360', transform: 'translate3d(0,0,0)' })),
        // 定义另外一个状态right
        state('right', style({ 'background-color': '#630', transform: 'translate3d(500px,0,0)' })),
        // 定义运动过程(从left到right状态)
        transition('left=>right', animate(5000, keyframes([
            style({ transform: 'translate3d(10%,0,0)' }),
            style({ transform: 'translate3d(20%,0,0)' }),
            style({ transform: 'translate3d(40%,0,0)' }),
            style({ transform: 'translate3d(50%,0,0)' }),
            style({ transform: 'translate3d(60%,0,0)' }),
            style({ transform: 'translate3d(70%,0,0)' }),
            style({ transform: 'translate3d(80%,0,0)' }),
            style({ transform: 'translate3d(90%,0,0)' }),
            style({ transform: 'translate3d(100%,0,0)' }),
        ]))),
        // 定义运动过程(从right到left)
        transition('right=>left', animate(5000, keyframes([
            style({ transform: 'translate3d(100%,0,0)' }),
            style({ transform: 'translate3d(80%,0,0)' }),
            style({ transform: 'translate3d(70%,0,0)' }),
            style({ transform: 'translate3d(40%,0,0)' }),
            style({ transform: 'translate3d(30%,0,0)' }),
            style({ transform: 'translate3d(0%,0,0)' })
        ]))),
    ]);
    
    **页面上使用**
    <div class="box" (click)="start()" [@box]="boxState"></div>
    **页面的ts文件**
    import { Component, OnInit } from '@angular/core';
    import { boxAnimate } from '../../animates/base-click';
    
    @Component({
        selector: 'app-page1',
        templateUrl: './page1.component.html',
        styleUrls: ['./page1.component.scss'],
        animations: [
            boxAnimate
        ]
    })
    export class Page1Component implements OnInit {
        // 定义开始的状态
        private boxState: String = 'left';
        private _isTrue: Boolean = true;
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
    ```
    
* 4、通过鼠标移上去改变状态(参考`page2`)

    ```javascript
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
    ```
* 5、效果

    ![这里写图片描述](http://img.blog.csdn.net/20171020224116710?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
    
> 补充说明<br/>
* 1、需要获取鼠标当前位置的信息可以根据上面4来做
* 2、如果是给整个组件绑定

```javascript
// 给组件整体绑定一个属性,开始的状态是out
@HostBinding('@card') cardState = 'out';
```

### 三、路由动画

* 1、单独定义一个动画文件

    ```javascript
    import { trigger, state, style, transition, animate } from '@angular/animations';
    
    
    export const slideToRight = trigger('routerAnimate', [
        // 定义void表示空状态下
        state('void', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
        // * 表示任何状态
        state('*', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
        // 进场动画
        transition(':enter', [
            style({ transform: 'translate3d(-100%,0,0)' }),
            animate('.5s ease-in-out', style({ transform: 'translate3d(0,0,0)' }))
        ]),
        // 出场动画
        transition(':leave', [
            style({ transform: 'translate3d(0,0,0)' }),
            animate('.5s ease-in-out', style({ transform: 'translate3d(100%,0,0)' }))
        ])
    ]);
    
    ```
    
* 2、使用路由动画(在切换路由的页面中全局绑定)
    ```javascript
    // 定义路由动画
    @HostBinding('@routerAnimate') state;
    ```

---

### 欢迎加入群聊，我们一起探讨前端技术栈
> 群号:560285778

![这里写图片描述](http://img.blog.csdn.net/20171008104715122?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
