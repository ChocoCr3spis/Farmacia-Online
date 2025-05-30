import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
      this.router.navigate(['/home']);
      const { username, password } = this.loginForm.value;
      this.http.post('/api/login', { username, password }).subscribe({
        next: (res: any) => {
          // Guarda el token o sesión si aplica
          this.messageService.add({ severity: 'success', summary: 'Login correcto' });
          this.router.navigate(['/home']); // cambia a donde desees redirigir
        },
        error: (err) => {
          // Si usas interceptor, esto puede no ser necesario aquí
          this.messageService.add({ severity: 'error', summary: 'Login fallido', detail: 'Credenciales inválidas' });
        }
      });
    
  }
}
