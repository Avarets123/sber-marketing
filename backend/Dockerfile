FROM node:20-alpine AS builder

ENV NODE_ENV build

USER node
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
RUN npm run prisma:generate \
    && npm run build
    
# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules/ ./node_modules/
COPY --from=builder /usr/src/app/dist/ ./dist/
COPY --from=builder /usr/src/app/src/infrastructure/database/prisma/ ./src/infrastructure/database/prisma/

CMD ["npm", "run", "start:prod"]