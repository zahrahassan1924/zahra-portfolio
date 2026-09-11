export interface ExternalLink {
  label: string;
  url: string;
}

export interface CaseStudy {
  slug: string;
  index: string;
  company: string;
  /**
   * Path under /public/logos/. Renders a text-initials placeholder instead
   * when the file isn't there yet.
   */
  logoSrc?: string;
  metric: string;
  oneLiner: string;
  problem: string;
  process: string[];
  result: string;
  /** Shown only as a fallback when `images` is empty. */
  screenshotNote: string;
  /** Paths under /public/case-studies/. Renders the dashed placeholder
   * instead when this is empty or omitted. */
  images?: string[];
  /** Frame shape for multi-image galleries. Defaults to 'portrait' (phone
   * screenshots). Ignored when there's only one image. */
  imageOrientation?: 'portrait' | 'landscape';
  /** Set true to skip the screenshot area entirely (no placeholder either),
   * for case studies that won't get a visual. */
  hideScreenshot?: boolean;
  /** Omit entirely for internal systems with nothing public to link to. */
  externalLink?: ExternalLink;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tgm-app-launch',
    index: '01',
    company: 'The Giving Movement',
    logoSrc: '/logos/the-giving-movement.png',
    metric: '70% of orders',
    oneLiner: "Led the launch of TGM's first native iOS app from zero.",
    problem:
      'Over 80% of customers were on iPhone web, but the "app" was a slow webview wrapper with no push infrastructure or personalization: hurting discovery and checkout, the exact moments retention depends on.',
    process: [
      'Quantified the opportunity: analyzed LTV and funnel performance across web, mobile web, and app users to build a payback model, securing engineering investment.',
      'Partnered with a senior iOS engineer and lead designer to scope native vs. webview per screen based on funnel data.',
      'Took on a second, less obvious problem in parallel: evolving the CMS so Growth and Merchandising could configure campaigns without engineering.',
      'Post-launch, caught that the Account page (scoped as webview) had become the most-visited post-purchase screen, and reprioritized it to native immediately.',
    ],
    result:
      'Repeat purchase frequency +12% within one quarter. App drove ~70% of all orders within two quarters. ~$500K in single-day revenue during a peak sale period.',
    screenshotNote: 'app home screen, product page, or App Store listing',
    images: [
      '/case-studies/tgm-app-launch1.png',
      '/case-studies/tgm-app-launch2.png',
      '/case-studies/tgm-app-launch3.png',
    ],
    externalLink: {
      label: 'View on App Store',
      url: 'https://apps.apple.com/us/app/the-giving-movement/id1580572679',
    },
  },
  {
    slug: 'tradeling-rfq-launch',
    index: '02',
    company: 'Tradeling',
    logoSrc: '/logos/tradeling.png',
    metric: '$450-500K/mo',
    oneLiner:
      'Built a request-for-quote bidding platform from scratch to capture offline seller volume.',
    problem:
      "About 60% of top sellers' transaction volume was happening offline because the platform only supported fixed-price transactions, creating real retention and revenue-capture risk.",
    process: [
      'Validated the opportunity with a sensitivity-analysis business case and a fake-door test (banner CTR plus 20-25% "notify me" signups) before requesting engineering resources.',
      'Brought Legal, Finance, and Operations in early to shape constraints (minimum order values, credit terms) rather than review a finished plan.',
      'Resolved category hesitancy by structuring the launch as a reversible A/B test with F&B and electronics as pilot categories.',
      'Extended the timeline rather than cutting scope once engineering flagged the seller inbox and notifications infrastructure needed a from-scratch build.',
    ],
    result:
      'RFQ sellers saw a 15% uplift in transaction volume. RFQ buyers showed a 2% stronger repeat-purchase rate vs. non-RFQ buyers within two months.',
    screenshotNote: 'RFQ form or seller inbox UI',
    images: ['/case-studies/tradeling-rfq.png'],
    externalLink: {
      label: 'View RFQ Product',
      url: 'https://www.tradeling.com/ae-en/rfq',
    },
  },
  {
    slug: 'tgm-ai-ml-personalization',
    index: '03',
    company: 'The Giving Movement',
    logoSrc: '/logos/the-giving-movement.png',
    metric: '+12% loyalist growth',
    oneLiner:
      'Designed an AI/ML-driven behavioral segmentation system to graduate mid-tier customers into loyalists.',
    problem:
      'A small top-loyalist cohort drove disproportionate revenue but had stalled growth, while a large middle tier had inconsistent behavior. Every user saw the same undifferentiated experience.',
    process: [
      'Partnered with data science to build RFM-based segmentation layered with behavioral signals, exposed through a shared dashboard across Product, CRM, and Growth.',
      "Invented a non-obvious mechanism: used historical session data to identify each user's personal peak browse window and rewired CRM triggers to fire inside it, instead of fixed schedules.",
      'Validated feasibility with engineering early despite initial pushback on build complexity.',
      'Caught real trigger-logic edge cases through close QA collaboration before scaling.',
    ],
    result:
      'About 3-4% of middle-tier users migrated into the top tier per quarter. Top-loyalist segment grew 12%. Repeat purchase frequency +16%.',
    screenshotNote: 'segmentation dashboard or personalized CRM trigger example',
    hideScreenshot: true,
  },
  {
    slug: 'eat-app-pricing-pro-tier',
    index: '04',
    company: 'Eat App',
    logoSrc: '/logos/eat-app.png',
    metric: '12% upgrade rate',
    oneLiner:
      'Designed a new pricing tier to capture untapped willingness-to-pay among high-end, multi-branch restaurant groups.',
    problem:
      'Leadership wanted to grow revenue per account specifically for high-end, multi-branch restaurant groups and wanted to explore a new pricing tier. The challenge was designing a tier that captured real, untapped willingness to pay without risking churn among existing customers who might feel core functionality was being paywalled.',
    process: [
      "Identified that multi-branch restaurant groups consistently needed more customization for personalized guest communication across locations: a capability the existing guest CRM data could support but wasn't yet surfaced as a distinct, monetizable feature.",
      'Socialized the concept with leadership to shape what became the "Pro" tier, proposing to elevate existing shared guest-database and customizable messaging/widget capabilities as flagship features rather than building net-new functionality from scratch.',
      'Ran willingness-to-pay validation directly with multi-branch restaurant groups before finalizing the tier, using a Van Westendorp pricing model survey to find a price range the target segment would actually pay, and to check whether existing customers would feel anything was being taken away.',
      'Based on that validation, positioned the shared guest database, custom dashboard, and customization options specifically in the Pro tier, since the data confirmed the high-end, multi-branch segment was the one that valued and would pay for that level of personalization.',
    ],
    result:
      'The Pro tier launched successfully, with 12% of multi-branch groups upgrading to access the shared guest database and customization features, contributing to a meaningful ARR lift from tier upgrades.',
    screenshotNote: 'Pro tier pricing page or feature comparison table',
    images: [
      '/case-studies/eat-app-pricing1.png',
      '/case-studies/eat-app-pricing2.png',
    ],
    imageOrientation: 'landscape',
  },
  {
    slug: 'eat-app-onboarding',
    index: '05',
    company: 'Eat App',
    logoSrc: '/logos/eat-app.png',
    metric: '23% conversion lift',
    oneLiner:
      'Diagnosed segment-specific onboarding friction and rebuilt it as a modular, reusable flow.',
    problem:
      'Every restaurant, regardless of size, moved through the same onboarding sequence. Inbound conversion was underperforming and time-to-go-live was longer than it should have been.',
    process: [
      'Diagnosed that friction was segment-specific and made the case for a segmented approach, scoping first to mid-tier restaurants (the largest segment).',
      'Initially designed a bespoke standalone flow, then corrected course when engineering flagged technical debt risk, adopting a modular, reusable-component architecture instead.',
      'Sequenced rollout by segment size and build speed, reusing components to build small-restaurant and multi-branch flows with far less incremental effort.',
    ],
    result:
      'Mid-tier segment saw a 15% increase in self-serve onboarding completion. Overall inbound conversion increased 23%. The A/B testing pipeline built alongside it drove a 25% lift in feature engagement and a 10% increase in subscription growth.',
    screenshotNote: 'onboarding flow UI, before/after if available',
    hideScreenshot: true,
    externalLink: {
      label: 'View Product',
      url: 'https://restaurant.eatapp.co/restaurant-reservation-software',
    },
  },
];
