export interface IColorPallet{
    readonly x: string,
    readonly light: string,
    readonly dark: string,
    readonly text: string
} 

export const colors = {
    prim: {
        x: "#2e7d32",
        dark: "#005005",
        light: "#60ad5e",
        text: "#ffffff"
    } as IColorPallet,

    sec: {
        x: "#d32f2f",
        dark: "#9a0007",
        light: "#ff6659",
        text: "#ffffff"
    } as IColorPallet,

    info: {
        x: "#9575cd",
        dark: "#65499c",
        light: "#c7a4ff",
        text: "#000000"
    },

    success: "#8DED8E",
    danger: "#FA5555",

    white: "#ffffff",
    gray: {
        x: "#bdbdbd",
        dark: "#757575",
        light: "#f1f1f1",
        text: "#ffffff"
    } as IColorPallet,
    black: "#121212"
};