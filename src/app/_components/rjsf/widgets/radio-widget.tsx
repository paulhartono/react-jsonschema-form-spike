import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { WidgetProps } from "@rjsf/utils";

export const RadioWidget = function (props: WidgetProps) {
  return (
    <RadioGroup defaultValue="comfortable">
      {props.options.enumOptions?.map((opt, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <RadioGroupItem value={opt.label} id={opt.value} />
          <Label htmlFor={opt.value}>{opt.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};
