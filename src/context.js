import { createContext, useReducer } from "react";

export const FormContext = createContext({
  userDetails: {},
  addUserDetails: () => {},
});

const contextReducer = (state, actions) => {
  // obj we pass in actions parameter must have type and overwriting obj name same.
  // Example: type: 'PERSONAL' ; REMEMBER actions obj must have key called 'personal'
  if (!actions[actions.type.toLowerCase()]) {
    return state;
  }

  switch (actions.type) {
    case "PERSONAL":
      state.personal = actions.personal;
      return state;
    case "EDUCATION":
      state.education = actions.education;
      return state;
    case "SKILLS":
      state.skills = actions.skills;
      return state;
    case "EXPERIENCE":
      state.experience[`work${actions.page}`] = actions.experience;
      return state;

    case "PROJECT":
      state.projects[`project${actions.page}`] = actions.project;
      return state;
    case "ACHIEVEMENT":
      state.achievements[`achievement${actions.page}`] = actions.achievement;
      return state;
    case "PUBLICATION":
      state.publications[`publication${actions.page}`] = actions.publication;
      return state;
    case "CONFERENCE":
      state.conferences[`conference${actions.page}`] = actions.conference;
      return state;
    case "PAGE":
      state.totalPage[actions.subtype] = actions.page;
      return state;
    case "DELETE":
      delete state[actions.obj][`${actions.subtype}${actions.delete}`];
      return state;
    default:
      return state;
  }
};

const MainForm = ({ children }) => {
  const [form, dispatch] = useReducer(contextReducer, {
    personal: {
      name: "",
      location: "",
      phone: "",
      websiteLink: "",
      summary: "",
    },
    education: {
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    skills: {
      technical: [],
      softSkills: [],
      hobbies: [],
    },
    projects: {
      // project0: {
      //   projectName: "",
      //   techStack: "",
      //   description: "",
      //   link: "",
      // },
    },
    experience: {
      // work0: {
      //   experience: false,
      //   companyName: "",
      //   jobTitle: "",
      //   startDate: "",
      //   endDate: "",
      //   description: "",
      // },
    },
    achievements: {
      // achievement0: {
      //   name: "",
      //   description: "",
      //   other: "",
      // },
    },
    publications: {
      // publication0: {
      //   name: "",
      //   description: "",
      //   reference: "",
      // },
    },
    conferences: {
      // conference0: {
      //   name: "",
      //   description: "",
      // },
    },
    totalPage: {
      experience: 1,
      projects: 1,
      achievements: 1,
      publications: 1,
      conferences: 1,
    },
  });

  return (
    <FormContext.Provider
      value={{
        userDetails: form,
        addUserDetails: dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default MainForm;
