import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  define: {
    // global: true,
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    resolveSnapshotPath: (testPath, snapExtension) => {
      const fileName = path.basename(testPath, path.extname(testPath));
      const dirName = path.dirname(testPath).split("/").pop();

      return path.join(
        __dirname,
        "__snapshots__",
        dirName!,
        fileName + snapExtension
      );
    },
  },
});
