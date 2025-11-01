import { ButtonHTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import Link, { LinkProps } from "next/link";

interface BaseButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

interface ButtonLinkProps extends LinkProps {
  href: string;
}

interface ButtonButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> {}

type ButtonProps = BaseButtonProps & (ButtonLinkProps | ButtonButtonProps);

export default function Button(props: ButtonProps) {
  const { variant = "primary", children, className, ...restProps } = props;

  const baseStyles = "cursor-pointer px-6 py-2 font-semibold transition-colors duration-200";
  const variantStyles = {
    primary: "border-b-[5px] border-b-red-950 bg-red-800 text-white hover:bg-red-900",
    secondary: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  };

  if ("href" in props) {
    const { href, ...linkProps } = restProps as ButtonLinkProps;
    return (
      <Link href={href} {...linkProps} className={cx(baseStyles, "no-underline", variantStyles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...props} className={cx(baseStyles, variantStyles[variant], className)}>
      {children}
    </button>
  );
}
