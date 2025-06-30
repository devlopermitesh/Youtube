module.exports = {
  extends: ["@commitlint/config-conventional"], // base rules
  rules: {
    "type-enum": [
      // ye rule commit message ke type ko control karta hai
      2, // error level (2 = throw error agar rule follow na ho)
      "always", // hamisha ye rule lagana hai
      [
        "ci", // ✅ CI/CD related changes
        "chore", // ✅ Routine non-functional changes
        "docs", // ✅ Documentation only changes
        "feat", // ✅ New feature
        "fix", // ✅ Bug fix
        "perf", // ✅ Performance optimization
        "refactor", // ✅ Code restructure without behavior change
        "revert", // ✅ Revert previous commit
        "style", // ✅ Formatting/style changes
        "assets", // ✅ Static assets like images/icons
        "test", // ✅ Test files or coverage updates
      ],
    ],
  },
};
