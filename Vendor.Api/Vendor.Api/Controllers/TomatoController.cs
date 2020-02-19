using System.Collections.Generic;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Vendor.Api.Dtos;
using Vendor.Api.Services;

namespace Vendor.Api.Controllers
{
    [Route("api/[controller]")]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ApiController]
    public class TomatoController : ControllerBase
    {
        private readonly ITomatoService _tomatoService;

        public TomatoController(ITomatoService tomatoService)
        {
            _tomatoService = tomatoService;
        }

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
        [ProducesResponseType(typeof(List<Tomato>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(List<Tomato>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> List()
        {
            var tomatos = await _tomatoService.GetList();

            return Ok(tomatos);
        }

        public async Task<IActionResult> GetById()
        {
            var tomato = await _tomatoService.Get(0);

            return Ok(tomato);
        }
    }
}