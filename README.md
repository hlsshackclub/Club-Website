# Club Website
## Development instructions
Node.js is required to develop this project.

Install Node.js on Windows through the Terminal:
```pwsh
winget install nodejs
```
Or on Arch Linux 💙:
```bash
sudo pacman -S nodejs
```
Or just head to https://nodejs.org/en/download and follow the instructions from there.

To develop on this SvelteKit project, after cloning the Git repository (through a terminal or VSCode):
```bash
# install pnpm and typescript globally
pnpm i -g pnpm typescript
# install dependencies
pnpm i
# start the server
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```
