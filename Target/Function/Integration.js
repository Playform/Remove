var f = (...[t = {}]) => {
	for (const e in t)
		Object.prototype.hasOwnProperty.call(t, e) &&
			t[e] === !0 &&
			(t[e] = o[e]);
	const { Path: a } = s(o, t),
		r = new Set();
	if (typeof a < "u" && (Array.isArray(a) || a instanceof Set))
		for (const e of a) r.add(e);
	return {
		name: "astro-dead-links",
		hooks: {
			"astro:build:done": async ({ dir: e }) => {
				r.size || r.add(e);
			},
		},
	};
};
const { default: o } = await import("../Variable/Option.js"),
	{ default: s } = await import(
		"typescript-esbuild/Target/Function/Merge.js"
	);
export { o as Default, s as Merge, f as default };
