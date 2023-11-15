import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  breadCrumbItems!: Array<{}>;


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Setting' },
      { label: 'Profile', active: true },
    ];
  }

}
