# John Oh — Personal Portfolio Website Build Prompt

## 1. Goal Statement

Build a polished, modern, professional personal portfolio website for **John Oh**, a Singapore-based Senior Facilities Executive specialising in facilities management, building maintenance, project coordination, contract administration, technical specifications, and continuous improvement.

**Primary objective:** Position John as a competent facilities management professional who combines practical facilities experience, project coordination, and continuous improvement to create safer, more efficient, and better-managed environments.

**Reference template:** https://www.landinghero.ai/library/cdd93b4b-0af9-45b1-8337-ce7f9de542fa

Before writing code, inspect the reference template carefully. Identify its layout, visual hierarchy, typography, colours, component arrangements, section spacing, imagery, interactions, animations, and responsive behaviour.

Use the reference template as the primary design direction. Adapt it to a personal portfolio rather than copying locksmith-specific branding, content, or call-to-action patterns.

Do not invent the template's visual properties if they cannot be inspected. Document any unavailable reference details and make reasoned design decisions consistent with the visible reference.

The finished website should communicate these qualities within the first few seconds:

- Professional credibility
- Technical competence
- Structured project management
- Preventive and predictive maintenance thinking
- Safety, compliance, and operational reliability
- Continuous improvement and practical problem-solving

The website should feel like a professionally art-directed portfolio for a facilities management executive, not a generic résumé, corporate facilities company website, or commercial maintenance advertisement.

**Primary call to action:** Explore John's facilities management projects and professional capabilities.

**Secondary call to action:** Connect with John on LinkedIn.

**Public LinkedIn profile:** https://www.linkedin.com/in/jin-hao-oh-687a9a241/

Use the supplied reference template's design language while ensuring that the content, interactions, and visual assets are appropriate for John's professional identity.

---

## 2. Tech Stack

Use the following stack unless the existing project or reference template requires a compatible adjustment.

```text
React
Vite
TypeScript
Tailwind CSS
Motion for React (motion/react)
lucide-react
```

Dependencies:

```json
{
  "motion": "^12.0.0",
  "lucide-react": "^0.460.0",
  "clsx": "^2.1.0"
}
```

Use compatible, current stable package versions when creating the project. Update the dependency versions if necessary to resolve compatibility issues.

### Implementation rules

- Use React functional components and TypeScript.
- Use reusable, clearly named components.
- Use semantic HTML.
- Use Tailwind CSS for layout and responsive utilities.
- Define the design system centrally using CSS custom properties.
- Use Motion for React for subtle, purposeful animations.
- Use Lucide icons where appropriate.
- Do not introduce a large UI component library.
- Do not add unnecessary backend services or databases.
- Do not add a CMS unless explicitly requested.
- Do not create fake contact forms, fake submission confirmations, or non-functional buttons.
- Use direct links for LinkedIn, email, telephone, and relevant project resources where actual destinations are available.
- Do not add a phone-first or emergency-service interface.
- Do not add fabricated performance dashboards or real-time building monitoring widgets.
- Ensure the website can be built and deployed as a static frontend.
- Keep all source code clean, maintainable, and suitable for future portfolio updates.

If a repository already exists, inspect its structure and preserve useful existing functionality before modifying it.

---

## 3. Design System — Core Principles

### 3.1 Design direction

Create a professional, editorial, technically informed personal portfolio.

The visual language should communicate:

- Built-environment expertise
- Precision and organisation
- Engineering-informed problem-solving
- Professional confidence
- Reliability and accountability
- Continuous improvement

Use the supplied LandingHero template as the main visual reference. Preserve its recognisable design language where practical, including its typography, composition, layout patterns, visual rhythm, and interactions.

Do not automatically reuse the locksmith template's hazard stripes, key graphics, yellow promotional bands, live availability indicators, fixed pricing lists, or telephone-first calls to action. Replace those elements with facilities-management-appropriate equivalents unless the actual reference template independently establishes a relevant design pattern.

### 3.2 Colour system

First, extract the actual colour palette from the reference template if it is accessible.

Create a central set of CSS variables and use the extracted palette as the source of truth.

If the reference cannot be inspected or its palette cannot be reliably determined, use the following fallback palette. These are fallback values, not claims about the template's actual colours.

```css
:root {
  --background: #f5f6f3;
  --foreground: #202722;

  --surface: #ffffff;
  --surface-muted: #e9ede7;

  --primary: #315c4b;
  --primary-foreground: #ffffff;

  --secondary: #b8c9b8;
  --secondary-foreground: #202722;

  --accent: #c59b59;
  --accent-foreground: #202722;

  --muted-foreground: #68736b;

  --border: #d9dfd8;
  --border-strong: #aab7ab;

  --success: #367653;
  --focus-ring: #315c4b;
}
```

