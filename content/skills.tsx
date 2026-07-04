import { ReactElement } from "react";

import {
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaJenkins,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: ReactElement;
};

const skills: Skill[] = [
  { name: "AWS", icon: <FaAws size={45} /> },
  { name: "Docker", icon: <FaDocker size={45} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={45} /> },
  { name: "Terraform", icon: <SiTerraform size={45} /> },
  { name: "Linux", icon: <FaLinux size={45} /> },
  { name: "Git", icon: <FaGitAlt size={45} /> },
  { name: "GitHub", icon: <FaGithub size={45} /> },
  { name: "Jenkins", icon: <FaJenkins size={45} /> },
  { name: "Ansible", icon: <SiAnsible size={45} /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={45} /> },
  { name: "Bash", icon: <FaLinux size={45} /> },
];

export default skills;