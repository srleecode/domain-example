import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-test-app-test-domain-ui-story-test-example',
  templateUrl: './story-test-example.component.html',
  styleUrls: ['./story-test-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiStoryTestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [UiStoryTestExampleComponent],
  imports: [CommonModule],
  exports: [UiStoryTestExampleComponent],
})
export class NgTestAppTestDomainUiStoryTestExampleModule {}
