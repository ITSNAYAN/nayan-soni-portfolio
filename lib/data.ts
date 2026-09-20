export const profile = {
  name: "Nayan Soni",
  initials: "NS",
  role: "Flutter Developer",
  location: "India",
  email: "soninayan82@gmail.com",
  phone: "+91-8827966816",
  resumeUrl: "https://drive.google.com/file/d/1OxELtMKn7lcvrUmNPLXL_8W_gTssMW4w/view?usp=sharing",
  socials: {
    github: "https://github.com/ITSNAYAN",
    linkedin: "https://www.linkedin.com/in/nayan-soni-68047a1b8/",
  },
  headline: "I Build Apps That Ship, Not Just Demos",
  subHeadline:
    "Flutter developer turning Figma files into live apps on the Play Store and App Store. 1.5+ years, 5 shipped products, zero patience for laggy UIs.",
  rotatingRoles: [
    "Flutter Developer",
    "Mobile Architect",
    "Play Store · App Store shipper",
    "Clean Architecture advocate",
  ],
  stats: [
    { value: "2+", label: "years experience" },
    { value: "5", label: "apps shipped" },
    { value: "2", label: "stores live on" },
  ],
};

export const about = [
  `I didn’t get into this to write code that sits in a terminal —
I wanted to see it
in someone’s hand,
on their phone,
actually being used.`,
  `Since day one, I’ve been obsessed with the full cycle —
not just the code, but the pixel-matching,
the payment flows that shouldn’t break,
the moment you hit “publish”
and it’s live.`,
  `I’m from Pune, India,
and I’ve spent my career shipping apps
that don’t just work — they feel right.`,
  `I started at JILIT, leading four apps
from Figma file to app store listing —
a student portal used across a university,
a payment gateway that cut failures by 25%,
an employee app delivered 20% ahead of schedule.`,
  `My recent work includes building the mobile side of Helium AI,
a real-time AI chat app with live WebSocket connections,
auto-reconnect logic,
and a native feel on both iOS and Android.`,
  `If your app needs to feel fast, look right,
and actually work when it matters —
that’s the part I care about most.`,
];

