#!/bin/bash

# Script to create GitHub issues from tareas.txt
# Usage: ./create-issues.sh
# Requirements: GitHub CLI (gh) must be installed and authenticated

echo "Creating GitHub issues from tareas.txt..."
echo ""

# Issue 1: Footer not visible
echo "Creating Issue 1: Footer not visible..."
gh issue create \
  --title "Fix: Footer is not visible" \
  --body "## Descripción

El footer de la página web no se está mostrando correctamente. Necesita ser revisado y corregido para que sea visible a los usuarios.

## Pasos para Reproducir

1. Navegar a la página web
2. Desplazarse hasta el final de la página
3. Observar que el footer no es visible

## Comportamiento Esperado

El footer debería ser visible al final de la página con toda la información relevante.

## Contexto Adicional

- Origen: tareas.txt item 1
- Prioridad: Alta" \
  --label "bug,ui,high priority"

echo ""

# Issue 2: Add top margin
echo "Creating Issue 2: Add top margin to FAQ and Contact views..."
gh issue create \
  --title "Enhancement: Add top margin to FAQ and Contact views" \
  --body "## Descripción

Las secciones de FAQ y Contacto necesitan un margen superior para mejorar el espaciado y la presentación visual. Actualmente el contenido está muy pegado al borde superior.

## Criterios de Aceptación

- [ ] Agregar margen superior a la vista de FAQ
- [ ] Agregar margen superior a la vista de Contacto
- [ ] Verificar que el espaciado sea consistente con otras secciones

## Secciones Afectadas

- FAQ
- Contacto

## Contexto Adicional

- Origen: tareas.txt item 2
- Tipo: Mejora de UI/UX" \
  --label "enhancement,ui,css"

echo ""

# Issue 3: Text overlap
echo "Creating Issue 3: Text overlap issue..."
gh issue create \
  --title "Bug: Text overlap issue in Information, FAQ, and Location tabs" \
  --body "## Descripción

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
- Posible causa: Header fijo que cubre el contenido cuando se hace scroll a la sección" \
  --label "bug,ui,css,high priority"

echo ""

# Issue 4: Content review
echo "Creating Issue 4: Review and verify all website information..."
gh issue create \
  --title "Task: Review and verify all website information" \
  --body "## Descripción

Realizar una revisión completa de todo el contenido del sitio web para asegurar la precisión y actualidad de la información.

## Checklist de Revisión

- [ ] Revisar datos de contacto (teléfono, email)
- [ ] Verificar información de servicios
- [ ] Confirmar horarios de apertura
- [ ] Validar dirección y localización
- [ ] Revisar ortografía y gramática
- [ ] Verificar precios si aplica
- [ ] Comprobar enlaces externos
- [ ] Validar información en el footer

## Áreas a Revisar

1. **Sección Inicio**: Hero y presentación
2. **Servicios**: Mecánica, ITV, Neumáticos, Sistema Eléctrico, Frenos, Aceite
3. **Información**: Datos del taller
4. **Contacto**: Formulario y datos de contacto
5. **Localización**: Mapa y dirección
6. **Footer**: Copyright y enlaces

## Contexto Adicional

- Origen: tareas.txt item 4
- Tipo: Tarea de revisión de contenido
- Prioridad: Media" \
  --label "documentation,content review,task"

echo ""
echo "✅ All issues created successfully!"
echo ""
echo "View issues at: https://github.com/Pausiar/talleres-manes-web/issues"
