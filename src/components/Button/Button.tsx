import classes from './Button.module.scss';

interface IProps {
  text: string;
  bgColor: string;
  action: () => void;
}

const Button: React.FC<IProps> = ({ text, bgColor, action }) => (
  <button
    onClick={() => {
      action();
    }}
    className={classes.Btn}
    style={{ backgroundColor: `${bgColor}` }}
  >
    {text}
  </button>
);

export default Button;
