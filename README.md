# MELI | API
Hecho por: Daniela Suarez

Este proyecto contiene la API pública que se conecta a los servicios de Mercado Libre.

## Especificaciones

- Node.js: 10.16.0

## Instalación

- Clonar el repositorio
- Ejecutar `npm install`
- Ejecutar `npm start`

## API

| Endpoint | Descripcion |
|----------|----------|
|`http://localhost:5000/api/items?q=<query>`|Obtiene todos los items que coincidan con el query enviado|
|`http://localhost:5000/api/items/:<id>`|Obtiene un item por su id|
