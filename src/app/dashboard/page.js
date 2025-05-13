'use client';

import { useState } from 'react';
import styles from "./page.module.css";

import LoggedUserLayout from "@/components/layout/LoggedUserLayout";
import SubHeader from '@/components/sections/SubHeader';

import Consumption from "@/app/dashboard/components/Consumption";
import Metric from '@/app/dashboard/components/Metric';


export default function Home() {
    const [typeConsumo, setTypeConsumo] = useState(false);

    return (
        <LoggedUserLayout>
            <div className={styles.page}>
                <SubHeader setTypeConsumo={setTypeConsumo} />
                <Consumption tipoConsumo={typeConsumo} />
                <Metric />
            </div>
        </LoggedUserLayout>
    );
};