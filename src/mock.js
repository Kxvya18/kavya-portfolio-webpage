// Mock data - Kavya Kalavala's AI Engineer / ML / Graph Intelligence portfolio

export const heroData = {
  name: "Kavya Kalavala",
  eyebrow: "AI Engineering / ML Research / Graph Intelligence",
  headline: "Building AI systems with math, graphs, and code.",
  summary:
    "Computer Science (Data Science) undergraduate building ML systems that are tested honestly: forecasting and MLOps, graph and temporal learning, generative models, EEG and biomedical AI, security ML, and agentic LLM systems.",
  labels: ["AI engineering", "LLM systems", "Graphs + topology", "Model evaluation"],
};

export const researchStrip = [
  "Graph ML",
  "Generative AI",
  "NeuroAI / EEG",
  "Biomedical AI",
  "Security ML",
  "Agentic LLM Systems",
  "Uncertainty & Calibration",
  "Quantum ML",
];

export const profile = {
  heading: "Research curiosity, engineering discipline, and systems thinking.",
  p1: "I like problems where raw information has to become structure: prompts into reasoning graphs, documents into retrievable chunks, EEG into topology features, physiological telemetry into fuzzy states, and code/data artifacts into testable AI-system workflows.",
  p2: "My work spans AI/ML/DL, LLM systems, graph theory, network science, hypergraphs, topology, mathematical AI, model reliability, data science, cybersecurity, healthcare AI, and software workflows with APIs, dashboards, evaluation, and documentation.",
};

export const filters = ["All", "LLM", "ML", "Graphs", "Systems"];

