import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {
constructor(private rout:Router){}

  backtomaterial(){
   this.rout.navigateByUrl('/material-ui')
  }

  canDeactivate() : boolean {
 
    if (confirm("Do you want to exit page")) {
        return true
      } else {
        return false
      }
    }
    // canDeactivate(){
    //   return false
    // }

}
