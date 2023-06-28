import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {


  // formGroupPerson:FormGroup

  constructor(
    private router:Router,
    // private fb: FormBuilder
  ) { 
 
  }

  //   //formularios
  //   this.formGroupPerson = this.fb.group({
  //   fcn_primer_nombre: ['', [Validators.required]],
  //   // fcn_descripcion: ['', [Validators.required]],
  //   // fnc_codigo: ['', [Validators.required]],
  //   // fnc_stock: ['', [Validators.required]],
  //   // fnc_precio: ['', [Validators.required]],
  //   // fcn_categoria: ['', [Validators.required]],
  // });
  ngOnInit(): void {

  }

  guardarPersona(){

  }

  cancelarPersona(){
    this.router.navigate([""]);
  }

  /**
   * get
   */

  // get fcn_primer_nombre() {
  //   return this.formGroupPerson.controls.fcn_primer_nombre;
  // }
}
