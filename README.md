Movember Tweets API

API for <3 My Mo to get and update likes on photos

Endpoints:

GET /tweets
Receives 10 most recent tweets with photos that mention Movember from Twitter API

GET /tweets/liked
Receives 10 most liked tweets with photos that mention Movember from MongoDB

POST /tweets/liked
Updates the like count on a particular tweet in the database. Adds to database if not previously liked.
required payload: 
{
	username: author-of-tweet,
	image: url-of-image,
	id: id-of-tweet,
	likes: number-of-likes
}