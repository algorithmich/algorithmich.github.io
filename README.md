[![pages-build-deployment](https://github.com/algorithmich/algorithmich.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/algorithmich/algorithmich.github.io/actions/workflows/pages/pages-build-deployment)

# Michelle's Blog
This blog is based on [AstroPaper](https://github.com/satnaing/astro-paper).


## How to run via docker
```bash
docker run -it --rm \
  -p 4321:4321 \
  -v "$PWD":/app \
  -w /app \
  node:lts \
  sh -lc "corepack enable && corepack prepare pnpm@latest --activate && pnpm install && pnpm dev --host 0.0.0.0 --port 4321"
```

## 📜 License

Licensed under the MIT License, Copyright © 2025

---

Made with 🤍 by [Sat Naing](https://satnaing.dev) 👨🏻‍💻 and [contributors](https://github.com/satnaing/astro-paper/graphs/contributors).