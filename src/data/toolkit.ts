export interface ToolkitGroup {
  label: string;
  items: string[];
  /** Tailwind color token used for a subtle chip background wash. */
  tint: string;
}

export const toolkit: ToolkitGroup[] = [
  {
    label: 'Discovery & Research',
    items: ['User interviews', 'Funnel diagnosis', 'Segmentation'],
    tint: 'mint',
  },
  {
    label: 'Data & Experimentation',
    items: ['A/B testing', 'Fake-door tests', 'RFM & behavioral modeling'],
    tint: 'peach',
  },
  {
    label: 'Cross-functional Navigation',
    items: [
      'Legal, Finance, Ops, Engineering alignment',
      'Stakeholder negotiation',
    ],
    tint: 'lavender',
  },
  {
    label: 'AI-Augmented Workflow',
    items: [
      'Lovable prototyping',
      'AI-assisted PRD drafting',
      'Qualitative synthesis',
      'Claude Code (build & ship)',
    ],
    tint: 'steel',
  },
  {
    label: 'AI Product Craft',
    items: [
      'Prompt engineering',
      'AI agent design',
      'Vibe coding / rapid prototyping',
      'Structured AI evaluation design',
      'Human-in-the-loop validation',
    ],
    tint: 'teal',
  },
  {
    label: 'Domain',
    items: ['B2B Marketplaces', 'B2B SaaS', 'D2C E-commerce'],
    tint: 'terracotta',
  },
];
