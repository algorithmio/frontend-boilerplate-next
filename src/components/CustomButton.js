import React, { useState } from "react";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const CustomButton = ({
  onClick,
  children,
  icon,
  variant = "filled",
  isFillOnHover = false,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  const isCreateSection = children === "Create Section";

  return (
    <Button
      leftSection={
        icon === "none" ? undefined : icon || <IconPlus stroke={3} size={14} />
      }
      variant={variant}
      onClick={onClick}
      onMouseEnter={isFillOnHover ? () => setHovered(true) : undefined}
      onMouseLeave={isFillOnHover ? () => setHovered(false) : undefined}
      size={isCreateSection ? "xs" : "sm"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
