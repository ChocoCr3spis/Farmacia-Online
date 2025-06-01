import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'Ocurrió un error inesperado';
        
        if (error.error instanceof ErrorEvent) {
          // Error de cliente
          message = error.error.message;
        } else {
          // Error de servidor
          message = error.error.message || error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: message
        });

        return throwError(() => error);
      })
    );
  }
}
