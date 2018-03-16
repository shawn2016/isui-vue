let utils = {

}
utils.windowTitle = function (title) {
    title = title ? title + ' - isui-vue' : 'isui-vue - A high quality UI Toolkit based on Vue.js';
    window.document.title = title;
};
export default utils