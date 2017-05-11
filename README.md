# Evernote eslint configuration #

This package contains eslint configuration used across multiple projects at Evernote.

## Requirements ##
- eslint ^2.8.0 || ^3.1.1
- eslint-plugin-evernote ^1.0.0
- eslint-plugin-import ^2.2.0
- eslint-plugin-react ^7.0.0

## Instructions ##
- `npm i --save-dev eslint@3.1.x eslint-plugin-evernote@1.x eslint-plugin-react@7.x eslint-plugin-import@2.2.x eslint-config-evernote`
- in your .eslintrc, add
    "extends": "eslint-config-evernote"
- define any additional rules or overrides after in your .eslintrc as usual
