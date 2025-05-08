'use client';

import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import FormLogin from "@/components/forms/LoginForm";
import { useNotification } from "@/contexts/NotificationContext";
import { useAuth } from "@/contexts/AuthContext";
import { ERROR_MESSAGES } from '@/constants/global';
import PublicUserLayout from "@/components/layout/PublicUserLayout";

export default function Home() {
    const { showNotification } = useNotification();
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (formData) => {
        try {
            await login(formData.email, formData.senha);
            router.push('/leituras_unidades');
        } catch (e) {
            showNotification({
                type: 'error',
                title: 'Falha',
                message: ERROR_MESSAGES.LOGIN_ERROR,
            });
        }
    };

    return (
        <PublicUserLayout>
            <div className={styles.page}>
                <FormLogin onSubmit={handleSubmit} />
            </div>
        </PublicUserLayout>
    );
}