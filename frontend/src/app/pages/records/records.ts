import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordDialog} from '../../components/add-record-dialog/add-record-dialog';
import { Record } from '../../services/record';
import { Patient } from '../../services/patient';
@Component({
  selector: 'app-records',
  standalone: false,
  templateUrl: './records.html',
  styleUrl: './records.css',
})
export class Records {
  patient: any;
    patientId!: string;
  records: any[] = [];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private recordService: Record,
    private patientService: Patient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientId')!;
    this.loadPatientDetails();
    this.loadRecords();
  }

  loadPatientDetails(): void {
  this.patientService.getPatientById(this.patientId)
    .subscribe((res: any) => {
      this.patient = res.data;
    });
}

  loadRecords(): void {
    this.isLoading = true;

    this.recordService.getRecordsByPatient(this.patientId)
      .subscribe({
        next: (res: any) => {
          this.records = res.data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(AddRecordDialog, {
      width: '500px',
      data: { patientId: this.patientId }
    });

    dialogRef.afterClosed().subscribe(newRecord => {
      if (newRecord) {
        this.records.unshift(newRecord);
      }
    });
  }

  deleteRecord(id: string): void {
    this.recordService.deleteRecord(id)
      .subscribe(() => {
        this.records = this.records.filter(r => r._id !== id);
      });
  }

  
}
