import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { LiComponent } from './li/li.component';
import { UlComponent } from './ul/ul.component';
import { ListoftaskService } from './listoftask.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    LiComponent,
    UlComponent,
  ],
  providers: [ListoftaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
