import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { onClick, className, children } = props;

  return (
    <button
      onClick={onClick}
      className={
        "py-4 px-10 w-full bg-white/10 hover:bg-white/50 rounded-md transition-all " +
        className
      }
    >
      {children}
    </button>
  );
}
