/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSidebar: [
    { type: "autogenerated", dirName: "." },
    {
      type: "html",
      value:
        '<a class="menu__link" href="#" onClick="UC_UI.showSecondLayer();"><span class="privacy-settings"><i class="privacy-icon fa-solid fa-eye"></i>Privacy Settings</span></a>',
    },
  ],
  tutorialSidebar: [
    {
      type: "doc",
      id: "tutorials/tutorials",
    },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-flag-checkered'></i>Getting Started<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    // { type: "autogenerated", dirName: "tutorials/getting-started" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-layer-group'></i>Profiles<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    { type: "autogenerated", dirName: "tutorials/profiles" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-rocket'></i>Cluster Deployment<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    { type: "autogenerated", dirName: "tutorials/cluster-deployment" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-bars-progress'></i>Cluster Management<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    { type: "autogenerated", dirName: "tutorials/cluster-management" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-microchip'></i></i>Edge<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    { type: "autogenerated", dirName: "tutorials/edge" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-warehouse'></i>Self-hosted<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    // { type: "autogenerated", dirName: "tutorials/self-hosted" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-boxes-stacked'></i>Virtual Machine Orchestration<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    // { type: "autogenerated", dirName: "tutorials/vmo" },
    {
      type: "html",
      value:
        "<div class='category'><i class='category-icon fa-solid fa-users-gear'></i>Tenant Admin and Security<hr class='category-divider' /></div>",
      defaultStyle: true,
    },
    // { type: "autogenerated", dirName: "tutorials/tenant-admin-security" },
    {
      type: "html",
      value: "<hr class='category-divider' />",
      defaultStyle: true,
    },
    {
      type: "html",
      value: '<a class="menu__link" href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a>',
      // value:
      //   '<a class="menu__link" href="#" onClick="UC_UI.showSecondLayer();"><span class="privacy-settings"><i class="fa-solid fa-eye icon"></i>Privacy Settings</span></a>',
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
