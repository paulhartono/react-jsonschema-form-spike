import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RJSFSchema,
  UiSchema,
  WidgetProps,
  RegistryWidgetsType,
} from "@rjsf/utils";

export const TextWidget = function (props: WidgetProps) {
  return (
    <Input
      className="custom"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};
