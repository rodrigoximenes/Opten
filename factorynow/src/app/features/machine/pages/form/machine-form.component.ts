import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'machine-form',
  imports: [CommonModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './machine-form.component.html',
  styleUrl: './machine-form.component.scss'
})
export class MachineFormComponent {
  form: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.form = this.fb.group({
      name: [''],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!id;

    if (this.isEditMode) {
      this.form.patchValue({ name: 'Máquina Exemplo' });
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }
}