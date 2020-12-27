import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPersonComponent } from './show-person/show-person.component';
import { ShowPersonListComponent } from './show-person-list/show-person-list.component';
import { GenderDirective } from './gender.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowPersonComponent,
    ShowPersonListComponent,
    GenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
