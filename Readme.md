## NodeJS Tests

Proyecto para hacer puebas de aplicaciones en NodeJs.

Bajo la guía de Andrew Mead. Curso: https://www.udemy.com/the-complete-nodejs-developer-course-2/


### Usar mochajs

https://mochajs.org/


#### Instalación

```console
npm install mocha --save-dev
```

#### Prueba

Modificar *package.json*:

```json
 "scripts": {
    "test": "mocha **/*.test.js"
  },
```

y ejecutar en consola:

```console
npm test
```

