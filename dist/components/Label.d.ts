/// <reference types="react" />
import './label.css';
export interface LabelProps {
    /**
     * This is the message to show on the label
     */
    label: string;
    /**
     * Text size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Show label in all caps
     */
    allCaps?: boolean;
    /**
     * Basic font colors
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
     * Custom background color
     */
    backgroundColor?: string;
}
export declare const Label: ({ label, size, allCaps, color, fontColor, backgroundColor }: LabelProps) => JSX.Element;
