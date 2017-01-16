using PartsBase.Demo.Common.Interface;
using PartsBase.Demo.Model.Quotes;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web.Mvc;
using UBS.Site.Demo.Models;

namespace UBS.Site.Demo.Controllers
{
    public class HomeController : Controller
    {
        private IRepository<Quote> _quoteRepo;

        public HomeController(IRepository<Quote> quoteRepo)
        {
            _quoteRepo = quoteRepo;
        }
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> GetQuotes()
        {
            var result = await _quoteRepo.Get();

            var resultViewModel = result.Select(AutoMapper.Mapper.Map<Quote, QuoteViewModel>).ToList();

            return PartialView("_QuotesResults", resultViewModel);
        }

        public async Task<ActionResult> GetQuotesJson()
        {
            var result = await _quoteRepo.Get();

            var resultViewModel = result.Select(AutoMapper.Mapper.Map<Quote, QuoteViewModel>).ToList();

            return Json(resultViewModel, JsonRequestBehavior.AllowGet);
        }
    }
}