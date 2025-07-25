const createDefaultTheme = () => {
    const colors = {
        black: "#000",
        white: "#fff",
        gray: "#f6f6f6",
        primary: "#333",
        accentMain: "#fc9b27",
        accentMainDark: "#fc7427",
        accentGreen: "#88aa4d",
        accentGreenLight: "#e1edce",
        accentRed: "#f75531",
        accentRedLight: "#f8ddd7",
        accentBlue: "#d8ecfe",
    };

    return {
        colors: {
            ...colors,
            button: {
                primary: colors.accentMain,
                primaryHover: colors.accentMainDark,
                primaryActive: colors.accentMainDark,
            },
            text: {
                primary: colors.primary,
                inverted: colors.white,
            },
        },
        fonts: {
            family: '"Inter", "Arial", sans-serif',
        },
        fontSizes: {
            base: "18px",
        },
        spacing: {
            medium: "20px",
        },
        page: {
            width: "1280px",
            padding: "90px",
        },
        headerHeight: "80px",
        footerHeight: "80px",
    }
};

export {createDefaultTheme};
