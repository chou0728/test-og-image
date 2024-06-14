/**
 * @type {import('next').NextConfig}
 */

// static export docs
// https://nextjs.org/docs/app/building-your-application/deploying/static-exports#configuration
const nextConfig = {
  basePath: '/test-og-image',
  output: 'export',
  distDir: 'dist',
};

module.exports = nextConfig;
