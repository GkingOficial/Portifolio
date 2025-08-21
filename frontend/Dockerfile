FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci || npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]