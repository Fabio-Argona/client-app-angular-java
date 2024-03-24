import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:9001/api/clients');
  }

  get(id: string){
    return this.http.get(`http://localhost:9001/api/clients/${id}`);
  }

  create(client: any ){
    return this.http.post('http://localhost:9001/api/clients', client);
  }

  update(id: string, client: any ){
    return this.http.put(`http://localhost:9001/api/clients/${id}`, client);
  }

  updatdelite(id: string){
    return this.http.delete(`http://localhost:9001/api/clients/${id}`);
  }


}
