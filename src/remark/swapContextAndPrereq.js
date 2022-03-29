const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'jsx', (node) => {
      if (node.value.includes('<div xmlns="http://www.w3.org/1999/xhtml" className="section prereq p">') && node.value.includes('<section xmlns="http://www.w3.org/1999/xhtml" className="section context">')) {
            const sectionPrereqStart = node.value.indexOf('<div xmlns="http://www.w3.org/1999/xhtml" className="section prereq p">');
            const sectionPrereqEnd = node.value.indexOf('<section xmlns="http://www.w3.org/1999/xhtml" className="section context">');
            const sectionPrereq = node.value.substring(sectionPrereqStart, sectionPrereqEnd)
            const sectionContextStart = node.value.indexOf('<section xmlns="http://www.w3.org/1999/xhtml" className="section context">');
            const sectionContextEnd = node.value.indexOf('<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps">');
            const sectionContext = node.value.substring(sectionContextStart, sectionContextEnd)
            node.value = node.value.replace(
              `${sectionPrereq}` + `${sectionContext}`, 
              `${sectionContext}` + `${sectionPrereq}`);
        }
    });
  };
  return transformer;
}

module.exports = plugin;