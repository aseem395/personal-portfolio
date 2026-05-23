export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  
  // Extended structured fields for the individual project case study
  challenge?: string;
  solution?: string;
  features?: string[];
  metrics?: { label: string; value: string }[];
  gallery?: string[]; // Optional gallery images
  
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection using U-Net Variants",
    category: "DEEP LEARNING / MEDICAL IMAGING / ARCHITECTURE COMPARISON",
    description: "Compared 8 U-Net architectures for retinal image segmentation and optical disc analysis. Performed end-to-end segmentation, masking, preprocessing, and augmentation on retinal datasets.",
    challenge: "Detecting diabetic retinopathy in early stages is critical to preventing vision loss, but manual extraction of the optical disc and retinal vessels from fundus images is highly subjective and prone to error. There is a need for highly robust segmentation architectures capable of filtering noise and inconsistent lighting conditions.",
    solution: "Compared 8 distinct variants of the U-Net architecture to determine optimal performance for retinal image segmentation. Executed end-to-end masking, preprocessing, and augmentation pipelines to handle image noise and standardize datasets. Evaluated models rigorously against Dice coefficient and IoU metrics.",
    features: [
      "8 U-Net Variant Comparisons",
      "Automated Optical Disc Masking",
      "Custom Data Augmentation Pipelines",
      "End-to-End Image Preprocessing",
      "Dice Coefficient & IoU Evaluation"
    ],
    metrics: [
      { value: "8", label: "ARCHITECTURES" },
      { value: "DICE", label: "METRIC" },
      { value: "IoU", label: "EVALUATION" }
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
    image: "/projects/unet.png"
  },
  {
    slug: "autonomous-agents",
    title: "AUTONOMOUS BUSINESS WORKFLOWS & AGENTS",
    category: "APPLIED AI / WORKFLOW AUTOMATION / SYSTEM APIS",
    description: "Architected cross-functional LLM conversational engines and automated data management layers utilizing direct REST API mappings. Eliminated overhead across transaction layers.",
    challenge: "Traditional business workflows suffer from massive data friction across transaction layers, requiring heavy manual intervention to move data between platforms, answer queries, and execute messaging pipelines.",
    solution: "Architected cross-functional LLM conversational engines hooked directly into automated data management layers using custom REST APIs. Deployed tailored internal operational software and connectors to orchestrate fully autonomous interactions and transaction routing.",
    features: [
      "LLM Conversational Engines",
      "Direct REST API Mappings",
      "Automated Messaging Pipelines",
      "Custom Programmatic Connectors",
      "Transaction Routing"
    ],
    metrics: [
      { value: "0", label: "MANUAL FRICTION" },
      { value: "24/7", label: "AUTOMATION" },
      { value: "REST", label: "ARCHITECTURE" }
    ],
    techStack: ["Python", "OpenAI API", "FastAPI", "Docker"],
    image: "/projects/4.png"
  },
  {
    slug: "wildlife-cnn",
    title: "Advanced Wildlife Image Classification using CNNs",
    category: "DEEP LEARNING / COMPUTER VISION / CONSERVATION",
    description: "Built an advanced wildlife image classification system to address severe class imbalance in a dataset of 26,179 images across 10 wildlife species.",
    challenge: "Wildlife image datasets suffer from severe class imbalance, causing traditional models to drastically overfit on common species while entirely missing endangered minority classes.",
    solution: "Developed an advanced deep learning pipeline utilizing EfficientNet-B0. Implemented highly sophisticated imbalance-handling techniques including Focal Loss, Class-Balanced Loss, MixUp, CutMix, and weighted random sampling to forcefully balance predictions across all classes. Integrated Grad-CAM for explainability.",
    features: [
      "EfficientNet-B0 Backbone",
      "Focal & Class-Balanced Loss",
      "MixUp & CutMix Augmentation",
      "Grad-CAM Explainability Visualizations",
      "AdamW & Cosine Annealing Scheduler"
    ],
    metrics: [
      { value: "97.0%", label: "ACCURACY" },
      { value: "96.7%", label: "MACRO F1" },
      { value: "26K", label: "IMAGES" },
      { value: "10", label: "SPECIES" }
    ],
    techStack: ["Python", "PyTorch", "TorchVision", "TIMM", "Albumentations", "Scikit-learn"],
    image: "/projects/wildlife.png"
  },
  {
    slug: "pcos-detection",
    title: "[REDACTED] – Clinical Predictive Model",
    category: "MACHINE LEARNING / CLINICAL DATA / IN DEVELOPMENT",
    description: "Currently engineering an advanced machine learning architecture leveraging structured clinical datasets to support early diagnostic workflows. Actively optimizing feature extraction.",
    challenge: "A highly classified clinical requirement for robust predictive modeling on structured patient datasets to enable earlier diagnostic support workflows. Real-world deployment dictates near-zero false negative tolerance.",
    solution: "Currently engineering an advanced machine learning architecture focused on extreme feature extraction optimization. The system is undergoing rigorous testing phases across complex clinical datasets to deploy highly accurate predictive tooling. Details remain strictly classified.",
    features: [
      "Robust Feature Engineering",
      "Complex Preprocessing Pipelines",
      "Rigorous Model Comparison",
      "Clinical Dataset Integration",
      "Real-world Deployment Readiness"
    ],
    metrics: [
      { value: "NDA", label: "CLASSIFIED" },
      { value: "LIVE", label: "TESTING" }
    ],
    techStack: ["Python", "Machine Learning", "Data Science", "Clinical Analysis"],
    image: "/projects/2.png"
  },
  {
    slug: "mediverse",
    title: "Mediverse – Medical Learning Platform",
    category: "REACT NATIVE / THREE.JS / MEDICAL EDUCATION",
    description: "Contributed to the development of a large-scale medical learning mobile application using React Native and TypeScript, featuring interactive 3D anatomy modules.",
    challenge: "Medical students required an interactive, high-fidelity application to study complex 3D anatomical models and retain information actively via smart annotation systems, all within a performant mobile environment.",
    solution: "Built a large-scale React Native application featuring a 3D interactive learning module powered by React Three Fiber. Developed smart note-taking, complex quiz logic validation, and AI-powered Redux-managed chat assistants.",
    features: [
      "Interactive 3D Anatomy Module",
      "Zoom & Part-Level Interaction",
      "Smart Canvas Image Annotations",
      "AI-Powered Chat Assistant",
      "Complex Quiz State Logic"
    ],
    metrics: [
      { value: "3D", label: "INTERACTION" },
      { value: "R3F", label: "RENDERING ENGINE" },
      { value: "AI", label: "ASSISTANT" }
    ],
    techStack: ["React Native", "TypeScript", "Three.js", "Redux Toolkit"],
    image: "/projects/mediverse.png"
  },
  {
    slug: "actikev",
    title: "Actikev – Mobile Application",
    category: "MOBILE SYSTEMS / REAL-TIME DATA / PAYMENT GATEWAYS",
    description: "Built and deployed a production-grade React Native application. Implemented authentication, booking flows, payments via Stripe, and comprehensive user management.",
    challenge: "Required a production-grade mobile platform capable of securely handling user authentication, live data synchronization, and integrated financial payment gateways without compromising on performance.",
    solution: "Built and deployed a React Native application from the ground up. Integrated secure Stripe payments, comprehensive user management, and real-time Firebase backend synchronization. Managed full CI/CD deployment pipelines via Expo EAS and TestFlight.",
    features: [
      "Secure Stripe Payments",
      "Real-time Database Synchronization",
      "Complex Booking Workflows",
      "Expo EAS CI/CD Pipelines",
      "Comprehensive User Management"
    ],
    metrics: [
      { value: "LIVE", label: "PAYMENTS" },
      { value: "100%", label: "UPTIME" },
      { value: "CI/CD", label: "DEPLOYMENT" }
    ],
    techStack: ["React Native", "Node.js", "Stripe", "Firebase"],
    image: "/projects/3.png"
  },
  {
    slug: "1xowl",
    title: "1xOwl – Lottery Gaming Mobile Application",
    category: "REACT NATIVE / MOBILE GAMING / INTERNSHIP",
    description: "Designed and developed the complete mobile application frontend from scratch for a lottery gaming platform using React Native (Expo) and TypeScript.",
    challenge: "Developing a highly scalable mobile frontend for a high-traffic lottery platform, requiring intensely secure session handling, real-time countdown logic, and financial wallet management.",
    solution: "Designed the complete frontend utilizing React Native and TypeScript. Integrated robust REST API service layers with Zustand state management. Delivered zero-latency timer systems and secure transaction architectures aligned directly with complex Figma specifications.",
    features: [
      "OTP Session Authentication",
      "Live Countdown Timers",
      "Financial Wallet Management",
      "Referral & Bonus Engines",
      "React Query Data Caching"
    ],
    metrics: [
      { value: "0ms", label: "TIMER LATENCY" },
      { value: "100%", label: "FIGMA MATCH" },
      { value: "REST", label: "API ARCHITECTURE" }
    ],
    techStack: [
      "React Native", 
      "Expo EAS", 
      "TypeScript", 
      "Zustand", 
      "React Query", 
      "React Navigation"
    ],
    image: "/projects/1xowl.png"
  }
];
