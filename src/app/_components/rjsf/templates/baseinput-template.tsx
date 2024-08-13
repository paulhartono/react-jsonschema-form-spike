import { ChangeEvent, FocusEvent } from "react";
import { getInputProps, RJSFSchema, BaseInputTemplateProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BaseInputTemplate(props: BaseInputTemplateProps) {
  const {
    schema,
    id,
    options,
    label,
    value,
    type,
    placeholder,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onChangeOverride,
    onBlur,
    onFocus,
    rawErrors,
    hideError,
    uiSchema,
    registry,
    formContext,
    ...rest
  } = props;
  const onTextChange = ({
    target: { value: val },
  }: ChangeEvent<HTMLInputElement>) => {
    // Use the options.emptyValue if it is specified and newVal is also an empty string
    onChange(val === "" ? options.emptyValue || "" : val);
  };
  const onTextBlur = ({
    target: { value: val },
  }: FocusEvent<HTMLInputElement>) => onBlur(id, val);
  const onTextFocus = ({
    target: { value: val },
  }: FocusEvent<HTMLInputElement>) => onFocus(id, val);

  const inputProps = { ...rest, ...getInputProps(schema, type, options) };

  return (
    <>
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        autoFocus={autofocus}
        onChange={onChangeOverride || onTextChange}
        onBlur={onTextBlur}
        onFocus={onTextFocus}
        {...inputProps}
      />
    </>
  );
}
