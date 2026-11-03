/**
 * Configuración web de Firebase (proyecto compartido con el backend).
 *
 * Estos valores no son secretos: Firebase los publica en el cliente a propósito,
 * y la seguridad real vive en el backend (token con rol y permisos) y en los
 * dominios autorizados del proyecto.
 */
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAtd1ZbDqa93U5mxNxCsjc8AOL8wunLnzI",
  authDomain: "uniparking-dev.firebaseapp.com",
  projectId: "uniparking-dev",
  storageBucket: "uniparking-dev.firebasestorage.app",
  messagingSenderId: "746330390405",
  appId: "1:746330390405:web:7fe80abec461049a150eec"
};

/**
 * Tenant de Azure AD de la universidad: con él, Microsoft solo deja entrar a
 * cuentas de ese directorio. Es un identificador público, no una credencial.
 */
export const MICROSOFT_TENANT_ID = '470219e7-5ba1-4435-84e0-186963d8e120';
