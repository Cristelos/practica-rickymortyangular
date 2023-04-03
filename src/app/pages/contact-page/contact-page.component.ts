import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit: boolean =false;
  
  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      name: ["",[Validators.required, Validators.minLength(5)]],
      age: ["",[Validators.required]],
      description: ["",[Validators.required, Validators.minLength(10), Validators.maxLength(400)]],
    })
  }

  ngOnInit(): void{
    // this.contactForm.valueChanges.subscribe(chances =>{
    //   console.log(chances);
      
    // });
    this.contactForm.statusChanges.subscribe(chances =>{
      console.log(chances);
      
    });
    this.contactForm.controls['name'].valueChanges.subscribe(chances =>{
      console.log(chances);
    })
  }

  submit(){
    console.log(this.contactForm);
    
    this.isSubmit = true;
    
    if(this.contactForm.status == "VALID"){
      console.log(this.contactForm.value);
      console.log(this.contactForm);
    }
  }

}
