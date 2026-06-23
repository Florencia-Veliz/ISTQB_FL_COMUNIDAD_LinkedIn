# ISTQB Foundation Level — Comunidad de Estudio

Sitio estático con material de estudio, fichas de repaso y simuladores de examen para ISTQB CTFL v4.0.

## Estructura

Todos los archivos van sueltos en la raíz del repositorio (sin subcarpetas):

```
index.html                                  → página principal
app.js                                       → lógica de navegación, fichas y descargas
fichas_data.js                               → contenido de las fichas, por capítulo
README.md
CTFL_V4_0_ES_Programa_de_Estudio.pdf         → documento oficial completo
ISTQB_FL_Resumen.pdf                         → resumen general del temario
ISTQB_Resumen_Cap1.pdf ... Cap6.pdf          → resumen descargable de cada capítulo
Simulador_LinkedIn_Modelo_A.html             → simulador 40+26 preguntas
Simulador_LinkedIn_Modelo_B.html             → simulador 40 preguntas
Simulador_LinkedIn_Modelo_C.html             → simulador 40 preguntas
Simulador_LinkedIn_Modelo_D.html             → simulador 40 preguntas
```

Es HTML/CSS/JS puro: no necesita build ni instalación de dependencias.

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (público).
2. Subí **todos** estos archivos a la raíz del repo (los 14 archivos sueltos, sin meterlos en ninguna carpeta).
3. En el repo: **Settings → Pages → Source** → elegí la rama `main` y carpeta `/ (root)`.
4. Esperá 1-2 minutos y tu sitio queda en `https://tu-usuario.github.io/nombre-del-repo/`.

## Material vs. fichas: qué es cada cosa

- **Resumen por capítulo (PDF)**: documento de texto, tipo apunte, para descargar y leer. Uno por capítulo (`ISTQB_Resumen_Cap1.pdf` a `Cap6.pdf`). Se generan a partir de `generar_pdfs.py` (no se sube al sitio, solo el resultado).
- **Fichas de repaso (flashcards)**: preguntas y respuestas interactivas en la página, organizadas por capítulo en `fichas_data.js`, para repasar conceptos rápido.

Ambas fuentes están basadas en el mismo contenido de estudio, pero cumplen objetivos distintos: una es para leer con calma, la otra para autoevaluarse.

Si encontrás algún error o querés ampliar el contenido de las fichas, podés editar `fichas_data.js` directamente (es un objeto JavaScript simple, sin necesidad de build).
