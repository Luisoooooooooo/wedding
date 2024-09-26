# Wedding Web Application

Este proyecto consiste en una aplicación web dividida en dos partes:

1. **Frontend**: Desarrollado con Angular.
2. **Backend**: Desarrollado con Laravel.

## Estructura del proyecto

```
wedding/
├── frontend/  # Proyecto Angular
└── backend/   # Proyecto Laravel
```

## Configuración rápida

1. **Frontend (Angular)**:
   - Navega al directorio `frontend/`:
     ```bash
     cd frontend
     ```
   - Instala dependencias:
     ```bash
     npm install
     ```
   - Inicia el servidor de desarrollo:
     ```bash
     ng serve
     ```

2. **Backend (Laravel)**:
   - Navega al directorio `backend/`:
     ```bash
     cd backend
     ```
   - Instala dependencias:
     ```bash
     composer install
     ```
   - Configura el archivo `.env` y ejecuta las migraciones:
     ```bash
     php artisan migrate
     ```
   - Inicia el servidor local:
     ```bash
     php artisan serve
     ```
