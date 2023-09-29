import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-material-ui',
  templateUrl: './material-ui.component.html',
  styleUrls: ['./material-ui.component.css'],
  
})
export class MaterialUiComponent implements OnInit {
  age:any;

constructor(private routerrrr:Router,private routss:ActivatedRoute){  //routparam6

  this.routss.params.subscribe(paramsss => { 
    this.age = paramsss['value'];                  //method 1 for routerparam
  });

}
ngOnInit(): void {
//  this.age= this.rout.snapshot.params['value']  //routparam7   work in this way  //method 2 for routerparam
//  this.age= this.routss.snapshot.paramMap.get("value"); //routparam7   work in this way  //method 3 for routerparam

}


  gotofirebase(){
    // this.routerrrr.navigate(['/routerarea'],{ skipLocationChange: true });
    this.routerrrr.navigateByUrl('/routerarea'),{ skipLocationChange: true };


  }
  
// this.routerrrr.navigate(['/']);

  }
