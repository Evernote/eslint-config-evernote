# Evernote eslint configuration #

This package contains eslint configuration used across multiple projects at Evernote.

## Requirements ##
- eslint ^1.4.1
- eslint-plugin-evernote ^1.0.0
- eslint-plugin-react ^3.6.3

## Instructions ##
- `npm i --save-dev eslint@1.x eslint-plugin-evernote@1.x eslint-plugin-react@3.x eslint-config-evernote`
- in your .eslintrc, add
    "extends": "eslint-config-evernote"
- define any additional rules or overrides after in your .eslintrc as usual
