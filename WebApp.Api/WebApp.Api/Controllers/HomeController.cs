﻿using Microsoft.AspNetCore.Mvc;

namespace WebApp.Api.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}