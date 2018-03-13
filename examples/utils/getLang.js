import locales from '../../docs/locales';
const getLang = (key) => {
    let locale = localStorage.getItem('WUI_LANG') || 'cn';
    const map = locales[locale] || {};
    return key.split('.').reduce((a, b) => {
      const parent = map[a];
      if (b) {
        return (parent || {})[b];
      }
      return parent;
    });
  }
  export {
    getLang
  }