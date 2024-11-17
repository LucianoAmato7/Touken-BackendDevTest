# Touken-BackendDevTest

## Rutas

- `/home/campaigns` | Lista campañas del usuario.

## Instrucciones de uso

- Clonar el repositorio

- Tener instalado Node y PostgreSQL.

- `cd Touken-BackendDevTest` | Ingresar al proyecto.

- `npm install` | Instalar dependencias.

- Crear una base de datos en PostgreSQL.

- `DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_de_base_de_datos"` | Crear un archivo .env con la URL de la base de datos a conectarse.

- `npx prisma migrate deploy` | Ejecutar la migración. 

- `npx ts-node prisma/seed.ts` | Cargar la db con los datos de prueba.

- `npx prisma generate` | Generar cliente de prisma.

- `npx run dev` | Iniciar el proyecto.

## Descripción