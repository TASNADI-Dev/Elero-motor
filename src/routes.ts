// Single source of truth for public URLs (Hungarian slugs) and their short nav-style page names.
export const routes = {
	home: { path: "/", title: "Főoldal" },
	motors: { path: "/motorok", title: "Motorok" },
	controls: { path: "/vezerlesek", title: "Vezérlések" },
	about: { path: "/rolunk", title: "Rólunk" },
	videos: { path: "/videok", title: "Videók" },
	references: { path: "/referenciak", title: "Referenciák" },
	contact: { path: "/kapcsolat", title: "Kapcsolat" },
} as const;
