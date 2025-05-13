import { DASHBOARD } from '@/core/config/global';

export function mapUnidade(unidadeDetails = []) {
    const tipo_unidade = unidadeDetails?.tipo_unidade ?? DASHBOARD.NO_DATA;
    const numero = unidadeDetails?.numero ?? DASHBOARD.NO_DATA;
    const bloco = unidadeDetails?.bloco ?? DASHBOARD.NO_DATA;

    const { condominio_id } = unidadeDetails || {};
    const empresaData = condominio_id?.empresa_id;

    const faixas_consumo = condominio_id?.configuracao_id?.faixas_de_consumo_id ?? DASHBOARD.NO_DATA;
    const valor_da_medicao = condominio_id?.configuracao_id?.valor_da_medicao ?? DASHBOARD.NO_DATA;
    const email = empresaData?.usuario_id?.email ?? DASHBOARD.NO_DATA;
    const condominio = condominio_id?.nome ?? DASHBOARD.NO_DATA;
    const endereco = empresaData?.endereco ?? DASHBOARD.NO_DATA;
    const empresa = empresaData?.nome ?? DASHBOARD.NO_DATA;
    const logo = empresaData?.foto_id ?? DASHBOARD.NO_DATA;
    const cnpj = empresaData?.cnpj ?? DASHBOARD.NO_DATA;


    return {
        valor_da_medicao,
        faixas_consumo,
        tipo_unidade,
        condominio,
        endereco,
        empresa,
        numero,
        bloco,
        email,
        cnpj,
        logo,
    };
}
