from tkinter import N
from flask_cors import CORS
from flask import Flask, jsonify
import pickle
import pandas as pd
import numpy as np
import requests

# Global vars
api_key = "9788ef17aca04b40d4b9454ad4277ca9"

# initialize app
app = Flask(__name__)

CORS(app)
cors = CORS(app, resources={
    r"/*": {
       "origins": "*"
    }
})

# Data frames
movies_list = pickle.load(open("movies_dict.pkl", "rb"))
df_movies = pd.DataFrame(movies_list);
ratings_list = pickle.load(open("ratings_dict.pkl", "rb"))
df_ratings = pd.DataFrame(ratings_list);
movie_features = df_ratings.pivot(
    index='userId',
    columns='movieId',
    values='rating'
).fillna(0).to_numpy()



#Fetch movie posters
def fetchPosters(id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US".format(id, api_key)
    response = requests.get(url)
    data = response.json()
    return "https://image.tmdb.org/t/p/w500" + str(data.get("poster_path"))
    
def fetchMovie(id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US".format(id, api_key)
    response = requests.get(url)
    data = response.json()
    return data;


# Routes

# home
@app.route("/")
def home():
    return "hello"

# recommendations
@app.route("/recommend/<int:id>")
def recommendMovie(id):
    user_id = id
    no_of_recs = 20

    user_id -= 1

    similarities = []
    for i in range(movie_features.shape[0]):
        similarities.append((np.corrcoef(movie_features[user_id], movie_features[i])[0, 1], i))

    similarities.sort(reverse=True)
    denom = sum([e[0] for e in similarities])

    new_ratings = []
    for i in range(movie_features[user_id].shape[0]):
        if not movie_features[user_id][i] > 1e-8:
            num = 0
            # print(i)
            for y in similarities:
                num += y[0]*movie_features[y[1]][i]

            new_ratings.append((num / denom, i))

    new_ratings.sort(reverse=True)

    recommendations = []

    # print('\nRecommendations for you:')
    for e in new_ratings[:no_of_recs]:
        recommendations.append(
            fetchMovie(df_movies.iloc[e[1]]['movieId'])
                # "poster_url": fetchPosters(df_movies.iloc[e[1]]['movieId']),
                # "title": df_movies.iloc[e[1]]['title'],
                # "movie_id": int(df_movies.iloc[e[1]]['movieId'])
            )

    return jsonify({"results":recommendations})
    

# @app.route("/testing/<int:n>")
# def testFn(n):
#     result = {
#         "number": movies_list
#     }
#     return jsonify(result)


if __name__ == "__main__": 
    app.run(port=8000, debug=True)