### Colour usage

- Background: primary page background.
- Foreground: headings and primary text.
- Surface: project cards, content panels, and elevated sections.
- Surface muted: alternating sections, metadata panels, and subtle backgrounds.
- Primary: links, key buttons, important accents, and active navigation.
- Secondary: supporting visual blocks and muted decorative elements.
- Accent: selective highlights, project markers, and small visual details.
- Muted foreground: descriptions, supporting copy, dates, and metadata.
- Border: card outlines, dividers, and navigation separators.
- Success: only for genuine status information where relevant.

Do not use every colour in every section. Maintain a disciplined visual hierarchy and strong contrast.

### 3.3 Typography

Inspect the template's actual fonts and use them if they are accessible and appropriately licensed.

If unavailable, select a complementary typography system with a professional editorial character.

Suggested fallback:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

Typography roles:

- Display headings: Manrope, weight 700–800.
- Section headings: Manrope, weight 700.
- Body: DM Sans, weight 400–500.
- Navigation: DM Sans, weight 500–600.
- Project metadata: DM Sans, weight 500–600.

Suggested responsive scale:

```css
:root {
  --font-display: "Manrope", sans-serif;
  --font-body: "DM Sans", sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;

  --heading-xl: clamp(3rem, 7vw, 6.5rem);
  --heading-lg: clamp(2.5rem, 5vw, 4.5rem);
  --heading-md: clamp(1.75rem, 3vw, 2.75rem);
  --heading-sm: clamp(1.25rem, 2vw, 1.75rem);
}
```

Typography rules:

- Use large display typography in the hero.
- Use a clear heading hierarchy.
- Keep paragraph line lengths comfortable for reading.
- Use uppercase labels sparingly.
- Avoid excessive letter spacing.
- Avoid making every heading excessively bold.
- Do not use condensed industrial typography unless it is genuinely part of the reference template's visual language.
- Use responsive font sizes rather than fixed oversized headings.

### 3.4 Spacing system

Use a consistent spacing scale:

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

Use consistent spacing between:

- Navigation and page edges
- Section headings and descriptions
- Project cards
- Text and supporting imagery
- Buttons and supporting text
- Metadata and project descriptions

Avoid inconsistent margins, cramped mobile layouts, and unnecessarily large empty sections.

### 3.5 Layout and grid

Use the reference template's grid and content alignment as the first choice.

If unavailable, use these defaults:

```css
:root {
  --container-max: 1280px;
  --container-gutter: clamp(1.25rem, 4vw, 3.5rem);

  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;

  --border-width: 1px;
}
```

Layout requirements:

- Use a consistent maximum content width.
- Use CSS Grid for project collections and structured content.
- Use Flexbox for navigation, buttons, metadata, and simple alignment.
- Use generous section spacing where consistent with the reference.
- Use alternating backgrounds only where they improve hierarchy.
- Avoid unnecessary decorative panels.
- Ensure text and images align consistently across sections.
- Avoid horizontal overflow at all viewport widths.

### 3.6 Shadows, borders, and depth

Follow the reference template's treatment of borders and shadows.

If no reliable reference is available, favour subtle depth and restrained borders.

```css
:root {
  --shadow-sm: 0 2px 8px rgb(32 39 34 / 5%);
  --shadow-md: 0 8px 24px rgb(32 39 34 / 8%);
  --shadow-lg: 0 18px 48px rgb(32 39 34 / 12%);
}
```

Do not apply shadows to every card. Use them selectively to distinguish interactive or elevated content.

### 3.7 Design tokens and implementation

Centralise all colours, spacing, typography, radii, borders, shadows, and transition timings in a shared theme file or CSS variables.

Avoid hardcoding different versions of the same colour or spacing value across components.

Create a `DESIGN_SYSTEM.md` file documenting:

- Extracted reference-template characteristics
- Fallback decisions, if any
- Colour palette
- Typography
- Spacing and layout
- Breakpoints
- Borders, radii, and shadows
- Animation principles
- Components and interaction states
- Accessibility requirements

Clearly distinguish verified template characteristics from implementation choices.

---

## 4. Visual Effects and Interactions

Reproduce the reference template's actual effects where practical and appropriate for a professional portfolio.

Do not invent effects simply because they appeared in the original locksmith prompt.

### Effect 1 — Hero visual treatment

Use the reference template's hero treatment, adapted to facilities management.

Potential supporting imagery includes:

- Modern institutional buildings
- Well-maintained building interiors
- Facilities operations environments
- Building services equipment
- Professional project documentation
- Building maintenance planning

Use high-quality, appropriately licensed images or original visuals.

Avoid generic stock images of handshakes, posed corporate teams, or unrelated construction sites.

