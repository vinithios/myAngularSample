import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routes } from './app.router';
import { MyInterceptor } from './app.interceptor';
import { AppComponent } from './app.component';
import { CheckingDirective, SampleDirective } from './app.directive';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { AppService } from './app.service';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    CheckingDirective,
    SampleDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule
  ],
  providers: [
    HomeService,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
