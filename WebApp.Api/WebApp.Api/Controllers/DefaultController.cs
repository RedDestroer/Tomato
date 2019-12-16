using System.Collections.Generic;
using System.Net.Mime;
using System.Reflection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using WebApp.Api.Attributes;

namespace WebApp.Api.Controllers
{
    [Route("api/")]
    [ApiController]
    [WebAppResourceFilter]
    public class DefaultController : ControllerBase
    {
        /// <summary>
        /// Gets API properties
        /// </summary>
        /// <returns>
        /// Key value dictionary with API properties
        /// </returns>
        /// <remarks>
        /// Sample request:
        ///
        ///   GET /api
        /// </remarks>
        /// <response code="200">Ok</response>
        /// <response code="400">If X-WebApp-Token not set or invalid</response>
        [HttpGet]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
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