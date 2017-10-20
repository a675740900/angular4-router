/*
 * @Author: 水痕
 * @Date: 2017-10-20 20:44:58
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-10-20 21:10:20
 * @version:1.0
 * @descibe:定义项目的根路由
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/page1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
