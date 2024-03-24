import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../services/client.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
  private ClientService = inject(ClientService);

  clients: any = [];
page: any;
by: any;


  ngOnInit(): void {
    this.ClientService.list()
      .subscribe((clients : any) => {
        this.clients = clients;


      })
  }
}

