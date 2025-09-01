# Banorte Backend  
# TEST BUILD V1

Este es el repositorio del backend del proyecto **Polaris**, construido con **NestJS**, **Prisma** y **PostgreSQL**.  
El proyecto expone una API REST modular para la gestión de usuarios y otros recursos del sistema.

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

Si ya tienes contenedores con el mismo nombre, elimina los antiguos antes:
```bash
docker ps -a
docker rm -f <container_id>
```

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
Para cargar un usuario y roles iniciales definidos en `prisma/seed.ts`, ejecutar:

```bash
npm run prisma:seed
```

Esto insertará registros de ejemplo como el usuario administrador:  

```json
{
  "firstName": "Cared",
  "lastName1": "Castaños",
  "email": "cared@banorte.mx",
  "password": "Password123",
  "roleId": 1
}
```

---

## 7. Levantar servidor
```bash
npm run start:dev
```

El backend quedará disponible en `http://localhost:3000`.

---

## Endpoints Disponibles

### Usuarios (`/users`)
- `GET /users` → lista todos los usuarios.  
- `GET /users/:id` → obtener usuario por ID.  
- `POST /users` → crear usuario.  
  ```json
  {
    "firstName": "Name",
    "lastName1": "Last Name",
    "email": "user@banorte.mx",
    "password": "Password123",
    "roleId": 1
  }
  ```
- `PATCH /users/:id` → actualizar usuario.  
- `DELETE /users/:id` → eliminar usuario.  

### Próximos módulos
- `/rules` → reglas de negocio  
- `/companies` → empresas  
- `/categories` → categorías  
- `/states` → estados  
- `/files` → archivos Banorte  
- `/auth` → login con JWT  
- `/audit-log` → auditoría de cambios  

---

## Autenticación (pendiente)
El sistema usará **JWT**:
- `POST /auth/login` → recibe email + password y devuelve un token.  
- Endpoints protegidos con `AuthGuard`.  

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
