"use client";

import { Dispatch, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";

export const InputField = (props: {
  onChange?: Dispatch<SetStateAction<any>>,
  fieldName: string,
  register: UseFormRegister<any>
}) => (
  <input
    type="text"
    placeholder={`${props.fieldName.charAt(0).toUpperCase()}${props.fieldName.slice(1)}`}
    className="
    min-h-12 rounded border-none pr-2 pl-2 mb-2 min-w-full block text-black
    active:border-2 active:border-solid active:border-slate-600
    "
    {...props.register(props.fieldName, { required: true })}
  />
);

export default InputField;