"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Cloud } from 'lucide-react';
import styles from './ImageUpload.module.css';

const ImageUpload = ({
    onChange,
    label = 'Carregar imagem',
    acceptedFormats = 'image/jpeg, image/png, image/webp',
    maxSize = 5, // em MB
    className = '',
    disabled = false,
    defaultPreview = null,
    name = '',
}) => {
    const [preview, setPreview] = useState(defaultPreview);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    // Atualiza o preview quando defaultPreview mudar
    useEffect(() => {
        setPreview(defaultPreview);
    }, [defaultPreview]);

    const handleFileChange = (file) => {
        setError('');

        // Validação de tamanho
        if (file.size > maxSize * 1024 * 1024) {
            setError(`A imagem deve ter no máximo ${maxSize}MB.`);
            return;
        }

        // Cria URL temporária para preview
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);

        // Executa callback passado por props
        if (onChange) {
            onChange(file);
        }
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFileChange(file);
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (disabled) return;

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileChange(file);
        }
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation();
        setPreview(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        if (onChange) {
            onChange(null);
        }
    };

    const openFileDialog = () => {
        if (!disabled && inputRef.current) {
            inputRef.current.click();
        }
    };

    const containerClasses = `${styles.container} ${isDragging ? styles.dragging : ''} ${preview ? styles.hasPreview : ''} ${disabled ? styles.disabled : ''} ${className}`;

    return (
        <div className={styles.wrapper}>
            <div
                className={containerClasses}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={openFileDialog}
            >
                <input
                    name={name}
                    ref={inputRef}
                    type="file"
                    accept={acceptedFormats}
                    onChange={handleInputChange}
                    className={styles.input}
                    disabled={disabled}
                />

                {preview ? (
                    <div className={styles.previewContainer}>
                        <img src={preview} alt="Preview" className={styles.preview} />
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={handleRemoveImage}
                            disabled={disabled}
                            aria-label="Remover imagem"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div className={styles.placeholder}>
                        <div className={styles.uploadIcon}>
                            <Cloud size={32} />
                        </div>
                        <div className={styles.label}>{label}</div>
                        <div className={styles.instructions}>
                            Arraste e solte uma imagem aqui ou clique para selecionar
                        </div>
                        <div className={styles.formats}>
                            {acceptedFormats.replace('image/', '').replace(/,\s*image\//g, ', ')}
                        </div>
                    </div>
                )}
            </div>

            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default ImageUpload;