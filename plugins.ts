import "lume/types.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import postcss from "lume/plugins/postcss.ts";
import date from "lume/plugins/date.ts";
import markdown from "lume/plugins/markdown.ts";

export default function () {
  return (site: Lume.Site) => {
    site
      .use(
        tailwindcss({
          extensions: [".html", ".jsx"],
          options: {
            darkMode: "selector",
            plugins: [typography],
            theme: {
              extend: {
                typography: {
                  DEFAULT: {
                    css: {
                      "--tw-prose-body": "var(--foreground)",
                      "--tw-prose-headings": "var(--foreground)",
                      "--tw-prose-lead": "var(--foreground)",
                      "--tw-prose-links": "var(--foreground)",
                      "--tw-prose-bold": "var(--foreground)",
                      "--tw-prose-counters": "var(--foreground)",
                      "--tw-prose-bullets": "var(--foreground)",
                      "--tw-prose-hr": "var(--foreground)",
                      "--tw-prose-quotes": "var(--foreground)",
                      "--tw-prose-quote-borders": "var(--foreground)",
                      "--tw-prose-captions": "hsl(var(--foreground))",
                      "--tw-prose-code": "var(--foreground)",
                      "--tw-prose-pre-code": "var(--foreground)",
                      "--tw-prose-pre-bg": "var(--background)",
                      "--tw-prose-th-borders": "var(--foreground)",
                      "--tw-prose-td-borders": "var(--foreground)",
                      "--tw-prose-invert-body": "var(--foreground)",
                      "--tw-prose-invert-headings": "var(--foreground)",
                      "--tw-prose-invert-lead": "var(--foreground)",
                      "--tw-prose-invert-links": "var(--foreground)",
                      "--tw-prose-invert-bold": "var(--foreground)",
                      "--tw-prose-invert-counters": "var(--foreground)",
                      "--tw-prose-invert-bullets": "var(--foreground)",
                      "--tw-prose-invert-hr": "var(--foreground)",
                      "--tw-prose-invert-quotes": "var(--foreground)",
                      "--tw-prose-invert-quote-borders": "var(--foreground)",
                      "--tw-prose-invert-captions": "var(--foreground)",
                      "--tw-prose-invert-code": "var(--foreground)",
                      "--tw-prose-invert-pre-code": "var(--foreground)",
                      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                      "--tw-prose-invert-th-borders": "var(--foreground)",
                      "--tw-prose-invert-td-borders": "var(--foreground)",
                    },
                  },
                },
                colors: {
                  border: "var(--border)",
                  input: "var(--input)",
                  ring: "var(--ring)",
                  background: "var(--background)",
                  foreground: "var(--foreground)",
                  red: {
                    primary: "var(--red-primary)",
                    secondary: "var(--red-secondary)",
                  },
                  orange: {
                    primary: "var(--orange-primary)",
                    secondary: "var(--orange-secondary)",
                  },
                  yellow: {
                    primary: "var(--yellow-primary)",
                    secondary: "var(--yellow-secondary)",
                  },
                  green: {
                    primary: "var(--green-primary)",
                    secondary: "var(--green-secondary)",
                  },
                  blue: {
                    primary: "var(--blue-primary)",
                    secondary: "var(--blue-secondary)",
                  },
                  purple: {
                    primary: "var(--purple-primary)",
                    secondary: "var(--purple-secondary)",
                  },
                  magenta: {
                    primary: "var(--magenta-primary)",
                    secondary: "var(--magenta-secondary)",
                  },
                  cyan: {
                    primary: "var(--cyan-primary)",
                    secondary: "var(--cyan-secondary)",
                  },
                  primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                  },
                  secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                  },
                  destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                  },
                  muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                  },
                  accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                  },
                  popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                  },
                  card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                  },
                },
                borderRadius: {
                  lg: "var(--radius)",
                  md: "calc(var(--radius) - 2px)",
                  sm: "calc(var(--radius) - 4px)",
                },
              },
            },
          },
        })
      )
      .use(postcss())
      .use(picture())
      .use(transformImages())
      .use(markdown())
      .use(
        date({
          formats: {
            SHORT: "yyyy-MM-dd",
          },
        })
      );
  };
}
