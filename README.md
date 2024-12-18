# Touken-BackendDevTest

## Descripción

Este proyecto de API está diseñado siguiendo una arquitectura modular basada en capas (Controllers, Services, DAO), lo que facilita la escalabilidad, reutilización y mantenimiento del código.

## Estructura

### **index.ts**
Este archivo es el punto de entrada de la aplicación. Se encarga de inicializar y configurar el servidor Express, gestionando la configuración básica del servidor y el manejo de errores globales.

### **Routes**
Define las rutas específicas de la API y las asocia con los controladores correspondientes. Las rutas se gestionan de manera modular, permitiendo una fácil expansión conforme crezca la API.

### **Controllers**
Los controladores son responsables de recibir las solicitudes HTTP entrantes. Se encargan de interactuar con la capa de servicios y devolver las respuestas correspondientes al cliente. En caso de errores, los controladores manejan la captura de excepciones y devuelven mensajes de error apropiados en formato JSON.

### **Services**
La capa de servicios actúa como intermediaria entre los controladores y el DAO. Aquí se implementa la lógica de negocio y las validaciones adicionales. Los servicios delegan las consultas y manipulaciones de datos al DAO y gestionan de manera coherente las operaciones que requieren interacción con la base de datos.

### **DAO (Data Access Object)**
El DAO es responsable de la interacción directa con la base de datos a través de Prisma ORM. Los métodos dentro del DAO encapsulan las consultas específicas a la base de datos, asegurando una manipulación segura y eficiente de los datos.

## Tecnologías utilizadas

- Node
- Express
- Typescript
- PostgreSQL
- PrismaORM

## Rutas

- `/home/campaings` | Lista campañas del usuario. Recibe el id del usuario logeado del middleware de autenticación.

## Middlewares

### routeNotFound
Ubicado en `/middlewares/routeNotFound.ts` | Middleware genérico para manejar rutas no implementadas.
Devuelve un mensaje JSON con detalles del error (ruta y método HTTP no encontrados) con código de estado 404.

### user.auth
Ubicado en `/middlewares/user.auth.ts` | Verifica la autenticación del usuario y asigna su ID al Request para consultas posteriores.

# Instrucciones de uso

## Requisitos previos

1. Tener instalado:
- **Node.js** (versión 14 o superior).
- **PostgreSQL** (versión 12 o superior).

2. Crear una base de datos en PostgreSQL.

## Pasos para ejecutar el proyecto

1. Configurar la conexión a la base de datos.

- Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente línea para configurar la URL de conexión de la base de datos:  
`DATABASE_URL="postgresql://usuario:contraseña@localhost:puerto/nombre_de_base_de_datos`

2. `npm install` | Instalar dependencias.

3. `npx prisma generate` | Generar cliente de prisma.

4. `npx prisma migrate deploy` | Aplicar migraciones. 

5. `npx ts-node prisma/seed.ts` | Pre-cargar datos de prueba (opcional).

6. `npm run dev` | Iniciar el proyecto en modo desarrollo.

### Para producción

1. `npm run build` | Generar los archivos compilados JS en el directorio `dist`.

2. `npm run start` | Iniciar el proyecto en modo producción.

## Testeo de la API

Para probar los endpoints de la API, se utiliza Jest junto con Supertest, herramientas que permiten realizar pruebas automatizadas sobre las rutas y verificar su correcto funcionamiento.

### Pasos para realizar las pruebas:

1. `npm run start` o `npm run dev` | Asegúrate de que el servidor de la API esté en ejecución.

2. `npm run test` | En una terminal aparte, ejecuta los tests.

### Herramientas utilizadas:

- **Jest**: Framework de pruebas que facilita la ejecución y organización de los tests.

- **Supertest**: Librería utilizada para realizar solicitudes HTTP y validar las respuestas de la API.

## Observaciones:

- Se detectó un problema de compatibilidad entre express v4 y @types/express v5. Para evitar errores, se recomienda usar la versión @types/express v4.17.21, que es compatible con express v4.

- Asegúrate de que la versión de jest especificada en tu archivo package.json coincida con la versión compatible de @types/jest. Las versiones correctas a utilizar son: **"@types/jest": "^29.5.14"** - **"jest": "^29.5.0"**.
Esto garantiza la compatibilidad y evita posibles problemas durante las pruebas.