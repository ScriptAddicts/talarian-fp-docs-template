module.exports = {
  "title": "Form Publisher Documentation",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "hideableSidebar": true,
    "navbar": {
      "style": "primary",
      "logo": {
        "alt": "Form Publisher Documentation",
        "src": "img/form-publisher-support-logo.svg"
      },
      "items": [
        {
          "type": 'search',
          "position": 'right',
        }
      ],
    },
    "footer": {
      "links": [
        { 
          "items": [
            {
              "html": `
                    <img src="/img/form-publisher-logo-text.svg" alt="Form Publisher" width="189" height="34" />
                    <ul class="footer-social-items">
                      <li>
                        <a href="https://twitter.com/form_publisher" target="_blank" rel="noreferrer noopener" aria-label="Form Publisher on Twitter">
                          <img src="/img/social-twitter-icon.svg" alt="Form Publisher on Twitter" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCYPZ_gNf3YFFsYxu4ldS7pg" target="_blank" rel="noreferrer noopener" aria-label="Form Publisher on YouTube">
                          <img src="/img/social-youtube-icon.svg" alt="Form Publisher on YouTube" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/company/form-publisher" target="_blank" rel="noreferrer noopener" aria-label="Form Publisher on LinkedIn">
                          <img src="/img/social-linkedin-icon.svg" alt="Form Publisher on LinkedIn" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/formpublisher/" target="_blank" rel="noreferrer noopener" aria-label="Form Publisher on Facebook">
                          <img src="/img/social-facebook-icon.svg" alt="Form Publisher on Facebook" width="25" height="25" />
                        </a>
                      </li>
                    </ul>
                `,
            },
          ]
        },
        {
          "title": "Product",
          "items": [
            { 
              "label": "How it works",
              "to": "https://form-publisher.com/how-it-works/"
            },
            {
              "label": "Features",
              "to": "https://form-publisher.com/#Features"
            },
            {
              "label": "Pricing",
              "to": "https://form-publisher.com/pricing/"
            },
            {
              "label": "Install Form Publisher",
              "to": "https://workspace.google.com/marketplace/app/form_publisher_form_to_pdf_google_docs_t/827172627657"
            }
          ],
        },
        {
          "title": "Resources",
          "items": [
            { 
              "label": "Getting started",
              "to": "https://support.form-publisher.com/hc/en-us/categories/201581669-Getting-Started"
            },
            {
              "label": "Help center",
              "to": "https://support.form-publisher.com/hc/en-us"
            },
            {
              "label": "Contact support",
              "to": "https://support.form-publisher.com/hc/en-us/requests/new"
            },
            {
              "label": "Release notes",
              "to": "https://support.form-publisher.com/hc/en-us/sections/203047705-Release-Notes"
            },
            {
              "label": "Blog",
              "to": "https://form-publisher.com/blog"
            }
          ],
        },
        {
          "title": "Legal",
          "items": [
            { 
              "label": "Terms of service",
              "to": "https://form-publisher.com/terms-of-service/"
            },
            {
              "label": "Privacy policy",
              "to": "https://form-publisher.com/privacy-policy/"
            },
            {
              "label": "Cookie policy",
              "to": "https://form-publisher.com/cookie-policy/"
            },
            {
              "label": "Google disclosure",
              "to": "https://form-publisher.com/google-disclosure/"
            },
            {
              "label": "DPA",
              "to": "https://talarian.io/data-processing-agreement"
            },
            {
              "label": "Impressum",
              "to": "https://form-publisher.com/impressum/"
            },
          ],
        },
        {
          "title": "Company",
          "items": [
            { 
              "label": "About us",
              "to": "https://talarian.io/"
            },
            { 
              "label": "We're hiring",
              "to": "https://talarian.io/careers"
            },
            { 
              "label": "Awesome Table",
              "to": "https://awesome-table.com/"
            },
            { 
              "label": "Yet Another Mail Merge",
              "to": "https://yamm.com/"
            },
          ],
        },
      ],
      "copyright": "Copyright © 2022 Talarian Sàrl. All rights reserved.",
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js'),
          "remarkPlugins": [
            require('./src/remark/convertYoutubeEmbeds.js'), 
            require('./src/remark/swapContextAndPrereq.js'),
            require('./src/remark/createAwesomeTableEmbeds.js')],
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": []
};