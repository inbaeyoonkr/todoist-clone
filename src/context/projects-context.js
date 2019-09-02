import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks';

export const ProjectsContext = createContext();
// ProjectsProvider는 Context에서 사용할 값을 설정할 때 사용한다.
export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// consumer 위한 ...
export const useProjectsValue = () => useContext(ProjectsContext);
