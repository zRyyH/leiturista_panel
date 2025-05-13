// utils.js

/**
 * Formata um número para moeda BRL (R$ 10,00).
 * @param {any} value — valor numérico
 * @returns {string|null} — ex: "R$ 10,00", ou null se inválido
 */
export function formatBRL(value) {
    const num = Number(value);
    if (!isFinite(num)) return null;
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(num);
}

/**
 * Formata um número com notação BR e adiciona 'm³' ao final.
 * @param {any} value — valor numérico
 * @returns {string|null} — ex: "10 m³", ou null se inválido
 */
export function formatCubicMeters(value) {
    const num = Number(value);
    if (!isFinite(num)) return null;
    const formatted = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
    }).format(num);
    return `${formatted} m³`;
}

/**
 * Formata uma data para "10 de janeiro 2025".
 * @param {Date|string|number} input — Date, ISO string ou timestamp
 * @returns {string|null} — ex: "10 de janeiro 2025", ou null se inválido
 */
export function formatDateExtenso(input) {
    const date = input instanceof Date ? input : new Date(input);
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const day = date.getUTCDate();
    const month = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ][date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}

/**
 * Formata uma data para "janeiro 2025".
 * @param {Date|string|number} input — Date, ISO string ou timestamp
 * @returns {string|null} — ex: "janeiro 2025", ou null se inválido
 */
export function formatDateMini(input) {
    const date = input instanceof Date ? input : new Date(input);
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return null;
    }

    const month = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ][date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${year}`;
}
