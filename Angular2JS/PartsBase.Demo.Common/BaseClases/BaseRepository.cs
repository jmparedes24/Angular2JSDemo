using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using PartsBase.Demo.Common.Interface;
using System.Data.Entity;
using System.Linq;

namespace PartsBase.Demo.Common.BaseClases
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private DbContext _context;



        public BaseRepository(DbContext context)
        {
            _context = context;
        }

        public DbContext Context
        {
            get
            {
                return _context;
            }

            set
            {
                _context = value;
            }
        }

        public virtual Task<IQueryable<TEntity>> Find(Expression<Func<TEntity, bool>> whereExpression)
        {
            return Task.FromResult(_context.Set<TEntity>().Where(whereExpression));
        }

        public virtual Task<List<TEntity>> Get()
        {
            try
            {

                return Task.FromResult(_context.Set<TEntity>().ToList());
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public virtual Task<TEntity> Get(int id)
        {
            return Task.FromResult(_context.Set<TEntity>().FirstOrDefault());
        }
    }
}
