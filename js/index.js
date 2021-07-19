console.log('js loaded');
// Test setting a SameParty cookie with FPS
document.cookie = "cookieNeSample=tasty; SameSite=Lax; Secure; SameParty; expires=Fri, 31 Dec 9999 23:59:59 GMT";
dataLayer.push({
  'event':'page_data',
  'common':{
    'environment':'staging'
  },
  'user':{
    'loggedIn': true,
    'type': 'firstTimeBuyer'
  }
});
