import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDevto } from '../models/devto.interface';
import { IUserDevto } from '../models/user-devto.interface';

@Injectable({
  providedIn: 'root',
})
export default class DevtoService {
  constructor(private http: HttpClient) {}

  getPostSpanish(page: number): Observable<IDevto[]> {
    return this.http.get<IDevto[]>(
      `${environment.devtoURL}/postspanish/${page}`,
    );
  }

  getDataUser(idUser: number) {
    return this.http.get<IUserDevto>(`${environment.devtoURL}/user/${idUser}`);
  }
}
