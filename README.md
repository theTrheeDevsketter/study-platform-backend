# project X, El rincon de Jota

plataforma educativa, de recursos y colaboracion enfocada al desarrollo para estudiantes de programacion hecha por los putos

## que queremos que haga la app

Como `usuario`:

- listar articulos, por :
  - tags -> asignaturas, tecnologias, enunciado ejercicio, cursos, ciclos...
  - autor
  - fecha

- crear articulos
- puntuar articulos
- comentar articulos
  - estar logueado
  - captcha / comprobar si es humano
- reportar a otros usuarios

- home page, resumen, articulos mas valorados y ultimos
  - tips basicos para mejorar programando
  - enlaces de colaboradores 

Como `administrador`:

- Revisar articulos antes de publicarlos
- Eliminar, modificar, mover (tags),... de artículos
- notificadores a los administradores
  - email???
- control baneo de usuario, almenos 2 o 3 votos de admin



## modelos


### usuarios
- user
- role
- strikes
- isBanned --> date
- isDeleted --> date
- postInfo {
    incomingNews,
    post[
        {
            isPosted,
            postTitle,
        }
    ]
} 

### post
- title
- tags
- user

### 

user {
    notificaciones{}
    amonestaciones{}
    comentarios{ articulo, comentario, usuario}, { articulo, comentario, usuario}
}

notificaciones{
    review:[
        {
            username,
            post
        }....
    ],
    malC:[
        {
            use,
        }
    ]
}

### maestro de tags
- name

