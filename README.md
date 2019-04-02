# Evernote eslint configuration #

This package contains the eslint configuration used for projects at Evernote.

## Requirements ##
- [eslint](https://eslint.org) `^2.8.0 || ^3.1.1 || ^4.2.0 || ^5.6.0`
- [eslint-plugin-evernote](https://github.com/evernote/eslint-plugin-evernote) `^1.0.0`
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) `^2.2.0`
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) `^7.0.0`

## Instructions ##
```bash
npm i --save-dev \ # or yarn add -D \
  eslint@5.x \
  eslint-plugin-evernote@1.x \
  eslint-plugin-react@7.x \
  eslint-plugin-import@2.x \
  eslint-config-evernote
```

In your `.eslintrc`, add
```json
  "extends": "eslint-config-evernote"
```

Additional rules or overrides can be defined in your `.eslintrc` as usual.
