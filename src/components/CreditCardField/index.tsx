import { ChangeEvent, FC } from "react";
import { useFormik } from "formik";

import ICreditCardFieldProps from "./props";
import { Wrapper, NumberField } from "./styles";

export const CreditCardField: FC<ICreditCardFieldProps> = () => {
  // TODO: remove if not used

  const { values, setFieldValue } = useFormik({
    onSubmit: () => {},
    initialValues: {
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      n5: 0,
      n6: 0,
      n7: 0,
      n8: 0,
      n9: 0,
      n10: 0,
      n11: 0,
      n12: 0,
      n13: 0,
      n14: 0,
      n15: 0,
      n16: 0,
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setFieldValue(
      name,
      e.currentTarget.value.substring(e.currentTarget.value.length - 1)
    );
  };

  return (
    <Wrapper>
      <NumberField
        name="n1"
        value={values.n1}
        onChange={(e) => onChange(e, "n1")}
        type="number"
      />
      <NumberField
        name="n2"
        value={values.n2}
        onChange={(e) => onChange(e, "n2")}
        type="number"
      />
      <NumberField
        name="n3"
        value={values.n3}
        onChange={(e) => onChange(e, "n3")}
        type="number"
      />
      <NumberField
        name="n4"
        value={values.n4}
        onChange={(e) => onChange(e, "n4")}
        type="number"
      />
      <NumberField
        name="n5"
        value={values.n5}
        onChange={(e) => onChange(e, "n5")}
        type="number"
      />
      <NumberField
        name="n6"
        value={values.n6}
        onChange={(e) => onChange(e, "n6")}
        type="number"
      />
      <NumberField
        name="n7"
        value={values.n7}
        onChange={(e) => onChange(e, "n7")}
        type="number"
      />
      <NumberField
        name="n8"
        value={values.n8}
        onChange={(e) => onChange(e, "n8")}
        type="number"
      />
      <NumberField
        name="n9"
        value={values.n9}
        onChange={(e) => onChange(e, "n9")}
        type="number"
      />
      <NumberField
        name="n10"
        value={values.n10}
        onChange={(e) => onChange(e, "n10")}
        type="number"
      />
      <NumberField
        name="n11"
        value={values.n11}
        onChange={(e) => onChange(e, "n11")}
        type="number"
      />
      <NumberField
        name="n12"
        value={values.n12}
        onChange={(e) => onChange(e, "n12")}
        type="number"
      />
      <NumberField
        name="n13"
        value={values.n13}
        onChange={(e) => onChange(e, "n13")}
        type="number"
      />
      <NumberField
        name="n14"
        value={values.n14}
        onChange={(e) => onChange(e, "n14")}
        type="number"
      />
      <NumberField
        name="n15"
        value={values.n15}
        onChange={(e) => onChange(e, "n15")}
        type="number"
      />
      <NumberField
        name="n16"
        value={values.n16}
        onChange={(e) => onChange(e, "n16")}
        type="number"
      />
    </Wrapper>
  );
};
