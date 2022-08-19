FROM cypress/included:6.8.0

RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY ./cypress.json .
COPY ./cypress ./cypress

ENTRYPOINT ["npm", "run"]