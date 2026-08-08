/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `next build` emits ./out with no Node server.
  output: "export",

  // Served from https://usmansheikh9.github.io/flowline, so every route and
  // asset URL needs the repo name prefixed. Change this if a custom domain
  // is attached later, at which point it should become "".
  basePath: "/flowline",

  images: {
    // GitHub Pages has no Next image optimizer. This project ships zero
    // <Image> components, but the flag keeps a future one from failing the build.
    unoptimized: true,
  },
};

export default nextConfig;
