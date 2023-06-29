import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PersonResponseI } from '../interface/person.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  URL_API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPerson(): Observable<PersonResponseI> {
    let direcion = `${this.URL_API}Person`;

    return this.http.get<PersonResponseI>(direcion);
  }

  deletePerson(person: PersonResponseI) {
    return this.http.delete(`${this.URL_API}Person/${person.id}`);
  }

  getByIdPerson(person: PersonResponseI) {
    let direcion = `${this.URL_API}Person/id:int?id=${person.id}`;

    return this.http.get<PersonResponseI>(direcion);
  }


  savePerson( person : PersonResponseI){
    return this.http.post(`${this.URL_API}Person`, person);
  }

  updatePerson(person: PersonResponseI) {
    return this.http.put(`${this.URL_API}Person/${person.id}`, person);
  }

  getByIdPersonInt(id: number) {
    let direcion = `${this.URL_API}Person/id:int?id=${id}`;

    return this.http.get<PersonResponseI>(direcion);
  }
}
