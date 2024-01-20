import { Dispatch, SetStateAction } from "react";
import { faFloppyDisk, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { EducationData } from "../../exampleData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "@/common/InputField";

type EducationForm = {
  degree: string,
  school: string,
  location: string,
  start: string,
  end: string,
};

const RequiredField = () => <div className="text-red-700 font-semibold">This field is required</div>;

export const EditEducationInformation = (props: {
  data: EducationData,
  education: Array<EducationData>,
  setEducation: Dispatch<SetStateAction<Array<EducationData>>>
}) => {
  const id = props.data.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationForm>({
    defaultValues: props.data
  });

  const onSave: SubmitHandler<EducationForm> = (submittedData: EducationForm) => {
    const editedEducation = {
      degree: submittedData.degree,
      school: submittedData.school,
      location: submittedData.location,
      start: submittedData.start,
      end: submittedData.end
    };

    props.setEducation(props.education.map(edu => {
      if (edu.id === id) {
        return { ...edu, ...editedEducation };
      }
      return edu;

    }));
  };

  const onDelete = () => {
    props.setEducation(current => current.filter(edu => edu.id !== id));
  };

  return (
    <form onSubmit={handleSubmit(submittedData => onSave(submittedData))}>
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

export default EditEducationInformation;