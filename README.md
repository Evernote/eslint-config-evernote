# Evernote eslint configuration #

This package contains eslint configuration used across multiple projects at Evernote.

## Requirements ##
- eslint ^2.8.0
- eslint-plugin-evernote ^1.0.0
- eslint-plugin-react ^5.0.1

## Instructions ##
- `npm i --save-dev eslint@2.8.x eslint-plugin-evernote@1.x eslint-plugin-react@5.x eslint-config-evernote`
- in your .eslintrc, add
    "extends": "eslint-config-evernote"
- define any additional rules or overrides after in your .eslintrc as usual
