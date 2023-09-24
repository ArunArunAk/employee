import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private fb: FormBuilder,private api:ApiServicesService) { }

  ngOnInit(): void {
    this.initForm();
  }

   initForm(): void {
    this.userForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Function to handle form submission
  onSubmit(): void {
    if (this.userForm.valid) {
      // Handle form submission here
      console.log('Form submitted:', this.userForm.value);
    }
  }
  personaldata:any=[];
  onpushbook(){
    const ffname=this.userForm.get("fname")?.value;
    const llname=this.userForm.get("lname")?.value;
    const eemail=this.userForm.get("email")?.value;
    this.personaldata.push({
      fname:ffname,
      lname:llname,
      email:eemail
    });

  }
onsave(){
  this.api.savebook(this.personaldata).subscribe(res=>{
    console.log("succesfully Added",res);
    alert("succesfully Added");
  })
}

} 









/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Function to handle form submission
  onSubmit(): void {
    if (this.userForm.valid) {
      // Handle form submission here
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
*/
