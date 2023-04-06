# microservice-blogging-platform
This project attempts to implement a simple blogging platform that utilizes microservice architecture and a fully automated CI/CD pipeline. 
So far I have been able to complete:
- A functioning UI (not hooked up to any external API) that has been deployed to an image in my Docker Hub. The UI contains an article listing page and article detail pages (no user details or login page). This can be pulled and run with the following commands:
    ```
    docker pull jesseyler/posh-sheep:latest
    docker run -p 3000:3000 jesseyler/posh-sheep
    ```
    
    - Alternatively you can build and run the app locally from the posh-sheep directory with:
    ```
    docker build -t posh-sheep:development . 
    docker run -p 3000:3000 posh-sheep:development
    ```

- A boilerplate project for the Go-based backend API for articles. The project uses the Ent ORM framework to interface with a Postgres DB, along with the Fiber framework to build a RESTful API. It has not yet been modified to fit the specifications of this project. 
