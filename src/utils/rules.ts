import { RuleType } from "rc-field-form/lib/interface";

export const rules = {
  required: (
    message: string = "Obligatory field",
    type: RuleType = "string"
  ) => ({
    required: true,
    type,
    message,
  }),
};
