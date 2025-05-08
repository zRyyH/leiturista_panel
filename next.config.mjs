/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'directus.hidroapp.com.br',
                pathname: '/assets/**',
            },
        ],
    },
};

export default nextConfig;
