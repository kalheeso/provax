FROM maven:3.8.8-eclipse-temurin-17-alpine
ENV APP_DIR=/projects/provax

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
COPY target/*.jar  $APP_DIR

RUN mv *.jar app.jar

CMD ["java", "-jar", "app.jar"]


