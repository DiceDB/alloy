FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i -g pnpm@9.10.0

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=playground-web --prod /prod/playground-web

FROM base 
COPY --from=build /prod/playground-web /prod/playground-web
WORKDIR /prod/playground-web
EXPOSE 8000
CMD [ "pnpm", "start" ]
