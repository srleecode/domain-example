import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-test-app-test-domain-ui-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [UiTestExampleComponent],
  imports: [CommonModule],
  exports: [UiTestExampleComponent],
})
export class NgTestAppTestDomainUiTestExampleModule {}
