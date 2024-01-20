"use client";

import { Dispatch, SetStateAction } from "react";

// Since we don't use react-hook-form for personal info, we still maintain this component as a simpler version
export const BaseInputField = (props: {
  onChange: Dispatch<SetStateAction<any>>,
  fieldName: string,
  prefilledData?: string
}) => (
  <input
    type="text"
    placeholder={props.fieldName}
    defaultValue={props.prefilledData ?? ""}
    onChange={event => props.onChange(event.target.value)}
    className="
    min-h-12 rounded border-none pr-2 pl-2 mb-2 min-w-full block text-black
    active:border-2 active:border-solid active:border-slate-600
    "
  />
);

export default BaseInputField;