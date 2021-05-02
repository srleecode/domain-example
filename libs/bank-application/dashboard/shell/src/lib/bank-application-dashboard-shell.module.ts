import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BankApplicationDashboardFeatureModule,
  DashboardComponent,
} from '@domain-example/bank-application/dashboard/feature';

@NgModule({
  imports: [
    CommonModule,
    BankApplicationDashboardFeatureModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardComponent },
    ]),
  ],
})
export class BankApplicationDashboardShellModule {}
