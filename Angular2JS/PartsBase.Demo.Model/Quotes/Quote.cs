using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartsBase.Demo.Model.Quotes
{
    [Table("QuoteDemo")]
    public class Quote : BaseModel.BaseInfoTable
    {
        [Key]
        [Column("Id")]
        public int QuoteId { get; set; }
       
        [Column("QuoteNumber")]
        public long QuoteNumber { get; set; }

        [Column("ClientQuoteId")]
        public int ClientQuoteId { get; set; }
    }
}
