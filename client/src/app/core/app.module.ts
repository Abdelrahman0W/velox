import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from '../components/album/album.component';
import { CartComponent } from '../components/cart/cart.component';
@NgModule({
  declarations: [AppComponent, AlbumComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
