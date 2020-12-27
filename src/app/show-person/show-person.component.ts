import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent {

  @Input() person;

  @Output() changeName = new EventEmitter<String>();

  onChangeName(){
    this.person.name = "whatever";
    this.changeName.emit(this.person);
  }
}
