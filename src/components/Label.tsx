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
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Custom font color
   */
  fontColor?: string;
}


export const Label = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}: LabelProps ) => {
  return (
    <span 
      className={`label ${ size } text-${ color}`}
      style={{ color: fontColor}}
    >
        { allCaps ? label.toUpperCase()  : label }
    </span>
  )
}
