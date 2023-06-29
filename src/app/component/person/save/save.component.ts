import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
})
export class SaveComponent implements OnInit {
  personForm = this.fb.group({
    fcn_identification: ['', [Validators.required]],
    fcn_primer_nombre: ['', [Validators.required]],
    fcn_second_Name: [''],
    fcn_first_Last_Name: ['', [Validators.required]],
    fcn_second_Last_Name: ['', [Validators.required]],
    fcn_place_Of_Birth: ['', [Validators.required]],
    fcn_date_Of_Birth: ['', [Validators.required]],
    fcn_nationality: ['', [Validators.required]],
    fcn_sexo: ['', [Validators.required]],
    fcn_marital_Status: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {}

  guardarPersona() {
    console.log(this.personForm);
    if (this.personForm.valid) {
      Swal.fire({
        title: 'Esta seguro de guardar persona?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.confirmarSave();
        } else if (result.isDenied) {
          Swal.fire(
            'Accion cancelada, los datos feuron borrados del formulario',
            '',
            'info'
          );
        }
      });
    } else {
      this.personForm.markAllAsTouched();
    }
  }

  confirmarSave() {
    let data = {
      id: 0,
      identification: this.personForm.get('fcn_identification')?.value,
      first_Name: this.personForm.get('fcn_primer_nombre')?.value,
      second_Name: this.personForm.get('fcn_second_Name')?.value,
      first_Last_Name: this.personForm.get('fcn_first_Last_Name')?.value,
      second_Last_Name: this.personForm.get('fcn_second_Last_Name')?.value,
      place_Of_Birth: this.personForm.get('fcn_place_Of_Birth')?.value,
      date_Of_Birth: this.personForm.get('fcn_date_Of_Birth')?.value,
      nationality: this.personForm.get('fcn_nationality')?.value,
      sexo: this.personForm.get('fcn_sexo')?.value,
      marital_Status: this.personForm.get('fcn_marital_Status')?.value,
      photo: '',
    };
    this.personService.savePerson(data as any).subscribe({
      next: (rpt) => {
        this.personForm.reset();
        this.personForm.get('fcn_sexo')?.setValue('');
        this.personForm.get('fcn_marital_Status')?.setValue('');

        this.router.navigate(['']);
        // console.log(rpt);
      },
      error: (errorData) => {
        console.log(errorData);
        // this.loginError = errorData?.error?.detail;
      },
      complete: () => {
        this.personForm.reset();
        // this.formGroupProductos.get('fcn_categoria')?.setValue('');
        Swal.fire('Guardado!', '', 'success');
      },
    });
  }
  cancelarPersona() {
    this.personForm.reset();
    this.personForm.get('fcn_sexo')?.setValue('');
    this.personForm.get('fcn_marital_Status')?.setValue('');
    this.router.navigate(['']);
  }

  selection(event: any) {
    console.log(event.target.value);
    // let option = event.target.value;
  }

  /**
   * get
   */

  get fcn_primer_nombre() {
    return this.personForm.controls.fcn_primer_nombre;
  }
  get fcn_identification() {
    return this.personForm.controls.fcn_identification;
  }
  get fcn_second_Name() {
    return this.personForm.controls.fcn_second_Name;
  }
  get fcn_first_Last_Name() {
    return this.personForm.controls.fcn_first_Last_Name;
  }
  get fcn_second_Last_Name() {
    return this.personForm.controls.fcn_second_Last_Name;
  }
  get fcn_place_Of_Birth() {
    return this.personForm.controls.fcn_place_Of_Birth;
  }
  get fcn_date_Of_Birth() {
    return this.personForm.controls.fcn_date_Of_Birth;
  }
  get fcn_nationality() {
    return this.personForm.controls.fcn_nationality;
  }
  get fcn_sexo() {
    return this.personForm.controls.fcn_sexo;
  }
  get fcn_marital_Status() {
    return this.personForm.controls.fcn_marital_Status;
  }
}
