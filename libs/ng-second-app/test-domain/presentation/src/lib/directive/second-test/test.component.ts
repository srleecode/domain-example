import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SecondTestDirective } from './second-test.directive';
@Component({
  selector: 'second-test-directive-test',
  template: '<div ngSecondAppTestDomainDirectiveSecondTest></div>',
  standalone: true,
  imports: [CommonModule, SecondTestDirective],
})
export class TestComponent {}
