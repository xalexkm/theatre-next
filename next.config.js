module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'omdbapi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    compiler: {
        styledComponents: true,
    },
}