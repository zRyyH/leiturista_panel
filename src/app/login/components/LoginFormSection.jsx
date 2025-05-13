'use client';

import { useAuthLogin } from "@/app/login/hooks/useAuthLogin";
import TituloCard from "@/components/ui/TituloCard";
import styles from "./LoginFormSection.module.css";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from 'react';

export default function LoginForm() {
    const { handleLogin } = useAuthLogin();

    const [formState, setFormState] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className={styles.container}>
            <TituloCard
                titulo="Login"
                descricao="Acesse sua conta"
            />

            <Input
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
            />

            <Input
                placeholder="Senha"
                name="senha"
                value={formState.senha}
                onChange={handleChange}
            />

            <Button
                variant="success"
                onClick={() => handleLogin(formState)} >
                Login
            </Button>
        </div>
    );
}