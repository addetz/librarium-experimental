/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const privacyIconSVG = `
  <svg style="margin-right: 20px;" role="img" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <path fill="#aeb1be" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>
  </svg>
`;

// Function to create the privacy link
function createPrivacyLink(includeIcon = true, extraClass = "") {
  const icon = includeIcon ? privacyIconSVG : "";
  return `
    <a class="menu__link ${extraClass}" href="#" onClick="UC_UI.showSecondLayer();">
      ${icon}Privacy Settings
    </a>
  `;
}

const privacyLinkDocs = createPrivacyLink();
const privacyLinkTutorial = createPrivacyLink(false, "privacy-settings");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSidebar: [
    { type: "autogenerated", dirName: "." },
    {
      type: "html",
      value: privacyLinkDocs,
    },
  ],
  tutorialSidebar: [
    {
      type: "doc",
      id: "tutorials/tutorials",
    },
    // {
    //   type: "category",
    //   label: "Getting Started",
    //   className: "category",
    //   collapsed: false,
    //   collapsible: false,
    //   items: [{ type: "autogenerated", dirName: "tutorials/getting-started" }],
    //   customProps: {
    //     icon: "flag-checkered",
    //   },
    // },
    {
      type: "category",
      label: "Profiles and Packs",
      className: "category",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "tutorials/profiles" }],
      customProps: {
        icon: "bundles",
      },
    },
    {
      type: "category",
      label: "Cluster Deployment",
      className: "category",
      collapsible: false,
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "tutorials/cluster-deployment" }],
      customProps: {
        icon: "clusters",
      },
    },
    {
      type: "category",
      label: "Cluster Management",
      className: "category",
      collapsible: false,
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "tutorials/cluster-management" }],
      customProps: {
        icon: "envelope-open-text",
      },
    },
    {
      type: "category",
      label: "Edge",
      className: "category",
      collapsible: false,
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "tutorials/edge" }],
      customProps: {
        icon: "microchip",
      },
    },
    // {
    //   type: "category",
    //   label: "Self-hosted",
    //   className: "category",
    //   collapsible: false,
    //   collapsed: false,
    //   items: [{ type: "autogenerated", dirName: "tutorials/self-hosted" }],
    //   customProps: {
    //     icon: "warehouse",
    //   },
    // },
    // {
    //   type: "category",
    //   label: "Virtual Machine Orchestration",
    //   className: "category",
    //   collapsible: false,
    //   collapsed: false,
    //   items: [{ type: "autogenerated", dirName: "tutorials/vmo" }],
    //   customProps: {
    //     icon: "server",
    //   },
    // },
    // {
    //   type: "category",
    //   label: "Tenant Admin and Security",
    //   className: "category",
    //   collapsible: false,
    //   collapsed: false,
    //   items: [{ type: "autogenerated", dirName: "tutorials/tenant-admin-security" }],
    //   customProps: {
    //     icon: "gears",
    //   },
    // },
    {
      type: "html",
      value: privacyLinkTutorial,
    },
  ],
};

module.exports = sidebars;
