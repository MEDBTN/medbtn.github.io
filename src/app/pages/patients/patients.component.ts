import { Component, OnInit } from '@angular/core';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { patientData } from './patients-data';
import { Patient } from './patient.model';
import { PatientsService } from './patients.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit{

  constructor(private modalService: NgbModal, private patientsService: PatientsService) {}

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  state = {
    pageNumber: 1,
    pageSize: 5,
    startIndex: 0,
    endIndex: 10,
    totalRecords: 0,
    keyword: "",
  }
  patients!: Patient[] ;
  submitted = false;


  ngOnInit(): void {

     /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Patient' },
      { label: 'Patient List', active: true }
    ];

    this.patients = this.patientsService.patients;
  }

  onDelete(index: number) {
  this.patientsService.deletePateint(index);
  this.patients = this.patientsService.patients
  }
  openEditModal(patient: Patient) {
    this.submitted = false;
    var modal = this.modalService.open(PatientFormComponent, {
      size: "md",
      centered: true,
    });
    modal.componentInstance.patient = patient;
    modal.result
      .then((res: any) => {
        this.patients = this.patientsService.patients
      })
      .catch((error: any) => {});
  }
  searchPatients() {
    if(this.state.keyword == ''){
      this.patients = patientData;
    }else{
      this.patients = this.patients.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(this.state.keyword.toLowerCase())
        )
      );
  }
  }
  openAddModal() {
    this.submitted = false;
    var modal = this.modalService.open(PatientFormComponent, {
      size: "md",
      centered: true,
    });
    modal.result
      .then((res: any) => {
        this.searchPatients();
      })
      .catch((error: any) => {});
  }
}
