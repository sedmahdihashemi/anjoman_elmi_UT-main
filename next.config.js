/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.imgur.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '**',
            search: '',
          },
        ],
      },
}

module.exports = nextConfig
