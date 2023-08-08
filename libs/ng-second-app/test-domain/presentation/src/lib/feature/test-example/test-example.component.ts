import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-second-app-test-domain-feature-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TestExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
