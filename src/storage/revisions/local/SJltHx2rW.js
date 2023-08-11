const message = 'Initial version';

const revision = 'SJltHx2rW';

async function upgrade() {
  const changes = {
    engines: [
      'archiveOrg',
      'google',
      'googleText',
      'bing',
      'yandex',
      'archiveIs',
      'memento',
      'webcite',
      'exalead',
      'gigablast',
      'sogou',
      'qihoo',
      'baidu',
      'naver',
      'yahooJp',
      'megalodon'
    ],
    disabledEngines: [
      'googleText',
      'memento',
      'webcite',
      'exalead',
      'gigablast',
      'qihoo',
      'baidu',
      'naver',
      'yahooJp',
      'megalodon'
    ],
    showInContextMenu: 'link', // 'all', 'link', 'false'
    searchAllEnginesContextMenu: 'sub', // 'main', 'sub', 'false'
    searchAllEnginesAction: 'sub', // 'main', 'sub', 'false'
    showPageAction: true,
    openNewTab: true,
    tabInBackgound: false
  };

  changes.storageVersion = revision;
  return browser.storage.local.set(changes);
}

export {message, revision, upgrade};
