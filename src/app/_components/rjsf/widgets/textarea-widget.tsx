import { Textarea } from "@/components/ui/textarea";
import { WidgetProps } from "@rjsf/utils";

export const TextareaWidget = function (props: WidgetProps) {
  return (
    <>
      <Textarea
        placeholder={props.placeholder}
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
        className="w-full"
      />
    </>
  );
};
