import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-temp',
  templateUrl: './form-temp.component.html',
  styleUrls: ['./form-temp.component.css']
})
export class FormTempComponent implements OnInit {
  model: any = {};
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    console.log(this.model);
  }

}
