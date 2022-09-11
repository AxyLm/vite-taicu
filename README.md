# vite-taicu

![Website](https://img.shields.io/website?url=http%3A%2F%2Ftaicu.soulfree.cn)

一个 vite + vue3 开始模版。

跳过项目之始的配置环节，快速实现想法。`new FastifyIdea();`

[演示](https://taicu.soulfree.cn/)

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite](https://github.com/vitejs/vite), [TypeScript](https://www.typescriptlang.org/zh/) Yes!
- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)
- 😃 [Iconify ](https://github.com/antfu/unocss/tree/main/packages/preset-icons) - 各种图标集为你所用，浏览：[🔍 Icones](https://icones.netlify.app/)
- 🌍 [I18n 国际化开箱即用](./locales)
- 🎨 [Tailwindcss](https://www.tailwindcss.cn/) - 一个功能类优先的 CSS 框架
- 🛠 [VueUse](https://github.com/antfu/vueuse) - Vue CompositionApi 的集合
- [Eslint](http://eslint.cn/) + [prettier](https://prettier.io/) + [husky](https://typicode.github.io/husky/#/) 自动格式化...

## 使用

### 开发

```bash
yarn dev
```

### 构建

```bash
yarn build
```

### 代码格式化

```bash
yarn prettier
```

### 自动部署 git pages

Go to [GitHub Pages](https://github.com/AxyLm/vite-taicu/settings/pages)

1. Under "Build and deployment", under "Source", select **Deploy from a branch**.
2. Under "Build and deployment", under "Branch", select **gh-pages**

- This option can be modified in [action.yml](./.github/workflows/action.yml#L35) on line 35

3. Click **Save**.

## 来自

- [Vitesse](https://github.com/antfu/vitesse.git) - [@antfu](https://github.com/antfu)

## 灵感

| 古之十二月 | [乐之十二律](https://zh.wikipedia.org/wiki/十二律) |
| ---------- | -------------------------------------------------- |
| 孟春之月   | 律中太簇                                           |
| 仲春之月   | 律中夹钟                                           |
| 季春之月   | 律中姑洗                                           |
| ...        | ...                                                |
| 孟冬之月   | 律中应钟                                           |
| 仲冬之月   | 律中黄钟                                           |
| 季冬之月   | 律中大吕                                           |

## LICENSE

[MIT license](./LICENSE)
