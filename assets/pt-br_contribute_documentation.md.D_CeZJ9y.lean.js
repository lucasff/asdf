import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.C9NVOr0y.js";const k=JSON.parse('{"title":"Docs & Site","description":"","frontmatter":{},"headers":[],"relativePath":"pt-br/contribute/documentation.md","filePath":"pt-br/contribute/documentation.md","lastUpdated":1687069487000}'),t={name:"pt-br/contribute/documentation.md"};function o(l,s,p,r,d,h){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="docs-site" tabindex="-1">Docs &amp; Site <a class="header-anchor" href="#docs-site" aria-label="Permalink to &quot;Docs &amp; Site&quot;">​</a></h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>Documentação e guia de contribuição do site.</p><h2 id="configuracao-inicial" tabindex="-1">Configuração inicial <a class="header-anchor" href="#configuracao-inicial" aria-label="Permalink to &quot;Configuração inicial&quot;">​</a></h2><p>Fork <code>asdf</code> no GitHub e/ou Git clone o branch padrão:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GITHUB_USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>As ferramentas para desenvolvimento de sites Docs são gerenciadas com <code>asdf</code> em <code>docs/.tool-versions</code>. Adicione os plugins com:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf-nodejs</span></span></code></pre></div><p>Instale a(s) versão(ões) da ferramenta com:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><ul><li><a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>: tempo de execução JavaScript criado no mecanismo JavaScript V8 do Chrome.</li><li></li></ul><p>Instale as dependências do Node.js do <code>docs/package.json</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="desenvolvimento" tabindex="-1">Desenvolvimento <a class="header-anchor" href="#desenvolvimento" aria-label="Permalink to &quot;Desenvolvimento&quot;">​</a></h2><p><a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noreferrer">Vuepress (v2)</a> é o Static Site Generator (SSG) que usamos para construir o site de documentação do asdf. Foi escolhido para substituir <a href="https://docsify.js.org/" target="_blank" rel="noreferrer">Docsify.js</a>, pois gostaríamos de oferecer suporte a um substituto somente HTML quando os usuários não tiverem JavaScript disponível ou ativado. Isso não era possível com o Docsify. Fora isso, o conjunto de recursos é basicamente o mesmo, com foco em escrever arquivos Markdown com configuração mínima.</p><p><code>package.json</code> contém os scripts necessários para o desenvolvimento:</p><p>@<a href="../package.json">code json{3-5}</a></p><p>Para iniciar o servidor de desenvolvimento local:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>Formate o código antes de confirmar:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span></code></pre></div><h2 id="pull-requests-releases-e-commits-convencionais" tabindex="-1">Pull Requests, Releases e Commits Convencionais <a class="header-anchor" href="#pull-requests-releases-e-commits-convencionais" aria-label="Permalink to &quot;Pull Requests, Releases e Commits Convencionais&quot;">​</a></h2><p><code>asdf</code> está usando um pipeline de lançamento automatizado que depende de Commits Convencionais em títulos de PR. Documentação detalhada encontrada no <a href="./core.html">guia de contribuição principal</a>.</p><p>Ao criar um PR para alterações na documentação, por favor, faça o título do PR com o tipo de Commit Convencional <code>docs</code> no formato <code>docs: &lt;description&gt;</code>.</p><h2 id="vuepress" tabindex="-1">Vuepress <a class="header-anchor" href="#vuepress" aria-label="Permalink to &quot;Vuepress&quot;">​</a></h2><p>A configuração do site está contida em alguns arquivos JavaScript com objetos JS usados para representar a configuração. Eles estão:</p><ul><li><code>docs/.vuepress/config.js</code>: o arquivo de configuração raiz do site. Leia a <a href="https://v2.vuepress.vuejs.org/guide/configuration.html#config-file" target="_blank" rel="noreferrer">documentação do Vuepress</a> para obter as especificações.</li></ul><p>Para simplificar a configuração raiz, os objetos JS maiores que representam a configuração <em>navbar</em> e <em>sidebar</em> foram extraídos e separados por sua localidade. Veja os dois em:</p><ul><li><code>docs/.vuepress/navbar.js</code></li><li><code>docs/.vuepress/sidebar.js</code></li></ul><p>Com a documentação oficial para essas configurações vivendo na <a href="https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config" target="_blank" rel="noreferrer">Referência de tema padrão</a>.</p><h2 id="i18n" tabindex="-1">I18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;I18n&quot;">​</a></h2><p>Vuepress tem suporte de primeira classe para internacionalização. O root config <code>docs/.vuepress/config.js</code> define os locais suportados com sua URL, título no menu suspenso de seleção e referências de configurações navbar/sidebar.</p><p>As configurações da barra de navegação/barra lateral são capturadas nos arquivos de configuração mencionados acima, separadas por localidade e exportadas individualmente.</p><p>O conteúdo de markdown para cada localidade deve estar em uma pasta com o mesmo nome das chaves para <code>locales</code> na configuração raiz. Isso é:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  themeConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    locales</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        selectLanguageName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;English (US)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebar: sidebar.en,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        navbar: navbar.en</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/pt-BR/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        selectLanguageName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Brazilian Portuguese&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebar: sidebar.pt_br,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        navbar: navbar.pt_br</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>/pt-BR/</code> exigirá o mesmo conjunto de arquivos markdown localizados em <code>docs/pt-BR/</code>, assim:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pt-BR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nested</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span></code></pre></div><p>A <a href="https://v2.vuepress.vuejs.org/guide/i18n.html#site-i18n-config" target="_blank" rel="noreferrer">documentação oficial do Vuepress i18n</a> entra em mais detalhes.</p>`,38)]))}const u=a(t,[["render",o]]);export{k as __pageData,u as default};
