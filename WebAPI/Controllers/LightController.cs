using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LightController : ControllerBase
    {
        private readonly ILogger<LightController> _logger;

        public LightController(ILogger<LightController> logger)
        {
            _logger = logger;
        }

        [HttpGet()]
        public ActionResult Get()
        {
            return Ok();
        }

        [HttpPost("{mode}")]
        public ActionResult SetMode(string mode)
        {


            return Ok();
        }
    }
}
