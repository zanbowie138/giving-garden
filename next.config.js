/** @type {import('next').NextConfig} */
// const nextConfig = {}
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}
module.exports = nextConfig
