"use client";

import Form from "@rjsf/core";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import testSchema from "@/jsonform-schema/test-jsonschema.json";
import testUiSchema from "@/jsonform-schema/test-uischema.json";
import registrationSchema from "@/jsonform-schema/registration-jsonschema.json";
import registrationUiSchema from "@/jsonform-schema/registration-uischema.json";

import { BaseInputTemplate } from "@/app/_components/rjsf/templates/baseinput-template";
import { FieldTemplate } from "@/app/_components/rjsf/templates/field-template";
import { ArrayFieldTemplate } from "@/app/_components/rjsf/templates/arrayfield-template";
import { ObjectFieldTemplate } from "@/app/_components/rjsf/templates/object-field-template";
import { ArrayFieldItemTemplate } from "@/app/_components/rjsf/templates/arrayfielditem-template";
import { SelectWidget } from "@/app/_components/rjsf/widgets/select-widget";
import { TextWidget } from "@/app/_components/rjsf/widgets/text-widget";
import { TitleFieldTemplate } from "@/app/_components/rjsf/templates/title-field-template";
import { TextareaWidget } from "@/app/_components/rjsf/widgets/textarea-widget";
import { RadioWidget } from "@/app/_components/rjsf/widgets/radio-widget";
import { SubmitButton } from "@/app/_components/rjsf/templates/submit-button";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function WbaPage() {
  const schema: RJSFSchema = testSchema as RJSFSchema;
  const uiSchema: UiSchema = testUiSchema as UiSchema;

  const onSubmit = ({ formData }: any, e: any) => {
    console.log("Data submitted: ", formData);
  };

  return (
    <div className="flex-auto rounded-lg bg-background p-4">
      <h1 className="text-2xl font-bold">Mini-CEX</h1>
      <TooltipProvider>
        <Form
          schema={schema}
          validator={validator}
          uiSchema={uiSchema}
          widgets={{ SelectWidget, TextWidget, TextareaWidget, RadioWidget }}
          templates={{
            FieldTemplate,
            ObjectFieldTemplate,
            ButtonTemplates: { SubmitButton },
          }}
          onSubmit={onSubmit}
        />
      </TooltipProvider>
    </div>
  );
}
