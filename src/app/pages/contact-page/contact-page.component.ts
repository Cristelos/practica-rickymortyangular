import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  contactForm!: FormGroup;
  isSubmit: boolean =false;
  
  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      email: ["",[Validators.required]],
      name: ["",[Validators.required]],
      age: ["",[Validators.required]],
      description: ["",[Validators.required]],
    })
  }

}
