
# TS Web project

Running on Next JS

# Introduction

This project is set up to support IIS hosting through iisnode package, and therefore has a non-standard 'index.js' and 'web.config'.

Setting up iis requires 'node' installed, aswell as 'iisnode' package from https://github.com/Azure/iisnode
Additionally to make the node routing work, URLRewrite 2 module is required for iis https://www.iis.net/downloads/microsoft/url-rewrite

After those are installed, all routing in iis is directed to 'index.js' which then lets next-js handle the rest.


