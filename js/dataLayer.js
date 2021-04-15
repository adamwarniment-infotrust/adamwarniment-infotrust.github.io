(async() => {
  dataLayer = dataLayer || [];

  const { id, version } = await document.interestCohort();
  console.log('FLoC ID:', id);
  console.log('FLoC version:', version);

  dataLayer.push({
    'event': 'page_data',
    'common': {},
    'user': {
      'flocId': `${id}`,
      'flocVersion': `${version}`
    },
    'page': {}
  })
})();