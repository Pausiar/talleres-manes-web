# Guía para Crear Issues desde tareas.txt

Este documento explica cómo crear los issues en GitHub basados en los problemas identificados en `tareas.txt`.

## 📋 Issues Identificados

Se han identificado **4 issues** principales del archivo `tareas.txt`:

1. **Footer no se ve** - Bug de alta prioridad
2. **Añadir margen superior** - Mejora de UI en FAQ y Contacto
3. **Texto se tapa con el margen** - Bug de alta prioridad en múltiples secciones
4. **Revisar información** - Tarea de revisión de contenido

## 🚀 Métodos para Crear los Issues

### Opción 1: Script Automatizado (Recomendado)

Ejecuta el script `create-issues.sh` que creará automáticamente los 4 issues:

```bash
./create-issues.sh
```

**Requisitos:**
- GitHub CLI (`gh`) instalado
- Autenticado con GitHub (`gh auth login`)

### Opción 2: Issue Templates

Los templates de issues están disponibles en `.github/ISSUE_TEMPLATE/`. Cuando crees un nuevo issue en GitHub, aparecerán como opciones:

1. Ve a https://github.com/Pausiar/talleres-manes-web/issues/new/choose
2. Selecciona el template correspondiente
3. El issue se creará pre-rellenado con toda la información

### Opción 3: Creación Manual con GitHub CLI

Copia y ejecuta cada comando individualmente:

```bash
# Issue 1
gh issue create --title "Fix: Footer is not visible" \
  --body "El footer de la página web no se está mostrando correctamente..." \
  --label "bug,ui,high priority"

# Issue 2
gh issue create --title "Enhancement: Add top margin to FAQ and Contact views" \
  --body "Las secciones de FAQ y Contacto necesitan un margen superior..." \
  --label "enhancement,ui,css"

# Issue 3
gh issue create --title "Bug: Text overlap issue in Information, FAQ, and Location tabs" \
  --body "Hay un problema de superposición de texto..." \
  --label "bug,ui,css,high priority"

# Issue 4
gh issue create --title "Task: Review and verify all website information" \
  --body "Realizar una revisión completa del contenido..." \
  --label "documentation,content review,task"
```

### Opción 4: Creación Manual en la Web

Consulta el archivo `ISSUES.md` que contiene toda la información detallada de cada issue lista para copiar y pegar en la interfaz web de GitHub.

## 📁 Archivos Creados

- **`ISSUES.md`**: Documento completo con todos los issues detallados
- **`.github/ISSUE_TEMPLATE/`**: Templates individuales para cada issue
  - `01-footer-not-visible.md`
  - `02-add-top-margin.md`
  - `03-text-overlap.md`
  - `04-content-review.md`
- **`create-issues.sh`**: Script para crear todos los issues automáticamente
- **`ISSUES_README.md`**: Esta guía

## 🏷️ Labels Utilizados

Los issues utilizan los siguientes labels:

- `bug`: Para errores que necesitan corrección
- `enhancement`: Para mejoras y nuevas características
- `ui`: Para issues relacionados con la interfaz de usuario
- `css`: Para issues de estilos y diseño
- `high priority`: Para issues que deben ser atendidos con prioridad
- `documentation`: Para tareas de documentación
- `content review`: Para revisión de contenido
- `task`: Para tareas generales

## ✅ Próximos Pasos

Después de crear los issues:

1. Asignar los issues a los miembros del equipo correspondientes
2. Priorizar los issues (los marcados como "high priority" primero)
3. Crear un milestone si es necesario
4. Vincular los issues a un proyecto si corresponde

## 📝 Nota sobre tareas.txt

Los items 5 y 6 de `tareas.txt` estaban vacíos, por lo que no se crearon issues para ellos.

## 🔗 Enlaces Útiles

- [Ver Issues del Repositorio](https://github.com/Pausiar/talleres-manes-web/issues)
- [Crear Nuevo Issue](https://github.com/Pausiar/talleres-manes-web/issues/new)
- [Documentación GitHub CLI](https://cli.github.com/manual/)