If an image is unavailable, create a refined layout using typography, geometry, and subtle backgrounds rather than displaying broken image placeholders.

### Effect 2 — Technical visual details

Where appropriate, use restrained visual details inspired by:

- Building plans
- Architectural grids
- Technical drawing annotations
- Floor plan geometry
- Project timelines
- Structured information panels

These details must support the content and remain subtle. Do not create fake engineering drawings or present decorative graphics as actual technical documentation.

### Effect 3 — Interactive indicators

Use simple hover, focus, and active states.

Examples:

- Underline transitions for navigation links
- Subtle card border changes
- Small arrow movements on project links
- Button colour transitions
- Active section indication where useful

Do not include a fake live operational status indicator or imply that John's portfolio is connected to a building management system.

---

## 5. Component Breakdown

Build the site as reusable components.

Suggested project structure:

```text
src/
  components/
    Navbar.tsx
    MobileMenu.tsx
    Hero.tsx
    SectionHeading.tsx
    About.tsx
    Capabilities.tsx
    ProjectGrid.tsx
    ProjectCard.tsx
    ProjectDetail.tsx
    ProfessionalApproach.tsx
    Experience.tsx
    StandardsAndCompliance.tsx
    Contact.tsx
    Footer.tsx
    BackToTop.tsx
  data/
    projects.ts
    capabilities.ts
    experience.ts
  styles/
    globals.css
    design-tokens.css
  App.tsx
  main.tsx

public/
  images/
  favicon.svg

DESIGN_SYSTEM.md
README.md
```

Adjust this structure to suit the actual implementation. Avoid unnecessary files or overengineering.

### Component 1 — Navigation

Create a professional navigation bar consistent with the reference template.

Brand text:

`JOHN OH`

Supporting descriptor:

`FACILITIES MANAGEMENT`

Navigation links:

- About
- Expertise
- Projects
- Experience
- Contact

Primary navigation action:

`LET'S CONNECT`

Link this action to the Contact section or the verified LinkedIn profile.

Requirements:

- Sticky or static positioning based on the reference template.
- Responsive mobile navigation.
- Accessible menu button with a clear open/close state.
- Keyboard navigation.
- Visible focus indicators.
- Correct section anchor links.
- Close the mobile menu after a link is selected.
- Do not display a fake availability status.

### Component 2 — Hero

The hero must establish John's professional identity immediately.

Display a concise professional label, a large headline, a supporting statement, two clear calls to action, and relevant professional imagery or visual treatment.

Primary action:

`EXPLORE MY PROJECTS`

Secondary action:

`CONNECT ON LINKEDIN`

The hero should use the reference template's composition and visual hierarchy, adapted to the professional portfolio.

### Component 3 — Professional introduction

Introduce John Oh and his professional positioning.

Include a concise paragraph covering facilities management, practical operations, project coordination, and continuous improvement.

Use a supporting visual or information panel if appropriate to the reference design.

Do not invent a number of years of experience, qualifications, or professional awards.

### Component 4 — Capabilities

Create a clear grid of professional capability cards.

Each card should include:

- A relevant Lucide icon
- Capability title
- Short explanation
- Optional related project link

Use these capability areas:

1. Facilities and Building Management
2. Preventive and Predictive Maintenance
3. Project Coordination and Implementation
4. Technical Specifications and Tender Documentation
5. Contract and Vendor Management
6. Safety, Compliance and Quality Control
7. Building Services and Air-Conditioning Systems
8. Continuous Improvement and Operational Efficiency

These are capability categories based on the supplied professional background. Do not imply that John holds an unverified specialist licence or professional certification.

### Component 5 — Selected Projects

This is a central section of the website.

Create a visually compelling project portfolio with project cards that can be expanded into detailed project case studies or displayed on individual project pages.

The initial portfolio should be based on the following project categories.

**Project A — Air-Conditioning System Retrofitting**

Focus:

- VRV/VRF and split-unit system planning
- Student and study room air-conditioning requirements
- Centralised air-conditioning management
- Controls and monitoring integration
- Energy efficiency and operational control considerations
- Testing, commissioning, and handover requirements

**Project B — CCTV System Replacement**

Focus:

- CCTV system requirements
- Network video recorder and camera specifications
- Network and PoE infrastructure
- Testing and commissioning
- Preventive maintenance and defects management

**Project C — Housemaster Unit Renovation**

Focus:

- Renovation scope coordination
- Building, electrical, and fixture replacement requirements
- Kitchen cabinet and sanitary fixture works
- Painting and finishing specifications
- Quality control and handover requirements

**Project D — Laundry Room Upgrading**

Focus:

- Laundry room utility requirements
- Electrical power provisions
- Water supply and discharge arrangements
- Coordination of equipment and payment-system requirements
- Installation planning and operational readiness

