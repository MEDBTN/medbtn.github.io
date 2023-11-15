import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Dashboard' },
      { label: 'Dashboard & statistics', active: true },
    ];
  }

  consultations:any = [
    {
      id:'#2147',
      patient:'assile',
      type:'grib',
      price:'400 da',
      status:'Approved'
    },
    {
      id:'#24343',
      patient:'akrame',
      type:'estomac',
      price:'1000da',
      status:'Pending'
    },
    {
      id:'#9249',
      patient:'adel',
      type:'headacke',
      price:'3000da',
      status:'Pending'
    },
    {
      id:'#9249',
      patient:'samia',
      type:'headacke',
      price:'200da',
      status:'Rejected'
    },
    {
      id:'#9249',
      patient:'adel',
      type:'hypertension',
      price:'2500da',
      status:'Approved'
    },

    ];

}



//   <tr>
//   <th scope="row"><a href="#">#2147</a></th>
//   <td>Bridie Kessler</td>
//   <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
//   <td>$47</td>
//   <td><span class="badge bg-warning">Pending</span></td>
// </tr>
// <tr>
//   <th scope="row"><a href="#">#2049</a></th>
//   <td>Ashleigh Langosh</td>
//   <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
//   <td>$147</td>
//   <td><span class="badge bg-success">Approved</span></td>
// </tr>
// <tr>
//   <th scope="row"><a href="#">#2644</a></th>
//   <td>Angus Grady</td>
//   <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
//   <td>$67</td>
//   <td><span class="badge bg-danger">Rejected</span></td>
// </tr>
// <tr>
//   <th scope="row"><a href="#">#2644</a></th>
//   <td>Raheem Lehner</td>
//   <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
//   <td>$165</td>
//   <td><span class="badge bg-success">Approved</span></td>
// </tr>
