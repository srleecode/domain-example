import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTestAppTestDomainDomainModule } from '@domain-example/ng-test-app/test-domain/domain';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgTestAppTestDomainDomainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
