/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'rockwellsecurity.ca' }],
        destination: 'https://www.rockwellsecurity.ca/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
