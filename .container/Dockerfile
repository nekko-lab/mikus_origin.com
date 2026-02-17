ARG NODE_VERSION=24.13.0

################################################################################

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /usr/src/app

################################################################################

FROM base AS deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

################################################################################

FROM deps AS build

COPY . .

RUN npm run build

################################################################################

FROM nginx:1.29.2 AS runner

RUN rm -rf /etc/nginx/conf.d/*
COPY .container/nginx/conf.d/*.conf /etc/nginx/conf.d/
COPY --from=build /usr/src/app/out /usr/share/nginx/html
