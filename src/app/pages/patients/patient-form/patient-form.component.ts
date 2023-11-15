import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../patient.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { PatientsService } from '../patients.service';
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  @Input() patient!: Patient;
  submitted = false;
  patientForm!: FormGroup;
  isLoading = false;

  sexes = [
    { label: 'Male', value: 'Male' },
    { label: 'Femmale', value: 'Femmale' },
  ];



  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private patientService: PatientsService
  ) {}

  ngOnInit() {

    this.createForm();
    if (this.patient) this.fillForm();
  }

  onSubmit() {
    this.submitted = true;
    if (this.patientForm.valid) {
      this.isLoading = true;
      const patient = this.patientForm.value;
      if (this.patient) {
        this.patientService.updatePatient(this.patient,patient);
        this.successCallback(patient + ' Modifier', patient.name);
      } else {
        this.patientService.patients.push(patient);
        this.successCallback(patient, patient.name + ' Ajouter');
      }
    }
  }

  successCallback(savedPatient: any, nom: string) {
    this.isLoading = false;
    this.activeModal.close(savedPatient);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: nom + ' avec success',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /**
   * Add Patient Form
   */
  createForm() {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [],
      gender: [],
      phone: [],
    });
  }

  /**
   * Form data get {used in the html component to control the form controls}
   */
  get form() {
    return this.patientForm.controls;
  }

  /**
   * Edit Patient
   */
  fillForm() {
    this.patientForm.controls['name'].setValue(this.patient.name);
    this.patientForm.controls['age'].setValue(this.patient.age);
    this.patientForm.controls['gender'].setValue(this.patient.gender);
    this.patientForm.controls['phone'].setValue(this.patient.phone);
  }
}
