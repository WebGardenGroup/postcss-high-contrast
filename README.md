Original plugin: [PostCSS High Contrast](https://github.com/shiwaforce/postcss-high-contrast)

## Basic Usage

```js
postcss([
  require('@webgarden/postcss-high-contrast')({
    aggressiveHC: true,
    aggressiveHCDefaultSelectorList: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'th', 'td'],
    aggressiveHCCustomSelectorList: ['div', 'span'],

    colorProps: ['color', 'fill'],

    backgroundColor: '#000',
    altBgColor: '#fff',

    textColor: '#fff',

    buttonSelector: ['button'],
    buttonColor: '#000',
    buttonBackgroundColor: '#fcff3c',
    buttonBorderColor: 'none',

    linkSelectors: ['a'],
    linkColor: '#fcff3c',
    linkHoverColor: '#fcff3c',

    borderColor: '#fff',
    disableShadow: true,

    customSelectors: ['input'],
    customSelectorColor: '#fff',
    customSelectorBackgroundColor: '#000',
    customSelectorBorderdColor: '#fff',

    selectorsBlackList: ['textfield'],

    imageFilter: 'invert(100%)',
    imageSelectors: ['img'],

    CSSPropsWhiteList: ['background', 'background-color', 'color', 'border', 'border-top', 'border-bottom',
      'border-left', 'border-right', 'border-color', 'border-top-color', 'border-right-color',
      'border-bottom-color', 'border-left-color', 'box-shadow', 'filter', 'text-shadow', 'fill'],
    HTMLHighContrastClass: 'hc',
    removeAnimations: false,
    append: true
  })
]);

```

## Using on wepbage

Using this plugin with `append` option, the high contrast CSS is prefixed with the configured html class (
default: `html.hc`), and gets appended to the original css. You can toggle `.hc` class on the HTML tag.

```js
document.querySelector('a.high-contrast').addEventListener('click', function (evt) {
  evt.preventDefault();
  document.documentElement.classList.toggle('hc');
});
```

Tip: use cookies to remember turned on high contrast css on different sessions and pages.

## Options

| Name                              | Default Value                                      | Description    |
|:----------------------------------|:---------------------------------------------------|:---------------|
| `aggressiveHC`                    | `true`                                             | Will append properties even if they do not exist |
| `aggressiveHCDefaultSelectorList` | `['h1', 'h2', 'h3', 'h4', 'h5', 'h6','p', 'li', 'th', 'td']` | Default list of selectors for aggressive property append |
| `aggressiveHCCustomSelectorList`  | `['span']`                                         | Custom list of selectors for aggressive property append |
| `colorProps     `                 | `['color','fill']`                                 | List of Properties that will be considered for color changing |
| `backgroundColor`                 | `#000`                                             | Backgound color |
| `altBgColor`                      | `#fff`                                             | Alternative background color |
| `textColor`                       | `#fff`                                             | Text color |
| `buttonSelector`                  | `[button]`                                         | Button Selector |
| `buttonColor`                     | `#000`                                             | Button color |
| `buttonBackgroundColor`           | `#fcff3c`                                          | Button background color |
| `buttonBorderColor`               | `none`                                             | Button border color |
| `linkColor`                       | `#fcff3c`                                          | Link color |
| `linkHoverBgColor`                | `#fff`                                             | Link hover bacground color |
| `linkHoverColor`                  | `#000`                                             | Link hover color |
| `borderColor`                     | `#fff`                                             | Border color |
| `disableShadow`                   | `true`                                             | Disable shadow |
| `imageFilter`                     | `false`/`invert(100%)`/`grayscale(100%)`/`contrast(200%)`     | Image Filter (disabled by default). `false` to disable. Any css filter option can be passed|
| `imageSelectors`                  | `['img']`                                           | Default list of image selectors to apply `imageFilter`|
| `removeCSSProps`                  | `false`                                             | This option will remove all unused CSS selectors or properties for better optimization. Use CSS minifiers like CSSNano or CSSO to merge selectors|
| `CSSPropsWhiteList`               | `['background', 'background-color', 'color', 'border', 'border-top', 'border-bottom', 'border-left', 'border-right', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'box-shadow', 'filter', 'text-shadow']`       | CSS properties whitelist |
| `HTMLHighContrastClass`           | `hc`                                                | Class added to HTML selector |
| `append`                          | `true`                                              | Append HC CSS to original one. False means: overwrite |
| `removeAnimations`                | `true`                                              | Removes keyframe animation definition if true |
