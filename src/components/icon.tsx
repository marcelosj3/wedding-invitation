import { icons } from "lucide-react";
import React from "react";

type IconName = keyof typeof icons;
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
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      onClick={onClick}
      className={className}
    />
  );
}
