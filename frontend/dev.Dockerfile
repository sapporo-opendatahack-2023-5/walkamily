FROM node:latest

# install packages with dev Depedencies
COPY ./package.json ./package.json
RUN npm install


# start build
COPY ./ ./
RUN npm run build

# run
EXPOSE 4173
CMD ["npm", "run", "preview"]