import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "BUTTON" | "LINK";
  href?: string;
  className?: string;
};

const GradientButton = ({ children, type, href, className }: Props) => {
  const gradient =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]";

  switch (type) {
    case "BUTTON":
      return (
        <div className={gradient}>
          <Button className={cn(className, "rounded-xl")}></Button>
        </div>
      );

    case "LINK":
      return <div className={gradient}></div>;

    default:
      return null;
  }
};

export default GradientButton;
