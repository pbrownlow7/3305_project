'use strict';

const {app, BrowserWindow} = require('electron');
var remote = require ('electron');
 
const url = require('url');
const path = require('path');

const ipcMain = require('electron').ipcMain;
const isOnline = require('is-online');

function createWindow() { 
   var win = new BrowserWindow({
       resizeable: false,
       movable: false,
       fullscreen: true,     
       frame: false,
       icon: "../images/MonopolyMan.ico",
       nodeIntegration: false
    });

    isOnline().then(online => {
        if (online) {
            win.loadURL("http://webenv.io:56630/");
        }
        else {
            win.loadURL(url.format ({ 
                pathname: path.join(__dirname, '../index.html'), 
                protocol: 'file:', 
                slashes: true 
            }));
        }
    });
}

app.on('ready', createWindow);