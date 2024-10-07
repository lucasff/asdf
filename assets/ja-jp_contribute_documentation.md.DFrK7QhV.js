import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.C9NVOr0y.js";const c=JSON.parse('{"title":"ドキュメント & サイト","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/contribute/documentation.md","filePath":"ja-jp/contribute/documentation.md","lastUpdated":1704890757000}'),t={name:"ja-jp/contribute/documentation.md"};function l(p,s,h,k,d,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ドキュメント-サイト" tabindex="-1">ドキュメント &amp; サイト <a class="header-anchor" href="#ドキュメント-サイト" aria-label="Permalink to &quot;ドキュメント &amp; サイト&quot;">​</a></h1><p>これは、ドキュメントおよびサイトのコントリビューションガイドです。</p><h2 id="初期セットアップ" tabindex="-1">初期セットアップ <a class="header-anchor" href="#初期セットアップ" aria-label="Permalink to &quot;初期セットアップ&quot;">​</a></h2><p>GitHubで<code>asdf</code>をフォークするか、デフォルトのブランチをGitクローンしてください:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GITHUB_USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>ドキュメントサイト開発用のツールは、<code>asdf</code>によって<code>docs/.tool-versions</code>で管理されています。下記のようにプラグインを追加してください:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf-nodejs</span></span></code></pre></div><p>開発に必要なバージョンを、下記のようにインストールします:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><ul><li><a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>: ChromeのV8 JavaScriptエンジンをベースに構築されたJavaScriptランタイムです。</li></ul><p><code>docs/package.json</code>をもとに、Node.jsの依存関係をインストールしてください:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="開発" tabindex="-1">開発 <a class="header-anchor" href="#開発" aria-label="Permalink to &quot;開発&quot;">​</a></h2><p><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress (v2)</a>は、asdfドキュメントサイトを構築するために使用している静的サイトジェネレータ(SSG)です。類似ツールである<a href="https://docsify.js.org/" target="_blank" rel="noreferrer">Docsify.js</a>やVuePressに代わってVitePressが採用されたのは、ユーザがJavaScriptを使用できない、または有効にしていない場合に、HTMLのみのフォールバックをサポートしたいからでした。これは、DocsifyとVitePressがVuePressに急速に取って代わっていた場合には不可能でした。これ以外の機能セットはほとんど同じで、最小限の構成でMarkdownファイルを書くことに重点を置いています。</p><p><code>package.json</code>には、開発に必要なスクリプトが含まれています:</p><p>@<a href="https://github.com/asdf-vm/asdf/blob/master/docs/package.json#L3-L5" target="_blank" rel="noreferrer"><code>package.json</code>のコード</a></p><p>ローカルの開発サーバを起動するには、次のように実行します:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>コミットする前にコードをフォーマットするには、次のように実行します:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span></code></pre></div><h2 id="プルリクエスト、リリース、conventional-commits" tabindex="-1">プルリクエスト、リリース、Conventional Commits <a class="header-anchor" href="#プルリクエスト、リリース、conventional-commits" aria-label="Permalink to &quot;プルリクエスト、リリース、Conventional Commits&quot;">​</a></h2><p><code>asdf</code>は、プルリクエストタイトルのConventional Commitsに依存する自動リリースパイプラインを使用しています。詳しくは、<a href="./core.html">コアのコントリビューションガイド</a>のドキュメントに記述されています。</p><p>ドキュメントの変更に関するプルリクエストを作成する場合、プルリクエストのタイトルは、Conventional Commit typeを<code>docs</code>として、<code>docs: &lt;description&gt;</code>というフォーマットで作成するようにしてください。</p><h2 id="vitepress" tabindex="-1">Vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;Vitepress&quot;">​</a></h2><p>サイトの構成設定は、構成を示すために使用されるJSオブジェクト含んだ、いくつかのTypeScriptファイルに記述されています。以下のとおりです:</p><ul><li><code>docs/.vitepress/config.js</code>: サイトのルート構成ファイルです。仕様については、<a href="https://vitepress.dev/reference/site-config" target="_blank" rel="noreferrer">VitePressのドキュメント</a>をご覧ください。</li></ul><p>ルート構成ファイルを簡素化するために、 <em>Navバー</em> と <em>サイドバー</em> の構成を示す大きなJSオブジェクトについては、別ファイルに切り出されており、かつ、ロケールごとに分類されています。次の両方のファイルを参照してください:</p><ul><li><code>docs/.vitepress/navbars.js</code></li><li><code>docs/.vitepress/sidebars.js</code></li></ul><p>これらの構成設定に関する公式ドキュメントは、<a href="https://vitepress.dev/reference/default-theme-config" target="_blank" rel="noreferrer">Default Theme Reference</a>をご覧ください。</p><h2 id="i18n" tabindex="-1">I18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;I18n&quot;">​</a></h2><p>VitePressは、国際化対応に関して最高のサポートを備えています。 ルート構成ファイルである<code>docs/.vitepress/config.js</code>では、サポートされているロケールとそのURL、ドロップメニューのタイトル、Navバー/サイドバーの構成への参照を定義しています。</p><p>Navバー/サイドバーの構成設定は前述の構成ファイルにキャプチャされ、ロケールごとに分類され、個別にエクスポートされます。</p><p>各ロケールのMarkdownコンテンツは、ルート構成ファイル内の<code>locales</code>内のキーと同じ名前のディレクトリ配下に配置する必要があります。ルート構成が下記の場合:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// docs/.vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  locales: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    root: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;English&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        lang: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en-US&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nav: navbars.en,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          sidebar: sidebars.en,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;pt-br&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Brazilian Portuguese&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        lang: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pr-br&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nav: navbars.pt_br,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          sidebar: sidebars.pt_br,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;zh-hans&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;简体中文&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        lang: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh-hans&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nav: navbars.zh_hans,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          sidebar: sidebars.zh_hans,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><code>/pt-BR/</code>を有効にするには、下記のように、<code>docs/pt-BR/</code>配下に同じMarkdownファイルのセットを配置する必要があります:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pt-BR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span></code></pre></div><p><a href="https://vitepress.dev/guide/i18n" target="_blank" rel="noreferrer">公式のVitePress i18nドキュメント</a>には、より詳細な説明が記述されています。</p>`,37)]))}const E=i(t,[["render",l]]);export{c as __pageData,E as default};
