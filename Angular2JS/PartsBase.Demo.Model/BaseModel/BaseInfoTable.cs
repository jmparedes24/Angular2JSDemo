using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartsBase.Demo.Model.BaseModel
{
    public class BaseInfoTable
    {
        [Column("CreatedBy")]
        public string CreatedBy { get; set; }

        [Column("DateCreated")]
        public DateTime DateCreated { get; set; }

        [Column("ModifiedBy")]
        public string ModifiedBy { get; set; }

        [Column("DateModified")]
        public DateTime DateModified { get; set; }
    }
}
