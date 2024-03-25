import { ClientService } from './../services/client.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Client } from '../model/client.interface';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})

export default class ClientFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private clientService = inject(ClientService);

  form?: FormGroup;
  client?: Client;


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.clientService.get(id) //  this.clientService.get(parseInt(id) id  type number
      .subscribe(client => {
        this.client = client;
        this.form = this.fb.group({
          name: [client.name, [Validators.required]],
          email: [client.email, [Validators.required]],
          cel: [client.cel, [Validators.required]],
          cpf: [client.cpf, [Validators.required]],
          registryUser: [client.registryUser, [Validators.required]]
        });
      })
    } else {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        cel: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        registryUser: ['', [Validators.required]]
      })
    }
  }
  
  save() {
    const clientForm = this.form!.value;

    if (this.client) {
      this.clientService.update(this.client.id, clientForm)
      .subscribe(() => {
        this.router.navigate(['/']);
      });

    }else {
      this.clientService.create(clientForm)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }
}
  
