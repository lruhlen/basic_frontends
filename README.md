# basic_frontends
Template of web UI for submitting data to a Python microservice.

### Why?
As a data scientist, I want non-technical users to be able to use the models I develop.

A good way to do this is through a web interface.

Figuring out how to get javascript and html to play well with HUG, my favorite Python microservice framework, is hard.  I'm also pretty clueless about javascript, like many other data scientists I know.

Here is the simplest possible working solution I could create.  Please copy, use, and modify it for your own needs. 

## How to use

### Start the Python microservice

1. Navigate to `example_python_microservice/` folder.
2. (First time only) Create a python3 virtual environment.
2. Activate the virtual environment.
3. (First time only) Pip-install contents of `requirements.txt`
4. Run `hug -f example_server.py` at the command line.

An adorable ascii-art koala should appear.  At this point, your Python microservice is ready to handle requests on `http://localhost:8000`.

Navigate to `http://localhost:8000/example_get_request` with a web browser to check if the microservice is running. 

### Use web UI

Open `index.html` with a web browser and upload a file!
