# Digital Clock (Tauri)

A small Windows desktop digital clock built with [Tauri 2](https://tauri.app/) and vanilla HTML, CSS, and JavaScript.

## Requirements

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri Windows prerequisites](https://v2.tauri.app/start/prerequisites/) (WebView2, Visual Studio C++ build tools)

## Run from source

```bash
git clone https://github.com/timpaniman/digitalclock-tauri.git
cd digitalclock-tauri
npm install
npm run tauri dev
```

## Build an installer

```bash
npm run tauri build
```

The NSIS installer is written to `src-tauri/target/release/bundle/nsis/`.

## License

MIT
