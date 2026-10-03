export const LINKEDIN_URL = 'https://linkedin.com/in/laboratory-abdullah';
export const GITHUB_URL = 'https://github.com/abdullah8778/nail-health-analyzer';
export const SITE_ORIGIN = process.env.PUBLIC_SITE_ORIGIN || 'https://8328-icaeky7th94ajhl3fd3sg-e74bd5ea.sg2.manus.computer';
export const SITE_NAME = 'Abdullah Al-Qahtani — Healthcare Data, AI, Diagnostics & Innovation';
export const PERSON_DESCRIPTION = 'A research-focused healthcare technology profile connecting health data, AI, diagnostics, medical technology and innovation.';

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const section = (title, paragraphs = [], items = []) => ({ title, paragraphs, items });
const page = (slug, config) => ({ slug, path: slug ? `/${slug}` : '/', ...config });

export const pages = [
  page('', {
    title: 'Abdullah Al-Qahtani | Healthcare Data, AI & Innovation',
    description: 'Explore Abdullah Al-Qahtani’s work across healthcare data, AI, diagnostics, research, medical technology and professional innovation.',
    eyebrow: 'Healthcare technology authority layer',
    h1: 'Healthcare context, data, AI and diagnostic innovation.',
    intro: 'Abdullah Al-Qahtani’s professional work sits at the intersection of healthcare knowledge, health data, artificial intelligence, diagnostics, research and practical innovation.',
    topics: ['Healthcare Data Analytics', 'Healthcare AI', 'Diagnostic Innovation', 'Medical Technology', 'Research'],
    schema: 'Person',
    sections: [
      section('A professional identity built around useful questions', [
        'This site brings together the themes, projects and communities that shape Abdullah’s professional direction. It is designed to help people understand what he studies, what he builds and where to find the complete professional profile.',
        'The emphasis is research-focused and practical: better questions about health data, more disciplined diagnostic workflows and technology that can be discussed with appropriate evidence boundaries.'
      ]),
      section('The work sits across five connected fields', [], [
        { label: 'Healthcare data analytics', text: 'Turning clinical and operational questions into structured data, measurable workflows and clearer decisions.' },
        { label: 'Healthcare AI and automation', text: 'Exploring responsible AI-assisted systems that support healthcare work without replacing validation or professional judgment.' },
        { label: 'Diagnostics and medical technology', text: 'Thinking about non-invasive measurement, optical imaging, medical-device concepts and rapid diagnostic workflows as research problems.' },
        { label: 'Clinical research and real-world evidence', text: 'Keeping research questions connected to data quality, reproducibility, validation and the limits of available evidence.' },
        { label: 'Professional community', text: 'Building a development-oriented space where professional advancement, innovation and research can reinforce one another.' }
      ]),
      section('A public project with explicit research boundaries', [
        'Nail Health Analyzer is a verified public GitHub project that combines image quality control, optical features, data ingestion and reproducible machine-learning validation workflows. The repository explicitly states that model performance is not yet established and that the project does not claim clinical performance.',
        'That distinction matters: a technical prototype can be useful for learning and research design while remaining separate from clinical validation, regulatory approval or a deployed diagnostic service.'
      ]),
      section('Start with the professional profile', [
        'Use the pages in this authority layer to understand the work, then continue to LinkedIn for Abdullah’s full professional profile and current professional context.'
      ])
    ],
    related: ['about-abdullah-al-qahtani', 'healthcare-data-analytics', 'nail-health-analyzer', 'professional-mastery-community']
  }),
  page('about-abdullah-al-qahtani', {
    title: 'About Abdullah Al-Qahtani | Healthcare Technology Profile',
    description: 'A detailed professional positioning page for Abdullah Al-Qahtani across healthcare, analytics, AI, diagnostics, research and innovation.',
    eyebrow: 'About the professional identity',
    h1: 'A healthcare technology profile shaped by research and innovation.',
    intro: 'Abdullah Al-Qahtani is building a professional direction around the relationship between healthcare practice, data, AI, diagnostics, research and innovation.',
    topics: ['Professional Positioning', 'Healthcare', 'Analytics', 'Research', 'Innovation'],
    schema: 'Person',
    sections: [
      section('Professional positioning', [
        'The most accurate description of Abdullah’s direction is not a single job title. His interests form a connected profile: healthcare data analytics, bioinformatics and genomics, healthcare AI and automation, medical-device R&D, diagnostic innovation, clinical research and healthcare consulting.',
        'The common thread is the practical use of technology to make healthcare questions more measurable, reproducible and open to responsible innovation.'
      ]),
      section('Healthcare as the starting context', [
        'Healthcare experience provides the context for asking better technical questions. It keeps analytics connected to workflows, quality and patient-safety boundaries rather than treating data as an abstract exercise.'
      ]),
      section('Analytics, technology and research', [
        'The profile extends from health data and real-world evidence to AI-assisted workflows, image analysis and medical-device concepts. Research interests include diagnostics, genomics, infectious diseases, microbial genomics and antimicrobial resistance.',
        'Where a project is experimental or still being validated, the language on this site says so directly. No unsupported clinical claims, publications, awards or credentials are added.'
      ]),
      section('Future direction', [
        'The future direction is a research-focused healthcare technology practice: combining domain understanding with data discipline, technical prototyping and collaboration across professional, innovation and research communities.'
      ])
    ],
    related: ['professional-background', 'healthcare-ai', 'research-projects', 'career-and-consulting']
  }),
  page('professional-background', {
    title: 'Professional Background | Abdullah Al-Qahtani',
    description: 'Trace Abdullah Al-Qahtani’s professional interests from healthcare and diagnostics through data, AI, innovation, research and consulting.',
    eyebrow: 'Professional background',
    h1: 'From healthcare context to data-led innovation.',
    intro: 'This page explains the evolution of Abdullah’s professional interests without inventing dates, employers, degrees or organizations.',
    topics: ['Healthcare', 'Diagnostics', 'Data', 'AI', 'Professional Development'],
    schema: 'Person',
    sections: [
      section('Healthcare → Laboratory & Diagnostics', [
        'Healthcare and laboratory contexts create the first layer of the work: quality, measurement, workflow and the responsibility that comes with health-related information. Diagnostics are treated as systems that need clear inputs, interpretable processes and explicit validation.'
      ]),
      section('Data → AI', [
        'From that foundation, the focus extends to healthcare data analytics, health data quality, real-world evidence and AI-assisted healthcare workflows. The question is not simply whether a model can be built, but whether the data and process make the result trustworthy enough for its intended use.'
      ]),
      section('Innovation → Research', [
        'Medical-device R&D, non-invasive diagnostic concepts, bioinformatics, genomics and microbial genomics offer a bridge between an idea and a testable research question. Prototype work is kept distinct from clinical validation and deployment.'
      ]),
      section('Healthcare consulting → Professional development', [
        'The same intersection supports future consulting interests: translating healthcare and technology questions into structured project direction, research workflows and innovation conversations. Professional development and knowledge sharing are part of that trajectory through the Professional Mastery Community.'
      ])
    ],
    related: ['healthcare-data-analytics', 'healthcare-ai', 'medical-device-innovation', 'professional-mastery-community']
  }),
  page('healthcare-data-analytics', {
    title: 'Healthcare Data Analytics | Abdullah Al-Qahtani',
    description: 'Abdullah Al-Qahtani’s healthcare data analytics focus: health data quality, reproducible workflows, real-world evidence and useful decisions.',
    eyebrow: 'Healthcare data analytics',
    h1: 'Health data that can support better questions.',
    intro: 'Healthcare data analytics is the discipline that connects clinical context with structured evidence, reproducible analysis and practical decision support.',
    topics: ['Health Data', 'Analytics', 'Real-World Evidence', 'Data Quality', 'Clinical Research'],
    schema: 'ResearchProject',
    sections: [
      section('What the analytics lens adds', [
        'Healthcare data is shaped by how it is collected, labeled, measured and used. Abdullah’s interest is in making those assumptions visible: what a field means, which records can be compared and what a result can legitimately support.'
      ]),
      section('Core areas of interest', [], [
        { label: 'Data quality and provenance', text: 'Understanding missingness, acquisition context, identifiers, duplication and the transformations applied before analysis.' },
        { label: 'Real-world evidence', text: 'Connecting routine or operational data to research questions while keeping the limits of observational evidence visible.' },
        { label: 'Validation-ready workflows', text: 'Designing splits, review steps and reporting so that a model or analysis can be challenged rather than simply celebrated.' },
        { label: 'Healthcare consulting', text: 'Helping translate a healthcare problem into a data question, a measurable workflow and a realistic next step.' }
      ]),
      section('A disciplined path to AI', [
        'Analytics is the bridge to healthcare AI: it provides the data definitions, quality controls and evaluation thinking that should come before automation. The work is therefore as interested in what a system must refuse to claim as in what it can calculate.'
      ])
    ],
    related: ['healthcare-ai', 'research-projects', 'nail-health-analyzer', 'career-and-consulting']
  }),
  page('healthcare-ai', {
    title: 'Healthcare AI & Automation | Abdullah Al-Qahtani',
    description: 'Explore Abdullah Al-Qahtani’s research-focused interest in healthcare AI, automation, data quality and human-controlled validation.',
    eyebrow: 'Healthcare AI and automation',
    h1: 'Healthcare AI with evidence boundaries built in.',
    intro: 'Healthcare AI is most useful when it is connected to a real workflow, a defined dataset and a validation process that people can inspect.',
    topics: ['Healthcare AI', 'Automation', 'Machine Learning', 'Validation', 'Human Review'],
    schema: 'ResearchProject',
    sections: [
      section('The practical question', [
        'Abdullah’s interest is in AI-powered healthcare systems that help with structured work: data review, image analysis, decision support, research operations and repeatable quality checks. The aim is not to use AI as a label, but to understand where it can add measurable value.'
      ]),
      section('Responsible automation', [], [
        { label: 'Define the task', text: 'Specify the intended input, output, user and workflow before selecting a model.' },
        { label: 'Protect the data boundary', text: 'Keep private research data, patient information and model artifacts outside public pages and demos.' },
        { label: 'Validate the process', text: 'Use appropriate splits, leakage checks, quality controls and human review before interpreting results.' },
        { label: 'State what is not known', text: 'A prototype or candidate model is not automatically a clinically validated system.' }
      ]),
      section('Where this connects', [
        'The healthcare AI interest connects directly to healthcare data analytics, diagnostic innovation and the Nail Health Analyzer project. It also supports future work in clinical research, real-world evidence and healthcare consulting.'
      ])
    ],
    related: ['healthcare-data-analytics', 'diagnostic-innovation', 'nail-health-analyzer', 'innovation-and-research']
  }),
  page('medical-device-innovation', {
    title: 'Medical Device Innovation | Abdullah Al-Qahtani',
    description: 'Abdullah Al-Qahtani’s medical device R&D interests, from diagnostic concepts and optical measurement to validation-ready workflows.',
    eyebrow: 'Medical device R&D',
    h1: 'Medical-device ideas treated as engineering and research questions.',
    intro: 'Medical-device innovation requires more than a promising concept. It requires a defined measurement, a usable workflow, evidence and a clear route through validation.',
    topics: ['Medical Devices', 'R&D', 'Optical Measurement', 'Diagnostics', 'Validation'],
    schema: 'ResearchProject',
    sections: [
      section('The device perspective', [
        'Abdullah’s interest in medical technology focuses on the space where clinical needs, measurement science, software and workflow design meet. A device concept is valuable when its intended use, inputs, outputs and limitations can be described clearly.'
      ]),
      section('From concept to evidence', [], [
        { label: 'Concept', text: 'Describe the healthcare problem, proposed signal and intended user without implying that the relationship is already established.' },
        { label: 'Prototype', text: 'Build a technical demonstration that makes the measurement or workflow concrete.' },
        { label: 'Research', text: 'Collect appropriate data, document assumptions and test repeatability and failure modes.' },
        { label: 'Validation', text: 'Use independent, well-designed evaluation before drawing performance conclusions.' },
        { label: 'Clinical deployment', text: 'Treat deployment as a separate stage involving clinical, regulatory, safety and operational requirements.' }
      ]),
      section('A cautious innovation language', [
        'This site uses “research concept,” “experimental,” “prototype” and “under validation” deliberately. No page presents an invention as clinically established, approved or deployed without verified evidence.'
      ])
    ],
    related: ['diagnostic-innovation', 'inventions', 'nail-health-analyzer', 'innovation-and-research']
  }),
  page('diagnostic-innovation', {
    title: 'Diagnostic Innovation | Abdullah Al-Qahtani',
    description: 'Research-focused diagnostic innovation interests including optical imaging, nail-bed imaging, AI and rapid workflows.',
    eyebrow: 'Diagnostic innovation',
    h1: 'Exploring how diagnostic signals can become usable workflows.',
    intro: 'Diagnostic innovation is the space where a biological question, an observable signal, an instrument and a validated workflow must fit together.',
    topics: ['Diagnostics', 'Optical Imaging', 'Nail-bed Imaging', 'AI', 'Workflow Design'],
    schema: 'ResearchProject',
    sections: [
      section('Research concepts, not clinical promises', [
        'Abdullah’s interests include non-invasive diagnostic concepts, optical imaging, nail-bed imaging and healthcare AI. These are research directions and experimental questions, not claims that a particular signal is already a clinically reliable measurement.'
      ]),
      section('Signals of interest', [], [
        { label: 'Nail-bed imaging', text: 'Investigating whether image acquisition and feature extraction can be made more repeatable and research-ready.' },
        { label: 'Hemoglobin-related measurement', text: 'Exploring a research relationship that would require laboratory-labeled data and rigorous validation before interpretation.' },
        { label: 'Oxygen-related measurement', text: 'Considering how optical signals, acquisition conditions and reference measurements would need to be controlled.' },
        { label: 'Rapid diagnostic workflows', text: 'Thinking about how a faster workflow could remain safe, auditable and clear about uncertainty.' }
      ]),
      section('The validation ladder', [
        'The working ladder is concept → prototype → research → validation → clinical deployment. Each step has a different evidence requirement. The Nail Health Analyzer page explains one verified technical project using this boundary explicitly.'
      ])
    ],
    related: ['nail-health-analyzer', 'medical-device-innovation', 'inventions', 'healthcare-ai']
  }),
  page('research-projects', {
    title: 'Research Projects & Interests | Abdullah Al-Qahtani',
    description: 'Research themes across clinical research, health data, genomics, diagnostics, infectious diseases and healthcare AI.',
    eyebrow: 'Research projects and interests',
    h1: 'Research direction across data, diagnostics and biology.',
    intro: 'This is a map of Abdullah’s research interests and public project direction. It is not a list of invented publications or institutional affiliations.',
    topics: ['Clinical Research', 'Genomics', 'Infectious Diseases', 'Diagnostics', 'Health Data'],
    schema: 'ResearchProject',
    sections: [
      section('Clinical research and health data', [
        'Clinical research interests include study workflows, health data quality, real-world evidence and the design of analyses that respect the difference between an observation, a prototype result and a validated finding.'
      ]),
      section('Diagnostics and medical technology', [
        'Diagnostic technology provides a practical research surface: image acquisition, quality control, feature extraction, reference measurements, human review and independent evaluation all matter before a system can be interpreted.'
      ]),
      section('Genomics and infectious disease', [
        'Bioinformatics and genomics interests include microbial genomics, infectious diseases and antimicrobial resistance. These themes connect biological questions to data pipelines, reproducibility and evidence synthesis.'
      ]),
      section('Publication boundary', [
        'No publication entries are presented here because no verified publication record was supplied for this site. Future public work can be added when it is documented and safe to publish.'
      ])
    ],
    related: ['innovation-and-research', 'healthcare-data-analytics', 'diagnostic-innovation', 'professional-mastery-community']
  }),
  page('inventions', {
    title: 'Inventions & Diagnostic Concepts | Abdullah Al-Qahtani',
    description: 'A careful overview of Abdullah Al-Qahtani’s experimental invention and diagnostic innovation interests.',
    eyebrow: 'Inventions and concepts',
    h1: 'Innovation begins with a question and earns confidence through validation.',
    intro: 'This page describes invention interests without converting experimental ideas into unsupported clinical claims.',
    topics: ['Inventions', 'Diagnostic Concepts', 'Prototyping', 'Medical Technology', 'Validation'],
    schema: 'CreativeWork',
    sections: [
      section('What counts as an invention at this stage', [
        'A research concept is a proposed relationship or workflow. A prototype makes that concept testable. Research establishes a method and evidence base. Validation challenges the method with appropriate data. Clinical deployment is a separate, later standard.'
      ]),
      section('Areas of exploration', [], [
        { label: 'Non-invasive diagnostic concepts', text: 'Exploring measurement ideas that could reduce friction in a diagnostic workflow, while keeping the evidence question open.' },
        { label: 'Optical and nail-bed imaging', text: 'Considering how images, illumination, acquisition quality and feature extraction affect a research signal.' },
        { label: 'Hemoglobin and oxygen-related research', text: 'Framing these as experimental relationships that require laboratory references, appropriate cohorts and independent validation.' },
        { label: 'Healthcare AI and device concepts', text: 'Connecting a technical system to a user, workflow, quality gate and human review process.' }
      ]),
      section('No shortcut from prototype to deployment', [
        'The purpose of this language is clarity. A prototype can demonstrate feasibility; it cannot by itself establish clinical performance, safety, regulatory status or deployment readiness.'
      ])
    ],
    related: ['diagnostic-innovation', 'medical-device-innovation', 'research-projects', 'nail-health-analyzer']
  }),
  page('nail-health-analyzer', {
    title: 'Nail Health Analyzer | Research Prototype & GitHub Project',
    description: 'Verified overview of Nail Health Analyzer V4.1: image QC, optical features, data ingestion and reproducible ML validation.',
    eyebrow: 'Verified GitHub project',
    h1: 'Nail Health Analyzer: a research-grade validation prototype.',
    intro: 'Nail Health Analyzer V4.1 is a private GitHub project described by its repository as a research-grade data-ingestion, image-QC, optical-feature and reproducible machine-learning validation prototype.',
    topics: ['Python', 'FastAPI', 'Computer Vision', 'Image Processing', 'Machine Learning', 'Validation'],
    schema: 'SoftwareApplication',
    sections: [
      section('What the repository verifies', [
        'The repository contains a Python application using FastAPI, Uvicorn, NumPy, pandas, scikit-learn, Pillow and OpenCV. Its application exposes health, analysis, data-quality, import, review, validation and research-mode endpoints.',
        'The public README states that no real research dataset was supplied to the workspace, that generated images are synthetic software fixtures, and that model performance is not yet established.'
      ]),
      section('Image and feature workflow', [], [
        { label: 'Image quality control', text: 'The image-processing code calculates quality signals such as blur, color characteristics and QC status before downstream interpretation.' },
        { label: 'ROI detection and processing', text: 'OpenCV-based ROI detection, masks, normalized layers and saved visualizations support reproducible review of image processing.' },
        { label: 'Feature extraction', text: 'The project records RGB, HSV and LAB-related features alongside measurements such as brightness, saturation, texture and color statistics.' },
        { label: 'Duplicate review', text: 'Exact and perceptual image hashes are used to identify duplicate or possible-duplicate data before model work.' }
      ]),
      section('Validation and dataset controls', [
        'The repository documents a workflow from real images through QC, ROI, features, duplicate review, immutable dataset versioning, patient-level splitting, validation gates, candidate models, cross-validation, held-out testing, model cards, human review and isolated external validation.',
        'Training gates can stop when labelled data is insufficient, targets are invalid, QC fails, patient identifiers are missing, duplicates or patient leakage are present, or the required train/test partitions do not exist. External rows are kept isolated from training and model selection.'
      ]),
      section('Research mode and public demo boundary', [
        'The repository’s public_demo mode disables private sample listing, research import, training, dataset/audit exposure and research-package export. private_research is described as a protected deployment mode. This website does not expose any patient data, images, private model files or research records.'
      ]),
      section('Prototype is not clinical validation', [
        'Nail Health Analyzer is a technical and research prototype. It does not claim clinical accuracy, regulatory approval, clinical performance or an automatically approved best model. Any future clinical interpretation would require real laboratory-labelled data, appropriate study design, independent validation and the relevant professional and regulatory processes.'
      ])
    ],
    related: ['github-projects', 'diagnostic-innovation', 'healthcare-ai', 'research-projects'],
    primaryExternal: { label: 'View the verified project on GitHub', href: GITHUB_URL }
  }),
  page('github-projects', {
    title: 'GitHub Projects | Abdullah Al-Qahtani',
    description: 'Explore Abdullah Al-Qahtani’s GitHub work as a technical and research portfolio, including the Nail Health Analyzer prototype.',
    eyebrow: 'GitHub projects',
    h1: 'Code as a public record of technical and research thinking.',
    intro: 'GitHub is used as part of Abdullah’s technical and research portfolio: a place to document workflows, prototypes, assumptions and validation boundaries.',
    topics: ['GitHub', 'Technical Portfolio', 'Research Software', 'Python', 'Diagnostics'],
    schema: 'CreativeWork',
    sections: [
      section('Featured project: Nail Health Analyzer', [
        'The verified repository is a Python/FastAPI research prototype focused on image quality control, optical features, data ingestion and reproducible machine-learning validation. It includes a public-demo/private-research separation and explicit gates against data leakage and unsupported performance claims.'
      ]),
      section('What to look for in the code', [], [
        { label: 'Reproducibility', text: 'Versioned datasets, model cards, documented features and a workflow that records how data reaches evaluation.' },
        { label: 'Quality control', text: 'Image QC, ROI processing, duplicate checks and explicit rejection reasons before training.' },
        { label: 'Research safety', text: 'Public mode excludes private research data, and the project states that clinical performance is not established.' },
        { label: 'Technical range', text: 'Healthcare APIs, computer vision, scientific Python, validation gates and deployment configuration in one research-oriented codebase.' }
      ]),
      section('A portfolio with an evidence boundary', [
        'The point is not to present every repository as a finished product. The point is to make technical work understandable, inspectable and honest about its current maturity.'
      ])
    ],
    related: ['nail-health-analyzer', 'healthcare-data-analytics', 'healthcare-ai', 'linkedin'],
    primaryExternal: { label: 'View Abdullah’s GitHub project', href: GITHUB_URL }
  }),
  page('professional-mastery-community', {
    title: 'Professional Mastery Community | مجتمع السيطرة المهنية',
    description: 'Discover مجتمع السيطرة المهنية, a professional development community organized around professional, innovation and research tracks.',
    eyebrow: 'مجتمع السيطرة المهنية',
    h1: 'Professional mastery through advancement, innovation and research.',
    intro: 'The Professional Mastery Community is a professional development and advancement ecosystem for people who want to strengthen their positioning, practice, innovation and research direction.',
    topics: ['Professional Development', 'Innovation', 'Research', 'Networking', 'Career Development'],
    schema: 'CreativeWork',
    sections: [
      section('More than a generic social group', [
        'مجتمع السيطرة المهنية is framed around purposeful professional growth: clearer positioning, practical learning, knowledge sharing, networking and collaboration. The emphasis is on what members can practice, discuss and build—not on unsupported scale claims.'
      ]),
      section('Three connected tracks', [], [
        { label: 'Professional Track', text: 'Professional advancement, career development, communication, positioning and the practical habits that make expertise easier to understand.' },
        { label: 'Innovation Track', text: 'Problem framing, prototyping, healthcare innovation and the discipline of moving from an idea toward a testable workflow.' },
        { label: 'Research Track', text: 'Research questions, evidence, collaboration, data quality and the habits needed to discuss results responsibly.' }
      ]),
      section('A practical community purpose', [
        'The community can support workshops, professional networking, knowledge exchange, innovation conversations and research collaboration. It is designed to help people build professional authority through useful work and clear communication.'
      ]),
      section('The Future Med Leaders ecosystem', [
        'Future Med Leaders is presented as the parent/community ecosystem connected to this development direction. No unsupported claims about membership numbers, revenue, partnerships or future commercial performance are made here.'
      ])
    ],
    related: ['community', 'innovation-and-research', 'career-and-consulting', 'linkedin']
  }),
  page('community', {
    title: 'Community & Future Med Leaders | Abdullah Al-Qahtani',
    description: 'Understand the professional community ecosystem behind Professional Mastery, Future Med Leaders, innovation and research collaboration.',
    eyebrow: 'Professional community ecosystem',
    h1: 'A community ecosystem for people building professional authority.',
    intro: 'The community work connected to Abdullah’s profile is about advancement, learning and collaboration across healthcare, technology, innovation and research.',
    topics: ['Community', 'Future Med Leaders', 'Networking', 'Workshops', 'Professional Authority'],
    schema: 'CreativeWork',
    sections: [
      section('A clear purpose', [
        'Professional communities become useful when they help people move from aspiration to practice. The intended focus here is professional development, knowledge sharing, networking, workshops, career direction and the ability to communicate useful work.'
      ]),
      section('How the ecosystem connects', [], [
        { label: 'Professional Mastery', text: 'The dedicated development space with Professional, Innovation and Research tracks.' },
        { label: 'Future Med Leaders', text: 'The parent/community ecosystem that gives the development conversation a broader healthcare and future-leadership context.' },
        { label: 'Innovation and research', text: 'The shared language for turning questions into projects, evidence and collaboration.' },
        { label: 'Professional profile', text: 'LinkedIn remains the most complete destination for current professional context and connection.' }
      ]),
      section('No manufactured scale', [
        'This page intentionally does not claim membership size, revenue, partnerships, awards or commercial outcomes. The value proposition is the quality and usefulness of professional activity.'
      ])
    ],
    related: ['professional-mastery-community', 'innovation-and-research', 'career-and-consulting', 'linkedin']
  }),
  page('innovation-and-research', {
    title: 'Innovation & Research | Abdullah Al-Qahtani',
    description: 'See how Abdullah Al-Qahtani connects healthcare innovation, research questions, prototypes, data and validation.',
    eyebrow: 'Innovation and research',
    h1: 'Turning healthcare questions into research-ready work.',
    intro: 'Innovation and research are connected by a shared discipline: define the question, make the workflow concrete, test the assumptions and communicate the limits.',
    topics: ['Healthcare Innovation', 'Research', 'Prototyping', 'Evidence', 'Collaboration'],
    schema: 'ResearchProject',
    sections: [
      section('The bridge between an idea and evidence', [
        'Innovation creates new possibilities; research creates a way to examine them. In healthcare, the bridge has to include data quality, user context, safety, reproducibility and a clear distinction between an interesting signal and a clinically established result.'
      ]),
      section('Working pattern', [], [
        { label: 'Frame', text: 'Name the healthcare problem and the people affected by the workflow.' },
        { label: 'Prototype', text: 'Build the smallest useful technical or process demonstration.' },
        { label: 'Measure', text: 'Define inputs, outputs, quality checks and reference standards.' },
        { label: 'Validate', text: 'Use appropriate data, independent evaluation and human review before making a stronger claim.' },
        { label: 'Share', text: 'Document the result, limitations and next questions so others can understand and challenge it.' }
      ]),
      section('Across the portfolio', [
        'This pattern links the Nail Health Analyzer project, diagnostic innovation interests, healthcare AI, real-world evidence and the Professional Mastery Community’s Innovation and Research tracks.'
      ])
    ],
    related: ['research-projects', 'inventions', 'healthcare-ai', 'professional-mastery-community']
  }),
  page('career-and-consulting', {
    title: 'Healthcare Consulting | Abdullah Al-Qahtani',
    description: 'Abdullah Al-Qahtani’s healthcare consulting interests across health data, clinical research, diagnostics, AI and innovation.',
    eyebrow: 'Career and consulting',
    h1: 'Healthcare knowledge translated into technology direction.',
    intro: 'Abdullah’s consulting interests sit where healthcare knowledge, data, research and technology need to be translated into a practical next step.',
    topics: ['Healthcare Consulting', 'Health Data', 'Clinical Research', 'Diagnostics', 'Innovation'],
    schema: 'Person',
    sections: [
      section('Areas of professional interest', [], [
        { label: 'Healthcare consulting', text: 'Clarifying a healthcare problem, its users, constraints and the evidence needed for a credible project direction.' },
        { label: 'Health data and real-world evidence', text: 'Connecting data definitions, quality and analysis choices to the decisions a project needs to support.' },
        { label: 'Clinical research and diagnostics', text: 'Structuring research workflows and diagnostic innovation questions without skipping validation boundaries.' },
        { label: 'Healthcare AI and innovation', text: 'Assessing where automation, computer vision or AI-assisted systems may fit, and what must remain human-controlled.' }
      ]),
      section('A practical consulting posture', [
        'The goal is not to promise a result before understanding the problem. A useful engagement starts with the current context, the available evidence, the technical options and the risks that should be made explicit.'
      ]),
      section('Professional inquiries', [
        'For professional context, collaboration and current availability, use LinkedIn as the primary point of contact.'
      ])
    ],
    related: ['about-abdullah-al-qahtani', 'healthcare-data-analytics', 'innovation-and-research', 'linkedin']
  }),
  page('linkedin', {
    title: 'Abdullah Al-Qahtani on LinkedIn | Healthcare Technology',
    description: 'Connect with Abdullah Al-Qahtani on LinkedIn for his professional profile across healthcare data, AI, diagnostics and innovation.',
    eyebrow: 'Professional destination',
    h1: 'Abdullah Al-Qahtani — Healthcare Data, AI, Diagnostics & Innovation',
    intro: 'This authority site explains the themes and projects. LinkedIn is the primary destination for Abdullah’s current professional profile and connection.',
    topics: ['LinkedIn', 'Professional Profile', 'Healthcare Technology'],
    schema: 'Person',
    sections: [
      section('A concise professional profile', [
        'Abdullah Al-Qahtani works at the intersection of healthcare, data, AI, diagnostics, research and innovation. His interests include healthcare data analytics, bioinformatics and genomics, medical-device R&D, diagnostic innovation, healthcare AI and professional development.'
      ]),
      section('Explore the supporting authority pages', [], [
        { label: 'Projects', text: 'Read the verified Nail Health Analyzer project page and the GitHub portfolio overview.' },
        { label: 'Research', text: 'Review the research themes and the boundary between concepts, prototypes and validation.' },
        { label: 'Professional Mastery Community', text: 'Understand the Professional, Innovation and Research tracks.' }
      ])
    ],
    related: ['github-projects', 'research-projects', 'professional-mastery-community', 'contact'],
    primaryExternal: { label: 'Connect with Abdullah on LinkedIn', href: LINKEDIN_URL }
  }),
  page('contact', {
    title: 'Contact Abdullah Al-Qahtani | Professional Inquiries',
    description: 'For professional inquiries, collaboration and career context, connect with Abdullah Al-Qahtani on LinkedIn.',
    eyebrow: 'Professional contact',
    h1: 'Start the conversation on LinkedIn.',
    intro: 'The clearest route for professional inquiries, collaboration and current context is Abdullah Al-Qahtani’s LinkedIn profile.',
    topics: ['Contact', 'Professional Inquiries', 'Collaboration', 'LinkedIn'],
    schema: 'Person',
    sections: [
      section('What this contact path is for', [
        'Use LinkedIn for professional conversations related to healthcare data analytics, healthcare AI, diagnostic innovation, medical technology, clinical research, real-world evidence, professional development and consulting interests.'
      ]),
      section('Keep the first message focused', [
        'A concise introduction, the relevant project or question and the kind of conversation you are looking for make it easier to identify a useful next step.'
      ])
    ],
    related: ['career-and-consulting', 'about-abdullah-al-qahtani', 'professional-mastery-community', 'linkedin'],
    primaryExternal: { label: 'Professional inquiries → LinkedIn', href: LINKEDIN_URL }
  }),
  page('achievements', {
    title: 'Projects & Professional Activities | Abdullah Al-Qahtani',
    description: 'Review verified project and professional activity categories across healthcare, diagnostics, research, community and GitHub work.',
    eyebrow: 'Projects and activities',
    h1: 'A record of work, not an invented awards page.',
    intro: 'This page organizes verified public activities and projects without turning interests into awards, publications or credentials that have not been documented.',
    topics: ['Projects', 'Research Activities', 'Technical Work', 'Community Building', 'Professional Development'],
    schema: 'CreativeWork',
    sections: [
      section('Technical projects', [
        'The verified Nail Health Analyzer repository is a research-grade technical prototype covering image QC, optical features, data ingestion and reproducible ML validation. It is a project/activity record, not a claim of clinical performance.'
      ]),
      section('Innovation and diagnostic research', [
        'Publicly described innovation interests include diagnostic concepts, optical and nail-bed imaging, healthcare AI and medical-device R&D. These are labeled as interests, concepts, prototypes or research directions where evidence is still developing.'
      ]),
      section('Research activities and professional development', [
        'Research themes include health data, real-world evidence, clinical research, genomics, infectious diseases, microbial genomics and antimicrobial resistance. The Professional Mastery Community adds professional advancement, innovation and research collaboration as activity areas.'
      ]),
      section('Verification boundary', [
        'No awards, patents, publications, employment history or partnerships are listed here without verified source material. Additional records can be added when they are public, attributable and safe to publish.'
      ])
    ],
    related: ['nail-health-analyzer', 'research-projects', 'professional-mastery-community', 'linkedin']
  })
];

