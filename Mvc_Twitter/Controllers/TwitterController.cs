using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TweetSharp;

namespace Mvc_Twitter.Controllers
{
    public class TwitterController : ApiController
    {
        // GET api/Twitter
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/Twitter/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/Twitter
        public IEnumerable<TwitterStatus> Post([FromBody]string value)
        {

            var service = new TwitterService("", "");

            //AuthenticateWith("Access Token", "AccessTokenSecret");
            service.AuthenticateWith("", "");

            //ScreenName="screeen name not username", Count=Number of Tweets / www.Twitter.com/mcansozeri. 
            //IEnumerable<TwitterStatus> tweets = service.ListTweetsOnUserTimeline(new ListTweetsOnUserTimelineOptions { ScreenName = txtTwitterName, Count = 5,});
            SearchOptions options=null;

            //this to line one to ge all tweets and the other to get only the new ones
            if(string.IsNullOrEmpty( value))
             options = new SearchOptions { Q = "%23ACME", Count = 10000 };
            else
                options = new SearchOptions { Q = "%23ACME", Count = 10000, MaxId =long.Parse( value) };
            var tweets = service.Search(options);


            //
            return tweets.Statuses;
        }

        // PUT api/Twitter/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/Twitter/5
        public void Delete(int id)
        {
        }
    }
}
