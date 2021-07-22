console.log('js loaded');
// Test setting a SameParty cookie with FPS
document.cookie = "cookieNeSample=tasty; SameSite=Lax; Secure; SameParty; expires=Fri, 31 Dec 9999 23:59:59 GMT";
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event':'page_data',
  'common':{
    'environment':'staging'
  },
  'user':{
    'loggedIn': true,
    'type': 'firstTimeBuyer'
  },
  'layer1': {
    'nested': 'one',
    'layer2': {
      'nested': 'two',
      'layer3': {
        'nested': 'three',
        'layer4': {
          'nested': 'four',
          'sample': 'adamw'
        }
      }
    }
  }
});

window.digitalData  = {
  user: {
    id: '234567',
    userBirthday: '06/26/1990'
  },
  page: {
    pageLocale: 'us',
    pageType: 'plp'
  }
}
