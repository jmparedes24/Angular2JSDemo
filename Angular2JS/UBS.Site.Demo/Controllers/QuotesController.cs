using PartsBase.Demo.Common.Interface;
using PartsBase.Demo.Model.Quotes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using UBS.Site.Demo.Models;

namespace UBS.Site.Demo.Controllers
{
    public class QuotesController : ApiController
    {
        private IRepository<Quote> _quoteRepo;


        public QuotesController(IRepository<Quote> quoteRepo)
        {
            _quoteRepo = quoteRepo;
        }
        // GET: api/Quotes
        public async Task<List<QuoteViewModel>> Get()
        {
            var result = await _quoteRepo.Get();

            var resultViewModel = result.Select(AutoMapper.Mapper.Map<Quote, QuoteViewModel>).ToList();

            return resultViewModel;
        }

        // GET: api/Quotes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Quotes
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Quotes/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Quotes/5
        public void Delete(int id)
        {
        }
    }
}
