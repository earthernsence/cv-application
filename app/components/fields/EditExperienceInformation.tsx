import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { faFloppyDisk, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputField from "@/common/InputField";
import { JobData } from "../../exampleData";

type JobForm = {
  company: string,
  position: string,
  location: string,
  description: string,
  start: string,
  end: string,
}

const RequiredField = () => <div className="text-red-700 font-semibold">This field is required</div>;

export const EditExperienceInformation = (props: {
  data: JobData,
  experience: Array<JobData>,
  setExperience: Dispatch<SetStateAction<Array<JobData>>>
}) => {
  const id = props.data.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobForm>({
    defaultValues: props.data
  });

  const onSave: SubmitHandler<JobForm> = (submittedData: JobForm) => {
    const editedExperience = {
      company: submittedData.company,
      position: submittedData.position,
      location: submittedData.location,
      description: submittedData.description,
      start: submittedData.start,
      end: submittedData.end
    };

    props.setExperience(props.experience.map(exp => {
      if (exp.id === id) return { ...exp, ...editedExperience };
      return exp;
    }));
  };

  const onDelete = () => {
    props.setExperience(current => current.filter(exp => exp.id !== id));
  };

  return (
    <form onSubmit={handleSubmit(submittedData => onSave(submittedData))}>
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
      <div className="flex flex-row gap-2 mb-5 w-full">
        <button type="submit" className="rounded-lg border-solid border-2 border-transparent
                                  pt-2 pb-2 pr-4 pl-4 w-1/2
                                  font-medium text-base font-mono text-black bg-green-600 cursor-pointer
                                  transition-[border-color] duration-300
                                  hover:border-slate-600
                                  focus:outline-4 focus:outline focus:outline-blue-950">
          <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />
          Save
        </button>
        <button type="button" onClick={onDelete} className="rounded-lg border-solid border-2 border-transparent
                                  pt-2 pb-2 pr-4 pl-4 w-1/2
                                  font-medium text-base font-mono text-black bg-red-600 cursor-pointer
                                  transition-[border-color] duration-300
                                  hover:border-slate-600
                                  focus:outline-4 focus:outline focus:outline-blue-950">
          <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditExperienceInformation;