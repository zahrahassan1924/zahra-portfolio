export type ProcessIcon =
  | 'pencil'
  | 'search'
  | 'chart'
  | 'target'
  | 'shield'
  | 'refresh'
  | 'wireframe'
  | 'terminal'
  | 'branch';

export interface ProcessStep {
  icon: ProcessIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: 'pencil',
    title: 'Capture the raw instinct',
    description:
      "Before any research, before cleaning it up: write down the messy hunch, including the parts I'm unsure about.",
  },
  {
    icon: 'search',
    title: 'Let AI interrogate it',
    description:
      "Ask AI to find the strongest idea in the raw notes, the riskiest untested assumptions, and what I'm circling but haven't committed to.",
  },
  {
    icon: 'chart',
    title: 'Ground it in research',
    description:
      'Business model, competitive dynamics, the real structural root cause, recent strategic moves: this validates or breaks the instinct.',
  },
  {
    icon: 'target',
    title: 'Force a sharp, falsifiable bet',
    description:
      'Turn instinct plus research into one named feature with a clear hypothesis: what it does, for whom, and which metric it moves.',
  },
  {
    icon: 'shield',
    title: 'Pressure-test it',
    description:
      "Have AI role-play the most skeptical stakeholder: weakest assumption, why this hasn't been built, who'd resist internally, the quiet failure mode, a simpler alternative.",
  },
  {
    icon: 'refresh',
    title: 'Iterate until it holds',
    description:
      'Repeat the pressure-test until the idea survives scrutiny, or until something worth changing surfaces.',
  },
];

export const prototypeSteps: ProcessStep[] = [
  {
    icon: 'wireframe',
    title: 'Turn concepts into testable artifacts',
    description:
      'Use Lovable to build a working prototype before writing a single requirement or line of production code: something real to react to, not a slide deck.',
  },
];

export const shipSteps: ProcessStep[] = [
  {
    icon: 'terminal',
    title: 'Build with Claude Code',
    description:
      'Move from a scoped idea to working code directly, iterating in plain language rather than hand-writing every line.',
  },
  {
    icon: 'branch',
    title: 'Version and deploy with Git',
    description:
      "Commit incrementally, push to GitHub, and deploy through CI/CD: the site you're looking at right now was built exactly this way.",
  },
];
