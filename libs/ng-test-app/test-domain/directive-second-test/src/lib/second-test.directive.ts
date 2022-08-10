import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[ngTestAppTestDomainDirectiveSecondTest]',
})
export class SecondTestDirective {}

@NgModule({
  declarations: [SecondTestDirective],
  imports: [CommonModule],
  exports: [SecondTestDirective],
})
export class NgTestAppTestDomainDirectiveSecondTestModule {}
