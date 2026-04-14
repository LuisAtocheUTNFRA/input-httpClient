import { HttpClient } from '@angular/common/http';
import { inject, Injectable, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class Http {
 
  private httpClient = inject(HttpClient);

  traer(apiUrl: string, user: string, signal: WritableSignal<any>) {
    
    const peticion = this.httpClient.get(apiUrl + user);

    
    peticion.subscribe({
      next: (data) => {
        if (data) {
          
          signal.set(data);
          console.log("Datos recibidos correctamente:", data);
        }
      },
      error: (err) => {
        console.error("Error al traer los datos:", err);
      }
    });
  }
}