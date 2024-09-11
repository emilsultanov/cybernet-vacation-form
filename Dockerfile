FROM node:lts-slim
WORKDIR /usr/app
RUN npm install -g pnpm
RUN pnpm install vite
RUN rm -rf node_modules pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build
EXPOSE 4173
CMD ["pnpm", "run", "preview", "--", "--host", "0.0.0.0"]