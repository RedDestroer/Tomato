using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApp.Api.Attributes
{
    public class WebAppResourceFilterAttribute : Attribute, IResourceFilter
    {
        public void OnResourceExecuting(ResourceExecutingContext context)
        {
            if (context.HttpContext?.Request?.Headers?.ContainsKey("X-WebApp-Token") == true)
            {
                var header = context.HttpContext.Request.Headers["X-WebApp-Token"].FirstOrDefault();
                if (header == "opa opa")
                    return;
            }

            //context.Result = new BadRequestResult();
        }

        public void OnResourceExecuted(ResourceExecutedContext context)
        {
        }
    }
}