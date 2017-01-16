using AutoMapper;
using PartsBase.Demo.Model.Quotes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UBS.Site.Demo.Models;

namespace UBS.Site.Demo.App_Start
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Quote, QuoteViewModel>().ReverseMap();

            });


        }
    }
}