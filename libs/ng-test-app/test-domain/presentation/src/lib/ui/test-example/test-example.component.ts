import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-test-app-test-domain-ui-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
