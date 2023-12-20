import { FormEvent } from "react";
import { ZodSchema } from "zod";

export interface IFormValues {
  [key: string]: number | readonly string[] | undefined;
}

export interface IFormErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IFormValues;
  handleChange: (name: string, value: string) => void;
}

export interface IRenderFormArgs {
  state: IFormState;
  errors: IFormErrors;
  submit: (event: FormEvent<HTMLFormElement>) => void;
}

export interface IFormGeneratorProps {
  renderForm: (args: IRenderFormArgs) => JSX.Element;
  validationSchema: ZodSchema<any>;
  APICall: (values: IFormValues) => Promise<any>;
}
