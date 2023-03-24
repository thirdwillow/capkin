const sidebar = require('./siderbar.js');
module.exports = {
    "title": "capkin博客",
    "description": "capkin的博客",
    "dest": "docs",
    "base": "/capkin/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/logo.jpg"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
    "theme": "reco",
    "themeConfig": {
        "mode": 'light',
        "subSidebar": 'auto',
        "valineConfig": {
            "appId": 'vkdbQdal5BcH3yeqHeKZ0KIc-gzGzoHsz',
            "appKey": '4VXN9Zk35EWwzkiBBCHgoLfU',
        },
        "nav": [{
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            { "text": '留言板', "link": '/blogs/views/messageBoard.html', "icon": 'reco-suggestion' },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                        "text": "GitHub",
                        "link": "https://github.com/thirdwillow",
                        // "icon": "reco-github"
                    },
                    {
                        "text": "Gitee",
                        "link": "https://gitee.com/capkin",
                        // "icon": "reco-gitee"
                    }
                ]
            },
        ],
        sidebar,
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "目录索引"
            },
            "tag": {
                "location": 3,
                "text": "标签索引"
            }
        },
        "friendLink": [{
            "title": "vuepress-theme-reco",
            "desc": "A simple and beautiful vuepress Blog & Doc theme.",
            "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            "link": "https://vuepress-theme-reco.recoluan.com"
        }],
        "logo": "https://gitee.com/capkin/typorta-drawing-bed-1/raw/master/Image/202303241950452.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "capkin",
        "authorAvatar": "https://gitee.com/capkin/typorta-drawing-bed-1/raw/master/Image/202303241950452.png",
        "record": "首页",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    }
}