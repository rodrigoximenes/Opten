import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'machine-form',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './machine-form.component.html',
  styleUrl: './machine-form.component.scss'
})
export class MachineFormComponent {
  form: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!id;

    if (this.isEditMode) {
      this.form.patchValue({ name: 'Example Machine' });
    }
  }

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get nameInvalid(): boolean {
    return !!this.name && this.name.invalid && this.name.touched;
  }

  get nameErrorMessage(): string | null {
    const control = this.name;
    if (!control || !control.errors || !control.touched) return null;

    if (control.hasError('required')) return 'Machine name is required.';
    if (control.hasError('minlength')) return 'Machine name must be at least 3 characters long.';

    return null;
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