const topicPages = [
  ['healthcare-ai', 'Healthcare AI', 'A cornerstone topic page for responsible healthcare AI, automation and validation.'],
  ['medical-device-innovation', 'Medical Device Innovation', 'A cornerstone topic page for medical-device R&D and evidence boundaries.'],
  ['diagnostic-technology', 'Diagnostic Technology', 'A topic hub for diagnostic workflows, optical signals and validation thinking.'],
  ['healthcare-data-analytics', 'Healthcare Data Analytics', 'A topic hub for health data quality, analytics and real-world evidence.'],
  ['bioinformatics', 'Bioinformatics', 'A topic hub for computational thinking across biology, health data and research.'],
  ['genomics', 'Genomics', 'A topic hub for genomics and microbial-genomics interests.'],
  ['clinical-research', 'Clinical Research', 'A topic hub for clinical research workflows and evidence.'],
  ['real-world-evidence', 'Real-World Evidence', 'A topic hub for observational health data and responsible interpretation.'],
  ['professional-development', 'Professional Development', 'A topic hub for professional positioning, advancement and learning.'],
  ['healthcare-innovation', 'Healthcare Innovation', 'A topic hub for practical innovation, prototyping and validation.']
];

for (const [slug, name, description] of topicPages) {
  if (pages.some((entry) => entry.slug === slug)) continue;
  pages.push(page(`topics/${slug}`, {
    title: `${name} | Abdullah Al-Qahtani Topic Hub`,
    description,
    eyebrow: 'SEO content hub',
    h1: `${name}: a focused topic in Abdullah’s authority system.`,
    intro: `This cornerstone topic page places ${name.toLowerCase()} within the wider relationship between healthcare, data, AI, diagnostics, research and innovation. It is a focused entry point, not a mass-produced blog archive.`,
    topics: [name, 'Healthcare Technology', 'Research', 'Innovation'],
    schema: 'ResearchProject',
    sections: [
      section(`Why ${name.toLowerCase()} matters here`, [
        `The topic connects to Abdullah’s professional direction through a research-focused healthcare technology lens. The emphasis is on clear questions, public-safe information, useful workflows and evidence that can be examined.`
      ]),
      section('How to explore the topic', [
        'Use the related authority pages below to move from the topic to a concrete project, research direction or professional development conversation. Where a concept is experimental, it remains labeled as experimental; where validation is not established, the page says so.'
      ]),
      section('A living content architecture', [
        'Future cornerstone articles can be added when they are based on verified project work, documented research activity or clearly sourced professional practice. The site will not fill this hub with generic keyword articles.'
      ])
    ],
    related: slug === 'healthcare-ai' ? ['healthcare-ai', 'nail-health-analyzer', 'research-projects', 'linkedin'] : ['innovation-and-research', 'research-projects', 'professional-mastery-community', 'linkedin']
  }));
}

