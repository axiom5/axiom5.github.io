import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin", // Keep this as "admin" for TinaCMS admin files
    publicFolder: "assets", // Changed to "assets" to match al-folio assets folder
  },
  media: {
    tina: {
      mediaRoot: "img", // Changed to "img" within the assets folder
      publicFolder: "assets", // Changed to "assets"
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts", // Changed to "_posts" to match Jekyll's posts folder
        format: "md",    // Added format: "md" as Jekyll posts are usually Markdown
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime", // Added a date field for posts
            name: "date",
            label: "Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",     // Added an image field for post thumbnails (optional)
            name: "thumbnail",
            label: "Thumbnail Image",
            required: false,
          },
        ],
      },
      {
        name: "page",          // Added a new collection for "pages"
        label: "Pages",
        path: "_pages",      // Path to Jekyll's _pages folder
        format: "md",        // Assuming pages are also Markdown
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});


