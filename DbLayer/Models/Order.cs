using System;
using System.Collections.Generic;
using System.Text;

namespace DbLayer.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public double Time { get; set; }
        public double EndTime { get; set; }
        public double Result { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
