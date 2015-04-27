var path = require('path');

module.exports = function(root) {
    return {
        mongodb: 'mongodb://localhost:27017/blogdb',
        model: path.join(root, 'model'),
        view: path.join(root, 'view'),
        controller: path.join(root, 'controller'),
        mainpath: path.join(root, 'server'),
        secret: '1234!@#$',
        root: root,
        disqus_shortname: 'disqus',
        port: 8002,
        template: {
            webtitle: 'blog',
            navs: [{
                text: '最新',
                href: '/newblogs'
            }, {
                text: 'Javascript',
                href: '/category/javascript'
            }, {
                text: 'Node.js',
                href: '/category/nodejs'
            }, {
                text: 'Python',
                href: '/category/python'
            }, {
                text: '游戏',
                href: '/category/game'
            }, {
                text: '其他',
                href: '/category/other'
            }]
        }
    }
}
