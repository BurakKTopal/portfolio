

export const getAdditionalLayout = (theme) => {
    document.documentElement.className = theme;

    const rootStyles = getComputedStyle(document.documentElement);
    return {
        margin: {
            r: 10,
        },
        xaxis: {
            title: 'Course',
            color: rootStyles.getPropertyValue('--text-color').trim(),
            font: {
                family: rootStyles.getPropertyValue('--root-font-family').trim(),
                size: 16
            },
        },
        yaxis: {
            title: 'Grades',
            font: {
                family: rootStyles.getPropertyValue('--root-font-family').trim(),
                size: 16
            },
            color: rootStyles.getPropertyValue('--text-color').trim(),
        },
        autosize: true,
        width: null,
        plot_bgcolor: rootStyles.getPropertyValue('--webpage-background-color').trim(),
        paper_bgcolor: rootStyles.getPropertyValue('--notepad-background-color').trim(),
        font: {
            color: rootStyles.getPropertyValue('--text-color').trim(),
            family: rootStyles.getPropertyValue('--root-font-family').trim(),
            size: 16
        },
        hoverlabel: {
            bgcolor: rootStyles.getPropertyValue('--box-border-color').trim(),
            font: {
                color: rootStyles.getPropertyValue('--text-color').trim(),
                family: rootStyles.getPropertyValue('--root-font-family').trim(),
                size: 16
            }
        }
    };
};










