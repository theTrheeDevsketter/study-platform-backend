# Backsketters

La finalidad de este proyecto es proveer distintos tipos de funcionalidades para para la aplicacion web que va a servir de punto de apoyo para todos esos alumnos que esten en ciclos o cursos relacionados con la programacion

## Indice del documento

1. [🗼 Estructura del proyecto 🗼](#Estructura)
2. [🖌️ modelado de entidades 🖌️](#Modelado)
3. [👩‍💻 tecnologías 👩‍💻](#Tecnología)


### Estructura
El proyecto esta montado sobre un framework que usa `node` como base, `Nest`. Esto nos obliga a trabajar con un diseño de carpetas y archivos determinados por el mismo framework, miremos un poco en detalle como funciona un poco el flujo de la api.

1. Se ataca a un endpoint
2. establecemos las reglas minimas para acceder al servicio
  - middlewares
  - guards
  - pipes
  - strategy
3. pasado el filtro y/o transformaciones pertinentes, realizamos el servicio. Este se identifica normalmente con el nombre de la entidad a la que hace referencia
4. Al ser una Rest-API todo endpoint al menos debe devolver un codigo de estatus. Algo General seria:
  - 200 , todo ok 👌
  - 300 , redirect 🔄
  - 400 , fallo de algun tipo con la peticion ⚠️
  - 500 , server error 🔥

El proyecto tiene 2 carpetas principales
- `src`, aqui vamos a tener toda la logica de la aplicacion
- `prisma`, aqui vamos a definir desde nuestro modelos y relaciones como la conexion con la bbdd

#### src
Dentro de source podemos diferenciar carpetas principales y 2 archivos importantes, hay mas pero nos vamos a centrar en estos:
- carpetas
  - auth : definir reglas para securizar los endpoints
  - config : establecer interfaces generales de la app
  - Entidades : carpetas con diversos archivos para modelar entidades y generar los servicios asociados
- archivos
  - app.module.ts : archivo donde se cargan los modulos que vamos a usar a lo largo de la app.
  - main.ts : Punto de inicio donde se define entre otras cosas el puerto de escucha de la app
### Modelado

Definimos primero las entidades en el archivo de configuracion de prisma `schema.prisma`

una vez establecidas las entidades y sus relaciones, necesitamos decirle al ORM `Prisma` que genere un nuevo servicio con las entidades que hemos generados.

```bash
npx prisma generate
```
Ahora solo nos queda usar el servicio de prisma en donde lo necesitemos.
### Tecnología

En este proyecto hemos usado 2 tecnologias que se salian de nuestra zona de confor

- Nest : un framework de node para el diseño de aplicaciones del lado del servidor con javascript
- Prisma : un ORM para manejar la capa de persistencia de nuestra app.


