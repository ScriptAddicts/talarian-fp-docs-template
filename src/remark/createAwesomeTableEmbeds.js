const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'jsx', (node) => {
        if (node.value.includes('type="AwesomeTable"')) {
            // console.log(node.value);

            // A regex that matches <object> with and without height attribute specified
            // Example 1:
            // <object xmlns="http://www.w3.org/1999/xhtml" data="-Mx0giR4SuKQLt065uhz" height="960px" type="AwesomeTable"> </object> 
            //
            // Example 2:
            // <object xmlns="http://www.w3.org/1999/xhtml" data="-Mx0giR4SuKQLt065uhz" type="AwesomeTable"> </object> 
            //
            const regexp = /<object xmlns="http:\/\/www\.w3\.org\/1999\/xhtml" data="[a-zA-Z0-9\-\_]{20}"( height="[0-9]{3,4}(px)?")? type="AwesomeTable\"> <\/object>/g;
            
            // matchAll() creates an array of the matched strings
            // Unpack the strings into the 'matches' constant
            const matches = [...node.value.matchAll(regexp)];
            // console.log(matches);
            for (match of matches) {
                // Extract the Awesome Table app ID
                let AwesomeTableID = match[0].substring(51, 71);
                // If height is specified, extract it, and add it to the iframe
                if ( match[0].includes("height=") ) {
                    let AwesomeTableHeight = match[1];
                    console.log(AwesomeTableHeight);
                    const iframe = `
                        <iframe 
                            referrerpolicy="no-referrer-when-downgrade" 
                            ${AwesomeTableHeight}
                            width="100%" 
                            style={{border: "none",}} 
                            src="https://view-awesome-table.com/${AwesomeTableID}/view">
                        </iframe>
                    `;
                    node.value = node.value.replace(match[0], iframe);
                // If height is not specified, apply the defaul 600px
                } else {
                    const iframe = `
                        <iframe 
                            referrerpolicy="no-referrer-when-downgrade" 
                            height="600px" 
                            width="100%" 
                            style={{border: "none",}} 
                            src="https://view-awesome-table.com/${AwesomeTableID}/view">
                        </iframe>
                    `;
                    node.value = node.value.replace(match[0], iframe);
                }
            }
        }
    });
  };
  return transformer;
}

module.exports = plugin;