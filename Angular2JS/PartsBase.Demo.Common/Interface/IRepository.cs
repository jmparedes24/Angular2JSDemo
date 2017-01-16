using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PartsBase.Demo.Common.Interface
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<List<TEntity>> Get();
        Task<TEntity> Get(int id);
        Task<IQueryable<TEntity>> Find(Expression<Func<TEntity, bool>> whereExpression);
    }
}
