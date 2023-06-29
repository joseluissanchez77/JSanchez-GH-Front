import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private router:Router,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  cancelarPersona() {
    // this.personForm.reset();
    // this.personForm.get('fcn_sexo')?.setValue('');
    // this.personForm.get('fcn_marital_Status')?.setValue('');
    this.router.navigate(['']);
  }
}
