import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Renderer2
} from '@angular/core';

import { ScrollTriggerComponent } from './scroll-trigger.component';

@Directive({
  selector: '[appScrollTrigger]'
})
export class ScrollTriggerDirective implements AfterViewInit {

  private intersectionObserver: IntersectionObserver;
  private componentRef = undefined as ComponentRef<ScrollTriggerComponent>;
  private internalSetting = {
    cssClass: {
      active: 'active',
      inactive: 'inactive'
    }
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private targetElementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          this.setActive({targetElement: this.targetElementRef.nativeElement});
        } else {
          this.setInActive({targetElement: this.targetElementRef.nativeElement});
        }
      });
    });

    this.intersectionObserver.observe(this.targetElementRef.nativeElement);
  }

  private loadComponent() {
    const hasBeenLoaded = !!this.componentRef;

    if (hasBeenLoaded) {
      return;
    }

    const componetFactory =  this.componentFactoryResolver.resolveComponentFactory(ScrollTriggerComponent);
    this.componentRef = componetFactory.create(null);
  }

  private setActive(arg: {
    targetElement: HTMLElement;
  }) {
    const hasNoActiveClass = !arg.targetElement.classList.contains(this.internalSetting.cssClass.active);
    const hasInactiveClass = arg.targetElement.classList.contains(this.internalSetting.cssClass.inactive);

    if (hasInactiveClass) {
      this.renderer.removeClass(arg.targetElement, this.internalSetting.cssClass.inactive);
    }

    if (hasNoActiveClass) {
      this.renderer.addClass(arg.targetElement, this.internalSetting.cssClass.active);
    }
  }

  private setInActive(arg: {
    targetElement: HTMLElement;
  }) {
    const hasNoInactiveClass = !arg.targetElement.classList.contains(this.internalSetting.cssClass.inactive);
    const hasActiveClass = arg.targetElement.classList.contains(this.internalSetting.cssClass.active);

    if (hasActiveClass) {
      this.renderer.removeClass(arg.targetElement, this.internalSetting.cssClass.active);
    }

    if (hasNoInactiveClass) {
      this.renderer.addClass(arg.targetElement, this.internalSetting.cssClass.inactive);
    }
  }
}
