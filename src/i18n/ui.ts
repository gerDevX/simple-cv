export type Lang = "en" | "es";

export const defaultLang: Lang = "en";

const strings = {
  en: {
    about: "About Me",
    experience: "Professional Experience",
    education: "Education",
    certificates: "Certifications",
    coreCompetencies: "Core Competencies",
    keyProjects: "Key Projects",
    referenceProjects: "Reference Projects",
    skills: "Skills & Technologies",
    current: "Current",
    portfolioOf: "Portfolio of",
    langSwitchEn: "EN",
    langSwitchEs: "ES",
    langSwitchTitle: "Switch language",
    emailTitle: "Send email to",
    profileTitle: "Visit my profile on",
    seeCompany: "See {name}",
    seeCert: "See {name}",
    seeProject: "See the project {name}",
    keyboardPaletteHint: "Press Cmd / Ctrl + K to open the command palette.",
    searchPlaceholder: "Search command",
    print: "Print",
    sectionActions: "Actions",
    sectionSocial: "Social",
    visitNetwork: "Visit {network}",
  },
  es: {
    about: "Sobre mí",
    experience: "Experiencia profesional",
    education: "Educación",
    certificates: "Certificaciones",
    coreCompetencies: "Competencias clave",
    keyProjects: "Proyectos destacados",
    referenceProjects: "Proyectos de referencia",
    skills: "Habilidades y tecnologías",
    current: "Presente",
    portfolioOf: "Portafolio de",
    langSwitchEn: "EN",
    langSwitchEs: "ES",
    langSwitchTitle: "Cambiar idioma",
    emailTitle: "Enviar correo a",
    profileTitle: "Visitar mi perfil en",
    seeCompany: "Ver {name}",
    seeCert: "Ver {name}",
    seeProject: "Ver el proyecto {name}",
    keyboardPaletteHint: "Pulsa Cmd / Ctrl + K para abrir la paleta de comandos.",
    searchPlaceholder: "Buscar comando",
    print: "Imprimir",
    sectionActions: "Acciones",
    sectionSocial: "Social",
    visitNetwork: "Visitar {network}",
  },
} as const;

export type UiStrings = (typeof strings)[Lang];

export function getUi(lang: Lang): UiStrings {
  return strings[lang] ?? strings.en;
}
