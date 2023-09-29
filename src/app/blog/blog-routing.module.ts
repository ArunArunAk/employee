import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: '', component: PuzzleComponent },

  { path: 'puzzle', component: PuzzleComponent },
  { path: 'stories', component: StoriesComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { 

}
