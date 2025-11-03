import { defineConfig } from "astro/config";
import { generateAPIReferenceItems, stainlessDocs } from "@stainless-api/docs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    stainlessDocs({
      apiReference: {
        stainlessProject: "{{ PROJECT_NAME }}",
      },
      title: "{{ PROJECT_TITLE }}",
      customCss: ["./theme.css"],
      header: {
        layout: "stacked",
        links: [
          {
            label: "Get started",
            link: "/",
          },
        ],
      },
      tabs: [
        {
          label: "Guides",
          link: "/",
          sidebar: [
            {
              label: "Getting started",
              items: [""], // "" links to the index page
            },
            {
              label: "Guides",
              autogenerate: { directory: "guides" },
            },
          ],
        },
        {
          label: "API Reference",
          link: "/api",
          sidebar: [
            {
              label: "API Reference",
              items: generateAPIReferenceItems(),
            },
          ],
        },
      ],
    }),
  ],
});
