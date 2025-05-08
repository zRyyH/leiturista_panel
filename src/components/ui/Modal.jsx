"use client";

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

/**
 * Componente Modal atômico e reutilizável
 * @param {Object} props - Propriedades do componente
 * @param {boolean} props.isOpen - Controla a visibilidade do modal
 * @param {Function} props.onClose - Função chamada ao fechar o modal
 * @param {string} props.title - Título do modal
 * @param {React.ReactNode} props.children - Conteúdo do modal
 * @param {string} props.variant - Variante visual (default, info, success, warning, danger)
 * @param {string} props.size - Tamanho do modal (small, medium, large)
 * @param {boolean} props.hideCloseButton - Oculta o botão de fechar se verdadeiro
 * @param {string} props.className - Classes CSS adicionais
 * @returns {React.ReactNode}
 */
export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    variant = 'default',
    size = 'medium',
    hideCloseButton = false,
    className = '',
}) {
    // Ref para o elemento do modal
    const modalRef = useRef(null);

    // Efeito para gerenciar a animação de entrada e o evento de tecla Escape
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        // Foco no modal quando abrir
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
        }

        // Adiciona o evento de tecla
        document.addEventListener('keydown', handleEscapeKey);

        // Desativa o scroll do body quando o modal estiver aberto
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        // Limpeza
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Fecha o modal ao clicar no overlay (fora do conteúdo)
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    // Não renderiza nada se o modal não estiver aberto
    if (!isOpen) return null;

    return (
        <div
            className={styles.overlay}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className={`${styles.modal} ${styles[`size-${size}`]} ${styles[`variant-${variant}`]} ${className}`}
                tabIndex={-1}
            >
                <div className={styles.header}>
                    <h3 id="modal-title" className={styles.title}>
                        {title}
                    </h3>
                    {!hideCloseButton && (
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={onClose}
                            aria-label="Fechar"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}