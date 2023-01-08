module.exports = {
  '*.{js,jsx,ts,tsx,json,html,css,md}': 'npm run format',
  '*.{js,jsx,ts,tsx}': 'npm run lint',
  '*.{js,jsx,ts,tsx}': 'npm run test:staged',
  '*.{ts,tsx}': 'npm run type',
};
