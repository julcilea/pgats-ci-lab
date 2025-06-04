const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const date = new Date().toISOString().split("T")[0];
const commit = process.env.GITHUB_SHA?.slice(0, 7) || "local";
const outputDir = `public/relatorios/e2e/${date}-${commit}`;

fs.mkdirSync(outputDir, { recursive: true });

execSync(`npx allure generate allure-results --clean -o ${outputDir}`, {
  stdio: "inherit",
});