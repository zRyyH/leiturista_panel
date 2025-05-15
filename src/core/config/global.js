// Constants globais do aplicativo
const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;

// Configurações do directus
export const DIRECTUS = {
    REFRESH_URL: `${directusUrl}/auth/refresh/`,
    LOGOUT_URL: `${directusUrl}/auth/logout/`,
    ASSETS_URL: `${directusUrl}/assets/`,
    UPLOAD_URL: `${directusUrl}/files/`,
    ITEMS_URL: `${directusUrl}/items/`,
    AUTH_URL: `${directusUrl}/auth/`,
    BASE_URL: directusUrl,
    COLLECTIONS: {
        CONSUMOS_UNIDADES: 'consumos_unidades',
        UNIDADES: 'unidades',
        RESIDENTES: 'residentes',
    }
};

// Mensagens de erro
export const ERROR_MESSAGES = {
    UNAUTHORIZED: 'Você não está autorizado a acessar este recurso.',
    INVALID_CREDENTIALS: 'Credenciais inválidas. Verifique seu nome de usuário e senha.',
};

// Mensagens de sucesso
export const SUCCESS_MESSAGES = {
    LOGIN_SUCCESS: 'Login realizado com sucesso!',
    LOGOUT_SUCCESS: 'Logout realizado com sucesso!',
};

// Mensagens dashboard
export const DASHBOARD = {
    NO_DATA: '---',
};

// Informações do aplicativo
export const INFO = {
    COMPANY_NAME: 'HidroAPP',
    COPYRIGHT: `© 2025 HidroAPP Todos os direitos reservados.`,
    APP_NAME: 'HidroAPP',
    APP_VERSION: '1.0.0',
    APP_DESCRIPTION: 'Sistema de hidrometrização',
    APP_AUTHOR: 'by zRyyH'
}

// Chaves usadas no localStorage ou cookies
export const STORAGE_KEYS = {
    TOKEN_NAME: 'directus_token',
    REFRESH_TOKEN: 'directus_refresh_token',
};

// Rotas internas do Next.js
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    LEITURAS_UNIDADES: '/leituras-unidades',
};