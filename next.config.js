/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/build/Build/build.data.gz",
        headers: [
          {
            key: "Content-Type",
            value: "application/data",
          },
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
      {
        source: "/build/Build/build.framework.js.gz",
        headers: [
          {
            key: "Content-Type",
            value: "application/js",
          },
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
      {
        source: "/build/Build/build.wasm.gz",
        headers: [
          {
            key: "Content-Type",
            value: "application/wasm",
          },
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
