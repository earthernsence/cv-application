"use client";

import { Dispatch, SetStateAction } from "react";
import BaseInputField from "@/common/BaseInputField";

export const PersonalInformation = (props: {
  setFirstName: Dispatch<SetStateAction<string>>,
  setLastName: Dispatch<SetStateAction<string>>,
  setEmail: Dispatch<SetStateAction<string>>,
  setPhone: Dispatch<SetStateAction<string>>,
  setAddress: Dispatch<SetStateAction<string>>,
  setTitle: Dispatch<SetStateAction<string>>,
  personalInfo: { [key: string]: string }
}) => (
  <div>
    <div className="text-xl text-black text-left mb-1 font-semibold">First, some personal info...</div>
    <BaseInputField onChange={props.setFirstName} fieldName="First name" prefilledData={props.personalInfo.firstName} />
    <BaseInputField onChange={props.setLastName} fieldName="Last name" prefilledData={props.personalInfo.lastName} />
    <BaseInputField onChange={props.setEmail} fieldName="Email" prefilledData={props.personalInfo.email} />
    <BaseInputField onChange={props.setPhone} fieldName="Phone number" prefilledData={props.personalInfo.phone} />
    <BaseInputField onChange={props.setAddress} fieldName="Address" prefilledData={props.personalInfo.address} />
    <BaseInputField onChange={props.setTitle} fieldName="Title" prefilledData={props.personalInfo.title} />
  </div>
);

export default PersonalInformation;