**Project E — Cleaning Contract Optimisation**

Focus:

- Cleaning service delivery and manpower planning
- Operational demand and peak-period requirements
- Contract scope review
- Cost-efficiency considerations
- Planning additional support during high-turnover periods

**Project F — Technical Specifications and Tender Documentation**

Focus:

- Scope of works development
- Bills of quantities and pricing schedules
- Technical requirements and compliance considerations
- Testing, commissioning, and handover requirements
- Defects liability and maintenance obligations
- Vendor evaluation and quality assurance

These are portfolio topics drawn from John's supplied professional background. They are not automatically verified evidence of completed projects, final results, or sole ownership.

For each project, structure the case study as follows:

1. Project overview
2. Operational context
3. Objectives
4. Scope of work
5. Technical considerations
6. Coordination and implementation approach
7. Quality control and compliance
8. Outcome or lessons learned
9. Relevant visuals or diagrams

Only publish actual outcomes when confirmed by John.

Use neutral descriptions such as "project scope and technical considerations" where final outcomes are not yet available.

Use clearly identified placeholders for missing information rather than inventing project budgets, savings, completion dates, performance improvements, vendor names, or measurable results.

Do not fabricate photographs of completed projects or claim that stock images depict John's actual work.

### Component 6 — Professional approach

Create a three- or four-step section explaining John's working philosophy.

Suggested structure:

**01 — Understand the Environment**

Review operational requirements, existing conditions, maintenance needs, and stakeholder expectations.

**02 — Plan with Technical Clarity**

Develop structured scopes of work, specifications, coordination plans, and quality requirements.

**03 — Execute and Verify**

Coordinate implementation, assess workmanship, and ensure testing and handover requirements are addressed.

**04 — Improve Continuously**

Identify opportunities to improve reliability, maintainability, efficiency, and the overall condition of the built environment.

These steps describe a professional approach and must not be presented as a formally certified methodology.

### Component 7 — Professional experience

Create a chronological experience section.

Use the following supplied information as the initial content:

- Current professional identity: Senior Facilities Executive.
- Professional environment: Hwa Chong Institution Boarding School, Singapore.

Do not assume an exact employment start date or employment history beyond the information supplied.

Use an editable data structure for:

- Job title
- Organisation
- Employment dates
- Responsibilities
- Projects
- Achievements

Where dates or additional roles are unavailable, omit them or mark them as placeholders in the source data until John provides confirmation.

Do not invent previous employers, degrees, certifications, or professional memberships.

### Component 8 — Standards and compliance

Create a section highlighting John's focus on technical quality, safety, and compliance.

Possible categories:

- Singapore Standards and applicable codes of practice
- Environmental and energy-efficiency considerations
- Workplace safety and risk management
- Testing and commissioning
- Defects liability and maintenance requirements
- Documentation and handover

Mention Green Mark and Singapore Standards only as relevant compliance considerations.

Do not imply that a project is Green Mark-certified or fully compliant with a particular standard unless the evidence supports that statement.

Do not automatically apply every standard to every project. Applicability must be assessed against the actual work scope and current requirements.

### Component 9 — Contact

Create a professional contact section with:

- A concise invitation to connect
- A LinkedIn button
- An email link only when a verified email address is supplied
- Optional résumé download only when an actual résumé file is provided

LinkedIn:

https://www.linkedin.com/in/jin-hao-oh-687a9a241/

Suggested call to action:

`LET'S CONNECT`

Do not invent an email address, phone number, downloadable résumé, or contact-form submission endpoint.

If a contact form is not connected to a real service, use direct contact links instead.

### Component 10 — Footer

Include:

- John Oh
- Facilities Management
- Navigation links
- LinkedIn link
- Copyright notice

Use the current year dynamically.

Do not include fabricated company registration numbers, trade licences, professional memberships, insurance details, or employer endorsements.

---

## 6. Animations

Use the Motion for React library for restrained, professional transitions.

Animations should reinforce hierarchy and improve the experience without distracting from the portfolio content.

### Hero

- Animate the headline into view with a subtle vertical movement and opacity transition.
- Stagger headline lines slightly.
- Introduce supporting text after the main headline.
- Fade in the primary and secondary actions.
- Keep the total animation short and avoid exaggerated bouncing.

### Section reveals

- Reveal section headings and supporting content as they enter the viewport.
- Use a subtle vertical movement of approximately 12–20px.
- Stagger cards slightly where appropriate.
- Avoid animating every individual text element.

### Project cards

- Use a subtle border, image, or background transition on hover.
- Add a small directional movement to the project arrow.
- Keep cards stable and prevent layout shifts.

### Navigation

- Provide clear hover and focus states.
- Use smooth anchor scrolling where supported.
- Offset anchored sections to account for a sticky navigation bar.

