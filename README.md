
###### Предустановка:
1. Скачайте репозиторий к себе на компьютер. (НЕ КЛОНИРУЙТЕ, А СКАЧАЙТЕ);
2. В проекте запустите команду ```npm install```, для того, чтобы установились все зависимости для проекта;
3. Существующие файлы не редактировать и не удалять (Кроме ```index.js```, в нем Вы будете работать).

###### Задача:

Написать функцию в файле ```index.js``` и экспортировать ее по умолчанию, которая возвращает html-строку из переданного дерева.

###### Например:

Функция ```buildHtml``` с такими входными данными:
```js
const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span'],
      ['span', { class: 'text', id: 'uniq-key' }],
    ]],
  ]],
]];

buildHtml(data);
```
выдаст следующую строку:
```html
<html>
  <head><title>hello, hexlet!</title></head>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>
```
*Обратите внимание что символы переноса строки и табуляций необязательны (Впрочем, как и для браузеров)*

###### Требования:

1. Соблюдать стандарт кодирования (в проекте предустановлена конфигурация airbnb);
2. Нужно использовать ES6 (В проекте настроен babel);
3. Необходимо, чтобы функция проходила существующие тесты;
4. Этот проект, вместе с решенным заданием выгрузить к себе в репозиторий на GitHub.

###### Подсказки:
Если Вы пользователь \*nix операционной системы, то:
1. Вы можете запустить тесты командой ```make test```
2. Вы можете запустить код, находящийся в файле ```index.js```, командой ```make start```
3. Чтобы проверить проходит ли Ваш код стандарт кодирования Вы можете воспользоваться командой ```make lint```

Если Вы пользователь Windows, то:
1. Вы можете запустить тесты командой ```npm run test```
2. Вы можете запустить код, находящийся в файле ```index.js```, командой ```npm run start```
3. Чтобы проверить проходит ли Ваш код стандарт кодирования Вы можете воспользоваться командой ```npm run lint```

Либо, для обеих систем:
1. Запустить тесты: ```npx jest --verbose```
2. Запустить код: ```npx nodemon -q --exec npx babel-node index.js```
3. Чтобы проверить проходит ли Ваш код стандарт кодирования Вы можете воспользоваться командой ```npx eslint .```

*Вы можете добавить в Ваш текстовый редактор или IDE интеграцию с ESLint, для того, чтобы он Вам сразу подсвечивал ошибки стандарта кодирования.*
