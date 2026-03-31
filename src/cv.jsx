import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Smartphone, Database, Globe, Mail, Phone, MapPin,
  Github, Linkedin, Award, Briefcase, GraduationCap, Languages,
  Download, Moon, Sun, Plus, Edit2, Trash2, Save, X, ExternalLink,
  FileText, Image as ImageIcon, Shield, FolderOpen, MessageCircle
} from 'lucide-react';

const PROFILE_IMAGE = 'images/perfil.png';

const initialData = {
  personal: {
    name: 'Sheynner Enrique Zavala Querevalú',
    title: 'Desarrollador Full-stack & Ciberseguridad',
    subtitle: 'Estudiante de Ingeniería de Software - SENATI',
    email: 'zavalasheynner@gmail.com',
    phone: '+51 978 110 873',
    location: 'Talara, Perú',
    summary: '🚀 Ingeniero de Software Full-Stack & Experto en Ciberseguridad | Transformo Ideas en Soluciones Digitales de Alto Impacto\n\n💡 Construyo aplicaciones web y móviles que no solo funcionan, sino que ESCALAN y PROTEGEN tu negocio. Especializado en arquitecturas robustas con PHP, MySQL, Java y Kotlin que convierten procesos complejos en sistemas automatizados y eficientes.\n\n🔐 Mi diferenciador: Desarrollo con seguridad desde el código base. Cada línea que escribo está diseñada para resistir amenazas y garantizar la integridad de tus datos.\n\n⚡ Lo que entrego:\n   → Aplicaciones que reducen costos operativos hasta en un 60%\n   → Sistemas que procesan miles de transaccaciones sin pestañear\n   → Automatizaciones que liberan a tu equipo de tareas repetitivas\n   → Código limpio, mantenible y preparado para crecer contigo\n\n🎯 Si buscas alguien que entienda tanto el negocio como la tecnología, que hable el lenguaje de los stakeholders y ejecute con precisión técnica, hablemos.\n\n💼 Listo para resolver tu próximo desafío tecnológico. ¿Cuándo empezamos?',
    github: 'https://github.com/sheynner-dev',
    linkedin: 'https://linkedin.com/in/sheynner-zavala-48588832a',
  },
  skills: [
    { category: 'Programación', items: ['Python', 'Java', 'C++'] },
    { category: 'Lenguajes Web', items: ['JavaScript', 'PHP', 'HTML/CSS', 'SQL'] },
    { category: 'Mobile', items: ['Android', 'Kotlin', 'Flutter', 'React Native', 'Swift', 'Ionic', 'Xamarin'] },
    { category: 'Backend', items: ['MySQL', 'REST API', 'Node.js', 'Express', 'Django', 'Ruby on Rails'] },
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js'] },
    { category: 'Ciberseguridad', items: ['Pentesting', 'Kali Linux', 'Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Hacking Ético'] },
    { category: 'Herramientas', items: ['Git', 'Excel', 'MS Project', 'Power BI', 'Autocad 2D/3D', 'Figma', 'Jira', 'Slack'] },
    { category: 'Soft Skills', items: ['Trabajo en equipo', 'Proactividad', 'Liderazgo', 'Iniciativa', 'Compromiso', 'Enfoque'] }
  ],
  projects: [
    {
      id: 1,
      title: 'Sistema CRUD Estudiantes',
      description: 'Sistema web CRUD para gestión de estudiantes en una institución educativa. Permite crear, leer, actualizar y eliminar registros de estudiantes con una interfaz intuitiva y funcional.',
      tags: ['PHP', 'MySQL'],
      images: ['images/casa1.jfif', 'images/casa2.jfif', 'images/casa3.jfif', 'images/casa4.jfif', 'images/casa5.jfif', 'images/casa6.jfif', 'images/casa7.jfif', 'images/casa8.jfif', 'images/casa9.jfif', 'images/casa10.jfif' ,'images/casa11.jfif'],
      highlights: ['CRUD completo', 'Interfaz amigable', 'Validación de datos']
    },
    {
      id: 2,
      title: 'Clasificador de Residuos con IA',
      description: 'Sistema de clasificación inteligente de residuos utilizando Deep Learning. Modelo entrenado con TensorFlow/Keras capaz de identificar 5 tipos diferentes de basura con 94% de precisión.',
      tags: ['Python', 'TensorFlow', 'Keras', 'ML', 'OpenCV'],
      images: ['images/r1.jfif', 'images/r2.jfif', 'images/r3.jfif', 'images/r4.jfif', 'images/r5.jfif', 'images/r6.jfif', 'images/r7.jfif'],
      highlights: ['94% precisión', '50k imágenes entrenadas', 'Inferencia en < 100ms']
    },
    {
      id: 3,
      title: 'Detector de Acné Médico',
      description: 'Herramienta de análisis dermatológico con interfaz PyQt. Procesamiento de imágenes médicas para detección y clasificación de diferentes tipos de acné.',
      tags: ['Python', 'PyQt', 'OpenCV', 'Image Processing'],
      images: ['images/acne1.jfif', 'images/acne2.jfif', 'images/acne3.jfif', 'images/acne4.jfif', 'images/acne5.jfif', 'images/acne6.jfif', 'images/acne7.jfif', 'images/acne8.jfif', 'images/acne9.jfif', 'images/acne10.jfif', 'images/acne11.jfif', 'images/acne12.jfif', 'images/acne13.jfif', 'images/acne14.jfif'],
      highlights: ['Interfaz médica intuitiva', 'Reportes PDF automáticos', 'Historial de pacientes']
    },
    {
      id: 4,
      title: 'App Móvil CIE-10 MINSA',
      description: 'Aplicación móvil que toma un archivo plano CSV del catálogo CIE-10 y lo convierte en una base de datos médica portátil con buscador rápido e interfaz optimizada para profesionales de salud.',
      tags: ['Android', 'Java', 'CSV', 'SQLite', 'Búsqueda eficiente'],
      images: ['images/cie1.jfif', 'images/cie2.jfif', 'images/cie3.jfif'],
      highlights: ['Interfaz intuitiva', 'Búsqueda en <500ms', 'Funciona sin conexión']
    },
    {
      id: 5,
      title: 'Sistema Web Local - Área de Terapia',
      description: 'Sistema web local en PHP y MySQL para gestión de pacientes en el área de terapia del centro de salud MINSA Talara II.',
      tags: ['PHP', 'MySQL', 'HTML/CSS', 'Sistema local'],
      images: ['images/t1.jfif', 'images/t2.jfif', 'images/t3.jfif', 'images/t4.jfif', 'images/t5.jfif', 'images/t6.jfif', 'images/t7.jfif', 'images/t8.jfif', 'images/t9.jfif', 'images/t10.jfif', 'images/t11.jfif', 'images/t12.jfif', 'images/t13.jfif', 'images/t14.jfif', 'images/t15.jfif', 'images/t16.jfif', 'images/t17.jfif', 'images/t18.jfif', 'images/t19.jfif'],
      highlights: ['Acceso restringido', 'Registro digital', 'Reportes básicos']
    },
    {
      id: 6,
      title: 'App Móvil para Cálculo de IMC',
      description: 'Aplicación Android para cálculo automático del Índice de Masa Corporal con historial persistente.',
      tags: ['Android', 'Kotlin', 'SQLite', 'Diseño responsivo'],
      images: ['images/imc1.jfif', 'images/imc2.jfif', 'images/imc3.jfif', 'images/imc4.jfif', 'images/imc5.jfif'],
      highlights: ['Cálculo instantáneo', 'Historial de registros', 'Recomendaciones básicas']
    }
  ],
  experience: [
    {
      id: 1,
      title: 'Practicante en Área de Estadística e Informática',
      company: 'Centro de Salud Talara II',
      period: '27/03/2025 - 06/06/2025',
      description: 'Gestión y análisis de datos estadísticos para optimización de procesos en el sector salud. Soporte técnico, manejo de sistemas informáticos y digitalización de registros.',
      constanciaImage: 'images/minsa1.jfif'
    },
    {
      id: 2,
      title: 'Practicante en Área de Estadística e Informática/Unidad de Seguros',
      company: 'Centro de Salud Talara II',
      period: '11/08/2025 - 07/11/2025',
      description: 'Gestión y análisis de datos estadísticos para la optimización de procesos en el sector salud. Soporte técnico y manejo de sistemas informáticos para la administración de información.',
      constanciaImage: 'images/minsa2.jpg'
    }
  ],
  education: [
  {
    id: 1,
    degree: 'Ingeniería de Software',
    institution: 'SENATI - Talara',
    period: 'En curso | 2023 - Actualidad',
    details:
      'Formación especializada en desarrollo de sistemas empresariales, arquitectura de software y gestión de proyectos tecnológicos. Enfoque en metodologías ágiles, modelado de bases de datos relacionales, principios de ciberseguridad y optimización de procesos mediante soluciones tecnológicas innovadoras.',
    documents: [
      {
        id: 1,
        name: 'Historial Académico',
        type: 'pdf',
        file: 'docs/Historial Académico.pdf'
      },
    ]
  },
  {
    id: 2,
    degree: 'Educación Secundaria Completa',
    institution: 'I.E. José Pardo y Barreda - Talara',
    period: '2018 - 2022',
    details:
      'Formación integral con énfasis en ciencias y tecnología. Participación activa en proyectos de investigación escolar y desarrollo de competencias analíticas. Base sólida para el desarrollo profesional en el campo de la ingeniería y tecnología.',
    documents: [
      {
        id: 1,
        name: 'Certificado de Estudios',
        type: 'pdf',
        file: 'docs/Certificado de Estudios.pdf'
      },
    ]
  }
],
  presentation: [
    {
      id: 1,
      type: "video",
      title: "Presentación Profesional en Video",
      description: "Video de presentación profesional donde muestro mis habilidades y experiencia",
      file: "images/presentacion.mp4",
      thumbnail: "images/presentacion.png"
    }
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Básico' }
  ],
  certifications: [
  {
    title: 'Automatización e Industria 4.0: PLC, Node-RED y Python',
    issuer: 'INGELEARN',
    date: 'Dic 2025',
    image: 'images/Automatización e Industria 4.0 PLC y NodeRED.jpg',
    document: 'docs/Automatización e Industria 4.0.pdf'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO CIBERSEGURIDAD.jpg',
    document: 'docs/CERTIFICADO CIBERSEGURIDAD.pdf'
  },
  {
    title: 'Docker Essentials: A Developer Introduction',
    issuer: 'Cognitive Class',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO DOCKER.jpg',
    document: 'docs/CERTIFICADO DOCKER.pdf'
  },
  {
    title: 'Fundamentals of Javascript through rock-paperscissors',
    issuer: 'Cognitive Class',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO JAVASCRIT.jpg',
    document: 'docs/CERTIFICADO JAVASCRIT.pdf'
  },
  {
    title: 'Big Data 101',
    issuer: 'Cognitive Class',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO BIG DATA.jpg',
    document: 'docs/CERTIFICADO BIG DATA.pdf'
  },
  {
    title: 'SQL and Relational Databases 101',
    issuer: 'Cognitive Class',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO SQL.jpg',
    document: 'docs/CERTIFICADO SQL.pdf'
  },
  {
    title: 'C++ Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO C++.jpg',
    document: 'docs/CERTIFICADO C++.pdf'
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO PYTHON.jpg',
    document: 'docs/CERTIFICADO PYTHON.pdf'
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO RESOLVIENDO PROBLEMAS.jpg',
    document: 'docs/CERTIFICADO RESOLVIENDO PROBLEMAS.pdf'
  },
  {
    title: 'Node (Basic)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO NODEJS.jpg',
    document: 'docs/CERTIFICADO NODEJS.pdf'
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    image: 'images/CERTIFICADO PYTHON BASICO.jpg',
    document: 'docs/CERTIFICADO PYTHON BASICO.pdf'
  },
  {
    title: 'Bootcamp 4.0: Python, IA y Ciberseguridad',
    issuer: 'INGELEARN',
    date: 'Mayo 2025',
    image: 'images/python.jfif',
    document: 'docs/py.pdf'
  },
  {
    title: 'Microsoft Excel',
    issuer: 'Curso Gratuito',
    date: 'Mayo 2025',
    image: 'images/exel.jfif',
    document: 'docs/exel.pdf'
  },
  {
    title: 'Red Hat System Administration I (RH124)',
    issuer: 'Red Hat',
    date: 'Mayo 2024',
    image: 'images/redhat.jfif',
    document: 'docs/redhat.pdf'
  },
  {
    title: 'Get Connected',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2023',
    image: 'images/get.jfif',
    document: 'docs/get.pdf'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2023',
    image: 'images/iot.jfif',
    document: 'docs/iot.pdf'
  }
],

  documents: [
    {
      id: 1,
      name: 'CV Completo PDF',
      type: 'pdf',
      file: 'docs/CV_SHEYNNER_ZAVALA.pdf',
      category: 'general'
    },
    {
      id: 2,
      name: 'Certificado único laboral',
      type: 'pdf',
      file: 'docs/CERTIFICADO UNICO LABORAL.pdf',
      category: 'experiencia'
    },
    {
      id: 3,
      name: 'Constancia de Prácticas MINSA I',
      type: 'pdf',
      file: 'docs/CONSTANCIA PRACTICAS MINSA I.pdf',
      category: 'experiencia'
    },
    {
      id: 4,
      name: 'Constancia de Prácticas MINSA II',
      type: 'pdf',
      file: 'docs/CONSTANCIA PRACTICAS MINSA II.pdf',
      category: 'experiencia'
    }
  ]
};

