import React from "react";
import {
  getSubmitButtonOptions,
  RJSFSchema,
  SubmitButtonProps,
} from "@rjsf/utils";

import { Button } from "@/components/ui/button";

const schema: RJSFSchema = {
  type: "string",
};

export function SubmitButton(props: SubmitButtonProps) {
  const { uiSchema } = props;
  const { norender } = getSubmitButtonOptions(uiSchema);
  if (norender) {
    return null;
  }
  return (
    <Button type="submit" {...props}>
      {props.uiSchema?.["ui:submitButtonOptions"]?.submitText ?? "Submit"}
    </Button>
  );
}
