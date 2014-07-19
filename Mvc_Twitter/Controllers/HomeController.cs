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


        public ActionResult Index()
        {
            return View();
        }
        //
        // GET: /Home/
        //[HttpGet]
        //public ActionResult Index_Code()
        //{
        //    //TODO Please use your own keys and the secrets!

        //    //TwitterService("consumer key", "consumer secret");
        //    var service = new TwitterService("", "");

        //    //AuthenticateWith("Access Token", "AccessTokenSecret");
        //    service.AuthenticateWith("", "");

        //    //ScreenName="screeen name not username", Count=Number of Tweets / www.Twitter.com/mcansozeri. 
        //    //IEnumerable<TwitterStatus> tweets = service.ListTweetsOnUserTimeline(new ListTweetsOnUserTimelineOptions { ScreenName = txtTwitterName, Count = 5,});

        //    var options = new SearchOptions { Q = "%23ACME", Count = 10000 };

        //    var tweets = service.Search(options);

        //    foreach (var tweet in tweets.Statuses)
        //    {
        //        Console.WriteLine("{0} says '{1}'", tweet.User.Location, tweet.Text);
        //    }


        //    ViewBag.Tweets = tweets.Statuses;

        //    return View();
        //}



    }
}
