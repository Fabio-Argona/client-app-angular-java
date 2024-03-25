import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Client } from '../model/client.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private http = inject(HttpClient);

  list(){
    return this.http.get<Client[]>('http://localhost:9001/api/clients');
  }

  get(id: string){
    return this.http.get<Client>(`http://localhost:9001/api/clients/getId/${id}`);
  }

  create(client: Client ){
    return this.http.post<Client>('http://localhost:9001/api/clients', client);
  }

  update(id: string, client: Client ){
    return this.http.put<Client>(`http://localhost:9001/api/clients/${id}`, client);
  }

  delete(id: string){
    return this.http.delete<void>(`http://localhost:9001/api/clients/${id}`);
  }


}
