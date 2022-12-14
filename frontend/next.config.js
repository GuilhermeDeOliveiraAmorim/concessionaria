/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DB_HOST: "http://localhost:8000/api",
    },
    swcMinify: true,
    images: {
        domains: ["bit.ly"],
        domains: ["m.media-amazon.com"],
    },
};

module.exports = nextConfig;