export const pageByPath = new Map(pages.map((entry) => [entry.path, entry]));
export const pageBySlug = new Map(pages.map((entry) => [entry.slug, entry]));

export function absoluteUrl(path) {
  return `${SITE_ORIGIN.replace(/\/$/, '')}${path === '/' ? '/' : path}`;
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((text) => `<p>${esc(text)}</p>`).join('');
}

function renderItems(items) {
  if (!items.length) return '';
  return `<div class="insight-grid">${items.map((item) => `<article class="insight-card"><h3>${esc(item.label)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div>`;
}

function renderSection(entry) {
  return `<section class="content-section"><div class="section-marker" aria-hidden="true"></div><div class="section-copy"><h2>${esc(entry.title)}</h2>${renderParagraphs(entry.paragraphs)}${renderItems(entry.items)}</div></section>`;
}

function renderHeader(path) {
  const links = [
    ['/', 'Home'],
    ['/about-abdullah-al-qahtani', 'About'],
    ['/healthcare-ai', 'Healthcare AI'],
    ['/nail-health-analyzer', 'Project'],
    ['/professional-mastery-community', 'Community'],
    ['/linkedin', 'LinkedIn']
  ];
  return `<header class="site-header"><a class="skip-link" href="#main">Skip to content</a><div class="header-inner"><a class="brand" href="/" aria-label="Abdullah Al-Qahtani home"><img src="/brand-mark.svg" alt="" width="42" height="42"><span><strong>ABDULLAH</strong><small>Healthcare · Data · Innovation</small></span></a><nav aria-label="Primary navigation"><ul>${links.map(([href, label]) => `<li><a class="${path === href ? 'is-active' : ''}" href="${href}">${label}</a></li>`).join('')}</ul></nav><a class="header-link" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div></header>`;
}

function renderBreadcrumbs(entry) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Authority system</a><span aria-hidden="true">/</span><span>${esc(entry.h1)}</span></nav>`;
}

function renderTopics(topics = []) {
  return topics.length ? `<ul class="topic-list" aria-label="Topics">${topics.map((topic) => `<li>${esc(topic)}</li>`).join('')}</ul>` : '';
}

function renderRelated(entry) {
  const related = (entry.related || []).map((slug) => pageBySlug.get(slug)).filter(Boolean);
  if (!related.length) return '';
  return `<section class="related-section"><div><p class="eyebrow">Continue exploring</p><h2>Follow the signal.</h2><p>Move from this page to the related work, research direction or professional community context.</p></div><div class="related-links">${related.map((item) => `<a class="related-link" href="${item.path}"><span>${esc(item.eyebrow)}</span><strong>${esc(item.h1)}</strong><em aria-hidden="true">↗</em></a>`).join('')}</div></section>`;
}

function renderJsonLd(entry) {
  const graph = [
    { '@type': 'WebSite', '@id': `${SITE_ORIGIN}/#website`, url: SITE_ORIGIN, name: SITE_NAME, description: PERSON_DESCRIPTION, publisher: { '@id': `${SITE_ORIGIN}/#person` } },
    { '@type': 'Person', '@id': `${SITE_ORIGIN}/#person`, name: 'Abdullah Al-Qahtani', description: PERSON_DESCRIPTION, url: SITE_ORIGIN, sameAs: [LINKEDIN_URL, GITHUB_URL], knowsAbout: ['Healthcare Data Analytics', 'Healthcare AI', 'Bioinformatics and Genomics', 'Medical Device R&D', 'Diagnostic Innovation', 'Clinical Research', 'Real-World Evidence'] },
    { '@type': 'WebPage', '@id': `${absoluteUrl(entry.path)}#webpage`, url: absoluteUrl(entry.path), name: entry.title, description: entry.description, isPartOf: { '@id': `${SITE_ORIGIN}/#website` }, about: { '@id': `${SITE_ORIGIN}/#person` }, breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Authority system', item: SITE_ORIGIN }, { '@type': 'ListItem', position: 2, name: entry.h1, item: absoluteUrl(entry.path) }] } }
  ];
  if (entry.schema === 'SoftwareApplication') {
    graph.push({ '@type': 'SoftwareApplication', name: 'Nail Health Analyzer V4.1', applicationCategory: 'HealthApplication', operatingSystem: 'Cross-platform', url: GITHUB_URL, description: 'A research-grade data-ingestion, image-QC, optical-feature and reproducible machine-learning validation prototype. Clinical performance is not claimed.', author: { '@id': `${SITE_ORIGIN}/#person` } });
  } else if (entry.schema === 'ResearchProject') {
    graph.push({ '@type': 'ResearchProject', name: entry.h1, description: entry.description, url: absoluteUrl(entry.path), funder: undefined, member: { '@id': `${SITE_ORIGIN}/#person` } });
  } else if (entry.schema === 'CreativeWork') {
    graph.push({ '@type': 'CreativeWork', name: entry.h1, description: entry.description, url: absoluteUrl(entry.path), creator: { '@id': `${SITE_ORIGIN}/#person` } });
  }
  const cleanGraph = graph.map((item) => Object.fromEntries(Object.entries(item).filter(([, value]) => value !== undefined)));
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': cleanGraph })}</script>`;
}

function renderCta(entry) {
  const external = entry.primaryExternal || { label: 'Connect with Abdullah on LinkedIn', href: LINKEDIN_URL };
  return `<section class="destination"><div><p class="eyebrow">Primary professional destination</p><h2>Keep the professional profile in view.</h2><p>The authority pages explain the work. LinkedIn is the place to connect with Abdullah and follow his professional direction.</p></div><div class="destination-actions"><a class="button button-primary" href="${external.href}" target="_blank" rel="noreferrer">${esc(external.label)} <span aria-hidden="true">↗</span></a><a class="button button-quiet" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">View Abdullah’s professional profile</a></div></section>`;
}

export function renderPage(entry) {
  const keywords = (entry.topics || []).slice(0, 8).join(', ');
  const path = entry.path;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(entry.title)}</title><meta name="description" content="${esc(entry.description)}"><meta name="keywords" content="${esc(keywords)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${absoluteUrl(path)}"><meta property="og:type" content="${path === '/' ? 'website' : 'article'}"><meta property="og:title" content="${esc(entry.title)}"><meta property="og:description" content="${esc(entry.description)}"><meta property="og:url" content="${absoluteUrl(path)}"><meta property="og:site_name" content="${esc(SITE_NAME)}"><meta property="og:image" content="${absoluteUrl('/brand-mark.svg')}"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${esc(entry.title)}"><meta name="twitter:description" content="${esc(entry.description)}"><meta name="twitter:image" content="${absoluteUrl('/brand-mark.svg')}"><meta name="theme-color" content="#102329"><link rel="icon" href="/brand-mark.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css">${renderJsonLd(entry)}</head><body>${renderHeader(path)}<main id="main"><div class="page-shell">${renderBreadcrumbs(entry)}<section class="hero"><div class="hero-copy"><p class="eyebrow">${esc(entry.eyebrow)}</p><h1>${esc(entry.h1)}</h1><p class="hero-intro">${esc(entry.intro)}</p><div class="hero-actions"><a class="button button-primary" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>${path === '/' || path.includes('github') || path.includes('nail-health') ? `<a class="button button-quiet" href="${GITHUB_URL}" target="_blank" rel="noreferrer">View GitHub project</a>` : `<a class="button button-quiet" href="/research-projects">Explore research direction</a>`}</div></div><aside class="hero-aside"><div class="signal-panel"><span class="signal-dot"></span><span>Healthcare · Data · AI · Diagnostics</span><div class="signal-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><small>Research-focused / public-safe</small></div>${renderTopics(entry.topics)}</aside></section><div class="content-layout"><article>${entry.sections.map(renderSection).join('')}</article><aside class="side-note"><p class="eyebrow">Identity thread</p><p><strong>Abdullah Al-Qahtani</strong></p><p>${esc(PERSON_DESCRIPTION)}</p><a href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">Follow the professional profile ↗</a></aside></div>${renderRelated(entry)}${renderCta(entry)}</div></main><footer class="site-footer"><div><strong>ABDULLAH AL-QAHTANI</strong><span>Healthcare Data · AI · Diagnostics · Innovation</span></div><div><a href="/sitemap.xml">Sitemap</a><a href="/robots.txt">Robots</a><a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer></body></html>`;
}

export function render404() {
  const entry = { ...pages[0], title: 'Page not found | Abdullah Al-Qahtani', description: 'The requested page was not found.', h1: 'This signal is not available.', intro: 'The page you requested does not exist in the public authority system.', path: '/404' };
  return renderPage(entry).replace('<meta name="robots" content="index,follow">', '<meta name="robots" content="noindex,follow">');
}

export function buildSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((entry) => `  <url><loc>${esc(absoluteUrl(entry.path))}</loc><changefreq>monthly</changefreq><priority>${entry.path === '/' ? '1.0' : entry.path === '/linkedin' ? '0.9' : '0.7'}</priority></url>`).join('\n')}\n</urlset>\n`;
}

export function buildRobots() {
  return `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /private/\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`;
}

export function buildRoutesManifest() {
  return { routes: pages.map((entry) => ({ path: entry.path, title: entry.title })) };
}
