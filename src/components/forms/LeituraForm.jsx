'use client';

import styles from "./LeituraForm.module.css";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState, useEffect } from 'react';
import ImageUpload from "@/components/ui/ImageUpload";
import { DIRECTUS } from "@/constants/global";

export default function LeituraForm({ onSubmit, leitura }) {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [formState, setFormState] = useState({
        leitura: '',
        file: null,
    });

    useEffect(() => {
        if (leitura.foto_id?.id) {
            setPreviewUrl(`${DIRECTUS.ASSETS_URL}/${leitura.foto_id.id}`);
        }
    }, [leitura]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleImageChange = (file) => {
        setFormState({
            ...formState,
            file: file
        });
    };

    const handleSubmit = async () => {
        await onSubmit(formState);
    }

    return (
        <div className={styles.editContainer} >
            <div className={styles.editForm}>
                <ImageUpload
                    name="leitura"
                    label="Carregar foto"
                    acceptedFormats="image/jpeg, image/png"
                    maxSize={10}
                    defaultPreview={previewUrl}
                    onChange={handleImageChange}
                />

                <Input
                    placeholder="Leitura m³"
                    name="leitura"
                    value={formState.leitura}
                    onChange={handleInputChange}
                />

                <Button
                    fullWidth
                    onClick={handleSubmit}>
                    Salvar
                </Button>
            </div>
        </div>
    );
}