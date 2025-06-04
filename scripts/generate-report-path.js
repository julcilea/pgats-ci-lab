const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Pega data e SHA do commit
const date = new Date().toISOString().split("T")[0]; // Ex: 2025-06-03
const commit = process.env.GITHUB_SHA?.slice(0, 7) || "local";

// Cria diretório de destino
const outputDir = `public/relatorios/e2e/${date}-${commit}`;
fs.mkdirSync(outputDir, { recursive: true });

// Gera relatório
execSync(`npx allure generate allure-results --clean -o ${outputDir}`, {
  stdio: "inherit",
});