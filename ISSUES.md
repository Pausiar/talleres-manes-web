# Issues to Create

This document contains the issues identified in `tareas.txt` formatted for GitHub issue creation.

---

## Issue 1: El footer no se ve

**Title:** Fix: Footer is not visible

**Description:**
El footer de la página web no se está mostrando correctamente. Necesita ser revisado y corregido para que sea visible a los usuarios.

**Labels:** `bug`, `ui`, `high priority`

**Steps to Reproduce:**
1. Navegar a la página web
2. Desplazarse hasta el final de la página
3. Observar que el footer no es visible

**Expected Behavior:**
El footer debería ser visible al final de la página con toda la información relevante.

---

## Issue 2: Añadir margen por arriba en las vistas de FAQ y Contacto

**Title:** Enhancement: Add top margin to FAQ and Contact views

**Description:**
Las secciones de FAQ y Contacto necesitan un margen superior para mejorar el espaciado y la presentación visual. Actualmente el contenido está muy pegado al borde superior.

**Labels:** `enhancement`, `ui`, `css`

**Acceptance Criteria:**
- [ ] Agregar margen superior a la vista de FAQ
- [ ] Agregar margen superior a la vista de Contacto
- [ ] Verificar que el espaciado sea consistente con otras secciones

---

## Issue 3: Texto se tapa con el margen en las pestañas de Información, FAQ y Localización

**Title:** Bug: Text overlap issue in Information, FAQ, and Location tabs

**Description:**
Hay un problema de superposición de texto en varias pestañas donde el margen se aplica pero el texto queda posicionado arriba y se tapa. Esto afecta a las siguientes secciones:
- Información
- FAQ
- Localización

**Labels:** `bug`, `ui`, `css`, `high priority`

**Steps to Reproduce:**
1. Navegar a la pestaña de Información
2. Observar que el texto está tapado por el margen/header
3. Repetir en las pestañas de FAQ y Localización

**Expected Behavior:**
El texto debería estar completamente visible sin superposiciones con el margen o header.

**Affected Sections:**
- Información
- FAQ
- Localización

---

## Issue 4: Revisar que toda la información sea correcta

**Title:** Task: Review and verify all website information

**Description:**
Realizar una revisión completa de todo el contenido del sitio web para asegurar que:
- Los datos de contacto son correctos
- La información de servicios está actualizada
- Los horarios son correctos
- La dirección y localización son precisas
- No hay errores ortográficos o gramaticales

**Labels:** `documentation`, `content review`, `task`

**Checklist:**
- [ ] Revisar datos de contacto (teléfono, email)
- [ ] Verificar información de servicios
- [ ] Confirmar horarios de apertura
- [ ] Validar dirección y localización
- [ ] Revisar ortografía y gramática
- [ ] Verificar precios si aplica

---

## How to Create These Issues in GitHub

To create these issues in the GitHub repository:

1. Go to https://github.com/Pausiar/talleres-manes-web/issues
2. Click "New Issue" for each item above
3. Copy the **Title** as the issue title
4. Copy the **Description** section as the issue body
5. Add the suggested **Labels** to categorize the issue
6. Assign to appropriate team member if needed
7. Set milestone if applicable

Alternatively, you can use the GitHub CLI:

```bash
# Issue 1
gh issue create --title "Fix: Footer is not visible" --body "El footer de la página web no se está mostrando correctamente..." --label "bug,ui,high priority"

# Issue 2
gh issue create --title "Enhancement: Add top margin to FAQ and Contact views" --body "Las secciones de FAQ y Contacto necesitan un margen superior..." --label "enhancement,ui,css"

# Issue 3
gh issue create --title "Bug: Text overlap issue in Information, FAQ, and Location tabs" --body "Hay un problema de superposición de texto en varias pestañas..." --label "bug,ui,css,high priority"

# Issue 4
gh issue create --title "Task: Review and verify all website information" --body "Realizar una revisión completa de todo el contenido del sitio web..." --label "documentation,content review,task"
```
