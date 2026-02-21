import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Patient } from '../../services/patient';

@Component({
  selector: 'app-patients',
  standalone: false,
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients {
    patients: any[] = [];
  patientForm: FormGroup;

  constructor(
    private patientService: Patient,
    private fb: FormBuilder
  ) {
    this.patientForm = this.fb.group({
      name: [''],
      relation: [''],
      dateOfBirth: ['']
    });
  }

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getPatients().subscribe((res: any) => {
      this.patients = res.data;
    });
  }

  addPatient() {
    this.patientService.createPatient(this.patientForm.value)
      .subscribe(() => {
        this.patientForm.reset();
        this.loadPatients();
      });
  }

  deletePatient(id: string) {
    this.patientService.deletePatient(id)
      .subscribe(() => {
        this.loadPatients();
      });
  }

}
