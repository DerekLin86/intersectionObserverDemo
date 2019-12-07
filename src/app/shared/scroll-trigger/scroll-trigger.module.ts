import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollTriggerDirective } from './scroll-trigger.directive';



@NgModule({
  declarations: [
    ScrollTriggerDirective
  ],
  exports: [
    ScrollTriggerDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ScrollTriggerModule { }
