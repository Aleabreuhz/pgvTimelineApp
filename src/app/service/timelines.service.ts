import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimelinesService {

  endpoint = 'http://localhost:8080/api/timelines';
  constructor(private  httpClient: HttpClient) { }
  getTimelines(){
    return this.httpClient.get(this.endpoint);
  }
  addTimelines(timeline: any) {
    return this.httpClient.post(this.endpoint, timeline);
  }

  // Editar un usuario existente
  updateTimelines(id: number, timeline: any) {
    return this.httpClient.put(`${this.endpoint}/${id}`, timeline);
  }

  // Eliminar un usuario
  deleteTimelines(id: number) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
