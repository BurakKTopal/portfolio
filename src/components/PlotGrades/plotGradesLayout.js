

export const getAdditionalLayout = (theme) => {
    document.documentElement.className = theme;

    const rootStyles = getComputedStyle(document.documentElement);
    return {
        margin: {
            r: 10,
            b: 20,
            l: 40
        },
        xaxis: {
            color: rootStyles.getPropertyValue('--text-color').trim(),
            font: {
                family: rootStyles.getPropertyValue('--root-font-family').trim(),
                size: 12
            },
        },
        yaxis: {
            tickformat: '0%', // Format the ticks as percentages
            font: {
                family: rootStyles.getPropertyValue('--root-font-family').trim(),
                size: 12
            },
            // range: [0.7, 1.01],
            color: rootStyles.getPropertyValue('--text-color').trim(),
        },
        autosize: true,
        width: null,
        plot_bgcolor: rootStyles.getPropertyValue('--webpage-background-color').trim(),
        paper_bgcolor: rootStyles.getPropertyValue('--notepad-background-color').trim(),
        font: {
            color: rootStyles.getPropertyValue('--text-color').trim(),
            family: rootStyles.getPropertyValue('--root-font-family').trim(),
            size: 13
        },
        hoverlabel: {
            bgcolor: rootStyles.getPropertyValue('--box-border-color').trim(),
            font: {
                color: rootStyles.getPropertyValue('--text-color').trim(),
                family: rootStyles.getPropertyValue('--root-font-family').trim(),
                size: 14
            }
        }
    };
};










