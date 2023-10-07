import { GetColorName } from 'hex-color-to-color-name';
export function hexToColorName(hex: string) {
    const color = GetColorName(hex);
    if (color.split(' ').length > 1) {
        return color.split(' ')[1];
    }
    return color;
}