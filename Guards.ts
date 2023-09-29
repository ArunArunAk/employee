import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Injectable  } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root' //root refer appmodule,here u mentioned do not need declare in app.module
                       //if u have another custom module give name in providedIn:'custommodule'
})


export class Testcanactivate implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return true;
    }
    
}

@Injectable({
    providedIn:'root' //root refer appmodule,here u mentioned do not need declare in app.module
                       //if u have another custom module give name in providedIn:'custommodule'
})




@Injectable({
    providedIn: 'root'
  })
  export class TestChildCanActivates implements CanActivateChild {
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return true;
    }
  }
  
 




  
  export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class CanDeacAsctivates implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate):any {
      return component && component.canDeactivate ? component.canDeactivate() : true ;
    }
  }
  
