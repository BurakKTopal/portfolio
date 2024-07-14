

export const getAdditionalLayout = (theme) => {
    document.documentElement.className = theme;

    const rootStyles = getComputedStyle(document.documentElement);
    return {
        xaxis: {
            title: 'Course',
            color: rootStyles.getPropertyValue('--text-color').trim(),
        },
        yaxis: {
            title: 'Grades',
            color: rootStyles.getPropertyValue('--text-color').trim(),
        },
        plot_bgcolor: rootStyles.getPropertyValue('--webpage-background-color').trim(),
        paper_bgcolor: rootStyles.getPropertyValue('--notepad-background-color').trim(),
        font: {
            color: rootStyles.getPropertyValue('--text-color').trim(),
        },
        hoverlabel: {
            bgcolor: rootStyles.getPropertyValue('--box-border-color').trim(),
            font: {
                color: rootStyles.getPropertyValue('--text-color').trim(),
            }
        }
    };
};










