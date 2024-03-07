import cn from "@/lib/cn";
import React, { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export default React.forwardRef(function Input(
  props: InputHTMLAttributes<HTMLInputElement> & {
    error: FieldError | undefined;
  },
  ref: React.Ref<HTMLInputElement>
) {
  const { className, error, ...rest } = props;
  return (
    <div className="flex flex-col gap-1">
      <input
        {...rest}
        className={cn(
          "px-4 py-2 rounded-md shadow-md border-[1px] border-gray-100",
          className
        )}
        ref={ref}
      />
      {error ? (
        <span className="text-red-500 text-sm">{error.message}</span>
      ) : (
        ""
      )}
    </div>
  );
});
