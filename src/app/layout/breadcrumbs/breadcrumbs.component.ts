import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
  @Input() title: string | undefined;
  @Input() breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
  }>;
}
