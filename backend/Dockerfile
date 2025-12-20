FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN npx prisma generate

ENV NODE_ENV=production
EXPOSE 5000

CMD ["npm", "run", "start"]
