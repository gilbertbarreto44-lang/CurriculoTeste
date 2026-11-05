// Dados do currículo: edite este objeto para atualizar as informações exibidas.
const cv = {
  personalInformation: {
    fullName: "Gilberto Barreto Neponuceno Júnior",
    professionalTitle: "Estudante de Análise e Desenvolvimento de Sistemas",
    email: "gilberto44@gmail.com",
    phone: "+55 11 835098176",
    whatsapp: "https://wa.me/5511912345678",
    location: "São Paulo, Brasil",
    linkedin: "https://br.linkedin.com/",
    github: "https://github.com/gilbertbarreto44-lang"
  },
  professionalSummary: {
    description: "Estudante de Análise e Desenvolvimento de Sistemas, com conhecimentos em desenvolvimento web e JavaScript. Busco oportunidades para desenvolver minhas habilidades, resolver problemas por meio da programação e contribuir com projetos de tecnologia.",
    careerObjective: "Atuar na área de desenvolvimento de software, contribuindo para projetos e adquirindo experiência profissional."
  },
  professionalExperience: [{
    company: "Companhia Inexistente",
    position: "Júnior",
    employmentType: "CLT",
    location: "São Paulo",
    startDate: "19/09/2001",
    endDate: "13/03/2020",
    current: false,
    description: "",
    responsibilities: ["Atuação como analista de Excel"],
    achievements: ["45 projetos finalizados"],
    technologies: ["Excel"]
  }],
  education: [{
    institution: "UniPiaget",
    degree: "Tecnólogo",
    fieldOfStudy: "Análise e Desenvolvimento de Sistemas",
    startDate: "01/02/2026",
    endDate: "",
    current: true,
    description: "Curso superior de tecnologia em andamento."
  }],
  skills: {
    technical: [
      { name: "Internet", level: "Intermediário" },
      { name: "JavaScript", level: "Júnior" },
      { name: "HTML", level: "Em desenvolvimento" },
      { name: "CSS", level: "Em desenvolvimento" }
    ],
    behavioral: ["Calma", "Trabalho em equipe"],
    tools: ["HTML", "CSS", "JavaScript", "Excel"]
  },
  projects: [{
    name: "Calculadora",
    description: "Calculadora online desenvolvida utilizando JavaScript.",
    role: "Desenvolvimento da lógica em JavaScript",
    technologies: ["JavaScript"],
    url: "https://github.com/gilbertbarreto44-lang/Calculadora-JS",
    startDate: "05/09/2026",
    endDate: "05/09/2026"
  }]
};

const $ = (id) => document.getElementById(id);
const safeText = (value) => value || "";
const makeTags = (items = []) => items.map(item => `<span>${safeText(item)}</span>`).join("");

$("heroSummary").textContent = cv.professionalSummary.description;
$("summaryText").textContent = cv.professionalSummary.description;
$("careerObjective").textContent = cv.professionalSummary.careerObjective;
$("year").textContent = new Date().getFullYear();

const info = cv.personalInformation;
$("emailButton").href = `mailto:${info.email}`;
$("emailLink").href = `mailto:${info.email}`;
$("phoneLink").href = `tel:${info.phone.replace(/[^\d+]/g, "")}`;
$("phoneText").textContent = info.phone;
$("whatsappLink").href = info.whatsapp;
$("githubLink").href = info.github;
$("githubQuick").href = info.github;
$("linkedinQuick").href = info.linkedin;

$("experienceList").innerHTML = cv.professionalExperience.map(job => {
  const period = `${job.startDate} — ${job.current ? "Atual" : job.endDate}`;
  const bullets = [...(job.responsibilities || []), ...(job.achievements || [])]
    .map(item => `<li>${item}</li>`).join("");
  return `<article class="timeline-item">
    <p class="item-date">${period}</p>
    <h3>${job.position} · ${job.company}</h3>
    <p class="item-subtitle">${job.employmentType} · ${job.location}</p>
    ${job.description ? `<p class="item-description">${job.description}</p>` : ""}
    ${bullets ? `<ul>${bullets}</ul>` : ""}
    <div class="inline-tags">${makeTags(job.technologies)}</div>
  </article>`;
}).join("");

$("educationList").innerHTML = cv.education.map(item => `
  <article class="timeline-item">
    <p class="item-date">${item.startDate} — ${item.current ? "Em andamento" : item.endDate}</p>
    <h3>${item.fieldOfStudy}</h3>
    <p class="item-subtitle">${item.institution} · ${item.degree}</p>
    <p class="item-description">${item.description || ""}</p>
  </article>`).join("");

$("projectList").innerHTML = cv.projects.map(project => `
  <article class="project-card">
    <div class="project-top"><h3>${project.name}</h3><a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Ver no GitHub ↗</a></div>
    <p>${project.description}</p>
    <p><strong>Atuação:</strong> ${project.role}</p>
    <div class="inline-tags">${makeTags(project.technologies)}</div>
  </article>`).join("");

const skillWidths = { "Intermediário": 65, "Júnior": 45, "Em desenvolvimento": 35, "Avançado": 85 };
$("technicalSkills").innerHTML = cv.skills.technical.map(skill => {
  const width = skillWidths[skill.level] || 40;
  return `<div><div class="skill-row"><span>${skill.name}</span><span>${skill.level}</span></div>
    <div class="skill-track"><div class="skill-fill" style="width:${width}%"></div></div></div>`;
}).join("");
$("toolsList").innerHTML = makeTags(cv.skills.tools);
$("behavioralSkills").innerHTML = cv.skills.behavioral.map(skill => `<span>${skill}</span>`).join("");

$("printButton").addEventListener("click", () => window.print());
