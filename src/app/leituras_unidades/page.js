'use client';

import { useEffect, useState } from 'react';
import styles from "./page.module.css";
import LoggedUserLayout from "@/components/layout/LoggedUserLayout";
import TituloCard from "@/components/ui/TituloCard";
import leiturasUnidadesService from '@/services/leituras_unidades';
// import Select from '@/components/ui/Select';
import Table from "@/components/ui/Table";


export default function Home() {
    const [leituras, setLeituras] = useState([]);

    const columns = [
        { key: "leitura_condominio_id.condominio_id.nome", label: "condomínio" },
        { key: "medidor_unidade_id.unidade_id.bloco", label: "bloco" },
        { key: "medidor_unidade_id.unidade_id.id", label: "unidade" },
        { key: "medidor_unidade_id.codigo", label: "medidor" },
    ];

    useEffect(() => {
        async function carregar() {
            setLeituras(await leiturasUnidadesService.getAll());
        }

        carregar();
    }, []);

    const handleChange = (selectedOption) => {
        console.log('Opção selecionada:', selectedOption);
    };

    const options = () => {
    }

    // Exemplo de uso
    // const optionsa = [
    //     { value: 'option1', label: 'Opção 1' },
    //     { value: 'option2', label: 'Opção 2' },
    //     { value: 'option3', label: 'Opção 3' },
    // ];

    return (
        <LoggedUserLayout>
            <div className={styles.page}>
                <TituloCard
                    variante="padrao"
                    titulo="Leituras Pendentes"
                    descricao="Listagem de Leituras pendentes !"
                />

                {/* <Select
                    options={options}
                    placeholder="Selecione um condomínio"
                    onChange={handleChange}
                    variant="default"
                    size="medium"
                    zIndex={9999999999999}
                />

                <Select
                    options={options}
                    placeholder="Selecione um bloco"
                    onChange={handleChange}
                    variant="default"
                    size="medium"
                    zIndex={9999999999999}
                /> */}

                <Table columns={columns} data={leituras} />

            </div>
        </LoggedUserLayout>
    );
}