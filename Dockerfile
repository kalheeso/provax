FROM maven:3.8.8-eclipse-temurin-17-alpine
ENV APP_DIR=/projects/provax

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
COPY . $APP_DIR

RUN mvn clean install
CMD ["mvn", "spring-boot:run"]


