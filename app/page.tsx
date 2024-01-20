"use client";

import "./globals.css";

import { useState } from "react";

import { data, EducationData, JobData } from "./exampleData";

import EducationInformation from "@/fields/EducationInformation";
import ExperienceInformation from "@/fields/ExperienceInformation";
import PersonalInformation from "@/fields/PersonalInformation";
import { Preview } from "@/view/Preview";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");

  const personalInfo: { [key: string]: string } = {
    firstName,
    lastName,
    email,
    phone,
    address,
    title
  };

  const [education, setEducation] = useState([] as Array<EducationData>);

  const [experience, setExperience] = useState([] as Array<JobData>);

  const loadExample = () => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setPhone(data.phoneNumber);
    setAddress(data.address);
    setTitle(data.title);

    setEducation(data.education);
    setExperience(data.work);
  };

  return (
    <div className="w-4/5 h-3/4 grid justify-center gap-12 grid-cols-[repeat(2,_minmax(250px,_0.75fr))]">
      <section className="w-full bg-slate-200 p-5 rounded list-none shadow-gray-900 shadow-lg">
        <PersonalInformation
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhone={setPhone}
          setAddress={setAddress}
          setTitle={setTitle}
          personalInfo={personalInfo}
        />
        <br />
        <EducationInformation
          education={education}
          setEducation={setEducation}
        />
        <br />
        <ExperienceInformation
          experience={experience}
          setExperience={setExperience}
        />
      </section>

      <div>
        <Preview
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phone}
          address={address}
          title={title}
          education={education}
          work={experience}
        />
        <button onClick={loadExample} className="rounded-lg border-solid border-2 border-transparent
                                  pt-2 pb-2 pr-4 pl-4 mr-4 mt-4
                                  font-medium text-base font-mono text-white bg-gray-600 cursor-pointer
                                  transition-[border-color] duration-300
                                  hover:border-slate-600
                                  focus:outline-4 focus:outline focus:outline-blue-950">
          Load example...
        </button>
      </div>
    </div>
  );
}
