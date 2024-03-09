# Self-Hosting Chrome Extension

- Chrome requires that an extension hosted elsewhere other than the chrome webstore meet the following criteria to be installable:
  - is a valid CRX file
  - has a manifest.json with a `version number` and `update_url`
  - be served with a `content:type: application/x-chrome-extension` or `application/octect-stream` or `unknown/unknown` or `*/*` or `text/plain`
  - is not served with `x-content-type: nosniff`

## manifest.json

The manifest must contain an update url pointing to a reference XML file that tells the browser what is the current version and where to get the new version if any.

```js
  "update_url": "https://kaleidoscopic-souffle-3f8d58.netlify.app/update.xml",
```

## update.xml

- This XML file has to be internet accessible and must contain:
  - extension ID
  - version number

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gupdate xmlns="http://www.google.com/update2/response" protocol="2.0">
  <app appid="dndadjccaejaalofmmbdbgmegaolcghb">
    <updatecheck codebase="https://kaleidoscopic-souffle-3f8d58.netlify.app/extension.crx" version="0.1"/>
  </app>
</gupdate>
```

After each deployement of a new version, just update the version number in `both` the manifest.json and update.xml(must be the same).

## Packaging the extension

The extension can either be packaged using chrome itself which will generate a `.crx` file and `.pem`(be sure to keep the `.pem` file as it will be used to sign subsequent versions of the extension to always give them the same ID).

One downside to this is that chrome by default packages to `.crx2` which is deprecated and might not be installable outside the chrome webstore

A solution to this is packaging the extension to CRX3 using a npm package called [crx3](https://github.com/ahwayakchih/crx3)

```sh
npm i -g crx3
```

```sh
crx3 extension -o extension.crx -p -x update.xml
```

- crx3 `<FOLDER>` `-o`(output name) `-p`(use existing private key or generate new one if not) `-x`(specify the name of the update XML file)

## Hosting on Netlify

- The following files must be deployed
  - .crx file
  - update.xml
  - `_headers` file: to specify content-types to netlify

### \_headers

```yml
# path:
/extension.crx

# headers for that path:
Content-type: application/x-chrome-extension
```

# Installation

Chrome has made it harder to install extensions outside the webstore but there are several workarounds

## 1. Drag and Drop

- Download the extension to files(avoid auto-install) using Brave | wget | Almighty Edge (why not) :)
- Drag and drop the downloaded .crx file in the extensions' page @[`chrome://extensions`](chrome://extensions)

This sometimes works without any problem in both Brave and Chrome.

## 2. Force Install

### Linux

1. Create a managed folder at `/etc/opt/chrome/policies/managed`

```bash
sudo mkdir -p /etc/opt/chrome/policies/managed
```

2. Add the following JSON config file as root on linux with any name you want

```js
{
  "ExtensionSettings": {
    "dndadjccaejaalofmmbdbgmegaolcghb": {
      "installation_mode": "normal_installed",
      "update_url": "https://kaleidoscopic-souffle-3f8d58.netlify.app/update.xml"
    }
  }
}
```

- `Installation_mode` has the following options
  - `normal_installed`: will install the extension without user interaction. The extension can be disabled but not deleted from the extensions' page.
  - `force_installed`: background installed, can't disable and cant' delete.

The extension will auto-install. If you try to download it. chrome will show an error but the extension will be installed none the less.
### macOS
- Source:
  - Policy List should end with `.plist`
  - https://www.chromium.org/administrators/mac-quick-start/
  - https://support.google.com/chrome/a/answer/7517624?sjid=13577321849268106637-NA#permissions&zippy=%2Cprevent-users-from-running-apps-or-extensions-based-on-permissions
- managed file is located in `~/Library/Preferences/com.google.Chrome.plist`

-  Mandatory policy is stored in `/Library/Managed Preferences/<username>/com.google.Chrome.plist` while recommended policy is stored in `/Library/Preferences/com.google.Chrome.plist`

