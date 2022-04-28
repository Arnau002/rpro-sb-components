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
  /**
   * Custom background color
   */
  backgroundColor?: string
}


export const Label = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent'
}: LabelProps ) => {
  return (
    <span 
      className={`label ${ size } text-${ color}`}
      style={{ color: fontColor, backgroundColor }}
    >
        { allCaps ? label.toUpperCase()  : label }
    </span>
  )
}

export default Label;