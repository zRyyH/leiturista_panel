'use client';

import { useConsumoUnidade } from '@/app/panel/hooks/useProfile';
import ToggleButton from '@/components/ui/ToggleButton';
import GenericCard from '@/components/ui/GenericCard';
import { DIRECTUS } from '@/core/config/global';
import InfoCard from '@/components/ui/InfoCard';
import { Flame, Droplet } from 'lucide-react';
import styles from './SubHeader.module.css';

export default function SubHeader({ setTypeConsumo }) {
    const { profile } = useConsumoUnidade();

    return (
        <div className={styles.subHeaderContainer}>
            <InfoCard
                image={`${DIRECTUS.ASSETS_URL + profile?.logo}`}
                valor1={profile?.empresa}
                valor2={profile?.email}
                valor3={profile?.endereco}
                titulo1="Empresa"
                titulo2="Email"
                titulo3="Endereço"
                onClick={() => alert(`${DIRECTUS.ASSETS_URL + profile?.logo}`)}
            />

            <GenericCard
                title="Informações do Cliente"
                field1Label="Residencial"
                field1Value={profile?.condominio}
                field2Label="Bloco"
                field2Value={profile?.bloco}
                field3Label="Unidade"
                field3Value={profile?.numero}
                icon={'Building'}
                customColor='black'
            />

            <ToggleButton
                onChange={(isActive) => setTypeConsumo(isActive)}
                inactiveIcon={Droplet}
                inactiveLabel="Água"
                activeIcon={Flame}
                activeLabel="Gás"
                variant="outline"
            />
        </div>
    );
}