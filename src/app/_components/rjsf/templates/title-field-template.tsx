import { RJSFSchema, TitleFieldProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

export function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, required, title } = props;
  return (
    <header id={id} className="pb-4">
      <h1 className="text-2xl font-bold text-blue-400">{title}</h1>
      {required && <mark>*</mark>}
    </header>
  );
}
