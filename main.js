const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWidget() {
  const widget = new BrowserWindow({
    width: 300,
    height: 200,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // 加载 HTML 文件
  widget.loadFile('index.html')
  
  // 允许拖动窗口
  widget.setMovable(true)
  
  // 开发时打开开发者工具
  // widget.webContents.openDevTools()
}

app.whenReady().then(createWidget)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})