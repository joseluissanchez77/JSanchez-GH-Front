import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';
import { ListComponent } from '../list/list.component';
import { PersonResponseI } from 'src/app/interface/person.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {

  personForm : PersonResponseI ={
    id: 0,
    identification: '',
    first_Name: '',
    second_Name: '',
    first_Last_Name: '',
    second_Last_Name: '',
    place_Of_Birth: '',
    date_Of_Birth: undefined,
    nationality: '',
    sexo: '',
    marital_Status: '',
    photo: '',
    createdDate: undefined,
    updatedDate: undefined
  };


  personUpdateForm = this.fb.group({
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
    private personService: PersonService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((prm) => {
      this.getIdPersonData(prm['id']);
      // console.log(`El id es: ${prm['id']}`);
    });
  }

  ngOnInit(): void {}

  cancelarPersona() {
    this.personUpdateForm.reset();
    this.personUpdateForm.get('fcn_sexo')?.setValue('');
    this.personUpdateForm.get('fcn_marital_Status')?.setValue('');
    this.router.navigate(['']);
  }

  getIdPersonData(id: number) {
    this.personService.getByIdPersonInt(id).subscribe({
      next: (rpt) => {
        this.personForm = rpt;
        console.log(rpt);
      },
      error: (errorData) => {
        console.log(errorData);
      },
      complete: () => {},
    });
  }

  editarPersona() {
    // let fechaNaci = this.personUpdateForm.get('fcn_date_Of_Birth')?.value;

    // console.log(fechaNaci);
    if (this.personUpdateForm.valid) {
      Swal.fire({
        title: 'Esta seguro de editar persona?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Editar',
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
      this.personUpdateForm.markAllAsTouched();
    }
  }

  confirmarSave() {
    let data = {
      id: this.personForm.id,
      identification: this.personUpdateForm.get('fcn_identification')?.value,
      first_Name: this.personUpdateForm.get('fcn_primer_nombre')?.value,
      second_Name: this.personUpdateForm.get('fcn_second_Name')?.value,
      first_Last_Name: this.personUpdateForm.get('fcn_first_Last_Name')?.value,
      second_Last_Name: this.personUpdateForm.get('fcn_second_Last_Name')?.value,
      place_Of_Birth: this.personUpdateForm.get('fcn_place_Of_Birth')?.value,
      date_Of_Birth: this.personUpdateForm.get('fcn_date_Of_Birth')?.value,
      nationality: this.personUpdateForm.get('fcn_nationality')?.value,
      sexo: this.personUpdateForm.get('fcn_sexo')?.value,
      marital_Status: this.personUpdateForm.get('fcn_marital_Status')?.value,
      photo: '',
    };
    this.personService.updatePerson(data as any).subscribe({
      next: (rpt) => {
        this.personUpdateForm.reset();
        this.personUpdateForm.get('fcn_sexo')?.setValue('');
        this.personUpdateForm.get('fcn_marital_Status')?.setValue('');

        this.router.navigate(['']);
        // console.log(rpt);
      },
      error: (errorData) => {
        console.log(errorData);
        // this.loginError = errorData?.error?.detail;
      },
      complete: () => {
        this.personUpdateForm.reset();
        // this.formGroupProductos.get('fcn_categoria')?.setValue('');
        Swal.fire('Editado!', '', 'success');
      },
    });
  }
  /**
   * get
   */

  get fcn_primer_nombre() {
    return this.personUpdateForm.controls.fcn_primer_nombre;
  }
  get fcn_identification() {
    return this.personUpdateForm.controls.fcn_identification;
  }
  get fcn_second_Name() {
    return this.personUpdateForm.controls.fcn_second_Name;
  }
  get fcn_first_Last_Name() {
    return this.personUpdateForm.controls.fcn_first_Last_Name;
  }
  get fcn_second_Last_Name() {
    return this.personUpdateForm.controls.fcn_second_Last_Name;
  }
  get fcn_place_Of_Birth() {
    return this.personUpdateForm.controls.fcn_place_Of_Birth;
  }
  get fcn_date_Of_Birth() {
    return this.personUpdateForm.controls.fcn_date_Of_Birth;
  }
  get fcn_nationality() {
    return this.personUpdateForm.controls.fcn_nationality;
  }
  get fcn_sexo() {
    return this.personUpdateForm.controls.fcn_sexo;
  }
  get fcn_marital_Status() {
    return this.personUpdateForm.controls.fcn_marital_Status;
  }

  selection(event: any) {
    console.log(event.target.value);
    // let option = event.target.value;
  }
}
