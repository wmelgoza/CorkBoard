import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardDeletePageRoutingModule } from './board-delete-routing.module';

import { BoardDeletePage } from './board-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardDeletePageRoutingModule
  ],
  declarations: [BoardDeletePage]
})
export class BoardDeletePageModule {}
