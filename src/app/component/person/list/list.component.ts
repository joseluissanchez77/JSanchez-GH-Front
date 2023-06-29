import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonResponseI } from 'src/app/interface/person.interface';
import { PersonService } from 'src/app/service/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  @Input() objGetPerson: PersonResponseI[]|any = [];
  butDisabled: boolean = true;

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

  personViewForm = this.fb.group({
    fcn_identification: [''],
    fcn_primer_nombre: [''],
    fcn_second_Name: [''],
    fcn_first_Last_Name: [''],
    fcn_second_Last_Name: [''],
    fcn_place_Of_Birth: [''],
    fcn_date_Of_Birth: [''],
    fcn_nationality: [''],
    fcn_sexo: [''],
    fcn_marital_Status: [''],
  });

  constructor(
    private personService: PersonService,
    private router:Router,
    private fb: FormBuilder,
    ) {
    this.listPerson();
  }

  ngOnInit(): void {}

  listPerson() {
    this.personService.getPerson().subscribe({
      next: (rpt: PersonResponseI) => {
        console.log(rpt);
        this.objGetPerson = rpt;
        // this.collectionSize = rpt.total;
      },
      error: (e) => {
        console.log(e);
        // this.loading = false;
      },
    });
  }


  dataPersonRow(data:PersonResponseI){

  }

  displayStyle = "none";
  viewPersonRowModal(data:PersonResponseI){
    this.getIdPersonData(data);
    this.displayStyle = "block";
  }

  getIdPersonData(data:PersonResponseI){
    this.personService.getByIdPerson(data).subscribe({
      next: (rpt) => {
        // this.productos();
        // this.personForm = rpt;
        this.personForm = rpt;
        console.log(rpt);
      },
      error: (errorData) => {
        console.log(errorData);
        // this.loginError = errorData?.error?.detail;
      },
      complete: () => {
        // this.listPerson();
        // Swal.fire('Persona Encontrada!', '', 'success');
      },
    });
  }

  

  closePopup() {
    this.displayStyle = "none";
  }

  deletePersonRowConfirm(data:PersonResponseI){
    Swal.fire({
      title: 'Esta seguro de borrar producto?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Borrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deletePerson(data);
      } else if (result.isDenied) {
        // this.cancelarProducto();
        Swal.fire('Accion cancelada', '', 'info');
      }
    });
  }

  deletePerson(data: PersonResponseI) {
    this.personService.deletePerson(data).subscribe({
      next: (rpt) => {
        // this.productos();
        console.log(rpt);
      },
      error: (errorData) => {
        console.log(errorData);
        // this.loginError = errorData?.error?.detail;
      },
      complete: () => {
        this.listPerson();
        Swal.fire('Persona Borrada!', '', 'success');
      },
    });
  }


  btnAddPerson(){
    this.router.navigate(["person-save"]);
  }
  btnUpdatePerson($event:PersonResponseI){
console.log($event);
    this.router.navigate(["person-update"]);
  }
}
