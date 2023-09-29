# ticketing

This is a course project designed by Stephen Grider on Udemy. The application is for people selling and purchasing tickets online using microservices. There are six services: client, auth, expiration, tickets, orders, and payments.

# Build With

* React
* Typescript

# Prerequisites

  1. The project can be run locally with Docker or in a cloud server like Google Cloud Kubernetes. 
  The default settings are for the local run. So all the instructions below are for local setup.
  2. You need to download the Docker Desktop and enable the Kubernetes in the settings.
  3. It is challenging to run microservices locally, and you probably gonna see the docker crash or run super slow due to being out of memory. Cloud servers are strongly recommended.

# Installation

1. clone the repo
   
   `git clone https://github.com/Lindahe0707/ticketing.git`
2. In each server file, install npm packages
    
   `npm install`
3. Run the microservices using skaffold
   
   `cd ticketing`

   `skaffold dev`

# Acknowledgments

https://www.udemy.com/course/microservices-with-node-js-and-react/
   
   
