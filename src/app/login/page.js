'use client';

import LoginFormSection from '@/app/login/components/LoginFormSection';
import PublicUserLayout from "@/components/layout/PublicUserLayout";

export default function LoginPage() {
    return (
        <PublicUserLayout>
            <LoginFormSection />
        </PublicUserLayout>
    );
}