### Performance and accessibility

- Respect `prefers-reduced-motion`.
- Avoid continuous looping animations.
- Avoid counting animations for invented metrics.
- Avoid parallax effects that impair usability.
- Do not use animation as the only way to communicate information.

---

## 7. Responsive Design

The website must be fully responsive.

Use the reference template's actual breakpoints if they can be determined. Otherwise use a consistent responsive system.

Suggested breakpoints:

```text
Mobile:       < 640px
Large mobile: 640px–767px
Tablet:       768px–1023px
Desktop:      1024px–1279px
Large desktop: >= 1280px
```

### Mobile

- Use a compact navigation bar and accessible menu.
- Keep the hero headline readable and prevent text overflow.
- Stack hero actions when necessary.
- Display project cards in one column.
- Use single-column capability cards where appropriate.
- Ensure images crop correctly.
- Keep section padding proportionate.
- Use touch-friendly controls.
- Avoid a fixed telephone or emergency-action bar.
- Ensure the footer and all interactive elements remain accessible.

### Tablet

- Use a balanced two-column project layout where space allows.
- Use two-column capability cards.
- Maintain clear typography and spacing.
- Prevent images and text from becoming cramped.

### Desktop

- Use the template's established grid and alignment.
- Display two- or three-column project cards where appropriate.
- Use a maximum content width consistent with the design system.
- Provide generous whitespace without excessive scrolling.
- Keep long-form case studies readable.

### Validation

Test at a minimum of:

- 375px mobile width
- 390px mobile width
- 768px tablet width
- 1024px laptop width
- 1440px desktop width

Check for:

- Horizontal overflow
- Overlapping text
- Navigation collisions
- Broken image crops
- Unusable buttons
- Excessive hero height
- Inconsistent section spacing
- Content that disappears at smaller widths

---

## 8. Full Website Copy

Use the following content as the initial website copy.

The language should be professional, direct, confident, and grounded in actual facilities management work.

### Brand

**JOHN OH**

**FACILITIES MANAGEMENT · PROJECT COORDINATION · CONTINUOUS IMPROVEMENT**

### Navigation

About · Expertise · Projects · Experience · Contact

Primary action: `LET'S CONNECT`

### Hero

Eyebrow:

`FACILITIES MANAGEMENT · SINGAPORE`

Main headline:

`BETTER-MANAGED BUILDINGS. SMARTER OPERATIONS.`

Supporting headline:

`Practical facilities management. Structured project delivery. Continuous improvement.`

Description:

"I am a Senior Facilities Executive who combines practical facilities experience, project coordination and continuous improvement to create safer, more efficient and better-managed environments."

Primary CTA:

`EXPLORE MY PROJECTS`

Secondary CTA:

`CONNECT ON LINKEDIN`

### Introduction

Section label:

`ABOUT ME`

Heading:

`TURNING FACILITIES REQUIREMENTS INTO PRACTICAL SOLUTIONS.`

Copy:

"Facilities management is more than maintaining buildings. It involves understanding how people use spaces, planning for operational reliability, coordinating projects, managing service requirements and continuously improving the built environment.

My professional focus is on translating operational needs into clear scopes of work, practical technical specifications and structured implementation plans. I value preventive maintenance, effective coordination, quality workmanship and proper handover to support the long-term performance of facilities."

### Expertise

Section label:

`WHAT I DO`

Heading:

`PRACTICAL EXPERTISE. STRUCTURED EXECUTION.`

**Facilities and Building Management**

"Support the effective management of facilities through maintenance planning, operational coordination and attention to building condition."

**Preventive and Predictive Maintenance**

"Promote a shift from reactive maintenance towards planned preventive maintenance and data-informed opportunities for predictive maintenance."

**Project Coordination**

"Translate operational needs into structured work scopes, implementation requirements and coordinated project activities."

**Technical Specifications and Tender Documentation**

"Develop detailed scopes of work, technical specifications, bills of quantities, pricing schedules and project requirements."

**Contract and Vendor Management**

"Support contract scope reviews, service requirements, vendor coordination, quality control and performance monitoring."

**Safety, Compliance and Quality Control**

"Consider applicable standards, safe work practices, workmanship, testing requirements and proper project handover."

**Building Services and Air-Conditioning Systems**

"Work with technical requirements relating to air-conditioning systems, controls, electrical provisions and operational monitoring."

**Continuous Improvement**

"Identify practical opportunities to improve maintainability, operational efficiency, service delivery and the overall condition of facilities."

### Selected Projects

Section label:

`PROJECT PORTFOLIO`

Heading:

`FROM OPERATIONAL NEEDS TO TECHNICAL SOLUTIONS.`

Introduction:

