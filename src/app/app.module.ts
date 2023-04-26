import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar el http para hace las peticiones
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  //si tiene la palabra module va en los imports
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GifsModule,
    BrowserAnimationsModule,
  ],
  exports:[
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
