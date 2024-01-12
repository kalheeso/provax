FROM maven:3.8.8-eclipse-temurin-17-alpine
ENV APP_DIR=/projects/provax

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
COPY /src  $APP_DIR/src
COPY pom.xml $APP_DIR


RUN mvn install
CMD ["mvn", "spring-boot:run"]