// Función mejorada para exportar a PDF
const exportToPDF = async () => {
  const html2pdf = (await import('html2pdf.js')).default;
  
  const element = document.getElementById('cv-content');
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `CV_${initialData.personal.name.replace(/\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: true,
      backgroundColor: '#ffffff'
    },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  // Crear un clon del elemento para no afectar la visualización actual
  const clone = element.cloneNode(true);
  document.body.appendChild(clone);
  
  try {
    await html2pdf().set(opt).from(clone).save();
  } catch (error) {
    console.error('Error al generar PDF:', error);
    alert('Error al generar el PDF. Por favor, intente nuevamente.');
  } finally {
    document.body.removeChild(clone);
  }
};

// Componente de Asistente IA Flotante
const FloatingAssistant = ({ onClose }) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [assistantResponse, setAssistantResponse] = useState('');
  const [assistantLoading, setAssistantLoading] = useState(false);
  const [suggestions] = useState([
    "¿Cuáles son tus habilidades principales?",
    "¿En qué proyectos has trabajado?",
    "¿Tienes experiencia en ciberseguridad?",
    "¿Qué tecnologías usas para desarrollo móvil?",
    "¿Dónde has realizado tus prácticas profesionales?"
  ]);
  
  // Respuestas predefinidas para evitar errores de API
  const predefinedResponses = {
    "¿cuáles son tus habilidades principales?": "Mis habilidades principales incluyen:\n\n• Desarrollo Full-Stack: PHP, MySQL, JavaScript, React\n• Desarrollo Móvil: Android, Kotlin, Java, Flutter\n• Ciberseguridad: Pentesting, Kali Linux, Nmap, Burp Suite\n• Herramientas: Git, Docker, Figma, Jira\n• Soft Skills: Trabajo en equipo, liderazgo, proactividad",
    
    "¿en qué proyectos has trabajado?": "He desarrollado varios proyectos destacados:\n\n• Sistema CRUD Estudiantes (PHP/MySQL)\n• Clasificador de Residuos con IA (Python/TensorFlow)\n• Detector de Acné Médico (Python/OpenCV)\n• App Móvil CIE-10 MINSA (Android/Java)\n• Sistema Web Local para MINSA (PHP/MySQL)\n• App para Cálculo de IMC (Android/Kotlin)",
    
    "¿tienes experiencia en ciberseguridad?": "Sí, tengo experiencia en ciberseguridad con conocimientos en:\n\n• Pentesting y pruebas de penetración\n• Uso de herramientas como Kali Linux, Nmap, Burp Suite\n• Análisis de vulnerabilidades\n• Hacking ético\n• Seguridad en aplicaciones web",
    
    "¿qué tecnologías usas para desarrollo móvil?": "Para desarrollo móvil utilizo:\n\n• Android Nativo: Java y Kotlin\n• Frameworks multiplataforma: Flutter y React Native\n• iOS: Swift (conocimientos básicos)\n• Herramientas: Android Studio, Firebase, SQLite\n• Patrones: MVVM, Clean Architecture",
    
    "¿dónde has realizado tus prácticas profesionales?": "Realicé mis prácticas profesionales en:\n\n• Centro de Salud Talara II (Mar 2025 - Jun 2025)\n• Centro de Salud Talara II (Ago 2025 - Nov 2025)\n\nEn ambas prácticas me desempeñé en el área de Estadística e Informática/Unidad de Seguros, gestionando datos estadísticos y brindando soporte técnico.",
    
    "donde has hecho tus practicas": "Realicé mis prácticas profesionales en el sector salud:\n\n📍 Centro de Salud Talara II\n   Período: 27/03/2025 - 06/06/2025\n\n📍 Centro de Salud Talara II  \n   Período: 11/08/2025 - 07/11/2025\n\nEn ambas instituciones trabajé en el área de Estadística e Informática/Unidad de Seguros, gestionando datos y sistemas informáticos."
  };

  const askAssistant = async (question = userQuestion) => {
    if (!question.trim()) {
      setAssistantResponse('Por favor, escribe una pregunta sobre mi CV.');
      return;
    }
    
    setAssistantLoading(true);
    setAssistantResponse('');

    // Verificar si hay una respuesta predefinida
    const questionLower = question.toLowerCase().trim();
    if (predefinedResponses[questionLower]) {
      // Simular un pequeño delay para parecer más natural
      setTimeout(() => {
        setAssistantResponse(predefinedResponses[questionLower]);
        setAssistantLoading(false);
      }, 1000);
      return;
    }

    // Si no hay respuesta predefinida, usar la API
    const apiKey = 'sk-ec5dd8b4e8524f08bb2833ac5e5b0a92';
    const endpoint = 'https://api.deepseek.com/v1/chat/completions';
    
    const cvContext = `Información del CV de ${initialData.personal.name}:

${initialData.personal.summary}

Habilidades:
${initialData.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

Proyectos:
${initialData.projects.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Experiencia:
${initialData.experience.map(e => `- ${e.title} en ${e.company} (${e.period})`).join('\n')}

Educación:
${initialData.education.map(e => `- ${e.degree} en ${e.institution} (${e.period})`).join('\n')}

Certificaciones:
${initialData.certifications.map(c => `- ${c.title} por ${c.issuer} (${c.date})`).join('\n')}`;

    const content = `Basándote ÚNICAMENTE en este CV, responde la siguiente pregunta del usuario. Si la pregunta no está relacionada con el CV, responde que solo puedes responder preguntas sobre el CV de Sheynner Zavala.

${cvContext}

Pregunta del usuario: ${question}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos timeout

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { 
              role: 'system', 
              content: 'Eres un asistente virtual del CV de Sheynner Zavala. Solo respondes preguntas basadas en la información del CV proporcionado. Responde siempre en español de manera clara y profesional. Sé conciso pero informativo.' 
            },
            { role: 'user', content }
          ],
          max_tokens: 500,
          temperature: 0.7
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content || 'Basándome en el CV de Sheynner, no tengo información específica sobre esa pregunta. ¿Podrías reformularla o preguntar sobre sus habilidades, proyectos o experiencia?';
      setAssistantResponse(reply);
    } catch (error) {
      console.error('Error:', error);
      if (error.name === 'AbortError') {
        setAssistantResponse('La solicitud está tomando demasiado tiempo. Por favor, intenta con una pregunta más específica o verifica tu conexión a internet.');
      } else {
        // Respuesta de fallback basada en palabras clave
        const fallbackResponse = generateFallbackResponse(question);
        setAssistantResponse(fallbackResponse);
      }
    } finally {
      setAssistantLoading(false);
    }
  };

  // Función para generar respuestas de fallback basadas en palabras clave
  const generateFallbackResponse = (question) => {
    const questionLower = question.toLowerCase();
    
    if (questionLower.includes('móvil') || questionLower.includes('mobile') || questionLower.includes('android')) {
      return "Según el CV de Sheynner, tiene experiencia en desarrollo móvil con Android, Kotlin, Java, Flutter y React Native. Ha desarrollado aplicaciones como el Clasificador CIE-10 MINSA y una app para cálculo de IMC.";
    } else if (questionLower.includes('practica') || questionLower.includes('práctica') || questionLower.includes('experiencia laboral')) {
      return "Sheynner realizó prácticas profesionales en el Centro de Salud Talara II en dos períodos:\n• Mar 2025 - Jun 2025: Centro de Salud Talara II\n• Ago 2025 - Nov 2025: Centro de Salud Talara II\nEn ambas se desempeñó en el área de Estadística e Informática/Unidad de Seguros.";
    } else if (questionLower.includes('tecnolog') || questionLower.includes('lenguaj') || questionLower.includes('herramienta')) {
      return "Sheynner maneja diversas tecnologías:\n• Frontend: React, Vue.js, Angular\n• Backend: PHP, Node.js, MySQL\n• Mobile: Android, Kotlin, Flutter\n• Ciberseguridad: Kali Linux, Nmap, Burp Suite\n• Herramientas: Git, Docker, Figma";
    } else if (questionLower.includes('proyecto') || questionLower.includes('trabajo')) {
      return "Entre sus proyectos destacados se encuentran:\n• Sistema CRUD Estudiantes\n• Clasificador de Residuos con IA\n• Detector de Acné Médico\n• App CIE-10 MINSA\n• Sistema Web para MINSA\n• App de cálculo de IMC";
    } else if (questionLower.includes('educación') || questionLower.includes('estudio') || questionLower.includes('formación')) {
      return "Sheynner está cursando Ingeniería de Software en SENATI (2023-Actualidad) y completó su educación secundaria en la I.E. José Pardo y Barreda (2018-2022).";
    } else {
      return "Basándome en el CV de Sheynner Zavala, puedo proporcionarte información sobre:\n• Sus habilidades técnicas y soft skills\n• Proyectos desarrollados\n• Experiencia laboral y prácticas\n• Educación y certificaciones\n• Tecnologías que domina\n\n¿Sobre qué aspecto te gustaría saber más?";
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setUserQuestion(suggestion);
    askAssistant(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      askAssistant();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="fixed bottom-6 right-6 z-50 w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">AI CHOCOTEJA🤖</h3>
              <p className="text-blue-100 text-sm">Pregúntame sobre el CV</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-h-96 overflow-y-auto">
        <div className="p-4">
          {/* Preguntas Sugeridas */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
              Preguntas sugeridas:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  disabled={assistantLoading}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="mb-4">
            <textarea
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta sobre mi experiencia, habilidades, proyectos..."
              rows="3"
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              disabled={assistantLoading}
            />
          </div>

          {/* Botón Enviar */}
          <button
            onClick={() => askAssistant()}
            disabled={assistantLoading || !userQuestion.trim()}
            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2"
          >
            {assistantLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                Enviar Pregunta
              </>
            )}
          </button>

          {/* Respuesta */}
          {assistantResponse && (
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">Respuesta:</p>
              <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                {assistantResponse}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function UltraModernCV() {
  const [dark, setDark] = useState(true);
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState('overview');
  const [showFloatingAssistant, setShowFloatingAssistant] = useState(false);

  // Modales
  const [showProjectImages, setShowProjectImages] = useState(null);
  const [showConstancia, setShowConstancia] = useState(null);
  const [showCertImage, setShowCertImage] = useState(null);
  const [showDocument, setShowDocument] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPdfViewer, setShowPdfViewer] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: Globe },
    { id: 'projects', label: 'Proyectos', icon: Code },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'skills', label: 'Habilidades', icon: Award },
    { id: 'documents', label: 'Documentos', icon: FolderOpen }
  ];

  const openProjectImages = (images) => {
    setShowProjectImages(images);
    setCurrentImageIndex(0);
  };

  const openConstancia = (image) => {
    setShowConstancia(image);
  };

  const openCertImage = (image) => {
    setShowCertImage(image);
  };

  const openDocument = (document) => {
    setShowDocument(document);
  };

  const openPdfViewer = (document) => {
    setShowPdfViewer(document);
  };

  const nextImage = () => {
    if (showProjectImages && currentImageIndex < showProjectImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950 text-gray-900 dark:text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Botón Flotante del Asistente */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowFloatingAssistant(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Asistente IA Flotante */}
      <AnimatePresence>
        {showFloatingAssistant && (
          <FloatingAssistant onClose={() => setShowFloatingAssistant(false)} />
        )}
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden ring-4 ring-blue-500/50 dark:ring-blue-400/50 shadow-2xl">
                  <img 
                    src={PROFILE_IMAGE} 
                    alt={data.personal.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/400x400?text=Foto+Perfil&font=roboto';
                      e.target.className = 'w-full h-full object-cover bg-gray-200';
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2"
                >
                  {data.personal.name}
                </motion.h1>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1">{data.personal.title}</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{data.personal.subtitle}</p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                  <a href={`mailto:${data.personal.email}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    {data.personal.email}
                  </a>
                  <a href={`tel:${data.personal.phone}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    {data.personal.phone}
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {data.personal.location}
                  </span>
                </div>

                <div className="flex justify-center lg:justify-start gap-3 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={data.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={data.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDark(!dark)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 shadow-lg flex items-center gap-2 font-semibold"
                >
                  {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {dark ? 'Claro' : 'Oscuro'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={exportToPDF}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg flex items-center gap-2 font-semibold"
                >
                  <Download className="w-5 h-5" />
                  Exportar PDF Completo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-2 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-fit px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div id="cv-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50 mb-6">
  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    Resumen Profesional
  </h2>
  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
    {data.personal.summary.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-justify">
        {paragraph.split('\n').map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < paragraph.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    ))}
  </div>
</div>

                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50 mb-6">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        Educación
                      </h2>
                      <div className="space-y-6">
                        {data.education.map(edu => (
                          <div key={edu.id} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-bold text-lg">{edu.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.period}</p>
                            {edu.details && <p className="text-sm text-gray-700 dark:text-gray-300">{edu.details}</p>}
                            {edu.documents && edu.documents.length > 0 && (
                              <div className="mt-3">
                                <p className="text-sm font-semibold mb-2">Documentos:</p>
                                <div className="flex flex-wrap gap-2">
                                  {edu.documents.map(doc => (
                                    <button
                                      key={doc.id}
                                      onClick={() => openPdfViewer(doc)}
                                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                                    >
                                      <FileText className="w-3 h-3" />
                                      {doc.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* NUEVA SECCIÓN: PRESENTACIÓN */}
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        Presentación
                      </h2>
                      <div className="space-y-6">
                        {data.presentation.map(item => (
                          <div key={item.id} className="border-l-4 border-green-500 pl-4">
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                            
                            {item.type === "video" && (
                              <div className="mt-4">
                                <video
                                  controls
                                  className="w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                                  poster={item.thumbnail}
                                >
                                  <source src={item.file} type="video/mp4" />
                                  Tu navegador no soporta el elemento de video.
                                </video>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Idiomas */}
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Idiomas
                      </h3>
                      <div className="space-y-3">
                        {data.languages.map((lang, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="font-semibold">{lang.name}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certificaciones con imágenes */}
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Certificaciones
                      </h3>
                      <ul className="space-y-4">
                        {data.certifications.map((cert, idx) => (
                          <li key={idx} className="border-b border-gray-200 dark:border-gray-800 pb-3 last:border-0 last:pb-0">
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{cert.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                            <div className="flex gap-2 mt-2">
                              {cert.image && (
                                <button
                                  onClick={() => openCertImage(cert.image)}
                                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                >
                                  <ImageIcon className="w-3 h-3" /> Ver certificado
                                </button>
                              )}
                              {cert.document && (
                                <button
                                  onClick={() => openPdfViewer({name: cert.title, file: cert.document, type: 'pdf'})}
                                  className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline text-sm"
                                >
                                  <FileText className="w-3 h-3" /> PDF
                                </button>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.projects.map(project => (
                      <motion.div
                        key={project.id}
                        whileHover={{ y: -8 }}
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50"
                      >
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {project.highlights && (
                          <div className="space-y-2 mb-4">
                            {project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></span>
                                {highlight}
                              </div>
                            ))}
                          </div>
                        )}

                        {project.images && project.images.length > 0 && (
                          <button
                            onClick={() => openProjectImages(project.images)}
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                          >
                            <ImageIcon className="w-4 h-4" />
                            Ver capturas del proyecto
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Experiencia Profesional</h2>
                  <div className="space-y-6">
                    {data.experience.map((exp, idx) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{exp.company}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                        {exp.constanciaImage && (
                          <button
                            onClick={() => openConstancia(exp.constanciaImage)}
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                          >
                            <FileText className="w-4 h-4" />
                            Ver constancia de prácticas
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-6">
                  {data.skills.map((skillGroup, idx) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        {skillGroup.category === 'Mobile' && <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {skillGroup.category === 'Backend' && <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {skillGroup.category === 'Frontend' && <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {skillGroup.category === 'Ciberseguridad' && <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {skillGroup.category === 'Herramientas' && <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {skillGroup.category === 'Soft Skills' && <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * i }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 font-semibold shadow-md border border-blue-200 dark:border-blue-800"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'documents' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Documentos Personales</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.documents.map((doc, idx) => (
                      <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{doc.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{doc.type} • {doc.category}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => openPdfViewer(doc)}
                          className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
                        >
                          Ver Documento
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal: Proyecto Imágenes */}
        <AnimatePresence>
          {showProjectImages && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setShowProjectImages(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={showProjectImages[currentImageIndex]}
                  alt="Proyecto"
                  className="max-h-[80vh] object-contain rounded-xl"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400?text=Imagen+no+disponible';
                    e.target.className = 'max-h-[80vh] object-contain rounded-xl bg-gray-200';
                  }}
                />
                <button
                  onClick={() => setShowProjectImages(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
                {showProjectImages.length > 1 && (
                  <>
                    {currentImageIndex > 0 && (
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                      >
                        ←
                      </button>
                    )}
                    {currentImageIndex < showProjectImages.length - 1 && (
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                      >
                        →
                      </button>
                    )}
                  </>
                )}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {showProjectImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal: Constancia */}
        <AnimatePresence>
          {showConstancia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setShowConstancia(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={showConstancia}
                  alt="Constancia"
                  className="max-h-[80vh] object-contain rounded-xl"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x800?text=Constancia+no+disponible';
                    e.target.className = 'max-h-[80vh] object-contain rounded-xl bg-gray-200';
                  }}
                />
                <button
                  onClick={() => setShowConstancia(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal: Certificado */}
        <AnimatePresence>
          {showCertImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setShowCertImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={showCertImage}
                  alt="Certificado"
                  className="max-h-[80vh] object-contain rounded-xl"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400?text=Certificado+no+disponible';
                    e.target.className = 'max-h-[80vh] object-contain rounded-xl bg-gray-200';
                  }}
                />
                <button
                  onClick={() => setShowCertImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal NUEVO: Visor PDF Embebido */}
        <AnimatePresence>
          {showPdfViewer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setShowPdfViewer(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{showPdfViewer.name}</h3>
                  <button
                    onClick={() => setShowPdfViewer(null)}
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
                
                <div className="p-6 max-h-[calc(90vh-80px)] overflow-auto">
                  {/* VISOR PDF EMBEBIDO */}
                  <div className="mb-6 border-2 border-gray-200 rounded-xl overflow-hidden">
                    <iframe
                      src={showPdfViewer.file}
                      className="w-full h-96"
                      title={`PDF Viewer - ${showPdfViewer.name}`}
                    >
                      <p>Tu navegador no soporta iframes. <a href={showPdfViewer.file} target="_blank" rel="noopener noreferrer">Abrir PDF</a></p>
                    </iframe>
                  </div>

                  {/* BOTÓN PARA ABRIR PDF EXTERNO (funcionalidad original) */}
                  <div className="text-center">
                    <a
                      href={showPdfViewer.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir PDF en nueva pestaña
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              CV diseñado por <span className="font-bold text-blue-600 dark:text-blue-400">Sheynner Zavala</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}