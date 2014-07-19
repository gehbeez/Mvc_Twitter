using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TweetSharp;

namespace Mvc_Twitter.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        [HttpGet]
        public ActionResult Index()
        {
            //TODO Please use your own keys and the secrets!

            //TwitterService("consumer key", "consumer secret");
            var service = new TwitterService("MkBuDyXT25CxRjCJcqT9yx9jB", "M5tieWo81h9YfRfLa7AUKijdlIegUJXBHRpTEZmX7p0fGi0SWQ");

            //AuthenticateWith("Access Token", "AccessTokenSecret");
            service.AuthenticateWith("17774785-3aYt412pmRfT0sgep90azFeUCPOyt1uSJSQE6HvsW", "O9Zc7Ctg2VQWUemi2iLin8lZqwcW0n97f95vA3OFpDlkz");

            //ScreenName="screeen name not username", Count=Number of Tweets / www.Twitter.com/mcansozeri. 
            //IEnumerable<TwitterStatus> tweets = service.ListTweetsOnUserTimeline(new ListTweetsOnUserTimelineOptions { ScreenName = txtTwitterName, Count = 5,});

            var options = new SearchOptions { Q = "%23ACME", Count = 10000 };

            var tweets = service.Search(options);

            foreach (var tweet in tweets.Statuses)
            {
                Console.WriteLine("{0} says '{1}'", tweet.User.Location, tweet.Text);
            }


            ViewBag.Tweets = tweets.Statuses;

            return View();
        }

        public ActionResult Tweet()
        {

            return View();
        }

    }
}
