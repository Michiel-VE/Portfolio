module.exports = {
    purge: {
        enabled: false,
        content: [
            './public/*.html',
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
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
