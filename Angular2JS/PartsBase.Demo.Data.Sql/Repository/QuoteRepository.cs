namespace PartsBase.Demo.Data.Sql.Repository
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Common.BaseClases;
    using Model.Quotes;

    public class QuoteRepository : BaseRepository<Quote>
    {
        public QuoteRepository(PartsBaseDBContext context) : base(context)
        {
        }

        public override Task<IQueryable<Quote>> Find(Expression<Func<Quote, bool>> whereExpression)
        {
            return base.Find(whereExpression);
        }
    }
}
