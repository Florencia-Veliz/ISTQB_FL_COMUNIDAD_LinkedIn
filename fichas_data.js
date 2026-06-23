// Fichas de estudio ISTQB CTFL v4.0 — contenido basado en los 6 capítulos del temario oficial
const FICHAS = {
  1: {
    titulo: "Fundamentos de las pruebas",
    cards: [
      { q: "¿Cuáles son los 2 errores comunes sobre qué son las pruebas de software?", a: "1) Creer que solo consisten en ejecutar el software y comprobar resultados. 2) Creer que se enfocan únicamente en validar que el software cumple con los requisitos especificados (verificación)." },
      { q: "¿Qué es la Verificación?", a: "Responde a la pregunta: ¿Construimos bien el software según los requerimientos?" },
      { q: "¿Qué es la Validación?", a: "Responde a la pregunta: ¿Construimos el software adecuado, basado en las necesidades reales del cliente?" },
      { q: "¿Qué es un Producto de Trabajo?", a: "Cualquier documento, informe, reporte, diagrama, e incluso el código fuente o el sistema terminado." },
      { q: "¿Qué es un Objeto de Prueba?", a: "Todo producto de trabajo que se está verificando o validando durante el proceso de pruebas." },
      { q: "¿Cuál es la diferencia entre Probar y Depurar (Debugging)?", a: "Probar es verificar que el software funciona como se espera. Depurar es el proceso de desarrollo que reproduce el fallo, diagnostica y corrige su causa. Tras la depuración, un probador independiente ejecuta las pruebas de confirmación." },
      { q: "¿Cuáles son las 4 razones por las que es necesario probar el software?", a: "1) Ayuda a alcanzar objetivos de alcance, tiempo, calidad y presupuesto. 2) Reduce el riesgo y aumenta la confianza. 3) Algunos defectos son difíciles de identificar (suposiciones erradas, puntos ciegos). 4) Algunas pruebas son obligatorias por estándares legales o comerciales." },
      { q: "¿Cuál es la diferencia entre Aseguramiento de Calidad y Control de Calidad?", a: "Aseguramiento de Calidad (QA): enfoque preventivo, centrado en seguir procesos adecuados. Control de Calidad: enfoque correctivo, incluye actividades de prueba. La Gestión de Calidad une ambos." },
      { q: "Define: Error, Defecto y Falla (Fallo)", a: "Error (mistake): equivocación humana. Defecto (defect/bug/fault): imperfección en el código causada por el error. Falla (failure): resultado observable al ejecutarse el defecto. Un error PUEDE introducir un defecto, que PODRÍA causar una falla." },
      { q: "¿Qué es la Causa Raíz de un defecto?", a: "La razón fundamental por la cual se produjo un problema. Analizar la causa raíz ayuda a reducir la posibilidad de que el defecto se repita en el futuro." },
      { q: "Menciona 5 causas comunes de errores humanos", a: "Trabajo bajo presión, falibilidad humana, falta de experiencia del personal, complejidad del proyecto, falta de comunicación." },
      { q: "¿Qué es un Falso Positivo y un Falso Negativo en pruebas?", a: "Falso positivo: la prueba indica un error que en realidad no existe. Falso negativo: la prueba NO detecta un defecto que debió haber identificado." },
      { q: "¿Qué es el Oráculo de Prueba?", a: "La fuente que usamos para determinar el resultado esperado, y así compararlo con el resultado real obtenido del software bajo prueba." },
      { q: "Enumera los 7 principios de las pruebas", a: "1) La prueba muestra presencia de defectos, no su ausencia. 2) La prueba exhaustiva es imposible. 3) La prueba temprana ahorra tiempo y dinero. 4) Los defectos se agrupan (clusterización). 5) Las pruebas se desgastan (paradoja del pesticida). 6) La prueba depende del contexto. 7) Falacia de la ausencia de defectos." },
      { q: "¿Qué dice el principio de 'agrupación de defectos' (defect clustering)?", a: "Un pequeño número de módulos suele concentrar la mayoría de los defectos detectados, o ser responsable de la mayoría de los fallos operativos (similar al principio de Pareto)." },
      { q: "¿Qué es la 'paradoja del pesticida'?", a: "Si se repiten los mismos casos de prueba una y otra vez, eventualmente dejan de encontrar nuevos defectos. Por eso hay que revisar y actualizar los casos de prueba regularmente." },
      { q: "¿Qué es la 'falacia de la ausencia de defectos'?", a: "Encontrar y corregir defectos no sirve de nada si el sistema construido no cumple con las necesidades y expectativas reales de los usuarios." },
      { q: "¿Cuáles son las 6 actividades del proceso de pruebas?", a: "Planificación, Monitorización y Control, Análisis, Diseño, Implementación, Ejecución y Completación (de cierre)." },
      { q: "¿Cuál es la diferencia entre Rol de Gestión y Rol de Prueba?", a: "Rol de Gestión: responsabilidad general de la prueba, se concentra en planificación, monitoreo, control y completación. Rol de Prueba: responsabilidad técnica, se concentra en análisis, diseño, implementación y ejecución." },
      { q: "¿Qué es el 'Enfoque de Equipo Completo'?", a: "Cualquier miembro del equipo con los conocimientos y competencias necesarios puede realizar cualquier tarea, y todos son responsables de la calidad." },
      { q: "¿Qué es el sesgo de confirmación en el contexto de pruebas independientes?", a: "Es la tendencia del autor/desarrollador a no ver sus propios errores. Por eso los probadores independientes son más objetivos al cuestionar las suposiciones del desarrollador." }
    ]
  },
  2: {
    titulo: "Pruebas a lo largo del ciclo de vida del software",
    cards: [
      { q: "¿Qué es un modelo de Ciclo de Vida de Desarrollo de Software (CVDS)?", a: "Una representación abstracta y de alto nivel del proceso de desarrollo de software, que define cómo se relacionan lógica y cronológicamente las fases y actividades." },
      { q: "¿Cómo se clasifican los modelos de CVDS?", a: "Secuenciales (cascada, modelo V: cada fase comienza cuando termina la anterior) e Iterativos/Incrementales (espiral, prototipado: las fases se repiten)." },
      { q: "Nombra 4 prácticas/métodos ágiles relacionados con pruebas", a: "DGPA/ATDD (Desarrollo Guiado por Pruebas de Aceptación), DGC/BDD (Desarrollo Guiado por Comportamiento), DGP/TDD (Desarrollo Guiado por Pruebas), Scrum, Kanban, XP." },
      { q: "¿Qué es el 'desplazamiento a la izquierda' (shift-left)?", a: "Enfoque que sugiere realizar las pruebas de forma temprana en el CVDS. Puede implicar costos/esfuerzo adicional al inicio pero ahorra esfuerzo y costos después." },
      { q: "Menciona 3 buenas prácticas de 'shift-left'", a: "1) Redactar casos de prueba antes de escribir el código. 2) Usar integración continua para retroalimentación rápida. 3) Completar análisis estático antes de la prueba dinámica." },
      { q: "¿Qué es Desarrollo Guiado por Pruebas (TDD)?", a: "Dirige la codificación mediante casos de prueba: primero se redactan las pruebas, luego se elabora el código que las satisfaga." },
      { q: "¿Qué es Desarrollo Guiado por Comportamiento (BDD)?", a: "Expresa el comportamiento deseado de una aplicación con casos de prueba escritos en formato simple (Gherkin: Given/When/Then), que luego se traducen automáticamente en pruebas ejecutables." },
      { q: "¿Qué es DevOps y cómo se relaciona con las pruebas?", a: "Enfoque organizativo que une desarrollo y operaciones. Promueve retroalimentación rápida, integración/entrega continua (CI/CD), shift-left, y reduce pruebas manuales repetitivas — pero requiere mantener el pipeline y la automatización." },
      { q: "¿Qué son las retrospectivas y por qué son importantes?", a: "Reuniones (al final de un proyecto/iteración) donde participan no solo probadores. Son fundamentales para la mejora continua; sus resultados deben registrarse y darles seguimiento." },
      { q: "¿Qué son los Niveles de Prueba?", a: "Grupos de actividades de prueba que se organizan y gestionan conjuntamente, relacionados con otras actividades del CVDS. En modelos secuenciales, los criterios de salida de un nivel suelen ser los de entrada del siguiente." },
      { q: "¿Cuáles son los 4 niveles de prueba según el syllabus?", a: "Prueba de Componentes, Prueba de Integración (de componentes/sistemas), Prueba de Sistema, Prueba de Aceptación." },
      { q: "¿Quién suele realizar la Prueba de Componentes y la de Integración de Componentes?", a: "Generalmente las realiza el propio desarrollador. La integración de sistemas, en cambio, es responsabilidad de probadores independientes." },
      { q: "Nombra los 4 tipos de Prueba de Aceptación", a: "Prueba de Aceptación de Usuario, Prueba de Aceptación Operativa, Prueba de Aceptación Contractual, y Pruebas Alfa/Beta." },
      { q: "¿Diferencia entre Prueba Alfa y Prueba Beta?", a: "Alfa: se realiza en las instalaciones de la organización que desarrolla, pero no la ejecuta el equipo de desarrollo. Beta: se realiza en las ubicaciones del propio cliente, fuera de la organización desarrolladora." },
      { q: "¿Qué son las Pruebas Funcionales vs No Funcionales?", a: "Funcionales: prueban el 'qué' debe hacer el sistema. No funcionales: prueban 'qué tan bien' lo hace (rendimiento, seguridad, recuperabilidad, usabilidad, etc.)." },
      { q: "¿Diferencia entre Prueba de Confirmación y Prueba de Regresión?", a: "Confirmación (re-test): verifica que un defecto corregido ya no se reproduce. Regresión: verifica que los cambios no hayan introducido nuevos defectos en partes que antes funcionaban." },
      { q: "¿Qué es una Prueba de Mantenimiento?", a: "Se realiza cuando hay cambios por mantenimiento del software. Consta de dos partes: probar el cambio en sí, y ejecutar pruebas de regresión. Disparadores: modificación, migración o retiro del software." }
    ]
  },
  3: {
    titulo: "Pruebas estáticas",
    cards: [
      { q: "¿Qué son las pruebas estáticas?", a: "El examen de productos de trabajo (requisitos, diagramas, código, planes y casos de prueba, etc.) SIN ejecutar el software, para encontrar y corregir errores a bajo costo." },
      { q: "¿Cuál es la diferencia clave entre prueba estática y dinámica?", a: "La prueba estática detecta DEFECTOS sin ejecutar el software; la prueba dinámica identifica FALLAS al ejecutarlo. La estática encuentra defectos difíciles de hallar en ejecución (código inaccesible, malos patrones de diseño)." },
      { q: "¿De qué dos formas se ejecutan las pruebas estáticas?", a: "Mediante Revisiones (examen manual cuidadoso de un producto de trabajo) y mediante Análisis Estático (herramientas automáticas, como el compilador, que verifican estándares de codificación, estructuras de datos y flujo de control)." },
      { q: "Nombra los 6 roles posibles en una revisión", a: "Gestor (decide qué se revisa y aporta recursos), Autor, Escriba (toma notas), Revisores, Líder/Moderador (dirige y modera la reunión), Director (planifica y controla)." },
      { q: "¿Qué es una revisión Informal?", a: "No sigue un proceso definido y no se documenta formalmente. Su objetivo es solo detectar anomalías." },
      { q: "¿Qué es una revisión Guiada (Walkthrough)?", a: "Dirigida por el autor. La revisión individual previa es opcional. Busca evaluar calidad, educar a revisores, obtener consenso, generar ideas y motivar al autor." },
      { q: "¿Qué es una Revisión Técnica?", a: "Realizada por revisores calificados y dirigida por un moderador. Busca obtener consenso y tomar decisiones sobre problemas técnicos." },
      { q: "¿Qué es una Inspección y qué la distingue?", a: "Es el tipo de revisión MÁS FORMAL. Busca el máximo número de anomalías, se documenta formalmente, y el autor NO puede actuar como revisor ni escriba." },
      { q: "Nombra las 5 técnicas de revisión", a: "Ad hoc (lectura secuencial sin guía), Basada en escenarios, Basada en listas de comprobación, Basada en roles, Basada en perspectiva." },
      { q: "¿Cuáles son las 5 actividades del proceso de revisión formal?", a: "1) Planificación. 2) Inicio de la revisión. 3) Revisión individual. 4) Analizar y comunicar defectos. 5) Corregir e informar." },
      { q: "Menciona 4 factores de éxito de las revisiones", a: "Objetivos claros y criterios de salida medibles, elegir el tipo de revisión adecuado al contexto, revisar en pequeños fragmentos, dar tiempo suficiente para prepararse, y apoyo de la dirección." }
    ]
  },
  4: {
    titulo: "Análisis y diseño de pruebas",
    cards: [
      { q: "¿Cuáles son las 3 categorías de técnicas de prueba dinámica?", a: "Caja Negra (basadas en especificaciones), Caja Blanca (basadas en estructura), y Basadas en la Experiencia." },
      { q: "¿Cuándo conviene usar técnicas basadas en la experiencia?", a: "Cuando la especificación es inadecuada, no existe o no está actualizada; para sistemas de bajo riesgo; o bajo presión de tiempo extrema." },
      { q: "¿Qué es la Partición de Equivalencia?", a: "Divide los datos de entrada/salida en particiones donde se espera que el sistema se comporte igual para todos los valores de esa partición. Requiere al menos un caso de prueba por partición (válida o inválida)." },
      { q: "¿Qué es el criterio de cobertura 'Cada Elección' en partición de equivalencia?", a: "Exige usar cada partición de cada conjunto de particiones al menos una vez, pero NO tiene en cuenta combinaciones entre particiones." },
      { q: "¿Qué es el Análisis de Valor Frontera (BVA)?", a: "Técnica que prueba los valores límite entre particiones, ya que los defectos suelen concentrarse justo en esos límites." },
      { q: "Diferencia entre BVA de 2 puntos y de 3 puntos", a: "2 puntos: prueba un valor de cada lado de la frontera (la frontera misma no es un valor). 3 puntos: prueba el valor exactamente EN la frontera, más uno a cada lado." },
      { q: "Para un rango válido 1-5, ¿qué valores prueba el BVA de 3 puntos en el límite inferior?", a: "0, 1 y 2 (el valor justo antes, el límite mismo, y el valor justo después)." },
      { q: "¿Qué es una Tabla de Decisión y para qué sirve?", a: "Técnica para probar sistemas donde diferentes COMBINACIONES de condiciones producen diferentes resultados/acciones. Útil cuando probar todas las combinaciones manualmente sería poco práctico." },
      { q: "¿Cuáles son los 3 pasos para crear una Tabla de Decisión?", a: "1) Identificar las condiciones. 2) Identificar todas las combinaciones posibles de verdadero/falso. 3) Identificar las salidas/acciones correspondientes a cada combinación." },
      { q: "¿Qué es un Diagrama de Transición de Estados?", a: "Modela el comportamiento de un sistema mostrando ESTADOS (círculos) y TRANSICIONES (líneas con flecha), iniciadas por un evento, opcionalmente calificado por una condición de guarda [entre corchetes]." },
      { q: "¿Cuáles son los 3 criterios de cobertura en Transición de Estados?", a: "1) Cobertura de todos los estados. 2) Cobertura de transiciones válidas. 3) Cobertura de todas las transiciones (incluidas inválidas)." },
      { q: "¿Qué es la Cobertura de Sentencia (caja blanca)?", a: "Mide qué porcentaje de sentencias ejecutables del código se han ejecutado al menos una vez. El 100% no garantiza haber probado todas las decisiones posibles." },
      { q: "¿Qué es la Cobertura de Decisión (caja blanca)?", a: "Prueba cada condición validando tanto su resultado VERDADERO como FALSO, para estructuras que pueden generar más de un resultado (if, while, etc.)." },
      { q: "Nombra las 3 técnicas basadas en la experiencia", a: "Predicción de errores (error guessing), Pruebas exploratorias, y Pruebas basadas en listas de comprobación." },
      { q: "¿Qué es la Predicción de Errores?", a: "Se basa en cómo ha fallado la aplicación en el pasado, qué errores suelen cometer los desarrolladores, y fallos vistos en otras aplicaciones similares." },
      { q: "¿Qué son las Pruebas Exploratorias?", a: "Explorar el software para descubrir qué hace y qué no; las decisiones sobre qué probar se toman sobre la marcha, a diferencia de seguir un script fijo." },
      { q: "¿Qué son las 3 C de una Historia de Usuario?", a: "Card (Cuartilla/tarjeta), Conversation (Conversación), Confirmation (Confirmación)." },
      { q: "¿Qué significa el acrónimo INVEST para Historias de Usuario?", a: "Independiente, Negociable, Valioso, Estimable, Pequeño/Sucinto (Small), y Capacidad de Prueba (Testable)." },
      { q: "¿Qué son los Criterios de Aceptación de una Historia de Usuario?", a: "Condiciones que debe cumplir la implementación de la HU para ser aceptada. Se usan para definir alcance, alcanzar consenso, describir escenarios, servir de base para pruebas de aceptación y estimar." }
    ]
  },
  5: {
    titulo: "Gestión de las actividades de prueba",
    cards: [
      { q: "¿Qué es un Plan de Prueba y qué contiene?", a: "Documento que describe objetivos, recursos y procesos de un proyecto de prueba. Contiene: contexto, supuestos y restricciones, implicados, comunicación, registro de riesgos, enfoque de prueba, presupuesto y calendario." },
      { q: "¿Cuáles son las 2 planificaciones en CVDS iterativos?", a: "Planificación de la entrega (se ocupa del backlog del producto, anticipa el lanzamiento) y Planificación de la iteración (se ocupa del backlog de la iteración, estima esfuerzo de pruebas)." },
      { q: "¿Diferencia entre Criterios de Entrada y Criterios de Salida?", a: "Entrada: condiciones que deben cumplirse para INICIAR una actividad (ej. entorno y datos de prueba listos). Salida (definición de hecho): condiciones para CERRAR una actividad (ej. cobertura alcanzada)." },
      { q: "Nombra las 4 técnicas de estimación de esfuerzo de prueba", a: "Estimación basada en proporciones (datos históricos), Extrapolación (métricas del proyecto actual), Delphi de Banda Ancha (iterativa, basada en experiencia; el Póker de Planificación es una variante), y Estimación de Tres Puntos." },
      { q: "¿Cuál es la fórmula de Estimación de Tres Puntos?", a: "E = (a + 4m + b) / 6, donde a=optimista, m=más probable, b=pesimista." },
      { q: "Nombra las 3 estrategias de priorización de casos de prueba", a: "Basada en riesgo (se prueban primero los riesgos más importantes), Basada en cobertura (mayor cobertura primero), Basada en requisitos (requisitos más prioritarios primero)." },
      { q: "¿Qué es la Pirámide de Prueba?", a: "Modelo (de Cohn) que muestra distintos niveles de granularidad de prueba. Capa inferior: pruebas pequeñas, aisladas y rápidas (unitarias). Capa superior: pruebas complejas, de extremo a extremo (E2E)." },
      { q: "¿Cuáles son las 3 capas típicas de la Pirámide de Prueba?", a: "Unitarias (base), Integración/Servicios (medio), Interfaz/E2E (cima)." },
      { q: "¿Qué son los Cuadrantes de Prueba?", a: "Modelo que agrupa niveles de prueba con tipos, técnicas y productos de trabajo apropiados en desarrollo ágil, ayudando a diferenciar los tipos de prueba para todos los implicados." },
      { q: "¿Cuáles son las 2 actividades principales de Gestión de Riesgo?", a: "Análisis de Riesgo y Control de Riesgo." },
      { q: "¿Cuáles son los 2 factores que caracterizan un riesgo?", a: "Probabilidad del riesgo e Impacto del riesgo." },
      { q: "Diferencia entre Riesgo de Proyecto y Riesgo de Producto", a: "Proyecto: afecta la capacidad del proyecto de alcanzar objetivos (recursos, plazos, proveedores). Producto: el producto no satisface las expectativas razonables de usuarios/interesados (relacionado a características de calidad, ISO 25010)." },
      { q: "Nombra 3 acciones de mitigación de riesgo de producto", a: "Seleccionar probadores con experiencia adecuada al riesgo, aplicar el nivel correcto de independencia de prueba, realizar revisiones y análisis estático, aplicar pruebas dinámicas (incluida regresión)." },
      { q: "¿Qué garantiza la Gestión de la Configuración?", a: "Que el código fuente, scripts de prueba, software de terceros, datos y documentación se gestionen con cuidado durante todo el proyecto, permitiendo asociar lo que se prueba a versiones específicas." },
      { q: "¿Cuáles son los 3 objetivos típicos de un informe de defectos?", a: "1) Dar información suficiente para resolver el problema. 2) Servir de medio de seguimiento de la calidad. 3) Dar ideas para mejorar el proceso de desarrollo y prueba." }
    ]
  },
  6: {
    titulo: "Herramientas de soporte para pruebas",
    cards: [
      { q: "¿Para qué sirven las herramientas de prueba?", a: "Apoyan tareas difíciles de hacer manualmente, evitan repeticiones que pueden introducir más defectos, y liberan tiempo para actividades que requieren atención creativa." },
      { q: "Nombra 5 categorías de herramientas de prueba", a: "Gestión de Pruebas, Pruebas Estáticas, Diseño e Implementación de Pruebas, Ejecución y Registro de Pruebas, Pruebas No Funcionales (también: DevOps, Colaboración, Escalabilidad/Normalización del despliegue)." },
      { q: "Nombra 4 ventajas de la Automatización de Pruebas", a: "Reduce trabajo manual repetitivo, mayor consistencia (menos error humano), resultados más objetivos, reducción de tiempos de ejecución, y más tiempo para diseñar pruebas nuevas." },
      { q: "Nombra 4 riesgos de la Automatización de Pruebas", a: "Expectativas poco realistas, subestimar el esfuerzo de aprendizaje, usar la herramienta cuando lo manual es más apropiado, dependencia del proveedor, herramienta no compatible con la plataforma." },
      { q: "¿Qué es el 'Efecto Sonda'?", a: "El efecto que produce el instrumento de medición sobre el objeto medido. Ej.: una herramienta que mide cobertura puede, al interactuar con el sistema, afectar sus tiempos de respuesta reales." },
      { q: "¿Cuál es el principio básico para seleccionar una herramienta?", a: "La herramienta debe ajustarse a la organización, NUNCA al revés. Primero se identifica la necesidad, luego se busca la herramienta que la resuelva." },
      { q: "¿Qué se recomienda hacer antes de adoptar una herramienta en toda la organización?", a: "Validar si tiene un período de prueba gratuito y hacer una prueba de concepto (piloto) en un proyecto pequeño, evaluando cómo se ajusta a los procesos existentes sin forzar cambios innecesarios." }
    ]
  }
};
