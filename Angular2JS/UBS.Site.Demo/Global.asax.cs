using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using UBS.Site.Demo.App_Start;

namespace UBS.Site.Demo
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);            
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AutoMapperConfig.Initialize();
        }
    }
}
