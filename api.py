# from flask import Flask, render_template, request, jsonify
# import json
# import numpy as np
# import tensorflow as tf
# from tensorflow import keras
# import tensorflow_hub as hub
# from os.path import exists, abspath

# app = Flask(__name__)

# IMAGE_DIM = 224   # required/default image dimensionality

# def load_images(image_paths, image_size, verbose=True):
#     loaded_images = []
#     loaded_image_paths = []

#     if exists(image_paths) and abspath(image_paths):
#         parent = abspath(image_paths)
#         image_paths = [join(parent, f) for f in listdir(image_paths) if isfile(join(parent, f))]
#     elif isfile(image_paths):
#         image_paths = [image_paths]

#     for img_path in image_paths:
#         try:
#             if verbose:
#                 print(img_path, "size:", image_size)
#             image = keras.preprocessing.image.load_img(img_path, target_size=image_size)
#             image = keras.preprocessing.image.img_to_array(image)
#             image /= 255
#             loaded_images.append(image)
#             loaded_image_paths.append(img_path)
#         except Exception as ex:
#             print("Image Load Failure: ", img_path, ex)
    
#     return np.asarray(loaded_images), loaded_image_paths

# def load_model(model_path):
#     if model_path is None or not exists(model_path):
#         raise ValueError("saved_model_path must be the valid directory of a saved model to load.")
    
#     model = tf.keras.models.load_model(model_path, custom_objects={'KerasLayer': hub.KerasLayer})
#     print(model.summary())
#     return model

# def classify(model, input_paths, image_dim=IMAGE_DIM):
#     images, image_paths = load_images(input_paths, (image_dim, image_dim))
#     probs = classify_nd(model, images)
#     return dict(zip(image_paths, probs))

# def classify_nd(model, nd_images):
#     model_preds = model.predict(nd_images)
    
#     categories = ['drawings', 'hentai', 'neutral', 'porn', 'sexy']

#     probs = []
#     for i, single_preds in enumerate(model_preds):
#         single_probs = {}
#         for j, pred in enumerate(single_preds):
#             single_probs[categories[j]] = float(pred)
#         probs.append(single_probs)
#     return probs

# def main():
#     app.run(debug=True)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload():
#     if 'file' not in request.files:
#         print('No file part in request.')
#         return jsonify({'error': 'No file part'})

#     file = request.files['file']

#     if file.filename == '':
#         print('No selected file.')
#         return jsonify({'error': 'No selected file'})

#     if file:
#         img_path = "temp_image.jpg"
#         file.save(img_path)

#         model = load_model("Nudity-Detection-Model.h5")
#         image_preds = classify(model, img_path, IMAGE_DIM)

#         print('Image uploaded and processed successfully.')

#         return jsonify({'image_path': img_path, 'predictions': image_preds})
# if __name__ == "__main__":
#     main()


from flask import Flask, render_template, request, jsonify
import os
from os.path import exists, abspath, join, isfile
from os import listdir
import numpy as np
import tensorflow as tf
from tensorflow import keras
import tensorflow_hub as hub
from urllib.request import urlopen  # Ajout de l'import pour télécharger l'image depuis une URL

app = Flask(__name__)

IMAGE_DIM = 224   # required/default image dimensionality

def load_images(image_path, image_size, verbose=True):
    loaded_images = []
    loaded_image_paths = []

    if exists(image_path) and abspath(image_path):
        try:
            if verbose:
                print(image_path, "size:", image_size)
            image = keras.preprocessing.image.load_img(image_path, target_size=image_size)
            image = keras.preprocessing.image.img_to_array(image)
            image /= 255
            loaded_images.append(image)
            loaded_image_paths.append(image_path)
        except Exception as ex:
            print("Image Load Failure: ", image_path, ex)
    
    return np.asarray(loaded_images), loaded_image_paths

def load_model(model_path):
    if model_path is None or not exists(model_path):
        raise ValueError("saved_model_path must be the valid directory of a saved model to load.")
    
    model = tf.keras.models.load_model(model_path, custom_objects={'KerasLayer': hub.KerasLayer})
    print(model.summary())
    return model

def classify(model, input_paths, image_dim=IMAGE_DIM):
    images, image_paths = load_images(input_paths, (image_dim, image_dim))
    probs = classify_nd(model, images)
    return dict(zip(image_paths, probs))

def classify_nd(model, nd_images):
    model_preds = model.predict(nd_images)
    
    categories = ['drawings', 'hentai', 'neutral', 'porn', 'sexy']

    probs = []
    for i, single_preds in enumerate(model_preds):
        single_probs = {}
        for j, pred in enumerate(single_preds):
            single_probs[categories[j]] = float(pred)
        probs.append(single_probs)
    return probs

def main():
    app.run(debug=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        print('No file part in request.')
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        print('No selected file.')
        return jsonify({'error': 'No selected file'})

    if file:
        img_path = "temp_image.jpg"
        file.save(img_path)

        model = load_model("Nudity-Detection-Model.h5")
        image_preds = classify(model, img_path, IMAGE_DIM)

        print('Image uploaded and processed successfully.')

        return jsonify({'image_path': img_path, 'predictions': image_preds})

    elif 'photoUrl' in request.json:
        # Gestion du téléchargement d'image à partir d'une URL
        img_url = request.json['photoUrl']
        
        try:
            # Téléchargez l'image à partir de l'URL
            img_path = "temp_image.jpg"
            with urlopen(img_url) as response:
                with open(img_path, 'wb') as img_file:
                    img_file.write(response.read())
        except Exception as ex:
            print("Error downloading image:", ex)
            return jsonify({'error': 'Error downloading image'})

    else:
        print('No file part or image URL in request.')
        return jsonify({'error': 'No file part or image URL'})

    # Continuez avec le traitement de l'image
    model = load_model("Nudity-Detection-Model.h5")
    image_preds = classify(model, img_path, IMAGE_DIM)

    print('Image uploaded and processed successfully.')

    return jsonify({'image_path': img_path, 'predictions': image_preds})

if __name__ == "__main__":
    app.run(debug=True)