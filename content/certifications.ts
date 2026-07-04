export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    year: "2025",
  },
  {
    name: "Docker & Kubernetes",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Jenkins CI/CD",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Linux Administration",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Ansible Automation",
    issuer: "Udemy",
    year: "2025",
  },
];

export default certifications;