export const selectedWork = [
  {
    "id": "delegnet",
    "title": "DelegNet: Malicious EIP-7702 Delegation Detection",
    "category": "Security ML",
    "tag": "ML",
    "repo": "https://github.com/Kxvya18/DelegNet",
    "text": "Pre-signature detection of wallet-draining delegations from bytecode alone; zero-day evaluation on 637K real authorizations.",
    "detail": {
      "title": "DelegNet: Canonical Code-Pattern Recognition for Pre-Signature Detection of Malicious EIP-7702 Delegations",
      "summary": "Detects malicious Ethereum EIP-7702 delegations before the user signs. A pattern-recognition module canonicalises delegate bytecode to remove attacker disguises, extracts interpretable theft idioms, and scores contracts against a family-exclusive memory with case-based explanations.",
      "stack": "Python, PyTorch, temporal graph networks, bytecode analysis, on-chain data (Ethereum), scikit-learn.",
      "pipeline": "Build a labelled dataset from observed theft outcomes, canonicalise bytecode, extract idioms, score by signed similarity, evaluate under a zero-day protocol that withholds whole code families and under adaptive attacks.",
      "outputs": "Released dataset (637,846 authorizations, 464,178 accounts, 661 contracts), IEEE TIFS-format manuscript, 12 figures, all tables as CSV.",
      "metrics": "Recall 0.984 under every attack; AUROC 0.946 on the first victim of a new contract; 0.16% false-alarm rate when screening signature requests."
    }
  },
  {
    "id": "palletcast",
    "title": "PalletCast: End-to-End MLOps Forecasting",
    "category": "MLOps",
    "tag": "Systems",
    "repo": "https://github.com/Kxvya18/palletcast-forecasting-mlops",
    "text": "14-day warehouse pallet forecasting through all nine MLOps stages: validation, features, 17-model contest, registry, API, monitoring, CI/CD.",
    "detail": {
      "title": "PalletCast: End-to-End MLOps for Cold-Chain Pallet Forecasting",
      "summary": "Forecasts each site's outbound pallets for the next 14 days for an automated cold-storage operator, so dock slots, trucks and shifts can be planned. Built as a complete production-style ML lifecycle on simulated data whose ground truth makes every pipeline check measurable.",
      "stack": "Python, pandas, LightGBM, XGBoost, statsforecast, Prophet, neuralforecast, pandera, DVC, MLflow, Prefect, FastAPI, Docker, Evidently, GitHub Actions.",
      "pipeline": "Simulated WMS feed with planted faults, validation with quarantine, point-in-time features with leakage tests, 17-model contest in 5 families, registry with promotion gate, monthly Prefect flow, FastAPI service, live error/bias/drift monitoring, retraining-policy experiment, CI/CD.",
      "outputs": "Leaderboards, registry with lineage, forecast API container, monitoring tables and alerts, stage-by-stage write-ups.",
      "metrics": "WAPE 10.8% vs 14.6% for the best simple rule (2025 backtest) and 10.9% on unseen 2026; customer changes caught in the first week by bias monitoring; retraining cut under-forecasting bias from -1.6% to -0.3%."
    }
  },
  {
    "id": "intervene",
    "title": "INTERVENE: Graph AI for Lung-Cancer Relapse",
    "category": "Biomedical AI",
    "tag": "ML",
    "repo": "https://github.com/Kxvya18/intervene-luad-graph-attention",
    "text": "Graph-sparse attention over biological module tokens; relapse signature with stability, permutation and external-cohort checks.",
    "detail": {
      "title": "INTERVENE: Interpretable Graph-Sparse Attention for LUAD Relapse Discovery",
      "summary": "Interleaved graph-sparse attention over biological module tokens that learns relapse-associated interactions in lung adenocarcinoma and nominates an MRPL21 / proteasome-core signature.",
      "stack": "Python, PyTorch, survival analysis (Cox), DepMap, GEO cohorts (GSE31210, GSE30219, GSE37745, GSE68465).",
      "pipeline": "Module tokenisation, thermodynamic vulnerability priors, biological edge regularisation, attention training, gene-level refinement, ablations and external validation.",
      "outputs": "Signature genes, attention-edge stability tables, module-removal importance, clinical-adjusted Cox models, cohort audits.",
      "metrics": "Internal C-index about 0.76 vs about 0.70 for the broader model; permutation null about 0.50; partial support across 4 external cohorts."
    }
  },
  {
    "id": "ccld",
    "title": "Curvature-Constrained Latent Diffusion",
    "category": "Generative AI",
    "tag": "ML",
    "repo": "https://github.com/Kxvya18/curvature-constrained-latent-diffusion",
    "text": "Latent DDPM for medical masks with curvature guidance and hard topology projection; Betti/Euler errors driven to zero.",
    "detail": {
      "title": "Curvature-Constrained Latent Diffusion for Topology-Faithful Polyp-Mask Synthesis",
      "summary": "Latent diffusion model for expert polyp masks (Kvasir/HyperKvasir) with curvature guidance, topology and area constraints, and late-step projection during reverse diffusion.",
      "stack": "Python, PyTorch, DDPM, convolutional autoencoder, persistent homology, mask-conditioned renderer.",
      "pipeline": "Train mask autoencoder, latent diffusion with geometric guidance, hard projection, compare baseline vs curvature-only vs topology-only vs full model.",
      "outputs": "Generated masks and renders, topology and geometry diagnostics, stress-test tables; book-chapter draft.",
      "metrics": "Mean Betti-0 and Euler error 1.484 (baseline) to 0 with projection; about 99.7% area-target success across stress cases."
    }
  },
  {
    "id": "eeg-load",
    "title": "Cross-Task EEG Workload Decoding",
    "category": "NeuroAI",
    "tag": "ML",
    "repo": "https://github.com/Kxvya18/eeg-load-signature",
    "text": "Decodes mental workload on a task the model never saw; population low-rank Riemannian decoder with balanced self-training.",
    "detail": {
      "title": "Cross-Task Mental-Workload Decoding from EEG (COG-BCI)",
      "summary": "Workload decoders collapse on new tasks (AUC 0.83-0.97 within task to 0.48-0.71 across tasks). This project builds a decoder that transfers N-back to MATB and back using population data in a shared low-rank Riemannian space plus label-proportion self-training.",
      "stack": "Python, NumPy, scikit-learn, Riemannian geometry (SPD tangent spaces), PyTorch (EEGNet, ShallowConvNet baselines).",
      "pipeline": "Six feature families on identical windows, development/sealed subject split, paired tests against subject-only, pooled, CORAL, Group-DRO and deep baselines, sensitivity analyses.",
      "outputs": "Development log of every attempt (including negative results), reproducible scripts, result tables.",
      "metrics": "Development AUC 0.752 / 0.901 vs 0.635 / 0.713 subject-only; beats all baselines so far. Held-out confirmation in progress."
    }
  },
  {
    "id": "transferguard",
    "title": "TransferGuard: Curvature-Audited Source Localization",
    "category": "Graph ML",
    "tag": "Graphs",
    "repo": "https://github.com/Kxvya18/transferguard-curvature-audited-localization",
    "text": "Selective Boltzmann growth priors for attack-origin ranking under sparse telemetry; conference + IEEE journal versions.",
    "detail": {
      "title": "Curvature-Audited Boltzmann Evidence for Source Localization in Evolving Networks",
      "summary": "Temporal graph inference for ranking attack origins under sparse telemetry, combining temporal encoders with a reliability-shrunk Boltzmann growth prior admitted only where it is identifiable.",
      "stack": "Python, PyTorch, temporal GNNs, IoT-23, TON-IoT, SNAP citation data, conformal prediction.",
      "pipeline": "480 controlled graph regimes, real transfer checks on 1.19M IoT-23 events, uncertainty and shift audits, intervention studies.",
      "outputs": "Conference paper and IEEE journal manuscript; evaluation suites and figures.",
      "metrics": "Selective low-evidence MRR gain 0.0085 overall and 0.0268 in the high-reliability subgroup; shows unconditional fusion can hurt."
    }
  },
  {
    "id": "qcert",
    "title": "QCertRoute: Shot-Adaptive Quantum Expert Routing",
    "category": "Quantum ML",
    "tag": "Graphs",
    "repo": "https://github.com/Kxvya18/qcertroute-quantum-expert-routing",
    "text": "Variational circuit fuses temporal-network experts; sequential confidence stops measuring once the top-10 is certified.",
    "detail": {
      "title": "Shot-Adaptive Quantum Expert Routing with Certified Top-Ten Decisions on Temporal Networks",
      "summary": "Decision-aware quantum expert routing: a shallow variational circuit fuses recent-contact and historical-diffusion experts from shared-basis bitstring readouts, and spends measurement shots only until the shortlist is certified.",
      "stack": "Python, variational quantum circuits, temporal communication networks, sequential statistics.",
      "pipeline": "Circuit design, local and pairwise readouts, shot-adaptive certification, confirmatory and stress runs.",
      "outputs": "IEEE conference manuscript, figures and reports.",
      "metrics": "Certified top-ten decisions with fewer measurement shots than fixed-precision estimation."
    }
  },
  {
    "id": "carbon",
    "title": "CarbonTwin-R: Causal Digital Twin for Building Carbon",
    "category": "Time Series",
    "tag": "ML",
    "repo": "https://github.com/Kxvya18/carbon-twin-R",
    "text": "Leakage-controlled digital twin on 19,735 real observations with conformal uncertainty, drift detection and an API.",
    "detail": {
      "title": "CarbonTwin-R: Causal Temporal Digital Twin for Avoidable Carbon",
      "summary": "Real-data digital twin estimating avoidable building energy and carbon, with chronological train/selection/calibration/test partitions.",
      "stack": "Python, scikit-learn, XGBoost, PyTorch, Graphical Lasso, Double ML, FastAPI, Streamlit, Docker.",
      "pipeline": "Expanding-window model selection, nine-zone dependence graph, controlled faults, CUSUM/SPRT detection, Kalman state estimation, causal checks.",
      "outputs": "Simulator, REST API, model registry, lineage manifests and tests for leakage, coverage and temporal splits.",
      "metrics": "Fault localisation, sequential detection delay, conformal coverage and avoidable-energy estimates on held-out data."
    }
  },
  {
    "id": "copilot",
    "title": "Enterprise Knowledge Copilot",
    "category": "GenAI",
    "tag": "LLM",
    "repo": "https://github.com/Kxvya18/enterprise-knowledge-copilot",
    "text": "Governed hybrid-RAG platform with citations, groundedness checks, role-aware access and Azure integration.",
    "detail": {
      "title": "Enterprise Knowledge Copilot: Governed Hybrid RAG",
      "summary": "Full-stack knowledge copilot with document upload, chunking, versioned metadata, role-aware access and citation-grounded answers.",
      "stack": "FastAPI, React, TypeScript, hybrid vector + keyword retrieval, re-ranking, Azure AI Search, Azure Blob Storage, Docker, GitHub Actions.",
      "pipeline": "Ingestion, retrieval with duplicate suppression, answer generation, unsupported-claim detection, human handover.",
      "outputs": "Audit logs for ingestion, queries, evaluation and governance; deployment templates.",
      "metrics": "Hit@K, MRR, latency, groundedness and review-flag rates."
    }
  },
  {
    "id": "pirge",
    "title": "PIRGE-CodeGuard: Safety for Coding Agents",
    "category": "Agent Safety",
    "tag": "LLM",
    "repo": "https://github.com/Kxvya18/pirge-codeguard",
    "text": "Converts coding-agent actions into structured warrants before execution; provenance, capability scoping and an audit ledger.",
    "detail": {
      "title": "PIRGE-CodeGuard: Pre-Execution Safety and Provenance for Coding Agents",
      "summary": "Safety layer that checks coding-agent commands, edits and tool calls before execution using instruction provenance, capability capsules and command-intent checks.",
      "stack": "Python, graph modelling, policy rules, local LLM (Qwen Coder) traces, disposable workspaces, pytest.",
      "pipeline": "Parse action, build provenance graph, compare intent with the user goal, apply policy, allow / block / substitute, record in a hash-chained ledger.",
      "outputs": "Decision graphs, audit certificates, HTML review dashboard, regression tests.",
      "metrics": "On real Qwen Coder proposals: 7 safe actions executed, 16 risky actions blocked, zero allowed-action failures."
    }
  },
  {
    "id": "cleardue",
    "title": "ClearDue: Agentic Finance Operations",
    "category": "Agentic AI",
    "tag": "Systems",
    "repo": "https://github.com/Kxvya18/cleardue",
    "text": "LangGraph agents that investigate B2B short payments with a separate verifier model and deterministic safety gates.",
    "detail": {
      "title": "ClearDue: Agentic Resolution of B2B Short Payments",
      "summary": "Agentic finance-operations system that ingests payments, detects discrepancies, gathers customer evidence and proposes resolutions behind independent verification.",
      "stack": "Python, LangGraph, PostgreSQL + pgvector, local Qwen investigator, Gemma verifier, optional Claude, Docker, Alembic.",
      "pipeline": "Idempotent payment ingestion, discrepancy cases with immutable event history, tool decisions, hypothesis, action, verification, safety gate, durable checkpoints.",
      "outputs": "Multi-tenant product slice with citations, verifier decisions and blocked proposals.",
      "metrics": "Exact, partial, cumulative, overpayment and currency-mismatch handling under tests."
    }
  }
];

