import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'images', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login',loadChildren: './login/login.module#LoginPageModule'},
  { path: 'logout',loadChildren: './logout/logout.module#LogoutPageModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'users', loadChildren: './users/users.module#UsersPageModule'},
  { path: 'user/: userId', loadChildren: './user/user.module#UserPageModule'},
  { path: 'user-delete', loadChildren: './user-delete/user-delete.module#UserDeletePageModule'},
  { path: 'user-edit', loadChildren: './user-edit/user-edit.module#UserEditPageModule'},
  { path: 'user-create', loadChildren: './user-create/user-create.module#UserCreatePageModule'},
  { path: 'boards', loadChildren: './boards/boards.module#BoardsPageModule'},
  { path: 'board-create', loadChildren: './board-create/board-create.module#BoardCreatePageModule'},
  { path: 'board-edit', loadChildren: './board-edit/board-edit.module#BoardEditPageModule'},
  { path: 'board-delete', loadChildren: './board-delete/board-delete.module#BoardDeletePageModule'},
  { path: 'image/:id', loadChildren: './image/image.module#ImagePageModule'},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule'},
  { path: 'images', loadChildren: './images/images.module#ImagesPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
