import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  //   icon: IconType | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  disabled,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        className={`rounded-lg p-3 ${small ? "w-[250px]" : "w-full"} ${
          outline ? "border text-black" : "bg-black text-white"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
