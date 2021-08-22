import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  sampleForm: FormGroup;
  
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      faterName: ['', Validators.required],
      motherName: ['', Validators.required],
      location: ['',]
  });
  }
  onSubmit() {
    console.log( this.sampleForm.value);
    
  }
}
