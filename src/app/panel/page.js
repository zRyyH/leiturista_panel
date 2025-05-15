'use client';

import { useState } from 'react';
import styles from "./page.module.css";

import LoggedUserLayout from "@/components/layout/LoggedUserLayout";
import SubHeader from '@/components/sections/SubHeader';

import Consumption from "@/app/panel/components/Consumption";
import History from '@/app/panel/components/History';
import Metric from '@/app/panel/components/Metric';
import Images from '@/app/panel/components/Images';

import Spacer from '@/components/ui/Spacer';

export default function Home() {
    const [typeConsumo, setTypeConsumo] = useState(false);

    return (
        <LoggedUserLayout>
            <div className={styles.page}>
                {/* <SubHeader setTypeConsumo={setTypeConsumo} /> */}
                <Spacer title='Consumos' />
                <Consumption tipoConsumo={typeConsumo} />
                <Spacer title='Fotos' />
                <Images tipoConsumo={typeConsumo} />
                <Spacer title='Metricas' />
                <Metric tipoConsumo={typeConsumo} />
                <Spacer title='Historicos' />
                <History tipoConsumo={typeConsumo} />
            </div>
        </LoggedUserLayout>
    );
};