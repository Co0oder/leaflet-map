import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from 'src/app/api/api.service';
import { HttpClientModule }   from '@angular/common/http';
import { HomePageModule } from './fitures/home-page/home-page.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomePageModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
