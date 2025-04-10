Здравствуйте, перед тем как запустить проект скачайте необходимые зависимости командой " npm i ", проект запускается командой "npm run start", сразу после этого проект откроется сам в браузере ( если вас не устроит мой дизайн сайта то прошу прощения, у меня не было макета )

Я использовал библиотеки redux-toolkit (для удобного пользования всем состоянием), а так-же RtkQuery( для удобного пользования запросами и совмещения со state менеджерами)

Использовал ленивую загрузку для оптимизации, а так-же хуй useDebouse для уменьшенной нагрузки на фильтрацию

В поисковике можно филтровать товар по userName а также email

Я так-же залил приложение в Github Pages в другой ветке " build ", только категории не открываются хотя я не вижу что я ввел что-то не правильно в роутинге

Хотел подключить Приттер, потому что с ним мой код хоть чуточку может стать вам понятней :) ( надеюсь )

Совсем недавно я залил новый пет проект с использованием большентсвом хуков в Реакт ( если вам инетесно то посмотрите )

Использовал react router, потому что для меня он очень удобный

Препроцессор sass я использовал потому что с ним можно делать миксины, переменные, шаблоны и он более популярный среди других аналогов

Если я не пройду тестовое задание, то можно постаджироваться у вас? Я готов развиваться и меня есть большое стремление

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        'react-x': reactX,
        'react-dom': reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs['recommended-typescript'].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```