export const projectIndex = [
  {
    "title": "CensusAI: Census Data Pipeline Optimisation (Remote, Australia)",
    "text": "Data-pipeline engineering on an Australian Bureau of Statistics census platform: Bronze Parquet transformed directly in DuckDB into a 2.03-billion-row database, 31% faster build (2,974 s to 2,043 s) at 4.5 GB peak memory."
  },
  {
    "title": "HART Adapter Placement for Sampling-Rate Transfer",
    "text": "Wearable HAR: where adapters should sit relative to a frozen time-frequency contextualizer.",
    "repo": "https://github.com/Kxvya18/hart-sampling-rate-adapters"
  },
  {
    "title": "Network Archaeology: Degree-Collision Bounds",
    "text": "Limits on reconstructing preferential-attachment growth history from a final snapshot.",
    "repo": "https://github.com/Kxvya18/degree-collision-reconstruction-bound"
  },
  {
    "title": "Thermodynamic Inference in Preferential Attachment",
    "text": "Inferring attachment parameters from a single network snapshot; MLE bias and finite-size scaling.",
    "repo": "https://github.com/Kxvya18/thermodynamic-pa-inference-single-snapshot"
  },
  {
    "title": "Cost-Aware Active Telemetry (RAG-MoE)",
    "text": "Leakage-controlled endpoint localization on LANL red-team data with priced telemetry and a reliability-aware mixture of experts.",
    "repo": "https://github.com/Kxvya18/cost-aware-active-telemetry"
  },
  {
    "title": "Graph-Spectral Early-Warning Signals",
    "text": "15,200-condition identifiability study and 800-run confirmatory study for physiological transitions; CHB-MIT pipeline.",
    "repo": "https://github.com/Kxvya18/graph-spectral-early-warning"
  },
  {
    "title": "NWCF: EEG Network Topology",
    "text": "Clique-filtration operator with stability proofs and a pre-registered evaluation, negative confirmation reported.",
    "repo": "https://github.com/Kxvya18/nwcf-eeg-topology"
  },
  {
    "title": "HCP MEG Brain-State Pilot",
    "text": "Source-space MEG pipeline (LCMV, 68 parcels) with pre-specified probes.",
    "repo": "https://github.com/Kxvya18/hcp-meg-brain-state-pilot"
  },
  {
    "title": "COG-BCI Integrity Audit",
    "text": "Found 8 participant IDs with byte-identical EEG in a public BCI dataset; reproducible audit script.",
    "repo": "https://github.com/Kxvya18/cogbci-integrity-audit"
  },
  {
    "title": "GLUCO-ADAPT",
    "text": "Safety-aware adaptive sensing for wearable glucose estimation (simulation): 7.46% MARD, 97.76% Clarke A+B.",
    "repo": "https://github.com/Kxvya18/gluco-adapt-healthcare-ai"
  },
  {
    "title": "MOGA-FCM Cognitive Load",
    "text": "Paper at CIMA 2026 (NIT Puducherry): NSGA-III feature selection with Bayesian-tuned fuzzy C-means for unsupervised driver cognitive-load detection.",
    "repo": "https://github.com/Kxvya18/moga-fcm-cognitive-load-detection"
  },
  {
    "title": "MethaneTwin-R",
    "text": "Physics-informed geospatial ML for methane plumes from NASA EMIT and ERA5.",
    "repo": "https://github.com/Kxvya18/Methane-twin-R"
  },
  {
    "title": "chaosctl: AI Chaos Engineering",
    "text": "Bosch hackathon: 9 LangGraph agents, AI-written FMEA, verified rollback on the OpenTelemetry Demo.",
    "repo": "https://github.com/Kxvya18/chaos-engineering"
  },
  {
    "title": "ChangeShield",
    "text": "Repairs browser automations that break when the target application changes.",
    "repo": "https://github.com/Kxvya18/chnage-shield"
  },
  {
    "title": "SupportOps Copilot",
    "text": "GitHub issue triage with evidence display and human approval.",
    "repo": "https://github.com/Kxvya18/supportops-copilot"
  },
  {
    "title": "RevenueOps Agent Control Tower",
    "text": "Multi-agent CRM revenue-risk detection: 8,800 opportunities to 170 action cards.",
    "repo": "https://github.com/Kxvya18/revenueops-agent-control-tower"
  },
  {
    "title": "AI GTM Lead Enrichment",
    "text": "CSV-to-CRM enrichment, priority scoring and webhook payloads.",
    "repo": "https://github.com/Kxvya18/ai-gtm-lead-enrichment-automation"
  },
  {
    "title": "Context-Aware RAG Evaluation Toolkit",
    "text": "Dependency-free RAG harness: Hit@K, MRR, groundedness.",
    "repo": "https://github.com/Kxvya18/context-aware-rag-evaluation"
  },
  {
    "title": "Cross-Domain Visual Robustness",
    "text": "Degradation of classical models under MNIST-to-SVHN shift.",
    "repo": "https://github.com/Kxvya18/cross-domain-visual-robustness"
  },
  {
    "title": "Model Calibration Diagnostics",
    "text": "ECE, Brier score, reliability diagrams and temperature scaling under shift.",
    "repo": "https://github.com/Kxvya18/model-calibration-diagnostics"
  },
  {
    "title": "Smart Resource Allocation",
    "text": "Conflict-aware Django booking platform with REST APIs.",
    "repo": "https://github.com/Kxvya18/smart_resource_allocation"
  }
];

