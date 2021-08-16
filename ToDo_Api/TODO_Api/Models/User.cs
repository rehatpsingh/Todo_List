using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TODO_Api.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

       
        public string Username { get; internal set; }
        [JsonIgnore]

        public string Password { get; internal set; }
    }
}
