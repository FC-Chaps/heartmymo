var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var server = require('../server.js');
var twitterTools = require("../twit.js");

describe("The twitter module", function(){
	
	//Check basic state of twitter module
	it("should be on object", function(done){
		expect(twitterTools).to.be.an.object();
		done();
	})
	it("should have a getTweets method", function(done){
		expect(twitterTools.getTweets).to.be.a.function();
		done();
	})
	it("should have a validateTweets method", function(done){
		expect(twitterTools.validateTweets).to.be.a.function();
		done();
	})
});

describe("Twitter module's validateTweets method", function(){
	//Check its functionality
	var mockTweet;
	before(function(done){
		mockTweet = {
			id: "123456789",
			user: {
				screen_name: "Willy"
			},
			entities: {
				media: [
					{
						media_url: "www.test.com",
						type: "photo"
					}
				]
			},
			text: "abc"
		}
		done();
	})

	it("should return an object", function(done){
		expect(twitterTools.validateTweets(mockTweet)).be.an.object();
		done();
	})
	it("should have id, username, image, date, body", function(done){
		expect(twitterTools.validateTweets(mockTweet)).be.an.object();
		done();
	})
	it("should have correct properties", function(done){
		expect(twitterTools.validateTweets(mockTweet).id).to.equal("123456789");
		expect(twitterTools.validateTweets(mockTweet).username).to.equal("Willy");
		expect(twitterTools.validateTweets(mockTweet).image).to.equal("www.test.com");
		expect(twitterTools.validateTweets(mockTweet).body).to.equal("abc");
		done();
	})
})
/*
describe("Twitter module's getTweets method", function(){
	
	before(function(){
		var mockTweets, mockValidator;

		mockTweets = {
			statuses: [
				{
					id: "123456789",
					user: {
						screen_name: "Willy"
					},
					entities: {
						media: [
							{
								media_url: "www.test.com"
							}
						]
					},
					text: "abc"
				}
			]
		}
		mockValidator = function (tweet) {
			return tweet;
		}
	})
	it("should return an array", function(){
		expect(twitterTools.getTweets(mockTweets, mockValidator, 1)).to.be.an.array();
	})
	it("should return an array", function(){
		expect(twitterTools.getTweets(mockTweets, mockValidator, 1)).to.be.an.array();
	})

})

	it('"/" returns a random weird number', function (done) {
	    
	    server.inject({
	       method: 'GET',
	       url: '/'
	   	}, function (res) {

	       expect(res.payload).to.exist();
	       expect(res.payload).to.be.a.string();
	       expect(res.statusCode).to.equal(200);
	       done();
   		});
	});
*/