export const evidence = [
  {
    caption: "PIRGE CodeGuard decision behavior for pre-execution coding-agent safety.",
    kind: "decision-graph",
  },
  {
    caption: "Resource-prediction and model-evaluation diagnostics.",
    kind: "chart",
  },
  {
    caption: "Topology-derived EEG features in ML evaluation.",
    kind: "persistence",
  },
  {
    caption: "Unified reconstruction and collision behavior.",
    kind: "heatmap",
  },
];

export const skills = [
  {
    title: "AI Engineering",
    text:
      "LLM applications, RAG, eval pipelines, prompt analysis, API-ready data flows, automation, and reproducible experiments.",
  },
  {
    title: "ML and Deep Learning",
    text:
      "Supervised and unsupervised learning, neural networks, representation learning, transfer learning, generative models, and model comparison.",
  },
  {
    title: "Mathematical AI",
    text:
      "Linear algebra, probability, optimization, Bayesian inference, causal reasoning, statistical learning, and scientific ML.",
  },
  {
    title: "Graphs and Topology",
    text:
      "Graph theory, network science, hypergraphs, spectral methods, graph Laplacians, persistent homology, and clique filtrations.",
  },
  {
    title: "Programming Systems",
    text:
      "Python, Java, C++, C, OOP, DSA, SQL, DBMS, REST APIs, JSON/CSV pipelines, Git, Linux, and documentation.",
  },
  {
    title: "Tools",
    text:
      "NumPy, pandas, SciPy, scikit-learn, XGBoost, PyTorch, TensorFlow/Keras, Matplotlib, NetworkX, Django, FastAPI, and Jupyter.",
  },
];

