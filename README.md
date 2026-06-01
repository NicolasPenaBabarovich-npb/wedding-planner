# Wedding Planner 💍

Scaffold inicial de una app móvil y web para gestionar invitados y mesas de matrimonio con **React Native + Expo**.

## Stack

- Expo (React Native + Web)
- Expo Router (file-based routing)
- TypeScript
- NativeWind (Tailwind para React Native)
- Supabase (cliente listo + schema SQL)

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
npm install
```

3. Copiar variables de entorno:

```bash
cp .env.example .env.local
```

4. Completar credenciales de Supabase en `.env.local`:

```env
EXPO_PUBLIC_SUPABASE_URL=...
EXPO_PUBLIC_SUPABASE_ANON_KEY=...
```

5. Ejecutar en desarrollo:

```bash
npx expo start
```

## Estructura del proyecto

- `app/`: rutas Expo Router (`(tabs)`, `modal`)
- `components/guests`: UI de invitados (`GuestCard`, `GuestForm`, `GuestList`)
- `components/tables`: UI de mesas (`TableCard`, `TableForm`, `TableList`)
- `components/ui`: componentes reutilizables (`Button`, `Badge`, `StatsCard`)
- `hooks/`: hooks con datos mock (`useGuests`, `useTables`)
- `lib/types.ts`: tipos TypeScript (`Guest`, `Table`)
- `lib/supabase.ts`: cliente Supabase con variables de entorno
- `constants/colors.ts`: paleta romántica (rosa suave, dorado, blanco)
- `supabase/schema.sql`: schema SQL con relaciones, índices y políticas RLS

## Nota sobre datos

Actualmente la app usa datos mock en los hooks para funcionar sin configuración previa de backend.

## Despliegue en Vercel (web)

1. Crear el proyecto en Vercel importando este repositorio.
2. Configurar:
   - **Build Command:** `npx expo export -p web`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Agregar en Vercel las variables:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`

Con la integración de GitHub:
- Cada `push` a `main` publica producción automáticamente.
- Cada pull request genera una URL de preview.

Además, este repositorio incluye el workflow `.github/workflows/deploy.yml` para validar (lint/test/typecheck) en `push` y `pull_request` antes del despliegue.
