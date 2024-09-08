
# Web de noticias

Esta aplicación es un proyecto de ejemplo que permite buscar noticias de diferentes categorías utilizando la API de NewsData.io. Los usuarios pueden seleccionar una categoría de un menú desplegable, y la lista de noticias se actualizará dinámicamente según la categoría seleccionada.

## Características

- Filtrado de noticias por categoría.
- Utiliza la API de [NewsData.io](https://newsdata.io/) para obtener noticias en tiempo real.
- Interfaz sencilla con React y Bootstrap.
- Uso de `React-Bootstrap` para la interfaz del formulario.

## Requisitos

- Node.js >= 14.x
- npm o yarn

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/santinohamada/React-Ej11
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd news-app
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

   o si usas `yarn`:

   ```bash
   yarn install
   ```

4. Crea un archivo `.env` en la raíz del proyecto con tu clave de API de NewsData.io:

   ```plaintext
   REACT_APP_NEWS_API_KEY=tu_apikey_aqui
   ```

5. Inicia la aplicación:

   ```bash
   npm start
   ```

   o con `yarn`:

   ```bash
   yarn start
   ```

6. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en ejecución.

## Uso

### Formulario de Categoría

- La aplicación tiene un formulario donde puedes seleccionar una categoría de noticias. 
- Las categorías disponibles incluyen: `business`, `crime`, `education`, `sports`, entre otros.
- Al seleccionar una categoría, las noticias de esa categoría se obtienen desde la API de NewsData.io y se muestran en la página.

### Lista de Noticias

- Las noticias se renderizan dinámicamente según la categoría seleccionada.
- Si no se selecciona una categoría específica, se mostrarán noticias generales.

## Estructura del Proyecto

- **Formulario**: Permite seleccionar la categoría de las noticias.
- **ListaNoticia**: Realiza la llamada a la API y muestra las noticias.
- **Noticia**: Componente que renderiza la información individual de cada noticia.

### Archivos importantes:

- `Formulario.jsx`: Muestra el formulario donde el usuario selecciona la categoría.
- `ListaNoticia.jsx`: Se encarga de gestionar la lógica de las llamadas a la API y de mostrar la lista de noticias.
- `Noticia.jsx`: Componente de presentación que recibe y muestra los detalles de cada noticia.

## Dependencias

- `react`: Librería principal para la interfaz de usuario.
- `react-bootstrap`: Usada para la estilización del formulario.
- `axios`: Utilizada para realizar las llamadas a la API de noticias.
- `dotenv`: Para manejar claves API de manera segura.

## API utilizada

- [NewsData.io](https://newsdata.io/): Servicio de API para obtener las últimas noticias de diferentes categorías.

## Posibles Mejoras

- Añadir paginación para manejar un número elevado de noticias.
- Añadir manejo de errores más avanzado, como mensajes personalizados si no se encuentran noticias en la categoría seleccionada.
- Añadir más opciones de filtrado como búsqueda por palabras clave.

## Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un **fork** del repositorio y enviar tus **pull requests**. Las sugerencias y mejoras son bienvenidas.

## Licencia

Este proyecto está bajo la licencia MIT.


## Explicación:
- **Instalación**: Detalla los pasos para clonar, instalar dependencias y ejecutar la aplicación.
- **Uso**: Explica cómo utilizar el formulario y ver la lista de noticias.
- **API Key**: Se indica cómo agregar la clave de API en un archivo `.env`.
- **Dependencias**: Se listan las bibliotecas utilizadas como `React`, `Axios` y `React-Bootstrap`.
- **Mejoras**: Se sugieren algunas ideas para mejorar la funcionalidad en el futuro.
