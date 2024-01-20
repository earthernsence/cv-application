export type EducationData = {
  degree: string,
  school: string,
  location: string,
  start: string,
  end: string,
  id: string,
}

export type JobData = {
  company: string,
  position: string,
  location: string,
  description: string,
  start: string,
  end: string,
  id: string,
}

export type PersonalData = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  address: string,
  title: string,
}

export type CVData = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  address: string,
  title: string,

  education: Array<EducationData>,
  work: Array<JobData>
}

export const data: CVData = {
  firstName: "Jace",
  lastName: "Royer",
  email: "example@email.com",
  phoneNumber: "800-588-2300",
  address: "1600 Pennsylvania Ave",
  title: "Web Developer",

  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Wisconsin-Madison",
      location: "Madison, WI",
      start: "2025",
      end: "2029",
      id: `edu_${Date.now()}`
    },
    {
      degree: "M.S. Computer Science",
      school: "University of Wisconsin-Madison",
      location: "Madison, WI",
      start: "2029",
      end: "2031",
      id: `edu_${Date.now() + 1}`
    }
  ],
  work: [
    {
      company: "Royer Industries",
      position: "Lead Developer",
      location: "St. Louis, MO",
      description: "Lead development contracting team out of St. Louis to create your designs",
      start: "2029",
      end: "present",
      id: `exp_${Date.now()}`
    },
    {
      company: "FHHS",
      position: "CS Teacher",
      location: "St. Charles, MO",
      description: `Department head and CS teacher at FHHS. 
      Created large program of 100 students in the span of a few years.`,
      start: "2029",
      end: "present",
      id: `exp_${Date.now() + 1}`
    }
  ],
};