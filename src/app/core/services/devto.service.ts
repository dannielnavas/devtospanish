import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class DevtoService {
  constructor(private http: HttpClient) {}

  getAllPosts(page: number, tags: string): Observable<any> {
    const params = new HttpParams().set('tag', tags).set('page', page);
    return this.http.get<any>(`${environment.devtoURL}articles`, { params });
  }
}
