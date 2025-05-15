'use client';

import GenericCard from '@/components/ui/GenericCard';
import styles from "./ListCards.module.css";

export default function ListCards({ cards = [] }) {
    return (
        <div className={styles.cardsInfo}>
            {cards.map((card) => (
                <GenericCard
                    customColor={card.customColor}
                    field1Label={card.label1}
                    field1Value={card.value1}
                    field2Label={card.label2}
                    field2Value={card.value2}
                    field3Label={card.label3}
                    field3Value={card.value3}
                    infoText={card.infoText}
                    title={card.title}
                    color={card.color}
                    icon={card.icon}
                    key={card.id}
                />
            ))}
        </div>
    );
}