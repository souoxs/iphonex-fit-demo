import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { BackgroundComponent } from './background/background.component';
import { PositionComponent } from './position/position.component';
import { LinearComponent } from './linear/linear.component';
import { EnvComponent } from './env/env.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BackgroundComponent,
    PositionComponent,
    LinearComponent,
    EnvComponent,
    MediaQueryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
