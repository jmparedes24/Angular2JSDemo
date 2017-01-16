using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartsBase.Demo.Model.Catalogs
{
    [Table("Country")]
    public class Country : BaseModel.BaseInfoTable
    {
        [Key]
        [Column("Id")]
        public int CountryId { get; set; }

        [Column("Name")]
        public string Name { get; set; }
    }
}
