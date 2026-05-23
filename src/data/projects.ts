export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  
  // Extended fields for the individual project page
  fullDescription?: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection using U-Net Variants",
    category: "DEEP LEARNING / MEDICAL IMAGING / ARCHITECTURE COMPARISON",
    description: "Compared 8 U-Net architectures for retinal image segmentation and optical disc analysis. Performed end-to-end segmentation, masking, preprocessing, and augmentation on retinal datasets. Evaluated models using Dice coefficient and IoU metrics. Built using Python and TensorFlow/PyTorch.",
    fullDescription: "Detailed case study coming soon...",
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
    image: "/projects/unet.png"
  },
  {
    slug: "autonomous-agents",
    title: "AUTONOMOUS BUSINESS WORKFLOWS & AGENTS",
    category: "APPLIED AI / WORKFLOW AUTOMATION / SYSTEM APIS",
    description: "Architected cross-functional LLM conversational engines and automated data management layers utilizing direct REST API mappings. Developed tailored internal operational software, custom programmatic connectors, and automated messaging pipelines to eliminate overhead across transaction layers.",
    fullDescription: "Detailed case study coming soon...",
    techStack: ["Python", "OpenAI API", "FastAPI", "Docker"],
    image: "/projects/4.png"
  },
  {
    slug: "wildlife-cnn",
    title: "Advanced Wildlife Image Classification using CNNs",
    category: "DEEP LEARNING / COMPUTER VISION / CONSERVATION",
    description: "Built an advanced wildlife image classification system to address severe class imbalance in a dataset of 26,179 images across 10 wildlife species.",
    fullDescription: "Developed and trained a deep learning pipeline using EfficientNet-B0 with advanced imbalance-handling techniques including Focal Loss, Class-Balanced Loss, MixUp, CutMix, and weighted random sampling.\n\nAchieved 97.02% classification accuracy with strong minority-class performance and a 96.73% Macro F1-score, demonstrating balanced predictions across all classes. Integrated Grad-CAM visualizations for model interpretability and analysis of decision regions.\n\nKey Highlights:\n- Developed a CNN-based wildlife image classification system using PyTorch and EfficientNet-B0\n- Solved class imbalance problems using Focal Loss, Class-Balanced Loss, and Weighted Random Sampling\n- Applied advanced augmentations including MixUp, CutMix, and Albumentations transforms\n- Achieved 97.02% Accuracy and 96.73% Macro F1-score with strong minority-class recognition\n- Implemented Grad-CAM for explainable AI and model interpretability\n- Used AdamW optimizer, cosine annealing scheduler, and early stopping for stable training\n\nApplications:\n- Wildlife conservation, biodiversity monitoring, endangered species detection, eco-tourism, livestock monitoring, and educational wildlife identification systems.",
    techStack: ["Python", "PyTorch", "TorchVision", "TIMM", "Albumentations", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
    image: "/projects/wildlife.png"
  },
  {
    slug: "pcos-detection",
    title: "[REDACTED] – Clinical Predictive Model",
    category: "MACHINE LEARNING / CLINICAL DATA / IN DEVELOPMENT",
    description: "Currently engineering an advanced machine learning architecture leveraging structured clinical datasets to support early diagnostic workflows. Actively optimizing feature extraction and predictive accuracy. Full project details remain classified until development concludes.",
    fullDescription: "This system is currently undergoing active development and testing phases.\n\nFocusing heavily on robust feature engineering, preprocessing pipelines, and rigorous model comparison metrics across complex clinical datasets. The primary objective is to deploy an highly accurate predictive tool for early diagnostic support in real-world environments.\n\nArchitectural details, dataset methodologies, and deployment configurations will be released upon project completion.",
    techStack: ["Python", "Machine Learning", "Data Science", "Clinical Analysis"],
    image: "/projects/2.png"
  },
  {
    slug: "mediverse",
    title: "Mediverse – Medical Learning Platform",
    category: "REACT NATIVE / THREE.JS / MEDICAL EDUCATION",
    description: "Contributed to the development of a large-scale medical learning mobile application using React Native (Expo) and TypeScript, focusing on interactive learning experiences and platform stability.",
    fullDescription: "Designed and implemented the interactive 3D anatomy learning module using Three.js and React Three Fiber, enabling real-time exploration of anatomical models with zoom, rotation, and part-level interaction.\n\nBuilt a smart note-taking system including drawing canvas, image annotations, and text-based notes to support active medical study workflows.\n\nWorked on the quiz system, primarily fixing logic issues, improving reliability, and resolving edge cases to ensure accurate assessments and smooth user experience.\n\nIntegrated and stabilized an AI-powered chat assistant, focusing on state management and API communication using Redux Toolkit.",
    techStack: ["React Native", "TypeScript", "Three.js", "Redux Toolkit"],
    image: "/projects/mediverse.png"
  },
  {
    slug: "actikev",
    title: "Actikev – Mobile Application",
    category: "MOBILE SYSTEMS / REAL-TIME DATA / PAYMENT GATEWAYS",
    description: "Built and deployed a production-grade React Native application. Implemented authentication, booking flows, payments via Stripe, and comprehensive user management. Integrated REST APIs and real-time data handling, with deployment managed via Expo EAS and TestFlight.",
    fullDescription: "Detailed case study coming soon...",
    techStack: ["React Native", "Node.js", "Stripe", "Firebase"],
    image: "/projects/3.png"
  },
  {
    slug: "1xowl",
    title: "1xOwl – Lottery Gaming Mobile Application",
    category: "REACT NATIVE / MOBILE GAMING / INTERNSHIP",
    description: "Designed and developed the complete mobile application frontend from scratch for a lottery gaming platform using React Native (Expo) and TypeScript, integrating with an existing backend system. Implemented OTP authentication, lottery ticket purchasing, wallet management, and real-time countdown timers.",
    fullDescription: "Built scalable navigation using stack and tab navigators, implemented form handling and validation, and developed reusable UI components aligned with Figma designs.\n\nIntegrated REST APIs for lottery games, wallet operations, payments, and user data using structured service layers with secure token handling. Implemented real-time features such as lottery countdown timers, results tracking, and balance updates, along with notifications and user feedback flows.\n\nOptimized performance through efficient state management, caching strategies, and modular architecture, and delivered internal builds for QA and client review.\n\nKey Features Highlighted:\n- OTP-based authentication & secure session handling\n- Multiple lottery game types with live countdown timers\n- Ticket purchasing & prize tracking\n- Wallet system with deposits, withdrawals & transaction history\n- Referral & bonus management\n- Leaderboards & notifications\n- Fully responsive UI matching Figma designs",
    techStack: [
      "React Native", 
      "Expo / Expo EAS", 
      "TypeScript", 
      "REST API Integration", 
      "Zustand", 
      "React Query (TanStack)", 
      "React Navigation", 
      "Mobile UI Development", 
      "Secure Storage & Authentication"
    ],
    image: "/projects/1xowl.png"
  }
];
