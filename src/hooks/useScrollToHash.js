import { useEffect } from 'react';

function useScrollToHash(elementId, quoteFinished) {
    useEffect(() => {
        if (quoteFinished) {
            const hash = window.location.hash;
            if (hash === `#${elementId}`) {
                const scrollToElement = () => {
                    const element = document.getElementById(elementId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                };

                // Delay the scroll to account for any animations or lazy loading
                setTimeout(scrollToElement, 1000);
            }
        }
    }, [quoteFinished]);
}

export default useScrollToHash;