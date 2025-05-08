import FormCheckbox from "@/shared/FormCheckbox";
import { GridItem } from "@/shared/types";
import { Col, Form, Radio, Row } from "antd";
import React, { FC, useMemo } from "react";

type Props = {
  items: GridItem[];
  //   value: string;
  itemsInLine?: number;
  name: string;
  label?: string;
  isRequired?: boolean;
  onChange?: (val: string) => void;
};

const FormGrid: FC<Props> = React.memo((props) => {
  const { items, name, label, isRequired, onChange, itemsInLine = 4 } = props;

  const colWidth = useMemo(() => {
    const big = 24 / itemsInLine;
    const middle = 24 / Math.floor(itemsInLine / 2);
    return { big, middle };
  }, [itemsInLine]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={isRequired ? [{ required: true, message: "" }] : []}
    >
      <Radio.Group
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      >
        <Row gutter={[30, 15]}>
          {items.map((el, id) => (
            <Col
              key={id}
              xs={24}
              sm={12}
              md={colWidth.middle}
              lg={colWidth.big}
            >
              <FormCheckbox value={el.value}>{el.name}</FormCheckbox>
            </Col>
          ))}
        </Row>
      </Radio.Group>
    </Form.Item>
  );
});

export default FormGrid;
