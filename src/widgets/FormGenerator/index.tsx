import { Form, FormInstance } from "antd";
import React, { FC } from "react";
import FormGrid from "./FormGrid";

type Props = {
  creationForm: CreationForm;
  form: FormInstance<any>;
  isVertical?: boolean;
  triggersNames?: string[] | string;
  onChangeField?: (val: string) => void;
};

const FormGenerator: FC<Props> = (props) => {
  const { creationForm, form, isVertical, triggersNames, onChangeField } =
    props;

  return (
    <Form form={form} layout={isVertical ? "vertical" : "horizontal"}>
      {creationForm.map((item) => (
        <FormGrid
          onChange={
            triggersNames?.includes(item.name) ? onChangeField : undefined
          }
          key={item.name}
          isRequired
          {...item}
        />
      ))}
    </Form>
  );
};

export default FormGenerator;
