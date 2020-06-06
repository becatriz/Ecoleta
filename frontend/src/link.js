var createDownloadLink = require('create-download-link');
 
var opt = {
    data: 'Here is the content of the file',
    title: 'Click to download your file',
    filename: 'example.txt'
};
 
var anchor = createDownloadLink(opt);