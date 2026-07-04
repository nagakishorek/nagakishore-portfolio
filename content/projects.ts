export type Project = {
  title: string;
  description: string;
  github: string;
  demo: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "AWS 3-Tier Architecture",
    description:
      "Highly available AWS architecture using EC2, RDS, ALB and Auto Scaling.",
    github: "#",
    demo: "#",
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "Kubernetes Monitoring",
    description:
      "Prometheus and Grafana monitoring stack on Kubernetes.",
    github: "#",
    demo: "#",
    technologies: [
      "Kubernetes",
      "Grafana",
      "Prometheus",
    ],
  },
];

export default projects;