"Explore selected facilities management project scopes and technical considerations across building services, renovation works, security systems, service contracts and operational improvements."

Project card 1:

Title: `Air-Conditioning System Retrofitting`

Category: `BUILDING SERVICES`

Description:

"Technical planning for air-conditioning replacement and retrofit works, including VRV/VRF systems, split units, centralised controls, operational requirements and testing and commissioning."

Project card 2:

Title: `CCTV System Replacement`

Category: `SECURITY SYSTEMS`

Description:

"Technical requirements for CCTV infrastructure, cameras, network video recorders, network equipment, system commissioning and ongoing maintenance."

Project card 3:

Title: `Housemaster Unit Renovation`

Category: `RENOVATION & REFURBISHMENT`

Description:

"Coordinated renovation requirements covering building finishes, kitchen cabinets, electrical works, fixtures, quality control and handover."

Project card 4:

Title: `Laundry Room Upgrading`

Category: `BUILDING UTILITIES`

Description:

"Utility and installation requirements covering water supply, discharge arrangements, electrical provisions, equipment coordination and operational readiness."

Project card 5:

Title: `Cleaning Contract Optimisation`

Category: `CONTRACT MANAGEMENT`

Description:

"Review of cleaning manpower and service requirements to address changing occupancy patterns, peak-period demands and operational efficiency."

Project card 6:

Title: `Technical Specifications & Tender Documentation`

Category: `PROJECT DELIVERY`

Description:

"Development of structured scopes of work, technical requirements, bills of quantities, pricing schedules, quality controls and maintenance obligations."

Project disclaimer:

"Project descriptions outline selected areas of professional work and technical focus. Detailed project outcomes, individual responsibilities and performance results will be published only where verified information is available."

### Professional approach

Section label:

`HOW I WORK`

Heading:

`FROM REQUIREMENTS TO RELIABLE DELIVERY.`

Step 01:

Title: `Understand the Environment`

Description:

"Assess operational requirements, existing conditions, stakeholder expectations and maintenance needs."

Step 02:

Title: `Plan with Technical Clarity`

Description:

"Translate requirements into structured scopes of work, specifications, coordination plans and quality expectations."

Step 03:

Title: `Execute and Verify`

Description:

"Coordinate implementation, review workmanship and address testing, commissioning and handover requirements."

Step 04:

Title: `Improve Continuously`

Description:

"Identify opportunities to strengthen reliability, maintainability, efficiency and long-term building performance."

### Experience

Section label:

`PROFESSIONAL BACKGROUND`

Heading:

`FACILITIES MANAGEMENT IN PRACTICE.`

Role:

`Senior Facilities Executive`

Organisation:

`Hwa Chong Institution Boarding School · Singapore`

Description:

"Professional focus on facilities operations, maintenance planning, renovation and upgrading works, technical specifications, tender documentation, contractor coordination and continuous improvement."

Do not add employment dates until confirmed.

### Standards and compliance

Section label:

`QUALITY & COMPLIANCE`

Heading:

`BUILT ON CLEAR REQUIREMENTS AND ACCOUNTABILITY.`

Copy:

"Effective facilities management requires clear technical requirements, appropriate safety controls, sound coordination and documented quality expectations.

My approach considers applicable Singapore Standards, relevant codes of practice, environmental and energy-efficiency requirements, testing and commissioning, defects management, maintenance obligations and proper handover."

Supporting topics:

- Technical specifications and scopes of work
- Safety and risk considerations
- Applicable standards and codes of practice
- Environmental and energy-efficiency considerations
- Testing, commissioning and documentation
- Defects liability and maintenance planning

### Contact

Section label:

`LET'S CONNECT`

Heading:

`GOOD FACILITIES MANAGEMENT STARTS WITH A CLEAR PLAN.`

Description:

"I welcome professional connections and conversations about facilities management, project coordination, maintenance planning and continuous improvement."

Primary CTA:

`CONNECT ON LINKEDIN`

Link:

https://www.linkedin.com/in/jin-hao-oh-687a9a241/

Secondary CTA:

`BACK TO PROJECTS`

### Footer

Brand:

`JOHN OH`

Descriptor:

`FACILITIES MANAGEMENT · PROJECT COORDINATION`

Links:

About · Expertise · Projects · Experience · Contact · LinkedIn

Copyright:

`© [CURRENT YEAR] JOHN OH. ALL RIGHTS RESERVED.`

---

## 9. Content and Data Architecture

Keep repeatable website content in structured TypeScript data files.

Use interfaces for projects, capabilities and experience.

Example project type:

```ts
export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  context?: string;
  objectives?: string[];
  scope?: string[];
  technicalConsiderations?: string[];
  approach?: string[];
  verifiedOutcomes?: string[];
  lessonsLearned?: string[];
  image?: string;
  imageAlt?: string;
  featured: boolean;
  status?: "published" | "draft";
}
```

