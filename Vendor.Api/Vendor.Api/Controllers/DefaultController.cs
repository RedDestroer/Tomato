using System.Collections.Generic;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;

namespace Vendor.Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IDictionary<string, string>> Get()
        {
            var assembly = Assembly.GetEntryAssembly();
            var assemblyName = assembly?.GetName();
            var result = new Dictionary<string, string>();

            if (assemblyName != null)
            {
                result.Add("Assembly", assemblyName.FullName);
                result.Add("Version", assemblyName.Version.ToString(3));
            }

            return Ok(result);
        }
    }
}