# ISTQB Foundation Level — Comunidad de Estudio

Sitio estático con material de estudio, fichas de repaso y simuladores de examen para ISTQB CTFL v4.0.

## Estructura

Todos los archivos van sueltos en la raíz del repositorio (sin subcarpetas):

```
index.html                                  → página principal
app.js                                       → lógica de navegación y fichas
fichas_data.js                               → contenido de las fichas, por capítulo
README.md
CTFL_V4_0_ES_Programa_de_Estudio.pdf         → documento oficial descargable
ISTQB_FL_Resumen.pdf                         → resumen descargable
Simulador_LinkedIn_Modelo_A.html             → simulador 40+26 preguntas
Simulador_LinkedIn_Modelo_B.html             → simulador 40 preguntas
Simulador_LinkedIn_Modelo_C.html             → simulador 40 preguntas
Simulador_LinkedIn_Modelo_D.html             → simulador 40 preguntas
```

Es HTML/CSS/JS puro: no necesita build ni instalación de dependencias.

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (público).
2. Subí **todos** estos archivos a la raíz del repo (los 10 archivos sueltos, sin meterlos en ninguna carpeta).
3. En el repo: **Settings → Pages → Source** → elegí la rama `main` y carpeta `/ (root)`.
4. Esperá 1-2 minutos y tu sitio queda en `https://tu-usuario.github.io/nombre-del-repo/`.

## Contenido de las fichas

El contenido de `fichas_data.js` está armado a partir del temario de los 6 capítulos de Fundamentos de Pruebas de Software (ISTQB CTFL v4.0). Es un objeto JavaScript simple (`FICHAS`), organizado por número de capítulo, donde cada ficha tiene una pregunta (`q`) y una respuesta (`a`). Si encontrás algún error o querés ampliar alguna ficha, podés editar ese archivo directamente, sin necesidad de build.

Los "resúmenes por capítulo" en la sección de Material usan el mismo contenido: al hacer clic en un capítulo, te lleva directo a sus fichas en la sección de repaso.
