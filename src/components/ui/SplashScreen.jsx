'use client';

import { useEffect, useState } from 'react';
import { LogIn, ArrowRight } from 'lucide-react';
import styles from './SplashScreen.module.css';

export default function SplashScreen({
    logoSrc = '/logo.png',
    logoAlt = 'Logo',
    appName = 'Sistema',
    duration = 2000, // Duração total da animação em ms
    theme = 'light', // light ou dark
    onComplete = () => { },
}) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('entering'); // entering, loaded, exiting, completed

    useEffect(() => {
        // Calcula o intervalo baseado na duração desejada
        // A duração total será aproximadamente o valor da prop duration
        const intervalTime = Math.floor(duration / 100);

        // Simulação do progresso
        const interval = setInterval(() => {
            setProgress(prev => {
                // Acelera no início, desacelera no final, mas mantém o ritmo proporcional à duração
                const increment = prev < 30 ? 1.5 : prev > 70 ? 0.5 : 1;
                const newProgress = Math.min(100, prev + increment);

                if (newProgress >= 100 && phase === 'entering') {
                    clearInterval(interval);
                    setPhase('loaded');

                    // Aguarda um pouco antes de iniciar a animação de saída
                    setTimeout(() => {
                        setPhase('exiting');

                        // Finaliza após a animação de saída
                        setTimeout(() => {
                            setPhase('completed');
                            onComplete();
                        }, 800);
                    }, 400);
                }

                return newProgress;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [phase, onComplete, duration]);

    // Se já completou, não renderiza nada
    if (phase === 'completed') {
        return null;
    }

    return (
        <div className={`${styles.splashScreen} ${styles[theme]} ${styles[phase]}`}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    {logoSrc ? (
                        <img src={logoSrc} alt={logoAlt} className={styles.logo} />
                    ) : (
                        <LogIn className={styles.defaultLogo} />
                    )}
                </div>

                <h1 className={styles.appName}>{appName}</h1>

                <div className={styles.progressContainer}>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className={styles.progressDetails}>
                        <span className={styles.progressText}>
                            {phase === 'loaded' ? 'Pronto' : 'Carregando'}
                        </span>
                        <span className={styles.progressPercentage}>
                            {phase === 'loaded' ? (
                                <ArrowRight className={styles.readyIcon} />
                            ) : (
                                `${Math.round(progress)}%`
                            )}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.backgroundElements}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>
        </div>
    );
}