export const stack = [
  {
    group: "Mobile",
    items: ["Flutter", "Dart", "Android", "iOS", "Firebase (FCM · Auth · Firestore)"],
  },
  {
    group: "Architecture & State",
    items: ["Clean Architecture", "MVVM", "MVC", "BLoC · Cubit", "GetX", "Provider"],
  },
  {
    group: "Backend Integration",
    items: ["REST APIs", "WebSockets", "JWT Auth", "Stripe", "EaseBuzz", "Postman"],
  },
  {
    group: "Web",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    group: "Languages & DB",
    items: ["Dart", "Java", "SQL", "MySQL", "Oracle"],
  },
  {
    group: "Tools",
    items: ["Android Studio", "Xcode", "Git · GitHub", "Figma", "Flutter DevTools"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  projects: {
    name: string;
    bullets: string[];
    stores?: { play?: string; app?: string };
  }[];
};

export const experience: Experience[] = [
  {
    company: "Neural Arc",
    role: "Mobile Application Developer",
    period: "Jan 2026 — Present",
    summary:
      "Neural Arc builds AI products and solutions that help businesses automate, innovate, and grow with smarter technology.",
    projects: [
      {
        name: "Helium AI — Chat Application",
        bullets: [
          "Owned end-to-end delivery of the Helium AI chat app — from UI/UX implementation to production release on Play Store and App Store.",
          "Engineered real-time conversational AI using WebSockets with auto-reconnect and message queuing; integrated Google Sign-In, Sign in with Apple, and JWT-based session management with token refresh.",
          "Optimized performance via Flutter DevTools profiling, pagination, and multi-layer local caching; wrote platform-specific code (iOS/Android) for a truly native look and feel.",
        ],
      },
      {
        name: "Helium AI — Admin Panel",
        bullets: [
          "Built a Flutter admin panel using Clean Architecture + Cubit to monitor product and operational work — reducing manual analysis effort by ~20%.",
          "Designed interactive analytics dashboards with fl_chart and CustomPaint to visualize user growth, credit usage, Stripe payments, and Google Analytics; integrated FCM for real-time alerts.",
          "Optimized with lazy loading, chunk-based pagination, and cache-then-network with auto-refresh — cut dashboard load time by ~20% and improved responsiveness by ~40%.",
        ],
      },
    ],
  },
  {
    company: "JIL Information Technology Ltd. (JILIT)",
    role: "Mobile Application Developer",
    period: "Aug 2024 — Dec 2025",
    summary:
      "Jaypee Group’s CMMI Level 3 certified IT services arm — delivering enterprise software solutions and digital transformation services.",
    projects: [
      {
        name: "JIIT Scholar Online",
        bullets: [
          "Led end-to-end module delivery — UI/UX, Flutter development, API integration, payments, and Play Store / App Store deployment.",
          "Built OTP-based authentication and core student modules (attendance, faculty registration, feedback, student reports, hostel & medical records); improved data retrieval efficiency by ~30%.",
          "Integrated EaseBuzz payment gateway and translated Figma designs into pixel-perfect UIs using GetX — reduced payment failures by ~25% and shipped ~20% faster.",
        ],
      },
      {
        name: "JILIT-ESS (Employee Self-Service)",
        bullets: [
          "Integrated EaseBuzz payment gateway in collaboration with backend teams — reducing payment failures by ~25%.",
          "Transformed Figma designs into pixel-perfect responsive Flutter UIs with GetX — improved responsiveness by ~40% and helped deliver the project ~20% faster.",
        ],
      },
      {
        name: "Olympus-Wellness",
        bullets: [
          "Built a psychotherapy Flutter app enabling appointment booking, doctor profiles, and secure EaseBuzz payments using GetX state management.",
          "Handled API integration with proper error handling and local caching; collaborated with backend to ensure reliable data flow across the app.",
        ],
      },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  role: string;
  year: string;
  tech: string[];
  category: "AI" | "Enterprise" | "Health" | "Admin";
  company: string;
  links: { play?: string; app?: string; github?: string };
  accent: string;
  imageUrl?: string;
  fullMockup?: boolean;
};

export const projects: Project[] = [
  {
    slug: "helium-ai",
    name: "Helium AI",
    tagline: "Real-time conversational AI, on your phone.",
    description:
      "End-to-end Flutter chat app with WebSocket streaming, Google & Apple sign-in, JWT auth, and multi-layer caching. Shipped to Play Store and App Store.",
    longDescription:
      "Helium AI is Neural Arc’s flagship conversational AI product — a Flutter chat app I owned end-to-end from UI/UX to production release on both stores. The app streams responses in real time via WebSockets with auto-reconnect and message queuing, handles Google & Apple sign-in with JWT sessions and silent token refresh, and stays responsive under load thanks to multi-layer caching and pagination. I profiled everything in Flutter DevTools and wrote platform-specific code (iOS/Android) so the app feels native on both.",
    features: [
      "Real-time WebSocket streaming with auto-reconnect + queued delivery",
      "Google Sign-In, Sign in with Apple, and JWT session refresh",
      "Multi-layer local caching for offline history & instant reopens",
      "Platform-specific iOS/Android tweaks for truly native feel",
      "Chunked pagination + lazy loading for long conversations",
    ],
    role: "Sole Mobile Engineer",
    year: "2026",
    tech: ["Flutter", "WebSockets", "JWT", "Firebase", "Clean Architecture"],
    category: "AI",
    company: "Neural Arc",
    links: {},
    accent: "from-[#F4C2A1]/40 to-[#ff5f8a]/30",
    imageUrl: "/helium-ai.png",
  },
  {
    slug: "helium-admin",
    name: "Helium Admin",
    tagline: "Analytics dashboard for the Helium AI platform.",
    description:
      "Flutter admin panel with fl_chart & CustomPaint visualizations for user growth, credit usage, Stripe payments, and GA insights. Cut load time by 20%.",
    longDescription:
      "The internal ops dashboard for the Helium AI ecosystem — built in Flutter with Clean Architecture + Cubit. It surfaces user growth, credit usage, Stripe payments and Google Analytics insights in interactive charts (fl_chart + CustomPaint). I optimized cold load with lazy loading + chunk-based pagination and a cache-then-network strategy with silent refresh — cutting dashboard load time by ~20% and improving perceived responsiveness by ~40%. FCM keeps the ops team alerted in real time.",
    features: [
      "Interactive charts for growth, credits, revenue & GA metrics",
      "Cache-then-network refresh — instant paints, silent updates",
      "Chunk-based pagination + lazy loading across all tables",
      "Firebase Cloud Messaging for real-time ops alerts",
      "Clean Architecture + Cubit for scalable, testable state",
    ],
    role: "Sole Flutter Engineer",
    year: "2026",
    tech: ["Flutter", "Cubit", "fl_chart", "Stripe", "FCM"],
    category: "Admin",
    company: "Neural Arc",
    links: {},
    accent: "from-[#ffb178]/40 to-[#F4C2A1]/30",
    imageUrl: "/helium-admin.png",
    fullMockup: true,
  },
  {
    slug: "jiit-scholar-online",
    name: "JIIT Scholar Online",
    tagline: "Student life, one app.",
    description:
      "Attendance, faculty registration, feedback, reports, hostel & medical records — with OTP auth and EaseBuzz payments. Improved data retrieval by 30%.",
    longDescription:
      "A university-scale student portal that consolidates attendance tracking, faculty registration, feedback, reports, hostel & medical records into a single Flutter app. I led end-to-end module delivery — UI from Figma, GetX-driven state, REST integrations, EaseBuzz payments, and Play/App Store deployment. Tuned data-fetching improved retrieval efficiency by ~30% and payment-flow rework cut failures by ~25%.",
    features: [
      "OTP-based authentication for secure student access",
      "Attendance, feedback, reports, hostel & medical modules",
      "EaseBuzz payment integration with retry + reconciliation",
      "Pixel-perfect Figma-to-Flutter with GetX state management",
      "Shipped to Play Store & App Store end-to-end",
    ],
    role: "Mobile Application Developer",
    year: "2024 — 2025",
    tech: ["Flutter", "GetX", "EaseBuzz", "REST APIs"],
    category: "Enterprise",
    company: "JILIT",
    links: {},
    accent: "from-[#7cc9ff]/30 to-[#F4C2A1]/20",
    imageUrl: "/jiit-scholar-mockup.png",
    fullMockup: true,
  },
  {
    slug: "jilit-ess",
    name: "JILIT-ESS",
    tagline: "Employee self-service for Jaypee Group.",
    description:
      "Pixel-perfect responsive Flutter UI translated from Figma using GetX. Reduced payment failures by 25% and improved responsiveness by 40%.",
    longDescription:
      "The employee self-service app for Jaypee Group — a Flutter re-implementation of a legacy web tool. Focus was pixel-perfect Figma parity, responsive layouts across device sizes, and reliable EaseBuzz payment flows. Collaboration with the backend team on error taxonomy reduced payment failures by ~25%; layout & rebuild optimizations improved UI responsiveness by ~40% and shipped the project ~20% ahead of schedule.",
    features: [
      "Pixel-perfect Figma translation across phone & tablet",
      "EaseBuzz payment integration with graceful failure handling",
      "GetX state management for reactive, testable flows",
      "Responsive layouts hitting 60fps on mid-tier Android",
      "Live on Play Store & App Store",
    ],
    role: "Mobile Application Developer",
    year: "2024 — 2025",
    tech: ["Flutter", "GetX", "EaseBuzz", "Figma"],
    category: "Enterprise",
    company: "JILIT",
    links: {},
    accent: "from-[#b5f0c0]/25 to-[#F4C2A1]/25",
    imageUrl: "/jilit-ess.png",
  },
  {
    slug: "olympus-wellness",
    name: "Olympus Wellness",
    tagline: "Psychotherapy appointments made simple.",
    description:
      "Flutter app for booking sessions, browsing doctor profiles, and processing secure payments — with robust error handling and offline caching.",
    longDescription:
      "A psychotherapy scheduling app that lets patients browse verified therapist profiles, book sessions, and pay securely via EaseBuzz. Built in Flutter with GetX state management and offline-first caching so users can still access upcoming appointments without a signal. Error handling is layered so payment retries and API blips never lose booking state.",
    features: [
      "Doctor discovery with profiles, specialties, and availability",
      "Secure EaseBuzz payment flow with retry logic",
      "Offline-first caching for appointments & profiles",
      "Structured error handling across API & payment layers",
      "GetX-based reactive UI",
    ],
    role: "Mobile Application Developer",
    year: "2024 — 2025",
    tech: ["Flutter", "GetX", "REST APIs", "EaseBuzz"],
    category: "Health",
    company: "JILIT",
    links: {},
    accent: "from-[#e6a1ff]/25 to-[#F4C2A1]/25",
    imageUrl: "/olympus-wellness.png",
  },
];

export const education = [
  {
    school: "Jaypee University of Engineering and Technology",
    degree: "B.Tech in Computer Science Engineering",
    period: "2020 — 2024",
  },
  {
    school: "New Life Public School",
    degree: "Senior Secondary (Class XII)",
    period: "2019 — 2020",
  },
];

export const achievements = [
  "Value Contribution Award — JILIT",
  "McKinsey.org Forward Program",
  "UX Virtual Experience Programme",
  "JavaScript Basics",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
