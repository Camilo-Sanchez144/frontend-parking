export const DEMO_MODE = true;

const DEMO_PASSWORD = 'Demo2026!';

export interface DemoAccount {
  label: string;
  description: string;
  email: string;
  password: string;
}

export const DEMO_ACCOUNTS: readonly DemoAccount[] = [
  {
    label: 'Estudiante',
    description: 'Registra vehículos y consulta su historial',
    email: 'demo.estudiante@uniempresarial.edu.co',
    password: DEMO_PASSWORD,
  },
  {
    label: 'Vigilante',
    description: 'Controla accesos, escanea QR y reporta novedades',
    email: 'demo.vigilante@uniempresarial.edu.co',
    password: DEMO_PASSWORD,
  },
  {
    label: 'Administrador',
    description: 'Aprueba registros, ve estadísticas e incidencias',
    email: 'demo.admin@uniempresarial.edu.co',
    password: DEMO_PASSWORD,
  },
];