```xml
<key>ExtensionSettings</key>
<dict>
 <key>*</key>
 <dict>
   <key>installation_mode</key>
   <string>blocked</string>
 </dict>
 <key>ghbmnnjooekpmoecnnnilnnbdlolhkhi</key>
 <dict>
   <key>installation_mode</key>
   <string>force_installed</string>
   <key>update_url</key>
   <string>https://clients2.google.com/service/update2/crx</string>
 </dict>
 <key>lpcaedmchfhocbbapmcbpinfpgnhiddi</key>
 <dict>
   <key>installation_mode</key>
   <string>normal_installed</string>
   <key>update_url</key>
   <string>https://clients2.google.com/service/update2/crx</string>
 </dict>
 <key>gmbgaklkmjakoegficnlkhebmhkjfich</key>
 <dict>
   <key>installation_mode</key>
   <string>allowed</string>
 </dict>
</dict>
```
### Windows

Windows requires that you modies Registry keys and this can be done using simple powershell commands.

- There are two options:
  - `ExtensionSettings`(preferred): this will give you the flexibility to choose the `installation_mode` and will also set the `update_url` which chrome will use to update the extension
  - `ExtensionInstallForcelist` : will install the extension with `installation_mode` set as `force_installed`

## ExtensionSettings

### Chrome

Create new Registry Key which is non-existent by default

```powershell
New-Item -Path "HKLM:\SOFTWARE\Policies\Google\Chrome\ExtensionSettings\dndadjccaejaalofmmbdbgmegaolcghb" -Force
```

Set Installation_mode

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Google\Chrome\ExtensionSettings\dndadjccaejaalofmmbdbgmegaolcghb" -Name "installation_mode" -Value "normal_installed" -PropertyType String -Force
```

Set update_url

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Google\Chrome\ExtensionSettings\dndadjccaejaalofmmbdbgmegaolcghb" -Name "update_url" -Value https://kaleidoscopic-souffle-3f8d58.netlify.app/update.xml -PropertyType String -Force
```

### Brave

```powershell
New-Item -Path "HKLM:\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionSettings\dndadjccaejaalofmmbdbgmegaolcghb" -Force
```

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionSettings\dndadjccaejaalofmmbdbgmegaolcghb" -Name "installation_mode" -Value "normal_installed" -PropertyType String -Force
```

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionSettings\dndadjccaejaalofmmbdbgmegaolcghb" -Name "update_url" -Value https://kaleidoscopic-souffle-3f8d58.netlify.app/update.xml -PropertyType String -Force
```

## ExtensionInstallForcelist

### Chrome

Create new Registry key

```powershell
New-Item -Path HKLM:\SOFTWARE\Policies\Google\Chrome -Name ExtensionInstallForcelist -Force
```

Set Values in the newly created Registry Key

```powershell
New-ItemProperty -Path HKLM:\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist -Name "1" -Value "dndadjccaejaalofmmbdbgmegaolcghb;https://kaleidoscopic-souffle-3f8d58.netlify.app/update.xml" -Force
```

- Name must be numeric. Custom strings seemed not to work. So stick with `1` for now.

### Brave

```powershell

New-Item -Path HKLM:\SOFTWARE\Policies\BraveSoftware\Brave -Name ExtensionInstallForcelist -Force
```

```powershell
New-ItemProperty -Path HKLM:\SOFTWARE\Policies\BraveSoftware\Brave\ExtensionInstallForcelist -Name "1" -Value "dndadjccaejaalofmmbdbgmegaolcghb;https://kaleidoscopic-souffle-3f8d58.netlify.app/update.xml" -Force
```

## Obfuscation

Using [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator) to obfuscate the code.

- can be installed globally or locally. (if installed locally add `npx` before the command)

```sh
npm i -g javascript-obfuscator
```

- Create a `Makefile` to automate the process of obfuscating the build
- just run `make` in terminal to run makefile

```makefile
all: obfuscate
obfuscate:
	@javascript-obfuscator main.js -o script1.js --options-preset high-obfuscation
	@javascript-obfuscator main2.js -o script2.js --options-preset high-obfuscation
```

- The above code can also be put in `package.json` as a script

```js
"scripts": {
    "obfuscate": "javascript-obfuscator main.js -o script1.js --options-preset high-obfuscation && javascript-obfuscator main2.js -o script2.js --options-preset high-obfuscation"
  },
```
