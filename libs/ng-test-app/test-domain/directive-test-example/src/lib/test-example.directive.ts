import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[ngTestAppTestDomainDirectiveTestExample]',
})
export class TestExampleDirective {}

@NgModule({
  declarations: [TestExampleDirective],
  imports: [CommonModule],
  exports: [TestExampleDirective],
})
export class NgTestAppTestDomainDirectiveTestExampleModule {}
