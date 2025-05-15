'use client';

import { useImages } from '@/app/panel/hooks/useImages';
import ImageCard from '@/components/ui/ImageCard';
import Loading from '@/components/ui/Loading';
import styles from './Images.module.css';

export default function ImageSection({ tipoConsumo }) {
    const { loading, aguaImageCards, gasImageCards } = useImages()

    const imageCards = tipoConsumo ? gasImageCards : aguaImageCards;

    if (loading) {
        return <Loading fullPage text="Carregando..." />
    };

    return (
        <div className={styles.imagesContainer}>
            {imageCards.map((imageCard, index) => (
                <ImageCard
                    key={index}
                    src={imageCard.src}
                    title={imageCard.title}
                    description={imageCard.description} />
            ))}
        </div>
    );
}