// declare var System: SystemJSLoader.System;

var systemJson = JSON.parse('<%= SYSTEM_CONFIG_DEV %>');

System.config(systemJson);