Requirements:

- Use stable project IDs.
- Keep the data separate from presentation components.
- Support optional project detail pages or a detail view.
- Hide draft projects from the public-facing website.
- Never show empty sections, undefined values, or broken image placeholders.
- Use an explicit published/draft status.
- Use optional fields for information that has not been confirmed.
- Do not invent missing facts to fill out the page.
- Do not treat a project description as proof of a completed project.
- Avoid duplicating long descriptions across several components.

Create a straightforward way to update project information without changing the layout components.

---

## 10. SEO, Accessibility and Performance

### SEO

Set the document title to:

`John Oh | Facilities Management Portfolio`

Suggested meta description:

"Explore John Oh's professional portfolio in facilities management, project coordination, maintenance planning, technical specifications and continuous improvement in Singapore."

Include:

- Appropriate page title and meta description
- Open Graph metadata
- Favicon
- Canonical URL only when the final public website URL is known
- Descriptive image alt text
- Semantic headings
- Meaningful link labels

Do not invent a public domain, professional credentials, or social media accounts.

### Accessibility

Aim for WCAG 2.2 AA.

Implement:

- Semantic landmarks
- Keyboard-accessible navigation
- Visible keyboard focus
- Sufficient colour contrast
- Accessible mobile menu controls
- Appropriate button and link labels
- Reduced-motion support
- Useful image alternative text
- Correct heading order
- Appropriate accessible names for icon-only controls

Do not communicate important information using colour alone.

### Performance

- Optimise image dimensions and file sizes.
- Use responsive image delivery where practical.
- Lazy-load below-the-fold images.
- Avoid unnecessary JavaScript.
- Prevent cumulative layout shifts.
- Use appropriate font loading.
- Keep animations lightweight.
- Avoid autoplay video.
- Ensure the initial hero renders promptly.

---

## 11. Dependencies and Project Configuration

Use the package manager already established in the repository. If no project exists, initialise a Vite React TypeScript application.

Use the following baseline dependencies:

```json
{
  "dependencies": {
    "react": "latest-compatible",
    "react-dom": "latest-compatible",
    "motion": "^12.0.0",
    "lucide-react": "^0.460.0",
    "clsx": "^2.1.0"
  },
  "devDependencies": {
    "vite": "latest-compatible",
    "typescript": "latest-compatible",
    "tailwindcss": "compatible-version"
  }
}
```

Treat this as a dependency guide rather than literal package-manager syntax. Resolve valid versions before installation and use the Tailwind configuration approach appropriate to the selected version.

Ensure the following commands are available and functional:

```bash
npm run dev
npm run build
npm run preview
```

Add linting or type-checking commands if the project configuration supports them.

Do not leave missing scripts, unresolved imports, placeholder components that break the build, or incompatible package versions.

---

## 12. Acceptance Criteria

The implementation is complete only when all the following conditions are satisfied.

### Reference fidelity

- The actual LandingHero reference has been inspected where accessible.
- The resulting site reflects its recognisable visual direction.
- The reference's layout, typography and interactions have been adapted rather than replaced with an unrelated generic template.
- Any reference characteristics that could not be verified are documented.

### Personal branding

- The site identifies John Oh clearly.
- The professional positioning matches the supplied background.
- The correct LinkedIn URL is used.
- No fabricated qualifications, achievements, testimonials, employment dates or performance metrics appear.
- All unconfirmed project outcomes are omitted or clearly identified as pending confirmation.

### Visual design

- The design system is centralised.
- The typography and spacing remain consistent.
- The hero has a clear hierarchy.
- Project cards are visually distinct.
- Sections flow naturally.
- Icons and imagery are relevant.
- No broken images or placeholder text are visible.

### Functionality

- Navigation links work.
- The mobile menu works with keyboard and touch.
- Project links open the correct detail views.
- LinkedIn links use the supplied profile.
- All buttons perform meaningful actions.
- There are no fake form submissions.
- No dead links or non-functional controls remain.

### Responsive behaviour

- The website works at the specified mobile, tablet and desktop widths.
- No horizontal overflow occurs.
- Text and images resize appropriately.
- Navigation remains usable on mobile.
- Interactive controls are touch-friendly.

### Technical quality

- TypeScript has no blocking errors.
- The production build succeeds.
- The browser console contains no significant errors.
- The design system documentation is present.
- The README includes setup and deployment instructions.
- Accessibility and performance have been reviewed.

---

## 13. Execution Instructions for Codex

Follow this sequence.

**Phase 1 — Inspect**

1. Inspect the LandingHero reference URL.
2. Record the visual system, layout, typography, colours, component patterns and interactions that can be verified.
3. Inspect the existing repository and identify the framework and configuration.
4. Identify any missing content or assets that require placeholders.

