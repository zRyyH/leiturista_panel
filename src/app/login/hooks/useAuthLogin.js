'use client';

import { useNotification } from '@/core/contexts/NotificationContext';
import { ERROR_MESSAGES } from '@/core/config/global';
import { useAuth } from '@/core/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export function useAuthLogin() {
    const { showNotification } = useNotification();
    const { login, logout } = useAuth();
    const router = useRouter();

    async function handleLogin({ email, senha }) {
        try {
            const user = await login(email, senha);

            if (user.role.name === 'Residente') {
                router.push('/dashboard');
            } else {
                showNotification({
                    type: 'error',
                    title: 'Acesso Negado',
                    message: ERROR_MESSAGES.UNAUTHORIZED,
                    onClose: () => {
                        logout();
                        router.push('/');
                    }
                });
            }

        } catch (error) {
            showNotification({
                type: 'error',
                title: 'Falha no Login',
                message: ERROR_MESSAGES.INVALID_CREDENTIALS,
            });
        }
    }

    return { handleLogin };
}
