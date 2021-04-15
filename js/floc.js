(async () => {
  const { id, version } = await document.interestCohort();
  console.log('FLoC ID:', id);
  console.log('FLoC version:', version);
})();
