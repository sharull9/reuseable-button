import  AbcIcon  from "@mui/icons-material/Abc";


function Button({ value, variant, shadow, disabled, StartIcon, EndIcon, size, color }) {
  if (variant === undefined) {
    variant = "";
  }
  if (shadow === undefined) {
    shadow = "";
  }
  if (size === undefined) {
    size = "";
  }
  if (color === undefined) {
    color = "";
  }
  return (
    <button
      className={`${variant} ${shadow} ${size} ${color}`}
      disabled={disabled ? true : false}
    >
      {StartIcon === undefined ? "" : <StartIcon />}
      {value}
      {EndIcon === undefined ? "" : <EndIcon />}
    </button>
  );
}

export default Button;
