'use client';

import styles from "./LoginForm.module.css";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TituloCard from "@/components/ui/TituloCard";
import { useState } from 'react';

export default function LoginForm({ onSubmit }) {
    const [formState, setFormState] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
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
                onClick={() => onSubmit(formState)} >
                Login
            </Button>
        </div>
    );
}