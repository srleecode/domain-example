import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-test-app-test-domain-feature-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss'],
})
export class FeatureTestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [FeatureTestExampleComponent],
  imports: [CommonModule],
  exports: [FeatureTestExampleComponent],
})
export class NgTestAppTestDomainFeatureTestExampleModule {}
