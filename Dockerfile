FROM node:0.12

# Install gem sass for  grunt-contrib-sass
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

WORKDIR /home/aboreeNetwork

# Install aboree Network packages
ADD package.json /home/aboreeNetwork/package.json
RUN npm install

# Make everything available for start
ADD . /home/aboreeNetwork

# Set development environment as default
ENV NODE_ENV development

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD ["grunt"]
