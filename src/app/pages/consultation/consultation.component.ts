import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface Medicament {
  medicament: string;
  dose: string;
  qte: number;
}

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent implements OnInit {
  myForm!: FormGroup;
  // Edit medicament details - name, posologie, qte -
  isEdit: boolean = false;

  // Ordonnance
  ordonnance: Medicament[] = [];
  medicament: Medicament = {
    medicament: '',
    dose: '',
    qte: 0,
  };

  breadCrumbItems!: Array<{}>;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Consultation' },
      { label: 'Ordononce', active: true },
    ];

    // initialize form
    this.createForm();
  }

  /*
  ***************************************************************
  # Medicament Control
  ***************************************************************
  */

  onEdit(index: number) {
    this.isEdit = true;
    this.medicament = this.ordonnance[index];
    /**
     * fill the form
     */
    this.setName(this.medicament.medicament);
    this.setPosologie(this.medicament.dose);
    this.setQte(this.medicament.qte);
  }

  onDelete(index: number) {
    this.ordonnance.splice(index, 1);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.isEdit = false;

    this.medicament.medicament = this.getName();
    this.medicament.dose = this.getPosologie();
    this.medicament.qte = this.getQte();

    this.ordonnance.push(this.medicament);
    this.myForm.reset();
  }

  /*
  ***************************************************************
  # Ordonnances Control
  *****************************************************************
  */

  /*
  ***************************************************************
  # Form Control
  *****************************************************************
  */
  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      posologie: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }
  // Getters && Setters For form input
  getName() {
    return this.myForm.get('name')?.value;
  }
  getPosologie() {
    return this.myForm.get('posologie')?.value;
  }
  getQte() {
    return this.myForm.get('quantity')?.value;
  }
  setName(name: string) {
    this.myForm.get('name')?.setValue(name);
  }
  setPosologie(posologie: string) {
    this.myForm.get('posologie')?.setValue(posologie);
  }
  setQte(quantity: number) {
    this.myForm.get('quantity')?.setValue(quantity);
  }
}
