# Banorte Backend  
# TEST BUILD V2

Este es el repositorio del backend del proyecto **Polaris**, construido con **NestJS**, **Prisma** y **PostgreSQL**.  
El proyecto expone una API REST modular para la gestión de usuarios, empresas y reglas de negocio.

---

## Stack Tecnológico
- [NestJS](https://nestjs.com/) – Framework de Node.js para estructurar el backend.  
- [Prisma](https://www.prisma.io/) – ORM para manejar la base de datos en PostgreSQL.  
- [PostgreSQL](https://www.postgresql.org/) – Base de datos relacional.  
- [Docker](https://www.docker.com/) – Orquestación de PostgreSQL y pgAdmin.  
- [pgAdmin](https://www.pgadmin.org/) – GUI web para PostgreSQL.  
- [JWT](https://jwt.io/) – Autenticación basada en tokens.  

---

## 1. Clonar repositorio
```bash
git clone https://github.com/malikethbbz/banorte-backend.git
cd banorte-backend
```

---

## 2. Configurar variables de entorno
Crear un archivo `.env` en la raíz con:

```env
# App
PORT=3000
NODE_ENV=development
JWT_SECRET=supersecret_jwt_key

# Base de datos
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/banorte_db?schema=public"

# pgAdmin
PGADMIN_EMAIL=admin@banorte.com
PGADMIN_PASSWORD=banorte123
```

---

## 3. Levantar base de datos y pgAdmin
Con Docker:
```bash
docker compose up -d
```

Esto inicia:
- PostgreSQL en `localhost:5433`
- pgAdmin en `http://localhost:5050`

---

## 4. Instalar dependencias
```bash
npm install
npm install @nestjs/mapped-types
```

---

## 5. Migraciones y base de datos

### 5.1 Ejecutar migración inicial
```bash
npx prisma migrate dev --name init
```

### 5.2 (Opcional) Abrir Prisma Studio
```bash
npx prisma studio
```
Esto abre un panel web para explorar y editar tablas de la base de datos.

---

## 6. Seeder (datos iniciales)
El archivo `prisma/seed.ts` incluye datos iniciales:  

- Rol **ADMIN**  
- Usuario **Hector Martinez** (`HMtinez@banorte.mx`)  
- Empresas **Banorte** y **Santander**  
- Categoría **General**  
- Estado **Activo**  
- Reglas de negocio:
  - Validar RFC (Banorte)  
  - Monto Máximo (Santander)  

Ejecutar con:
```bash
npm run prisma:seed
```

---

## 7. Levantar servidor
```bash
npm run start:dev
```

El backend quedará disponible en `http://localhost:3000`.

---

## Endpoints de Autenticación

### Registro de usuario (`/auth/register`)
- `POST /auth/register`  
- Recibe los datos de un nuevo usuario:
```json
{
  "firstName": "Hector",
  "middleName": "M",
  "lastName1": "Martinez",
  "lastName2": "Lopez",
  "email": "hector@banorte.com",
  "password": "password123"
}
```
- Si no se provee un rol, se asigna automáticamente el rol **User**.
- Responde con los datos del usuario creado (sin la contraseña).

### Login (`/auth/login`)
- `POST /auth/login`  
- Recibe `email` y `password`:
```json
{
  "email": "hector@banorte.com",
  "password": "password123"
}
```
- Valida credenciales contra la base de datos.
- Devuelve un **JWT**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

### JWT y protección de rutas
- Los endpoints que requieren autenticación usan **AuthGuard**.  
- Debes enviar el token JWT en el header `Authorization: Bearer <token>` para acceder.

---

## Scripts útiles
- `npm run start:dev` → inicia en modo desarrollo.  
- `npm run build` → compila el proyecto.  
- `npx prisma migrate dev` → aplica migraciones.  
- `npx prisma studio` → abre panel gráfico de la DB.  
- `npm run prisma:seed` → ejecuta el seeder inicial.  

---

## Equipo
- **Backend**: NestJS + Prisma  
- **Frontend**: React + Vite (otro repositorio)  
- **DB**: PostgreSQL con Docker + Prisma