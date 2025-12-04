---
name: 'Issue 3: Texto se tapa con el margen'
about: Texto se tapa porque se pone el margen pero el texto se queda arriba
title: 'Bug: Text overlap issue in Information, FAQ, and Location tabs'
labels: bug, ui, css, high priority
assignees: ''
---

## Descripción

Hay un problema de superposición de texto en varias pestañas donde el margen se aplica pero el texto queda posicionado arriba y se tapa. 

## Secciones Afectadas

- Información
- FAQ
- Localización

## Pasos para Reproducir

1. Navegar a la pestaña de Información
2. Observar que el texto está tapado por el margen/header
3. Repetir en las pestañas de FAQ y Localización

## Comportamiento Esperado

El texto debería estar completamente visible sin superposiciones con el margen o header.

## Solución Propuesta

Ajustar el padding-top o margin-top de estas secciones para que el contenido no quede oculto debajo del header fijo.

## Contexto Adicional

- Origen: tareas.txt item 3
- Prioridad: Alta
- Posible causa: Header fijo que cubre el contenido cuando se hace scroll a la sección
