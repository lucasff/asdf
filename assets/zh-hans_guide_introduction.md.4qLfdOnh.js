import{_ as a,c as r,a2 as o,o as t}from"./chunks/framework.C9NVOr0y.js";const f=JSON.parse('{"title":"项目简介","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/guide/introduction.md","filePath":"zh-hans/guide/introduction.md","lastUpdated":1643288544000}'),d={name:"zh-hans/guide/introduction.md"};function n(i,e,s,c,l,h){return t(),r("div",null,e[0]||(e[0]=[o('<h1 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介&quot;">​</a></h1><p><code>asdf</code> 是一个工具版本管理器。所有的工具版本定义都包含在一个文件（<code>.tool-versions</code>）中，你可以将配置文件放在项目的 Git 存储库中以便于和团队其他成员共享，从而确保每个人都使用<strong>完全</strong>相同的工具版本。</p><p>传统工作方式需要多个命令行版本管理器，而且每个管理器都有其不同的 API、配置文件和实现方式（比如，<code>$PATH</code> 操作、垫片、环境变量等等）。<code>asdf</code> 提供单个交互方式和配置文件来简化开发工作流程，并可通过简单的插件接口扩展到所有工具和运行环境。</p><h2 id="它是如何工作的" tabindex="-1">它是如何工作的 <a class="header-anchor" href="#它是如何工作的" aria-label="Permalink to &quot;它是如何工作的&quot;">​</a></h2><p>一旦 <code>asdf</code> 核心在 Shell 配置中设置好之后，你可以安装插件来管理特定的工具。当通过插件安装工具时，安装的可执行程序会为每个可执行程序创建 <a href="https://zh.wikipedia.org/wiki/%E5%9E%AB%E7%89%87_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)" target="_blank" rel="noreferrer">垫片</a>。当你尝试运行其中一个可执行程序时，将运行垫片，从而允许 <code>asdf</code> 识别 <code>.tool-versions</code> 文件中设置的工具版本并执行该版本。</p><h2 id="相关项目" tabindex="-1">相关项目 <a class="header-anchor" href="#相关项目" aria-label="Permalink to &quot;相关项目&quot;">​</a></h2><h3 id="nvm-n-rbenv-等" tabindex="-1">nvm / n / rbenv 等 <a class="header-anchor" href="#nvm-n-rbenv-等" aria-label="Permalink to &quot;nvm / n / rbenv 等&quot;">​</a></h3><p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a>, <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a> 和 <a href="https://github.com/rbenv/rbenv" target="_blank" rel="noreferrer">rbenv</a> 等工具都是用 Shell 脚本写的，这些脚本能为工具安装的可执行程序创建垫片。</p><p><code>asdf</code> 非常相似，目的是在工具/运行环境版本管理领域竞争。<code>asdf</code> 的区别之处在于它的插件系统，它消除了每个工具/运行环境对管理工具的需求、每个管理工具的不同命令以及存储库中不同的<code>*-版本</code>文件。</p><h3 id="direnv" tabindex="-1">direnv <a class="header-anchor" href="#direnv" aria-label="Permalink to &quot;direnv&quot;">​</a></h3><blockquote><p>使用可以根据当前目录加载和卸载环境变量的新功能增强现有 shell。</p></blockquote><p><code>asdf</code> 不管理环境变量，但是有一个插件 <a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer"><code>asdf-direnv</code></a> 可以用来集成 direnv 的特性到 <code>asdf</code> 中。</p><p>请查看 <a href="https://direnv.net/" target="_blank" rel="noreferrer">direnv 文档</a> 了解更多。</p><h3 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h3><blockquote><p>macOS（或者 Linux）上缺失包的管理器</p></blockquote><p>Homebrew 管理你的软件包及其上游依赖。<code>asdf</code> 不管理上游依赖，它不是包管理器。这个责任取决于用户，尽管我们试图保持依赖关系列表很小。</p><p>请查看 <a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrew 文档</a> 了解更多。</p><h3 id="nixos" tabindex="-1">NixOS <a class="header-anchor" href="#nixos" aria-label="Permalink to &quot;NixOS&quot;">​</a></h3><blockquote><p>Nix 是一种采用独特方法进行软件包管理和系统配置的工具</p></blockquote><p>NixOS 旨在通过管理每个工具的整个依赖关系树中软件包的确切版本来构建真正可重复的环境，有些是 <code>asdf</code> 无法做到的。NixOS 使用自己的编程语言、许多命令行工具和超过 60,000 个包的包集合来实现这一点。</p><p>同样，<code>asdf</code> 不管理上游依赖，并且它不是一个包管理器。</p><p>请查看 <a href="https://nixos.org/guides/how-nix-works.html" target="_blank" rel="noreferrer">NixOS 文档</a> 了解更多。</p><h2 id="为什么使用-asdf" tabindex="-1">为什么使用 asdf？ <a class="header-anchor" href="#为什么使用-asdf" aria-label="Permalink to &quot;为什么使用 asdf？&quot;">​</a></h2><p><code>asdf</code> 确保团队可以使用<strong>完全</strong>相同的工具版本，通过插件系统支持<strong>很多</strong>工具，以及作为 Shell 配置中包含的单个 <strong>Shell</strong> 脚本的 <em>简单性和熟悉性</em> 。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p><code>asdf</code> 并不打算成为一个系统包管理器。它是一个工具版本管理器。仅仅因为你可以为任何工具创建插件并使用 <code>asdf</code> 管理其版本，并不意味着这是这个特定工具的最佳实践方案。</p></div>',25)]))}const b=a(d,[["render",n]]);export{f as __pageData,b as default};
