import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollTriggerDirective } from './scroll-trigger.directive';
import { ScrollTriggerComponent } from './scroll-trigger.component';



@NgModule({
  declarations: [
    ScrollTriggerComponent,
    ScrollTriggerDirective
  ],
  exports: [
    ScrollTriggerDirective
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ScrollTriggerComponent
  ]
})
export class ScrollTriggerModule { }
