/** Production origin for canonical URLs, Open Graph, and hreflang (avoid request-dependent hosts). */
export const SITE_ORIGIN = "https://michaelliendo.com";

export const SITE_NAME = "Michael Liendo";

export const TWITTER_SITE = "@mykeliendo";

export const PROFILE_IMAGE = `${SITE_ORIGIN}/images/michael-liendo.jpg`;

/** 1200×630 share cards, generated from the design in static/og. */
export const OG_IMAGE = {
	es: `${SITE_ORIGIN}/og/home-es.png`,
	en: `${SITE_ORIGIN}/og/home-en.png`,
} as const;

export const SAME_AS = [
	"https://github.com/Michael-Liendo",
	"https://www.linkedin.com/in/michaelliendo/",
	"https://x.com/mykeliendo",
	"https://twitter.com/mykeliendo",
] as const;

export const KNOWS_ABOUT = [
	"TypeScript",
	"JavaScript",
	"React",
	"Next.js",
	"Node.js",
	"Fastify",
	"Express",
	"PostgreSQL",
	"Ionic",
	"Capacitor",
	"SvelteKit",
	"Rust",
	"OpenAI",
	"Google Gemini",
	"Retrieval-augmented generation",
	"WhatsApp Business API",
	"Shopify",
	"Odoo",
	"n8n",
	"Make",
	"Business process automation",
] as const;
