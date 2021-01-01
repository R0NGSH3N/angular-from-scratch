import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPersonComponent } from './show-person/show-person.component';
import { ShowPersonListComponent } from './show-person-list/show-person-list.component';
import { GenderDirective } from './gender.directive';
import { GenderpipePipe } from './genderpipe.pipe';
import { PersonFormComponent } from './person-form/person-form.component';
import { genderListToken, genderList } from './provider';

@NgModule({
  declarations: [
    AppComponent,
    ShowPersonComponent,
    ShowPersonListComponent,
    GenderDirective,
    GenderpipePipe,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ 
    { provide: genderListToken, useValue: genderList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
