import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandMedium, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Bittu Sharma",
    stack: ["DevOps Engineer", "MLOps Engineer", "AI Engineer"],
    bio: "Hello, I’m Bittu Sharma, a DevOps & MLOps Engineer with a deep passion for emerging technologies. I’m eager to leverage my expertise and skills to assist the organization in delivering top-quality software products.!"
}



const ProjectInfo = [
    {
        title: "DevSecOps-CI-CD-Pipeline",
        desc: "This project is a Java-based full-stack blogging application. I implemented the project and set up an EKS cluster using Infrastructure as Code (IaC) tools like Terraform. I also configured Jenkins, SonarQube, and Nexus using Ansible playbooks.I utilized Git for version control and stored my source code on GitHub. For packaging the application, I used the Maven build tool. Vulnerability scanning was performed with SonarQube and Trivy, and Nexus was used to store artifacts.Docker was employed to build the application's Docker image, which was then pushed to Docker Hub. Jenkins was used to create a pipeline using Groovy language. The Kubernetes (K8s) cluster, created on AWS in the form of EKS using Terraform, facilitated the deployment.Additionally, I set up monitoring for the application, covering both system-level metrics and website-level metrics.",
        image: "DevSecOps.png",
        // live: true,
        technologies: ["Java", "AWS", "Jenkins", "SonarQube", "Trivy","Nexus","Terraform","Docker","Kubernetes","Prometheus","Grafana"],
        link: "https://bittublog.hashnode.dev/production-ready-devsecops-cicd-pipeline",
        github: "https://github.com/bittush8789/Production-Ready-DevSecOps-CI-CD-Pipeline"
    },
    {
        title: "K8s-Volting-app",
        desc: "Led the deployment of scalable applications on AWS EC2 using Kubernetes and Argo CD for streamlined management and continuous integration. Orchestrated deployments via Kubernetes dashboard, ensuring efficient resource utilization and seamless scaling.",
        image: "Kubernetes.png",
        live: false,
        technologies: ["AWS", "Docker", "Kubernetes", "ArgoCD", "Promethous", "Grafana"],
        link: "https://github.com/bittush8789/K8s-Volting-app",
        github: "https://github.com/bittush8789/K8s-Volting-app"
    },

    {
        title: "Terraform Implementation",
        desc: "I developed organized and reusable resource management using Terraform modules. By streamlining deployments with the terraform apply command, I incorporated EC2 instances, S3 buckets, and DynamoDB tables within the modules to address diverse infrastructure needs. Utilizing variable inputs allowed for adaptability and easy customization across different environments, including development, QA, and production. Additionally, I ensured efficient resource cleanup through secure tear-downs with the terraform destroy command.",
        image: "Terraform.png",
        technologies: ["AWS", "Terraform"],
        link: "https://github.com/bittush8789/Terraform_Mega_Project",
        github: "https://github.com/bittush8789/Terraform_Mega_Project"
    },  
    
    {
        title: "Microservices Deployment",
        desc: "Designed and implemented a CI/CD pipeline for deploying 10 microservices using Jenkins.Configured AWS EKS cluster using AWS CLI for scalable microservices deployment.Automated build, test, and deployment processes using Jenkins Pipeline.Managed containerized applications using Docker and Kubernetes.Deployed and monitored microservices running on AWS EC2 and Kubernetes Pods.Integrated GitHub for source code versioning and automated deployments.",
        image: "Microservies.png",
        technologies: ["AWS EKS", "Kubernetes","Jenkins","Docker","GitHub"],
        link: "https://bittublog.hashnode.dev/microservices-on-kubernetes-cluster-via-jenkins-cicd-pipeline",
        github: "https://github.com/bittush8789/Microservice.git"
    },  

    {
        title: "CI/CD Pipeline for Automated Deployment",
        desc: "Designed and implemented a CI/CD pipeline using GitHub Actions, automating build, test, security scans, and deployments.Used Maven for code compilation, unit testing, and artifact packaging.Integrated SonarQube for code quality checks and Trivy for vulnerability scanning.Containerized applications using Docker and deployed them to Kubernetes.Managed Nexus Repository for artifact storage and Docker images.Set up monitoring with Prometheus and Grafana to track application performance and health.",
        image: "Github_Actions.png",
        technologies: ["GitHub Actions", "Maven","SonarQube","Trivy","Docker","Kubernetes","Nexus Repository","Prometheus & Grafana"],
        link: "https://bittublog.hashnode.dev/8j2xmfcdmilwnze58j2xufcdl6bwnzib8j2xrvcdl7dwnze4ipcdl53wnzeu8j2xqfcdl5qg8j2xrvcdl73wnze98j2xufcdl7bwnzew8j2xrvcdmihwnze28j2xvpcdl7sg8j2xsfcdl7lwnze98j2xufcdl7zwnzig8j2xuvcdl7lwnze78j2ygsdwnze88j2xuydwnzee8j2ygvcdl6wnzey8j2xvcdl7vwnzey8j2ygfcdl7lwnziaipcdmihwnze18j2xvcdl7zwnzic8j2xtpcdl7ug8j2xmvcdl7bwnzib8j2xmcdmilwnzevipcdl5twnzew8j2ygfcdl7bwnze88j2xuw",
        github: "https://github.com/bittush8789/Boardgame.git"
    }, 

    {
        title: "Ansible VM Monitor Automation",
        desc: "Developed VM monitoring automation using Ansible to track system health across multiple servers. Collected and reported CPU, memory, disk, and network metrics.Implemented Infrastructure as Code (IaC) principles for consistency.Automated email alerts for critical performance data.",
        image: "Ansible.png",
        technologies: ["AWS EC2", "Terraform","Python","Docker","Bash"],
        link: " https://github.com/bittush8789/ANSIBLE-VM-MONITOR.git",
        github: "https://github.com/bittush8789/ANSIBLE-VM-MONITOR.git"
    },

    {
        title: "CloudWatch-Logs-Analyzer",
        image: "Amazon_Q.png",
        desc: " A Streamlit application for analyzing AWS Lambda function logs from CloudWatch. Provides visual analytics and insights to help developers and DevOps engineers understand performance patterns, identify errors, and op  timize resource usage.",
        technologies: ["AWS CloudWatch", "Python (Boto3)","Amazon Q","AWS CLI"],
        link: " https://github.com/bittush8789/CloudWatch-Logs-Analyzer.git",
        github: "https://github.com/bittush8789/CloudWatch-Logs-Analyzer.git"
    },

    {
        title: "MLOps Pipeline for Diabetes Prediction",
        image: "MLOps.png",
        desc:   "This is an end-to-end machine learning operations pipeline designed to predict diabetes using health-related data. The project walks through key MLOps practices including model development, API creation, containerization, and orchestration. It starts with training a machine learning model using features like glucose levels, BMI, and age, followed by developing a FastAPI-based REST API to serve predictions. The application is then containerized using Docker and deployed using Kubernetes for scalable, production-ready service delivery. With components like train.py, main.py, Dockerfile, and k8s-deploy.yml, this project provides a hands-on introduction to modern ML deployment workflows.",
        technologies: ["Python", "FastAPI","Docker","Kubernetes", ],
        link: " https://github.com/bittush8789/first-mlops-project.git",
        github: "https://github.com/bittush8789/first-mlops-project.git"
    },
    
    



]


