// admin/config.js
window.CMS_CONFIG = {
    backend: {
      name: "github",
      repo: "axiom5/axiom5.github.io",
      branch: "main",
      auth_type: "implicit",
      client_id: "Ov23liqlnzaN7b652gmS",
      app_id: "" // Leave blank if you're not using a GitHub App
    },
    media_folder: "assets/img",
    public_folder: "/assets/img",
    collections: [
      {
        name: "pages",
        label: "Pages",
        folder: "_pages",
        create: true,
        format: "frontmatter",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Body", name: "body", widget: "markdown" }
        ]
      },
      {
        name: "posts",
        label: "Blog Posts",
        folder: "_posts",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        format: "frontmatter",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Body", name: "body", widget: "markdown" },
          { label: "Image", name: "thumbnail", widget: "image", required: false }
        ]
      }
    ]
  };