const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'jsx', (node) => {
        if (node.value.includes("www.youtube.com/watch")) {
          const regexp = /<object data="https:\/\/www\.youtube\.com\/watch\?v=[a-zA-Z0-9-_]{11}">\s*<p \/>\s*<\/object>/g;
          const matches = [...node.value.matchAll(regexp)];

          for (match of matches) {
            let YouTubeID = match[0].substring(46, 57);
            const iframe = `
                  <iframe 
                    class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/${YouTubeID}" 
                    width="560" 
                    height="315" 
                    frameborder="0" 
                    allowfullscreen="">
                  </iframe>
            `;
            node.value = node.value.replace(match[0], iframe);
          }
        }
    });
  };
  return transformer;
}

module.exports = plugin;