import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardDeletePage } from './board-delete.page';

const routes: Routes = [
  {
    path: '',
    component: BoardDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardDeletePageRoutingModule {}
