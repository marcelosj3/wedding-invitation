import React from "react";
import * as icons from "react-icons/pi";

const iconPrefix = "Pi"
export type IconName = keyof typeof icons extends `${typeof iconPrefix}${infer Name}` ? Name : never;

type Props = {
  name: IconName;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  className?: string;
}

export const Icon = ({
  name,
  onClick,
  className,
}: Props) => {
  const IconComponent = icons[`${iconPrefix}${name}`];

  return (
    <IconComponent
      onClick={onClick}
      className={className}
    />
  );
}
