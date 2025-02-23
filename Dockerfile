FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and other necessary files
COPY package*.json ./

# Intall dependencies
RUN npm install

# Copy the rest of an aplication files
COPY . .

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SENTRY_DNS
ARG GOOGLE_BOOKS_API_KEY

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SENTRY_DNS=$NEXT_PUBLIC_SENTRY_DNS
ENV GOOGLE_BOOKS_API_KEY=$GOOGLE_BOOKS_API_KEY

# Build application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]