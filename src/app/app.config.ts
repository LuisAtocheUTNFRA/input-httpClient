import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), 
    provideBrowserGlobalErrorListeners(), // Esto es para manejar errores globales
    provideRouter(routes) // ¡No te olvides de sumar este para que funcionen las rutas de la tarea!
  ],
};