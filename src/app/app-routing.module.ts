
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeDasboardComponent } from './employe-dasboard/employe-dasboard.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { CanDeacAsctivates, Testcanactivate } from 'Guards';
import { TestChildCanActivates } from 'Guards';
import { LoginComponent } from './admin/login/login.component';
// import { PuzzleComponent } from './blog/puzzle/puzzle.component';


const routes: Routes = [
  // { path: '', component: FirebaseComponent },  
    { path: 'login', component: LoginComponent },  
    { path: 'superadmin', loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule) },


  { path: 'employee', component: EmployeDasboardComponent , children:[ {path:'firebase', component: FirebaseComponent}] //nestled component 
},
  { path: 'firebase', component: FirebaseComponent },
  { path: 'material-ui', component: MaterialUiComponent },
  { path: 'material-ui/:value', component: MaterialUiComponent ,},  //routparam4

  // { path: 'routerarea', component: RoutingComponent,canActivate:[Testcanactivate],
  //  children:[ {path:'firebase', component: FirebaseComponent}]
// },

   {
    path: 'routerarea', 
    component: RoutingComponent,
    canActivate: [Testcanactivate],
    canActivateChild: [TestChildCanActivates],
    canDeactivate:[CanDeacAsctivates],
    children: [
      {
        path: 'firebase',
        component: FirebaseComponent,
          // Corrected property name to 'canActivateChild'
      }
    ]
  },
  
  { path: "", redirectTo:'firebase',pathMatch:'full' },

  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  // { path: 'blog', component:PuzzleComponent  },
  { path: '**', component: RoutingComponent },//wildcard rouring only two stars the stars is rxys component




];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
