import { ArrayFieldTemplateItemType, RJSFSchema } from "@rjsf/utils";

export function ArrayFieldItemTemplate(props: ArrayFieldTemplateItemType) {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}
