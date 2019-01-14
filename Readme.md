## NodeJS Tests

Proyecto para hacer puebas de aplicaciones en NodeJs.

Bajo la guía de Andrew Mead. Curso: https://www.udemy.com/the-complete-nodejs-developer-course-2/


### Usar mochajs

https://mochajs.org/


#### Instalación

Instalacion global de nodemon (no lo agregué a package.json)
```console
npm install -g nodemon
```

```console
npm install mocha --save-dev
```

#### Prueba

Modificar *package.json*  (en windows es con comilla doble):

```json
"scripts": {
    "test": "mocha **/*.test.js",
    "test-watch": "nodemon --exec \"npm test\""
  },
```

y ejecutar en consola:

```console
npm test
```

o bien, para probar y vigilar cambios

```console
npm run test-watch
```


