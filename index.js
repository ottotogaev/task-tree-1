const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', {
    class: 'container',
  },
  [
    ['h1', {
      class: 'header',
    }, 'html builder example'],
    ['div', [
      ['span'],
      ['span', {
        class: 'text',
        id: 'uniq-key',
      }],
    ]],
  ],
  ],
]];


const buildHtml = (tree) => {
  const tag = tree[0];
  const last = tree.length > 1 ? tree[tree.length - 1] : null;
  const subNodes = last instanceof Array ? last : null;
  const attrs = !(tree[1] instanceof Array) && typeof tree[1] !== 'string' ? tree[1] : null;
  const text = typeof last === 'string' ? last : '';
  const attrsStr = attrs ? Object.entries(attrs).reduce((old, [key, val]) => `${old} ${key}="${val}"`, '') : '';
  let inner = '';

  if (subNodes) {
    inner = subNodes.reduce((old, curr) => `${old}${buildHtml(curr)}`, '');
  } else if (text) {
    inner = text;
  }

  const result = `<${tag}${attrsStr}>${inner}</${tag}>`;
  return result;
};

buildHtml(data);

export default buildHtml;
