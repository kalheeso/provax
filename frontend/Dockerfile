FROM node:20.9.0-alpine as build

ENV APP_DIR=/projects/frontend

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

COPY . .

RUN npm install
RUN npm install -g @angular/cli@11.0.5

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]