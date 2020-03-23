import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardPageRoutingModule } from './board-routing.module';

import { BoardPage } from './board.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : BoardPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardPageRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [BoardPage]
})
export class BoardPageModule {}
