'use client';

import LoggedUserLayout from "@/components/layout/LoggedUserLayout";
import Consumption from "@/app/dashboard/components/Consumption";
import SubHeader from '@/components/sections/SubHeader';
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
    const [typeConsumo, setTypeConsumo] = useState(false);
    
    return (
        <LoggedUserLayout>
            <div className={styles.page}>
                <SubHeader setTypeConsumo={setTypeConsumo} />
                <Consumption typeConsumo={typeConsumo} />


                {/* 
                <div className={styles.infoContainer}>
                    {typeConsumo ?
                        <HydrometerImages
                            titleCard='Fotos'
                            descriptionCard='Fotos dos Hidrometros'
                            src1={consumosUnidade[0]?.leitura_agua_fria_id?.foto_id.id}
                            src2={consumosUnidade[0]?.leitura_agua_fria_anterior_id?.foto_id.id}
                            src3={consumosUnidade[0]?.leitura_agua_quente_id?.foto_id.id}
                            src4={consumosUnidade[0]?.leitura_agua_quente_anterior_id?.foto_id.id}
                            title1='Leitura Atual'
                            title2='Leitura Anterior'
                            title3='Leitura Atual'
                            title4='Leitura Anterior'
                            description1='Água Fria'
                            description2='Água Fria'
                            description3='Água Quente'
                            description4='Água Quente' /> :
                        <HydrometerImages
                            titleCard='Fotos'
                            descriptionCard='Fotos dos Hidrometros'
                            src1={consumosUnidade[0]?.leitura_agua_fria_id?.foto_id.id}
                            src2={consumosUnidade[0]?.leitura_agua_fria_anterior_id?.foto_id.id}
                            title1='Leitura Atual'
                            title2='Leitura Anterior'
                            description1='Gás'
                            description2='Gás' />}

                    {typeConsumo ?
                        <MetricsGas
                            dadosConsumos={consumosUnidade} /> :
                        <MetricsAgua
                            dadosConsumos={consumosUnidade} />
                    }
                </div>

                <Spacer
                    title="Histórico"
                    titleAlign="center"
                    size="md" />

                <Table
                    columns={minhasColunas}
                    data={extrairListaConsumo(consumosUnidade)} /> */}
            </div>

        </LoggedUserLayout>
    );
};