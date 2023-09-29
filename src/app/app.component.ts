import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'victory';
  value:any;  //routparam2


  constructor(private router:Router){

  }

  gotoemployee(){
    this.router.navigateByUrl("material-ui/"+this.value)  //routparam3
  }
}