const SkillInfo = [
    {
        title: "DevOps",
        skills: ["Jenkins", "kubernetes","docker", "GitLab", "CircleCI", "Ansible", "Terraform", "AWS", "Linux","Prometheus","Grafana"
        ]
    },
    {
        title: "MLOps",
        skills: ["AWS Sagemaker", "Kubeflow", "MLflow", "MySQL", "MongoDB", "Airflow", "DVC","LangChain","Github Actions"]
    },
    {
        title: "Generative Ai",
        skills: ["Python", "Flask", "FastAPI","LangChain","Crew Ai","Agentic Ai","Huggingface","NLP","VectorDB"]
    },
    {
        title: "DevSecOps",
        skills: ["Git","Jira", "Postman", "SonarQube", "Trivy","Nexus","QWASP"]
    }
]
const socialLinks = [
    { link: "https://github.com/bittush8789", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/bittu-kumar-54ab13254/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/bittush8789", icon: IconBrandInstagram }, 
    { link: "https://medium.com/@bittush9534", icon: IconBrandMedium },
    { link: "https://bittublog.hashnode.dev/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Associate Analyst",
        company: "EXL Service.com india Pvt ltd",
        date: "April 2024 - Present",
        desc: "As an Associate Analyst, I collect and clean data to ensure accuracy, analyze it using tools like Excel, Python to find useful insights, and create reports and visualizations to present my findings. I collaborate with team members and clients to support various projects, develop models for forecasting, and implement data-driven solutions. I also conduct research on industry trends, document my analysis processes, and continuously improve my skills through training and workshops.",
        skills: ["Python", "Docker", "Kubernetes", "DevOps", "Linux", "AWS", "Troubleshooting"]
    },
    {
        role: "Machine Learning intern",
        company: "InternsElite",
        date: "Sep 2023 - Nov 2023",
        desc: " As a machine learning intern, I am developing and training machine learning models using various techniques, clean and preprocess datasets, implement feature engineering to enhance model performance, and collaborate with senior data scientists to design experiments. Additionally, I'll optimize code for efficiency, participate in deploying models into production environments, and document the entire process. I’ll also explore and experiment with new machine learning techniques to tackle complex problems.",
        skills: ["Python", "Tenserflow", "Keras", "PyTorch", "AWS", "Git","SQL","MongoDB"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "linux",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "jenkins",
    "ansible",
    "terraform",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "circleci",
    "githubaction",
    "airflow",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
    "k8s",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };