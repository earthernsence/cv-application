"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { faCaretDown, faCaretUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputField from "@/common/InputField";
import { JobData } from "../../exampleData";

import EditExperienceInformation from "./EditExperienceInformation";

type JobForm = {
  company: string,
  position: string,
  location: string,
  description: string,
  start: string,
  end: string,
}

const RequiredField = () => <div className="text-red-700 font-semibold">This field is required</div>;

export const ExperienceInformation = (props: {
  experience: Array<JobData>,
  setExperience: Dispatch<SetStateAction<Array<JobData>>>
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<JobForm>();
  const onSubmit: SubmitHandler<JobForm> = (data: JobForm) => {
    const id = `exp_${Date.now()}`;
    const newExp = {
      company: data.company,
      position: data.position,
      location: data.location,
      description: data.description,
      start: data.start,
      end: data.end,
      id } as JobData;
    props.setExperience([...props.experience, newExp]);
    reset();
  };

  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) return (
    <div className="text-xl text-black text-left mb-1 mt-1 font-semibold" onClick={() => setCollapsed(!collapsed)}>
      Finally, your past experience...
      <FontAwesomeIcon icon={faCaretUp} className="ml-2" />
    </div>
  );

  return (
    <div>
      <div className="text-xl text-black text-left mb-1 mt-1 font-semibold" onClick={() => setCollapsed(!collapsed)}>
        Finally, your past experience...
        <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
      </div>
      {
        props.experience.map((exp: JobData) => (
          <li key={exp.id}>
            <EditExperienceInformation
              data={exp}
              experience={props.experience}
              setExperience={props.setExperience}
            />
          </li>
        ))
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField fieldName="company" register={register} />
        { errors.company && <RequiredField /> }
        <InputField fieldName="position" register={register} />
        { errors.position && <RequiredField /> }
        <InputField fieldName="location" register={register} />
        { errors.location && <RequiredField /> }
        <InputField fieldName="start" register={register} />
        { errors.start && <RequiredField /> }
        <InputField fieldName="end" register={register} />
        { errors.end && <RequiredField /> }
        <textarea placeholder="A small description..." className="
          min-h-12 rounded border-none pr-2 pl-2 mb-2 min-w-full block text-black
          active:border-2 active:border-solid active:border-slate-600"
        {...register("description", { required: true })}
        />
        { errors.description && <RequiredField /> }
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

export default ExperienceInformation;