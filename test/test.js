const postcss = require('postcss')
const test = require('ava')

const plugin = require('../index.js')

function run (t, input, output) {
  return postcss([plugin({
    backgroundColor: '#000',
    altBgColor: '#fff',
    textColor: '#fff',
    buttonSelector: ['button'],
    buttonColor: '#000',
    buttonBackgroundColor: '#fcff3c',
    buttonBorderColor: 'none',
    linkColor: '#fcff3c',
    linkHoverColor: '#000',
    borderColor: '#fff',
    append: false
  })]).process(input, { from: undefined })
    .then(result => {
      t.is(result.css, output)
      t.is(result.warnings().length, 0)
    })
}

test('Wrong button background color property value', t => {
  return run(
    t,
    `button {
      background-color: #000;
    }`,
    `html.hc button {
      background-color: #fcff3c;
    }`
  )
})

test('Wrong button color property value', t => {
  return run(
    t,
    `button {
      color: #fff;
    }`,
    `html.hc button {
      color: #000;
    }`
  )
})

test('Wrong button border color property value', t => {
  return run(
    t,
    `button {
      border: solid 1px #fff;
      border-color: #000;
    }`,
    `html.hc button {
      border: solid 1px none;
      border-color: none;
    }`
  )
})

test('body doesn\'t have background property', t => {
  return run(
    t,
    `body {
      position: relative;
    }`,
    `html.hc body {
      background-color: #000;
    }`
  )
})

test('div has wrong background property value and misses color', t => {
  return run(
    t,
    `div {
      background: #ccc url(img/postcss.png);
    }`,
    `html.hc div {
      background: #000 url(img/postcss.png);
      color: #fff;
    }`
  )
})

test('span has wrong background property value and misses color', t => {
  return run(
    t,
    `span {
      background-color: #ccc;
    }`,
    `html.hc span {
      background-color: #000;
      color: #fff;
    }`
  )
})

test('Backgound-color property with rgb value doesn\'t match!', t => {
  return run(
    t,
    `div {
      background: rgb(255,255,255);
    }`,
    `html.hc div {
      background: #000;
      color: #fff;
    }`
  )
})

test('Backgound-color property with rgba value doesn\'t match!', t => {
  return run(
    t,
    `div {
      background: rgb(255,255,255,.5);
    }`,
    `html.hc div {
      background: #000;
      color: #fff;
    }`
  )
})

test('Backgound-color property with linear-gradient value doesn\'t match!', t => {
  return run(
    t,
    `div {
      background: linear-gradient( 0deg, blue, green 40%, red );
    }`,
    `html.hc div {
      background: #000;
      color: #fff;
    }`
  )
})

test('Link color doesn\'t match!', t => {
  return run(
    t,
    `a {
      color: #000;
    }`,
    `html.hc a {
      color: #fcff3c;
    }`
  )
})

test('Link linear gradient color wasn\'t replaced!', t => {
  return run(
    t,
    `a {
      color: linear-gradient( 0deg, blue, green 40%, red );
    }`,
    `html.hc a {
      color: #fcff3c;
    }`
  )
})

test('Paragraph color doesn\'t match!', t => {
  return run(
    t,
    `p {
      color: #000;
    }`,
    `html.hc p {
      color: #fff;
    }`
  )
})

test('Missing property', t => {
  return run(
    t,
    `h1 {
      margin: 0 0 24px;
    }`,
    `html.hc h1 {
      color: #fff;
    }`
  )
})

test('Wrong border property value', t => {
  return run(
    t,
    `hr {
      border: solid 2px #000;
    }`,
    `html.hc hr {
      border: solid 2px #fff;
    }`
  )
})

test('Wrong border-top property value', t => {
  return run(
    t,
    `hr {
      border-top: solid 2px #000;
    }`,
    `html.hc hr {
      border-top: solid 2px #fff;
    }`
  )
})

test('Wrong border-right property value', t => {
  return run(
    t,
    `hr {
      border-right: solid 2px #000;
    }`,
    `html.hc hr {
      border-right: solid 2px #fff;
    }`
  )
})

test('Wrong border-bottom property value', t => {
  return run(
    t,
    `hr {
      border-bottom: solid 2px #000;
    }`,
    `html.hc hr {
      border-bottom: solid 2px #fff;
    }`
  )
})

test('Wrong border-left property value', t => {
  return run(
    t,
    `hr {
      border-left: solid 2px #000;
    }`,
    `html.hc hr {
      border-left: solid 2px #fff;
    }`
  )
})

test('Wrong border-top-color property value', t => {
  return run(
    t,
    `hr {
      border-top-color: #000;
    }`,
    `html.hc hr {
      border-top-color: #fff;
    }`
  )
})

test('Wrong border-right-color property value', t => {
  return run(
    t,
    `hr {
      border-right-color: #000;
    }`,
    `html.hc hr {
      border-right-color: #fff;
    }`
  )
})

test('Wrong border-bottom-color property value', t => {
  return run(
    t,
    `hr {
      border-bottom-color: #000;
    }`,
    `html.hc hr {
      border-bottom-color: #fff;
    }`
  )
})

test('Wrong border-left-color property value', t => {
  return run(
    t,
    `hr {
      border-left-color: #000;
    }`,
    `html.hc hr {
      border-left-color: #fff;
    }`
  )
})

test('Wrong box-shadow property value', t => {
  return run(
    t,
    `section {
      box-shadow: 0 0 2px #000;
    }`,
    `html.hc section {
      box-shadow: none;
    }`
  )
})
