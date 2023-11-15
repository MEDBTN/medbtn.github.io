import { Injectable } from "@angular/core";
import { Patient } from "./patient.model";
import { patientData } from "./patients-data";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PatientsService {
  patients: Patient[] = patientData;

  constructor() {}

  updatePatient(oldPatient:Patient, patient: Patient) {
    this.patients = this.patients.filter(
      (item) => item !== oldPatient
    );
   this.patients.push(patient);
  }

  deletePateint(index:number){
    this.patients.splice(index,1);
  }


}
