const initialThemeState = { theme: 'light' };

export const themeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case 'SWITCH_THEME':
            return { ...state, theme: action.payload }; // Payload will be 'light' or 'dark'
        default:
            return state;
    }
};
