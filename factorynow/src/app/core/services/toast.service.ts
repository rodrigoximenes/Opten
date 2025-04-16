import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success-snackbar'],
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['error-snackbar'],
    });
  }
}
