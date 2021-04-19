const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/didierm',
    {
        branch: 'master',
        repo: 'https://github.com/didiermunezero/didierm.git',
        user: {
            name: 'didiermunezero',
            email: 'didiermunezer38@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)