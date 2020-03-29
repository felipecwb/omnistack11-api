FROM node:lts-slim

ENV NODE_ENV production
ENV SERVER_PORT 3000

EXPOSE $SERVER_PORT

VOLUME /home/api/database

WORKDIR /home/api

RUN chown node:node -R /home/api

USER node

COPY --chown=node:node ./ /home/api

RUN npm install --production

CMD ["npm", "run", "production"]