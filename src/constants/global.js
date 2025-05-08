// Configurações do directus
export const DIRECTUS = {
    BASE_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    REFRESH_URL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/auth/refresh`,
    LOGOUT_URL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/auth/logout`,
    ASSETS_URL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets`,
    UPLOAD_URL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/files`,
    AUTH_URL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/auth`,
    COLLECTIONS: {
        LEITURAS_UNIDADES: 'leituras_unidades',
        CONDOMINIOS: 'condominios',
        UNIDADES: 'unidades',
    }
};

// Mensagens de erro
export const ERROR_MESSAGES = {
    UNAUTHORIZED: 'Você não está autorizado a acessar este recurso.',
    NOT_FOUND: 'Recurso não encontrado.',
    FORBIDDEN: 'Acesso negado.',
    SERVER_ERROR: 'Erro interno do servidor.',
    BAD_REQUEST: 'Solicitação inválida.',
    TIMEOUT: 'Tempo limite da solicitação excedido.',
    NETWORK_ERROR: 'Erro de rede. Verifique sua conexão com a internet.',
    INVALID_CREDENTIALS: 'Credenciais inválidas. Verifique seu nome de usuário e senha.',
    INVALID_DATA: 'Dados inválidos. Verifique os campos obrigatórios e tente novamente.',
};

// Mensagens de sucesso
export const SUCCESS_MESSAGES = {
    LOGIN_SUCCESS: 'Login realizado com sucesso!',
    LOGOUT_SUCCESS: 'Logout realizado com sucesso!',
    DATA_SAVED: 'Dados salvos com sucesso!',
    DATA_DELETED: 'Dados excluídos com sucesso!',
    PASSWORD_CHANGED: 'Senha alterada com sucesso!',
    FILE_UPLOADED: 'Arquivo enviado com sucesso!',
};

// Informações do aplicativo
export const INFO = {
    COMPANY_NAME: 'HidroAPP',
    COPYRIGHT: `© 2025 HidroAPP Todos os direitos reservados.`,
    APP_NAME: 'HidroAPP',
    APP_VERSION: '1.0.0',
    APP_DESCRIPTION: 'Sistema de Gestão de Leituras de Hidrômetros',
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