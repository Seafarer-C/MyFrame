module.exports = {
  overrides: [
    {
      files: ".*rc",
      options: { parser: "json" },
    },
    {
      files: ["**/*.{yml,yaml,md}"],
      options: { tabWidth: 2, embeddedLanguageFormatting: "off" },
    },
  ],
};
