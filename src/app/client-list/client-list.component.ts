import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../services/client.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Client } from '../model/client.interface';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [ RouterModule, RouterModule, ReactiveFormsModule],
  // imports: [DatePipe],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export default class ClientListComponent implements OnInit {
  private clientService = inject(ClientService);

  clients: Client[] = [];


  ngOnInit(): any {
    this.loadAll();
  }

  loadAll(){
    this.clientService.list()
      .subscribe(clients => {
        this.clients = clients;
      })
  }

  deleteClient(client: Client) {
    this.clientService.delete(client.id)
      .subscribe(() => {
        this.loadAll();
      });
  }

 

  
}
