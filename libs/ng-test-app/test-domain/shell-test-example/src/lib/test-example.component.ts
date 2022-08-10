import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-test-app-test-domain-shell-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss'],
})
export class ShellTestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ShellTestExampleComponent],
  imports: [CommonModule],
  exports: [ShellTestExampleComponent],
})
export class NgTestAppTestDomainShellTestExampleModule {}
