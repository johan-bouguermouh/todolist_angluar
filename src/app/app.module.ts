import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { LiComponent } from './li/li.component';
import { UlComponent } from './ul/ul.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    LiComponent,
    UlComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
