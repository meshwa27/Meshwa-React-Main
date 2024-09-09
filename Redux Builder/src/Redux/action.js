export const ADD = "ADD";
export const REDUCE = "REDUCE";
export const SWITCH_THEME = "SWITCH_THEME";

export const handleAdd = () => ({
    type: ADD,
    payload: 1
});

export const handleReduce = () => ({
    type: REDUCE,
    payload: 1
});

export const handleTheme = (payload) => ({
    type: SWITCH_THEME,
    payload
});