// Education & certifications (from provided CV — kept for the /resume page)
export const education = [
  {
    school: "Manipal Institute of Technology, Bengaluru",
    degree: "B.Tech in Computer Science (Data Science)",
    period: "2023 – 2027",
    score: "CGPA 9.08 / 10.00 (up to 6th semester)",
  },
  {
    school: "Deeksha Centre for Learning, Bengaluru",
    degree: "Pre-University, Science",
    period: "2021 – 2023",
    score: "Score 96%",
  },
  {
    school: "Apollo National Public School",
    degree: "Secondary Education",
    period: "2017 – 2021",
    score: "Score 96%",
  },
];

export const certifications = [
  "IBM Enterprise Grade AI and Cloud Solution",
  "Cisco Cybersecurity Essentials and Packet Tracer",
  "Infosys Springboard – Introduction to AI, Deep Learning, Computer Vision",
  "Coursera Deep Learning Specialization",
  "Coursera TensorFlow ANN",
  "Coursera IBM Machine Learning",
  "Coursera Python Developer",
  "Coursera GUI Programming in Python",
  "Coursera HTML / CSS / JavaScript",
  "Udemy Feature Engineering in Machine Learning",
];

export const contact = {
  heading: "Let's connect and build serious AI systems.",
  location: "Bengaluru, India",
  email: "kxvya1820@gmail.com",
  phone: "+91-9535832089",
  github: "https://github.com/Kxvya18",
  githubLabel: "github.com/Kxvya18",
  linkedin: "https://linkedin.com/in/kavya-kalavala-6008b5286",
  linkedinLabel: "linkedin.com/in/kavya-kalavala-6008b5286",
  // ATS resume served from /public
  cvUrl: "/Kavya_Kalavala_Resume.docx",
  cvPdfUrl: "/Kavya_Kalavala_Resume.docx",
};

export const publications = [
  {
    authors: "K. Kalavala, A. Pandey, S. Priya",
    title: "MOGA-FCM: Unsupervised Cognitive Load Detection via Multi-Objective Genetic Algorithms and Bayesian Fuzzy C-Means in ADAS",
    venue: "2nd Congress on Intelligent Machines and Algorithms (CIMA 2026), NIT Puducherry",
    year: "2026",
    repo: "https://github.com/Kxvya18/moga-fcm-cognitive-load-detection",
  },
];
