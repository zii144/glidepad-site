# Glidepad website

The public pages for [Glidepad](https://zii144.github.io/glidepad-site/), served by GitHub Pages from `main`:

| Page | Path |
|---|---|
| Download and setup guide | `/` |
| Support | `/support/` |
| Privacy policy | `/privacy/` |

The privacy policy URL and support URL in App Store Connect point here, so keep those paths stable.

**Support requests** go to this repository's [Issues](https://github.com/zii144/glidepad-site/issues).

To release a new agent version, set `version` and `base` in `CONFIG` at the top of `index.html`'s script. While
`base` is empty, the download buttons show "coming soon".

Preview locally with `python3 -m http.server --directory .`
