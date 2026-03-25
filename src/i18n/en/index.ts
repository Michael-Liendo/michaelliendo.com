import type { BaseTranslation } from "../i18n-types";

const en = {
	SEO: {
		TITLE: "Michael Liendo | Software Developer",
		DESCRIPTION:
			"Michael Liendo — software developer focused on React, TypeScript, mobile apps, backends and web. Technical notes on engineering, Svelte and tooling. Open to collaboration; contact hello@michaelliendo.com.",
		KEYWORDS:
			"michael liendo, home, notes, portfolio, software developer, svelte, typescript, web development, challenging projects, collaboration, problem-solving",
		IMAGE: "https://avatars.githubusercontent.com/u/70660410?v=4",
		NOTES: {
			TITLE: "Notes | Michael Liendo",
			DESCRIPTION:
				"Articles and tutorials by Michael Liendo on software engineering, Git, React Native, Expo, TypeScript, SvelteKit and developer workflows — practical notes from real projects.",
			KEYWORDS:
				"michael liendo, notes, learnings, experiences, svelte, typescript, web development, collaboration, problem-solving",
		},
		NOTE: {
			TITLE: "{title:string} | Notes of Michael Liendo",
			DESCRIPTION: "{description:string}",
			KEYWORDS: "{keywords:string}",
		},
		PROJECT: {
			TITLE: "Projects | Michael Liendo",
			DESCRIPTION:
				"Selected software projects by Michael Liendo: open source, web and mobile work built with modern stacks. Links to demos and repositories.",
			KEYWORDS:
				"michael liendo, projects, software developer, svelte, typescript, web development, collaboration, problem-solving",
		},
		AUTOMATIONS: {
			TITLE: "Custom software & automations | Michael Liendo",
			DESCRIPTION:
				"Custom software development for companies in Venezuela: internal apps, system integrations, automations and modern stacks (n8n, APIs). Solutions shaped to your operation.",
			KEYWORDS:
				"custom software Venezuela, business software development, automation, integrations, n8n, internal tools, Michael Liendo",
		},
	},
	LAYOUT: {
		NAV: {
			HOME: "Home",
			NOTES: "Notes",
			PROJECTS: "Projects",
			AUTOMATIONS: "Automations",
		},
		FOOTER: {
			COPYRIGHT:
				"Made with ❤️ by Michael Liendo © {startYear:number} - {currentYear:number}",
		},
	},
	HOMEPAGE: {
		HI: `Hi I'm {name:string} {surname:string},`,
		HERO_HEADLINE: "I'm Michael Liendo, a Software Developer",
		HERO_LEAD:
			"Focused on React, TypeScript, mobile apps, backends and the web. I like tough problems, clear collaboration and shipping maintainable software.",
		LOCATION: "Remote",
		TIMEZONE: "UTC−5",
		STACK_TITLE: "Core stack",
		ABOUT: `I'm a <strong>Software Developer</strong> focused on React.js and TypeScript with a passion for <strong>Development of Mobile Applications, Servers, AI, Automations and Web Pages</strong>. I enjoy working on challenging projects, value collaboration and problem-solving.`,
		CTA_LABEL:
			"Are you interested in working with me or collaborating on a project? hello@michaelliendo.com",
		CTA_BUTTON: "Contact me",
		LATEST_NOTES: "Latest Notes",
	},
	NOTES: {
		NOTES: "Notes",
		DESCRIPTION:
			"I write down thoughts and solutions on Software Engineering topics.",
		READ_MORE: "Read more",
		READ_NOTE: "Read note",
	},
	PROJECTS: {
		PROJECTS: "Projects",
		DESCRIPTION:
			"Recent product, AI, and full-stack work; below that, open source, learning projects, and earlier pieces.",
		FEATURED: "Selected work",
		MORE: "More projects",
		LIVE_SITE: "Visit site",
		SOURCE_CODE: "Source code",
	},
	LEADS: {
		HERO_BADGE: "SMBs & teams in Venezuela (and cross-border ops)",
		HERO_HEADLINE:
			"Less operational chaos: automate sales, payments and reporting without bloating payroll",
		HERO_LEAD:
			"I build custom software for companies: internal apps, integrations across your stack and automations that match how you operate — built for your team and workflows, not generic templates.",
		HERO_CTA_PRIMARY: "I want a free consult",
		HERO_CTA_SECONDARY: "See a real case study",
		CASE_SIMPLE_BADGE: "Real case",
		CASE_STUDIES_TITLE: "NQLN · before & after",
		CASE_STUDIES_LEAD:
			"From the support dashboard: customers used to wait hours or days; the bot now replies in minutes. Below: monthly payroll savings after moving from ~10 chat agents to 2–3.",
		CASE_SIMPLE_COMPARE_CAPTION: "First response time",
		CASE_SIMPLE_BEFORE_LABEL: "Before · agents only",
		CASE_SIMPLE_BEFORE_TIME: "7h 16m",
		CASE_SIMPLE_BEFORE_DESC:
			"Typical human first response in the panel. Follow-ups could stretch for days.",
		CASE_SIMPLE_AFTER_LABEL: "After · bot",
		CASE_SIMPLE_AFTER_TIME: "~2 min",
		CASE_SIMPLE_AFTER_DESC: "Automatic first touch for the customer.",
		CASE_SIMPLE_PAYROLL_TITLE: "Chat payroll savings",
		CASE_SIMPLE_PAYROLL_BODY:
			"They used to staff chat with ~10 people; 2–3 are enough now. At US$300 per person per month, cost drops from ~US$3,000 to US$600–900 (2–3 × US$300).",
		CASE_SIMPLE_PAYROLL_SAVINGS_LABEL: "Estimated savings · month",
		CASE_SIMPLE_PAYROLL_NOTE:
			"Based on the headcount and pay you described; excludes payroll taxes and benefits.",
		CASE_MORE: "More case studies in this simple format soon.",
		SERVICES_TITLE: "Solutions that match how teams work today",
		SERVICE_1_TITLE: "Process automation",
		SERVICE_1_DESC:
			"Flows in n8n or Make — from confirmations and reminders to syncing data between apps, with cost-aware options (including self-hosted n8n when it makes sense).",
		SERVICE_2_TITLE: "System integrations",
		SERVICE_2_DESC:
			"Connect e-commerce, POS, CRM, Google Sheets, email and WhatsApp Business API or webhooks: less double entry and reports that stay fresh.",
		SERVICE_3_TITLE: "Custom software & dashboards",
		SERVICE_3_DESC:
			"Internal panels, forms and lightweight portals for inventory, dispatch, approvals or support — built for small teams and real Venezuelan operations plus overseas customers.",
		PROOF_TITLE: "Concrete outcomes",
		PROOF_1:
			"Retail: chained orders, notifications and bookkeeping touchpoints to cut invoicing rework and daily close effort.",
		PROOF_2:
			"Replaced copy-paste between CRM and email with a monitored flow and alerts when something breaks.",
		PROOF_3:
			"Internal portal for a distributed team: IT requests and tracking in one place instead of endless threads.",
		MAGNET_TITLE:
			"Free guide: 5 typical Venezuelan SMB processes you can automate first",
		MAGNET_LEAD:
			"Share your details and tick the box — I'll send a short checklist focused on chat sales, mixed-currency collections and lean staffing.",
		MAGNET_BULLET_1: "Where the first quick win usually is for your kind of business",
		MAGNET_BULLET_2: "When n8n/Make beats “just one more spreadsheet”",
		MAGNET_BULLET_3: "What to gather before a call (without burning a day in meetings)",
		MAGNET_CTA: "Get the guide",
		CONTENT_TITLE: "Deep dives & notes",
		CONTENT_BODY:
			"I write about engineering, modern stacks and automation — helpful if you want to see how I think before starting a project.",
		CONTENT_CTA: "Read the notes",
		FORM_TITLE: "Tell me what you want to streamline",
		FORM_SUBTITLE:
			"Short form: I reply with honest fit, suggested approach and rough timing (remote work with teams in Venezuela and abroad).",
		FORM_NAME: "Name",
		FORM_EMAIL: "Email",
		FORM_PHONE: "Phone (WhatsApp or mobile)",
		FORM_PROCESS: "What process do you want to automate or integrate?",
		FORM_PROCESS_PLACEHOLDER:
			"Example: orders from Instagram and WhatsApp → log in a sheet or system → notify dispatch → reflect VES or USD payment…",
		FORM_GUIDE:
			"Also send the free guide (5 typical processes in Venezuela)",
		FORM_SUBMIT: "Send request",
		FORM_SUCCESS:
			"Done — your request was saved. I'll follow up soon with next steps.",
		FORM_SUCCESS_MAILTO:
			"Your email app should open with a pre-filled message. Send it to complete the request.",
		FORM_ERROR_GENERIC: "Something went wrong. Please try again or use WhatsApp.",
		FORM_ERROR_VALIDATION: "Please check the required fields and try again.",
		FORM_ERROR_STORE:
			"We couldn't save your request on the server. Try again in a few minutes or message me on WhatsApp.",
		WHATSAPP_ARIA: "Chat on WhatsApp",
		WHATSAPP_LABEL: "WhatsApp",
	},
} satisfies BaseTranslation;

export default en;
