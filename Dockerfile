FROM node:16

WORKDIR /app

COPY backend/package.json .
RUN npm install

COPY backend ./backend
COPY frontend ./frontend

EXPOSE 3000

CMD ["npm", "start", "--prefix", "backend"]
