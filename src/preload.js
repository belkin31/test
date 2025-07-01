const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  loadCatalog: () => ipcRenderer.invoke('load-catalog')
});
