import cn from "@/lib/cn";
import React, { FormHTMLAttributes } from "react";
export default React.forwardRef(function AddActionForm(
  props: FormHTMLAttributes<HTMLFormElement>,
  ref: React.Ref<HTMLFormElement>
) {
  const { className, children, ...rest } = props;

  return (
    <form {...rest} className={cn("flex flex-col gap-6", className)} ref={ref}>
      {children}
    </form>
  );
});
