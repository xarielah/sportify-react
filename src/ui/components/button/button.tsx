import cn from "@/lib/cn";
import React, { ButtonHTMLAttributes } from "react";

export default React.forwardRef(function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) {
  const { children, className } = props;
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "bg-zinc-900 text-gray-200 text-sm px-4 py-1 rounded-md ease-in-out duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
});
