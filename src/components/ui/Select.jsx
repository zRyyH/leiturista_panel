'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import styles from './Select.module.css';

const Select = ({
    options = [],
    placeholder = 'Selecione uma opção',
    value = null,
    onChange = () => { },
    disabled = false,
    variant = 'default', // default, outline, minimal
    size = 'medium', // small, medium, large
    error = false,
    required = false,
    fullWidth = false,
    className = '',
    name = '',
    id = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const selectRef = useRef(null);

    // Fecha o select ao clicar fora dele
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Atualiza o estado interno quando o valor da prop muda
    useEffect(() => {
        setSelectedOption(value);
    }, [value]);

    const handleSelect = (option) => {
        setSelectedOption(option.value);
        onChange(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const getSelectedLabel = () => {
        if (selectedOption === null) return placeholder;
        const selected = options.find(option => option.value === selectedOption);
        return selected ? selected.label : placeholder;
    };

    const containerClasses = [
        styles.selectContainer,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        fullWidth ? styles.fullWidth : '',
        disabled ? styles.disabled : '',
        error ? styles.error : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses} ref={selectRef}>
            <div
                className={styles.selectTrigger}
                onClick={toggleDropdown}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
            >
                <span className={selectedOption === null ? styles.placeholder : ''}>{getSelectedLabel()}</span>
                <ChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} size={16} />
            </div>

            {isOpen && (
                <div className={styles.dropdown} role="listbox">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`${styles.option} ${selectedOption === option.value ? styles.selected : ''}`}
                            onClick={() => handleSelect(option)}
                            role="option"
                            aria-selected={selectedOption === option.value}
                        >
                            <span>{option.label}</span>
                            {selectedOption === option.value && <Check className={styles.checkIcon} size={14} />}
                        </div>
                    ))}
                    {options.length === 0 && (
                        <div className={styles.emptyOption}>Nenhuma opção disponível</div>
                    )}
                </div>
            )}

            {/* Input oculto para integração com formulários */}
            <input
                type="hidden"
                name={name}
                id={id}
                value={selectedOption || ''}
                required={required}
                disabled={disabled}
            />
        </div>
    );
};

export default Select;