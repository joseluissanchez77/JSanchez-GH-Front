import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private personService: PersonService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((prm) => {
      console.log(`El id es: ${prm['id']}`);
    });
  }

  ngOnInit(): void {}

  cancelarPersona() {
    this.router.navigate(['']);
  }
}
