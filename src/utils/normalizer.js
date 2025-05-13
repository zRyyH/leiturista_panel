/**
 * Substitui todos os valores null, undefined ou string vazia em um objeto/array por replacement.
 * @param {any} input — objeto, array ou valor primitivo
 * @param {any} replacement — valor que vai no lugar de null/undefined/''
 * @returns {any} — nova estrutura com os valores formatados
 */
export function replaceEmptyAndNull(input, replacement) {
    if (Array.isArray(input)) {
        return input.map(item => replaceEmptyAndNull(item, replacement));
    }
    if (input !== null && typeof input === 'object') {
        return Object.fromEntries(
            Object.entries(input).map(([key, value]) => [
                key,
                replaceEmptyAndNull(value, replacement)
            ])
        );
    }
    // substitui null, undefined ou string vazia ''
    return (input == null || input === '') ? replacement : input;
}
