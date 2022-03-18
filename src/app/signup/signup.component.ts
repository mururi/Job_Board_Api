
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
​
  successMessage:string =""
​
  signupForm!:FormGroup
​
  constructor(private fb: FormBuilder) { }
​
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })
​
  }
  signup(){
    this.successMessage = "Successfully Signed Up..."
  }
}