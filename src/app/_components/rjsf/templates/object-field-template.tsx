import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ObjectFieldTemplateProps, RJSFSchema } from "@rjsf/utils";
import { Icons } from "../../icons";

export function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  return (
    <div className={props.title ? "border-b-2" : ""}>
      <header className="flex pb-4">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {props.description && (
          <Tooltip>
            <TooltipTrigger>
              <Icons.info className="ml-2 h-5 w-5 fill-slate-500 text-white" />
            </TooltipTrigger>
            <TooltipContent>{props.description}</TooltipContent>
          </Tooltip>
        )}
      </header>
      {props.required && <mark>*</mark>}

      {props.properties.map((element, index) => (
        <div className="property-wrapper" key={index}>
          {element.content}
        </div>
      ))}
    </div>
  );
}
