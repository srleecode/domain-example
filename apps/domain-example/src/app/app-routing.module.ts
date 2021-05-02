import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () =>
      import('@domain-example/bank-application/dashboard/shell').then(
        (module) => module.BankApplicationDashboardShellModule
      ),
  },
];

const extraOptions: ExtraOptions = { enableTracing: true, useHash: false };

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
