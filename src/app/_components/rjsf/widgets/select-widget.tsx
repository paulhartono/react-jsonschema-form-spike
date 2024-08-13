"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WidgetProps } from "@rjsf/utils";
import { useState } from "react";

export const SelectWidget = function (props: WidgetProps) {
  const [value, setValue] = useState();
  console.log("value = ", value);

  const changeSelectValue = () => {
    alert("here");
  };

  if (props.name === "alt-datetime")
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {props.options.enumOptions?.map((opt) => (
            <SelectItem value={opt.label}>{opt.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  else {
    return (
      <Select value={value} onValueChange={() => changeSelectValue}>
        <SelectTrigger>
          <SelectValue placeholder={props.placeholder}>{value}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {props.options.enumOptions?.map((opt, index) => (
            <SelectItem key={index} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
};
