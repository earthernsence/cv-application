"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { faCaretDown, faCaretUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EducationData } from "../../exampleData";
import InputField from "@/common/InputField";

import EditEducationInformation from "./EditEducationInformation";

type EducationForm = {
  degree: string,
  school: string,
  location: string,
  start: string,
  end: string,
};

const RequiredField = () => <div className="text-red-700 font-semibold">This field is required</div>;

export const EducationInformation = (props: {
  education: Array<EducationData>,
  setEducation: Dispatch<SetStateAction<Array<EducationData>>>
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationForm>();
  const onSubmit: SubmitHandler<EducationForm> = (data: EducationForm) => {
    const id = `edu_${Date.now()}`;
    const newEducation = {
      degree: data.degree,
      school: data.school,
      location: data.location,
      start: data.start,
      end: data.end,
      id } as EducationData;
    props.setEducation([...props.education, newEducation]);
    reset();
  };

  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) return (
    <div className="text-xl text-black text-left mb-1 mt-1 font-semibold" onClick={() => setCollapsed(!collapsed)}>
      Then, a little about your education...
      <FontAwesomeIcon icon={faCaretUp} className="ml-2" />
    </div>
  );

  return (
    <div>
      <div className="text-xl text-black text-left mb-1 mt-1 font-semibold" onClick={() => setCollapsed(!collapsed)}>
        Then, a little about your education...
        <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
      </div>
      {
        props.education.map((edu: EducationData) => (
          <li key={edu.id}>
            <EditEducationInformation
              data={edu}
              education={props.education}
              setEducation={props.setEducation}
            />
          </li>
        ))
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField fieldName="degree" register={register} />
        { errors.degree && <RequiredField /> }
        <InputField fieldName="school" register={register} />
        { errors.school && <RequiredField /> }
        <InputField fieldName="location" register={register} />
        { errors.location && <RequiredField /> }
        <InputField fieldName="start" register={register} />
        { errors.start && <RequiredField /> }
        <InputField fieldName="end" register={register} />
        { errors.end && <RequiredField /> }
        <button type="submit" className="rounded-lg border-solid border-2 border-transparent
                                  pt-2 pb-2 pr-4 pl-4 mr-4
                                  font-medium text-base font-mono text-white bg-gray-600 cursor-pointer
                                  transition-[border-color] duration-300
                                  hover:border-slate-600
                                  focus:outline-4 focus:outline focus:outline-blue-950">
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Add
        </button>
      </form>
    </div>
  );
};

export default EducationInformation;