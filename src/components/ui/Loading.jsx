import styles from './Loading.module.css'

const Loading = ({
    fullPage = false,
    size = 'medium',
    text = '',
    color = 'primary',
    className = ''
}) => {
    const containerClass = [
        styles.container,
        fullPage && styles.fullPage,
        className
    ].filter(Boolean).join(' ')

    const spinnerClass = [
        styles.spinner,
        styles[size],
        styles[color]
    ].filter(Boolean).join(' ')

    return (
        <div className={containerClass}>
            <div className={styles.spinnerWrapper}>
                <div className={spinnerClass}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
                {text && (
                    <p className={styles.text}>{text}</p>
                )}
            </div>
        </div>
    )
}

export default Loading