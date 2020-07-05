class LibSettings {

    setSettings(data) {
        const settingDom = document.createElement('scl-lib-settings');
        document.body.appendChild(settingDom);
        settingDom.dummySt = 'hoge';
        settingDom.setting = data;
        const item = document.querySelector('scl-lib-settings')
        document.body.removeChild(item);
    }
}
