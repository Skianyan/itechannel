# Iteinformamos

<img src="https://cdn.discordapp.com/attachments/1080192120461201409/1181295050731311234/2.png?ex=658089bf&is=656e14bf&hm=8688075da298ed597194cbc7919a9372eb8ac69c24704dc097bd9408f99d6878&" width="30%" height="30%">

## Descripcion

Iteinformamos es una página web informativa diseñada para mantener a los estudiantes del Instituto Tecnológico de Ensenada informados, siendo gestionada por los jefes de grupo de cada salón. En esta plataforma, los estudiantes pueden acceder a información relevante en categorías como eventos, deportes, sociales y tutorías. Los posts en estas secciones son generados por los jefes de grupo, fomentando la creación de un foro informativo estudiantil dinámico y participativo.

## Herramientas utilizadas

Las herramientas que utilizaremos serán:

- NextJS
- React
- Firebase
  - FireStore

## Funcionalidades

#### Para Usuarios Comunes (Visitantes):

- Visualización de Anuncios:

  - Los usuarios pueden ver anuncios escolares y eventos relevantes.

- Exploración de Secciones:
  - Acceso a secciones temáticas para obtener información detallada sobre temas específicos.

#### Para Administradores:

- Registro de Administradores:

  - Formulario de registro para que los administradores puedan crear cuentas.

- Gestión de Secciones:

  - Agregar, editar o eliminar secciones temáticas según sea necesario.

- Publicación de Anuncios:

  - Capacidad para agregar anuncios importantes o eventos destacados.

- Moderación de Contenido:
  - Supervisión y moderación de las conversaciones para mantener un ambiente respetuoso y seguro.

## Dependencias:

- npm i prisma -D
- npm i next-auth @next-auth/prisma-adapter
- npm install firebase@10.7.0 --save

## Instrucciones de instalación:

### Configuración inicial:

Antes de ejecutar la aplicación, asegúrate de tener Node.js y npm instalados en tu máquina.
Clona el repositorio desde GitHub usando el comando git clone.

### Instalación de dependencias:

Ejecuta npm install para instalar todas las dependencias necesarias.

### Configuración de Firebase:

Crea un proyecto en la Consola de Firebase.
Copia las credenciales de tu proyecto Firebase y pégales en el archivo de configuración (firebaseConfig) en tu código.
Asegúrate de habilitar Firebase Firestore, ya que parece ser la base de datos que estás utilizando.

### Configuración de NextAuth:

Si utilizas NextAuth para la autenticación, configura las opciones de autenticación según la documentación y asegúrate de conectarlo correctamente a tu base de datos Prisma.

### Configuración de Prisma:

Si utilizas Prisma, configura tu base de datos y ejecuta las migraciones necesarias. Puedes usar npx prisma migrate dev para aplicar las migraciones.

### Ejecución de la aplicación:

Ejecuta npm run dev para iniciar la aplicación en modo de desarrollo.
Abre tu navegador y visita la URL proporcionada por NextJS.

### Registro y Creación de Cuentas de Administrador:

Utiliza el formulario de registro para crear cuentas de administrador.

### Uso de la Aplicación:

Explora las funcionalidades según el tipo de usuario (común o administrador).

### Solución de Problemas:

Si encuentras problemas durante la instalación, consulta la sección de problemas frecuentes en el README o busca ayuda en la documentación.


