module.exports = {
    purge: {
        enabled: true,
        content: [
            './public/*.html',
            './public/pages/*.html',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.67%',
                '5/6': '83.33%',
                '1/8': '12.5%',
                '3/8': '37.5%',
                '5/8': '62.5%',
                '7/8': '87.5%',
            },
            backgroundImage: theme => ({
                'home': "url('../img/bg.jpg')",
                'social': "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%),url('../img/social.jpg')",
                'php': "url('../img/php.jpg')",
                'geo': "url('../img/qgis1.jpg')",
                'lm': "url('../img/lm_sounds.jpg')",
                'br': "url('../img/br_login.jpg')",
                'soon': "url('../img/soon.png')",
                'skill': "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%),url('../img/tree.jpg')",

            }),
        },
    },
    variants: {
        extend: {
            borderRadius: ['hover'],
        },
    },
    plugins: [],
}
