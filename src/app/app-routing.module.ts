import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { IndexComponent  } from './index/index.component';
import { BackgroundComponent } from './background/background.component';
import { PositionComponent } from './position/position.component';
import { LinearComponent } from './linear/linear.component';
import { EnvComponent } from './env/env.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  },
  {
    path: 'position',
    component: PositionComponent
  },
  {
    path: 'linear',
    component: LinearComponent
  },
  {
    path: 'env',
    component: EnvComponent
  },
  {
    path: 'media',
    component: MediaQueryComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
