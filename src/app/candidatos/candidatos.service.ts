import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Candidato } from "../candidatos/candidato";

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  private apiUrl: string = "https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json";

constructor(private http: HttpClient) { }

getCandidatos(): Observable<any> {
  return this.http.get<any>(this.apiUrl);

}

getCandidato(id: string): Observable<Candidato> {
  return this.http.get<Candidato>("https://raw.githubusercontent.com/kgarces/ISIS2603_202510_parcial2/refs/heads/main/jsons/" + id + "/candidates.json");
}


}
