using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Data;

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
            LightResponse result = new LightResponse();
            result.Mode = LiveData.CurrentMode;

            return Ok(result);
        }

        [HttpPost]
        public ActionResult SetMode([FromBody]LightResponse value)
        {
            if(value != null){
                LiveData.CurrentMode = value.Mode;
            }

            return Ok();
        }
    }
}