**Phase 2 — Plan**

1. Establish the final design system.
2. Define the page architecture.
3. Identify reusable components.
4. Define the project data structure.
5. Confirm the responsive and accessibility approach.

**Phase 3 — Build**

1. Implement the shared design tokens.
2. Implement the navigation and hero.
3. Build the professional introduction and capabilities sections.
4. Build the project portfolio and project details.
5. Add professional approach, experience and compliance sections.
6. Add the contact section and footer.
7. Implement the responsive layouts and animations.
8. Add metadata and documentation.

**Phase 4 — Validate**

1. Run the available type checks and production build.
2. Test navigation and interactive components.
3. Inspect responsive layouts.
4. Review keyboard navigation and reduced-motion behaviour.
5. Fix visual and functional defects.
6. Confirm that no unverified information has been introduced.

**Phase 5 — Deliver**

Provide:

- The completed website implementation
- A concise summary of the design decisions
- The final project structure
- `DESIGN_SYSTEM.md`
- `README.md`
- Instructions for running and deploying the website
- A list of any content or assets that still require John's confirmation

Do not stop after creating a wireframe or describing the implementation. Complete the actual working website within the available environment.

If the exact reference template is inaccessible, proceed with the documented fallback design system rather than claiming to have reproduced details that could not be inspected.

**Final quality standard:** The result should look like a carefully designed professional portfolio that communicates John's facilities management expertise, practical technical approach and commitment to continuous improvement, while remaining credible, maintainable, accessible and ready for deployment.

## 14. Portfolio Content and Image Management

The portfolio will be developed progressively. Not all photographs, employment information, qualifications, and project outcomes will be available during the initial implementation.

Images are located in the `resources` folder

### Personal photographs

Use the supplied professional portrait of John Oh as the primary hero image.

If a second professional photograph is available, use it in the About section.

Do not generate an artificial representation of John Oh or substitute another person's photograph.

If no portrait has been supplied, use a professionally designed typographic hero with an optional image placeholder.

### Project images

Use actual project photographs only when supplied and approved for publication.

Where photographs are unavailable, use appropriately licensed illustrative photographs or custom technical illustrations.

Clearly distinguish illustrative imagery from photographs of actual projects.

Do not use AI-generated images to falsely represent completed project work.


### Project information

All project content must be based on information provided by John Oh.

Do not invent:
- Project completion dates
- Project budgets
- Cost savings
- Performance improvements
- Contractor names
- Awards or certifications
- Personal achievements
- Final project outcomes

Projects without confirmed outcomes should be presented as professional project experience, technical scope development, or work in progress, as appropriate.

### Experience information

Create an editable career timeline.

Only display confirmed employment history, dates, qualifications, and professional achievements.

Hide incomplete entries from the published website.

### Content management

Keep profile information, employment history, qualifications, project descriptions, and image paths in separate editable data files.

Allow new projects and photographs to be added without redesigning the website.

### Missing assets

Do not display broken images, empty cards, or visible development placeholders.

Use an appropriate fallback design or hide incomplete content until it is available.

### Confidentiality

Do not publish internal tender documents, contract prices, student or resident information, CCTV footage, access arrangements, security-sensitive drawings, or other restricted employer information.

Where necessary, replace original project material with anonymised descriptions or clearly labelled illustrative graphics.

The website must remain professional, visually complete, and functional even when only John's professional portrait and basic career information are available.

### Assignment Scope — Keep the Portfolio Simple

This website is for an academic personal branding assignment, not a commercial business website. Prioritise a professional visual presentation, clear personal branding, and a straightforward demonstration of my facilities management experience.

Use the following confirmed information:

- Name: John Oh
- Job title: Senior Facilities Executive
- Organisation: Hwa Chong Institution Boarding School (HCIBS), Singapore
- Professional focus: Facilities management, project coordination, preventive maintenance, technical specifications, contract management, and continuous improvement.
- LinkedIn: www.linkedin.com/in/jin-hao-oh-687a9a241

Include only these main sections:

1. Hero and personal branding
2. About Me
3. Professional Skills
4. Three Selected Projects
5. Education and Experience, using only confirmed information
6. Contact and LinkedIn

Use one personal photograph if supplied. For projects without photographs, use relevant illustrative images or simple diagrams, clearly distinguished from actual project photographs.

Do not invent employment dates, qualifications, project results, financial savings, awards, or testimonials.

Do not build a backend, CMS, complex contact form, project database, or unnecessary interactive features. Keep the website responsive, visually consistent with the supplied LandingHero reference template, easy to navigate, and suitable for an academic assignment.

Ensure the website can run locally and that the production build succeeds.