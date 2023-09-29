import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoriesComponent } from './stories/stories.component';


@NgModule({
  declarations: [
    PuzzleComponent,
    StoriesComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
