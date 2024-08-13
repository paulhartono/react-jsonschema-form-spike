"use client";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FieldTemplateProps } from "@rjsf/utils";
import { Icons } from "../../icons";

export function FieldTemplate(props: FieldTemplateProps) {
  const {
    id,
    classNames,
    style,
    label,
    help,
    required,
    description,
    rawDescription,
    errors,
    children,
    displayLabel,
  } = props;
  return (
    <div className={`${classNames} mb-3 pb-5`} style={style}>
      {displayLabel && <span>{label}</span>}
      {required && <mark className="bg-background">*</mark>}
      {rawDescription && displayLabel && (
        <Tooltip>
          <TooltipTrigger>
            <Icons.info className="ml-2 h-5 w-5 fill-slate-500 text-white" />
          </TooltipTrigger>
          <TooltipContent>{description}</TooltipContent>
        </Tooltip>
      )}
      <div className="pt-2">{children}</div>

      {errors}
      {help}
    </div>
  );
}
