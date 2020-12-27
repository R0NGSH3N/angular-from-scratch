import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person = {
    id: 1,
    name: 'r0ngsh3n',
    gender: 'male'
  }
  

  onNameChange(person): void{
    this.person = person;
  }
}
