import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm,FormBuilder, FormArray, Validators } from '@angular/forms';
import { empolyeemodels } from '../modelemployee.model';
import { ApiServicesService } from '../services/api-services.service';
// import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'employe',
  templateUrl: './employe-dasboard.component.html',
  styleUrls: ['./employe-dasboard.component.css']
})
export class EmployeDasboardComponent implements OnInit {

  constructor(private api:ApiServicesService){}

 showadd!:boolean;
 showupadte!:boolean;

 Employeeform=new FormGroup({
    FirstName : new FormControl(),
   LastName : new FormControl(),
   Email : new FormControl(),
   Salary : new FormControl(),
   mobile: new FormControl()
  })

employeemodelobj:empolyeemodels=new empolyeemodels();
postempolyeedetails(){
  this.employeemodelobj.firstName=this.Employeeform.value.FirstName;
  this.employeemodelobj.LastName=this.Employeeform.value.LastName;
  this.employeemodelobj.Email=this.Employeeform.value.Email;
  this.employeemodelobj.mobile=this.Employeeform.value.mobile;
  this.employeemodelobj.salary=this.Employeeform.value.Salary;
 ;

  this.api.putempolyees(this.employeemodelobj)
  .subscribe(res=>{
    console.log(res);
    alert("empolyee added succes");
    this.Employeeform.reset();
    this.getempolyeedetails();
  },Error=>{
    alert("error is there")
  });

}


empolyedetails!:any;
 
ngOnInit(): void {
this.getempolyeedetails();
 }
getempolyeedetails(){
  this.api.getempolyees().subscribe(res=>{
       this.empolyedetails=res;
       console.log(res);
     });
   }

   deleteempolyeedetails(row:any){
       this.api.deleteempolyees(row.id).subscribe(res=>{
        // alert("delete succesfully");
        this.getempolyeedetails();
       })

   }
  onEdit(row:any){
    this.showadd=false;
    this.showupadte=true;    // this.showbutton=true;


    this.employeemodelobj.id=row.id;
    this.Employeeform.controls['FirstName'].setValue(row.firstName);
    this.Employeeform.controls['LastName'].setValue(row.LastName);
    this.Employeeform.controls['Email'].setValue(row.Email);
    this.Employeeform.controls['Salary'].setValue(row.salary);
    this.Employeeform.controls['mobile'].setValue(row.mobile);
    // this.api.editempolyees(row.id,this.Employeeform).subscribe(res=>{
    //      console.log(res);
    // })
  }
Updateempolyeedetails(){
  this.employeemodelobj.firstName=this.Employeeform.value.FirstName;
  this.employeemodelobj.LastName=this.Employeeform.value.LastName;
  this.employeemodelobj.Email=this.Employeeform.value.Email;
  this.employeemodelobj.mobile=this.Employeeform.value.mobile;
  this.employeemodelobj.salary=this.Employeeform.value.Salary;

  this.api.updateempolyees(this.employeemodelobj.id,this.employeemodelobj)
  .subscribe(res=>{
    alert("update successfully");
  })
  this.getempolyeedetails();

}

clickonaddempolyee(){
  this.Employeeform.reset()
  this.showadd=true;
  this.showupadte=false
}
 
}
 