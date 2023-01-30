using Microsoft.AspNetCore.Mvc;
using Faker;
using System.Collections.Generic;
using Bogus;

namespace MicroFrontEndMVC.Controllers
{
    public class FakeDataController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public List<FakeRecord> GetFakeData()
        {
            var faker = new Faker<FakeRecord>()
                .RuleFor(o => o.FirstName, f => f.Name.FirstName())
                .RuleFor(o => o.LastName, f => f.Name.LastName())
                .RuleFor(o => o.Address, f => f.Address.FullAddress())
                .RuleFor(o => o.AccountBalance, f => f.Random.Decimal(1000, 100000))
                .RuleFor(o => o.AccountNumber, f => f.Finance.Iban());

            return faker.Generate(100);
        }



    }

    public class FakeRecord
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public decimal AccountBalance { get; set; }
        public string AccountNumber { get; set; }
    }
}
