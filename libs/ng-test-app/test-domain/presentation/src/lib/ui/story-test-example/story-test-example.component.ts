import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-test-app-test-domain-ui-story-test-example',
  templateUrl: './story-test-example.component.html',
  styleUrls: ['./story-test-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class StoryTestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
