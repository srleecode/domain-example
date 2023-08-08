import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSecondAppTestDomainDomainModule } from '@domain-example/ng-second-app/test-domain/domain';
@NgModule({
  imports: [CommonModule, NgSecondAppTestDomainDomainModule],
})
export class NgTestAppTestDomainDomainModule {}
