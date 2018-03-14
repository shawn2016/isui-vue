import Button from './components/button';
import Icon from './components/icon';

const components = {
    Icon,
    Button,
    ButtonGroup: Button.Group
};

const iview = {
    ...components,
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};


export default API;   // eslint-disable-line no-undef
