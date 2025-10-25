import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const TitleBanner = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`text-[30px] lg:text-4xl font-bold mb-4 leading-tight font-kazimir ${className}`}
    >
      {children}
    </h1>
  );
};

export const TitleForm = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`text-3xl font-kazimir text-black-medium text-center font-stretch-semi-condensed ${className}`}
    >
      {children}
    </h2>
  );
};

export const P = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-[14px] lg:text-[16px] ${className}`}>{children}</p>
  );
};
