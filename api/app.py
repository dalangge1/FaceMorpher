from flask import Flask, send_file, request, after_this_request, current_app
from flask_cors import CORS, cross_origin
import os 
import random, time 
from multiprocessing import Process
from threading import Thread
import shutil 

"""
When a request is received, pull a random video from the
videos directory, and return it back. Then run create_video.py again to create a video 
for whichever type is gone now. 

If there are currently no videos in that pool, generate one as well!
"""

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/dcgan": {"origins": "http://localhost:5000"}, r"/stylegan2": {"origins": "http://localhost:5000"}, r"/stylegan": {"origins": "http://localhost:5000"}})

import os 
def video_file(model_type): 
    model_files = os.listdir("videos/" + model_type)
    if len(model_files) == 0: 
        # create a model file 
        os.system(f"python3.8 create_video.py {model_type}")
    
    model_video_file = random.choice(os.listdir(f"videos/{model_type}"))
    
    return f"videos/{model_type}/{model_video_file}"

"""
def clean_and_create_model(model_type, file_name): 
    os.remove(file_name) 
    os.system(f"python3.8 create_video.py {model_type}")
    print("done cleaning and creating!")
    return 
"""

def create_video(model): 
    os.system(f"python3.8 create_video.py {model}")

@app.route("/")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def base(): return "vim is fun"

@app.get("/dcgan")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def dcgan_video(): 
    video_file_name = video_file("dcgan")
    new_path = "../public/serve/dcgan"
    # delete all videos from here 
    shutil.rmtree(new_path)
    os.mkdir(new_path) # clear all 

    shutil.move(video_file_name, new_path)
    return os.listdir(new_path)[0]

@app.get("/stylegan2")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def stylegan2_video(): 
    video_file_name = video_file("stylegan2")
    new_path = "../public/serve/stylegan2"
    # delete all videos from here 
    shutil.rmtree(new_path)
    os.mkdir(new_path) # clear all 

    shutil.move(video_file_name, new_path)
    return os.listdir(new_path)[0]

@app.get("/stylegan")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def stylegan_video(): 
    video_file_name = video_file("stylegan")
    
    new_path = "../public/serve/stylegan"
    # delete all videos from here 
    shutil.rmtree(new_path)
    os.mkdir(new_path) # clear all 

    shutil.move(video_file_name, new_path)
    return os.listdir(new_path)[0]

if __name__ == "__main__": 
    app.run() 