import { ClientService } from './../services/client.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})

export default class ClientFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private clientService = inject(ClientService);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    cel: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    registryUser: ['', [Validators.required]]
  })

  create() {
    const client = this.form.value;
    this.clientService.create(client)
    .subscribe(() => {
      this.router.navigate(['/']);

    });
  }
  
}
