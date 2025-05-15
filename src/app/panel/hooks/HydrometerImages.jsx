'use client';

import styles from "./HydrometerImages.module.css";
import ImageCard from '@/components/ui/ImageCard';
import { DIRECTUS } from "@/core/config/global";

export default function HydrometerImages({ cards = [] }) {
    return (
        <div className={styles.imageCard}>
            {cards.map((card) => (
                <ImageCard
                    key={card.id}
                    src={DIRECTUS.ASSETS_URL + card.src}
                    description={card.description}
                    onClick={card.onClick}
                    title={card.title}
                />
            ))}
        </div>
    );
}