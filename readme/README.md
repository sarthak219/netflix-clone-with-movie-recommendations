
# Netflix Clone with Movie Recommendation System

1. 🎬 Developed user-based movie recommendation system by implementing user-user collaborative filtering.

2. 🎬Used Netflix movie dataset containing 100,000 user records for developing recommendation engine.


# Algorithm:

What is Collaborative Filtering:
Collaborative Filtering is a method of making automatic predictions (filtering) about the interests of a user by
collecting preferences or taste information from similar users.

1. Pearson Correlation Coefficient

• We achieved movie recommendation results by calculating the Pearson Correlation Coefficient and thereby
similarity between users based on the movies they watched and gave similar ratings.
• The coefficient value range from -1 to 1. Where -1 and 1 indicate a negative and positive correlation
respectively.
• Coefficient with value O indicates no correlation between the two variables.
• Statistically it can be said that Pearson Correlation Coefficient between two variables can be calculated as the
covariance of the variables divided by the product of their standard deviations.

<img width="639" alt="ss1" src="https://user-images.githubusercontent.com/77843232/170868528-adf3a67b-116a-4794-ba76-ff0782abf183.png">


## Setup instructions (how to launch the app)
- first open terminal
- cd backend
- pip3 install flask_cors
- pip3 install requests
- run python3 app.py (install dependencies in case of error)
- the flask server must be running on localhost port 8000
- then open a new terminal tab into the root directory and install node modules
    using npm i
- execute npm run start to launch the app on localhost:3000.

## Tech Stacks Used
- React , redux , python , flask , javascript , firebase 
- 2 API are used
- TMDB API and
- 
## Made my own Flask API - I made an API to get the recommendations from the model by providing the user ID and then fetched it in react app to display it.


## Features

## Recommendation

<img width="500" alt="recommend" src="https://user-images.githubusercontent.com/77843232/170868673-0c13b796-f588-4fb7-ad59-040783ee063d.png">


- User-login Page
<img width="500" alt="login" src="https://user-images.githubusercontent.com/77843232/170868539-58338c46-68ba-4f21-95a8-e9fa812982a0.png">

- You can edit your profile

<img width="500" alt="profile" src="https://user-images.githubusercontent.com/77843232/170868593-8c915ec7-9e94-47ad-9c23-935b575ec50b.png">

- search bar
<img width="500" alt="searchbar" src="https://user-images.githubusercontent.com/77843232/170868605-79374179-db9d-4483-a7bb-28b01009720e.png">

- different genres available
<img width="500" alt="screen1" src="https://user-images.githubusercontent.com/77843232/170868969-726412d1-367a-494a-bbb9-f55fe0a92835.png">

<img width="500" alt="screen2" src="https://user-images.githubusercontent.com/77843232/170868975-334f412a-92a3-4df3-b59a-e325c751e93c.png">

<img width="500" alt="screen3" src="https://user-images.githubusercontent.com/77843232/170868985-bae83ce7-3cdd-4eed-8841-7398283b65bb.png">

<img width="500" alt="screen4" src="https://user-images.githubusercontent.com/77843232/170868995-30fa9b7a-d18d-40a9-9914-38f0e7824b69.png">







