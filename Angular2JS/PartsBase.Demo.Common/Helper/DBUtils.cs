using System.Configuration;

namespace PartsBase.Demo.Common.Helper
{
    public static class DBUtils
    {
        public static string GetConnectionString(string keyConnectionString)
        {
            return ConfigurationManager.ConnectionStrings[keyConnectionString].ConnectionString;
        }
    }
}
