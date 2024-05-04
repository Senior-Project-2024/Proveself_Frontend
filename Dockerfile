#BUILD STAGE
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

#PRODUCTION STAGE
FROM node:18-alpine AS PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
EXPOSE 8080

CMD ["npm", "run", "start"]