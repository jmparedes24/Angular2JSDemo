using System.ComponentModel;

namespace UBS.Site.Demo.Models
{
    public class QuoteViewModel
    {
        public int QuoteId { get; set; }
        
        [DisplayName("Quote Num.")]
        public long QuoteNumber { get; set; }

        public int ClientQuoteId { get; set; }

        [DisplayName("Created By")]
        public string CreatedBy { get; set; }
    }
}