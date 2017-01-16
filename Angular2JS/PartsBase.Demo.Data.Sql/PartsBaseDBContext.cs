using PartsBase.Demo.Common;
using PartsBase.Demo.Common.Helper;
using PartsBase.Demo.Model.Catalogs;
using PartsBase.Demo.Model.Quotes;
using System.Data.Entity;

namespace PartsBase.Demo.Data.Sql
{
    public class PartsBaseDBContext : DbContext
    {
        public PartsBaseDBContext() : base(DBUtils.GetConnectionString(Constants.dbDemoPartsBase)) { }

        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Quote> Quotes { get; set; }
    }
}
