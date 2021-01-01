import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { PersonListService } from '../person-list.service';
import { genderListToken } from '../provider';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  personForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private personlistService: PersonListService,
    @Inject(genderListToken) public genderList ) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      gender: this.formBuilder.control('', this.genderValidator)
    })
  }

  genderValidator(control: FormControl){
    if (control.value.trim().length === 0) {
      return null;
    }

    if(control.value === 'male' || control.value === 'female'){
      return null;
    }else{
      return { 'gender': true };
    }
  }

  onSubmit(person){
    this.personlistService.add(person);
    console.log(person);
  }

}
