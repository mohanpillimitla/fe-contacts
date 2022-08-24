import { createTheme, responsiveFontSizes } from '@mui/material/styles';



const commonTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0080A2',
        },
        secondary: {
            main: '#ffffff',
        },
        thin: {
            main: '#EBF5F8',
        },
        warning: {
            main: '#DC1524',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: '#F4F5FA',
        },
    },
    typography: {
        h1: {
            fontSize: '3rem',
        },
        h2: {
            fontSize: '2.5rem',
        },
        h3: {
            fontSize: '1.9rem',
        },
        h4: {
            fontSize: '1.6rem',
        },
        h5: {
            fontSize: '1.2rem',
        },
        h6: {
            fontSize: '1rem',
        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: 'primary',
                    },
                    // '& .MuiInput-underline:after': {
                    // 	borderBottomColor: 'yellow',
                    // },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#0080A2',
                        },
                        '&:hover fieldset': {
                            borderColor: '#0080A2',
                        },
                        '&.Mui-disabled': {
                            pointerEvents: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#0080A2',
                        },
                    },
                },
            },
        },


        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '56px !important',
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Open Sans !important',
                    fontSize: 14,
                },
            },
        },
    },
});


const rootTheme = responsiveFontSizes(commonTheme, {
    factor: 3,
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
});

export default rootTheme;
