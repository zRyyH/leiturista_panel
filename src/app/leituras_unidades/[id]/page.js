'use client';

import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants/global';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from "./page.module.css";

// COMPONENTS
import LoggedUserLayout from "@/components/layout/LoggedUserLayout";
import LeituraForm from '@/components/forms/LeituraForm';
import Card from '@/components/ui/Card';

// SERVICES
import leiturasUnidadesService from "@/services/leituras_unidades";
import { uploadFile } from "@/services/upload";

// CONTEXTS
import { useNotification } from "@/contexts/NotificationContext";


export default function Home() {
    // STATES
    const [leitura, setLeitura] = useState([]);

    // HOOKS
    const { showNotification } = useNotification();
    const params = useParams();
    const router = useRouter();
    const id = params.id;


    useEffect(() => {
        async function carregar() {
            const res = await leiturasUnidadesService.getById(id)
            setLeitura(res);
        }

        carregar();
    }, []);

    const handleSubmit = async (formState) => {
        try {
            const fileResponse = await uploadFile(formState.file);
            await leiturasUnidadesService.updateById(id, {
                foto_id: fileResponse.id,
                leitura: formState.leitura,
                status: 'concluido',
            });

            showNotification({
                type: 'success',
                title: 'Sucesso',
                message: SUCCESS_MESSAGES.DATA_SAVED,
                duration: 2000,
                onClose: () => {
                    router.push('/leituras_unidades');
                }
            });

        } catch (error) {
            showNotification({
                type: 'error',
                title: 'Falha',
                message: ERROR_MESSAGES.INVALID_DATA,
                duration: 3000
            });
        }
    };

    const meusDados = [
        { label: 'condominio', value: leitura.medidor_unidade_id?.unidade_id.condominio_id.nome },
        { label: 'bloco', value: leitura.medidor_unidade_id?.unidade_id.bloco },
        { label: 'unidade', value: leitura.medidor_unidade_id?.unidade_id.id },
        { label: 'codigo do medidor', value: leitura.medidor_unidade_id?.codigo },
        { label: 'data da leitura', value: leitura.leitura_condominio_id?.data_da_leitura },
        { label: 'invertido', value: leitura.medidor_unidade_id?.invertido ? 'Sim' : 'Não' },
    ];

    return (
        <LoggedUserLayout>
            <div className={styles.page}>
                <Card
                    title="Informações"
                    subtitle="Dados da leitura"
                    data={meusDados}
                    variant="outlined"
                    size="large"
                    hoverable={true}
                />

                <LeituraForm leitura={leitura} onSubmit={handleSubmit} />
            </div>
        </LoggedUserLayout>

    );
}