using System;
using System.IO;
using System.Reflection;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace WebApp.Api
{
    public class Program
    {
        private const string DateTimeFormat = "yyyy-MM-dd HH:mm:ss";

        public static void Main(string[] args)
        {
            var currentDir = Directory.GetCurrentDirectory();
            var startFullFileName = Path.Combine(currentDir, "_appStart.log");

            try
            {
                var version = Assembly.GetAssembly(typeof(Program)).GetName().Version;

                var sb = new StringBuilder();
                sb.AppendLine(DateTime.UtcNow.ToString(DateTimeFormat));
                sb.AppendLine($"Application starting {version}");

                File.WriteAllText(startFullFileName, sb.ToString(), Encoding.UTF8);

                CreateWebHostBuilder(args, currentDir).Build().Run();

                sb = new StringBuilder();
                sb.AppendLine($"Application stopped {DateTime.UtcNow.ToString(DateTimeFormat)}");
                File.AppendAllText(startFullFileName, sb.ToString(), Encoding.UTF8);
            }
            catch (Exception exception)
            {
                var sb = new StringBuilder();
                sb.AppendLine(DateTime.UtcNow.ToLongDateString());
                sb.AppendLine(exception.GetType().FullName);
                sb.AppendLine(exception.Message);
                sb.AppendLine(exception.StackTrace);

                File.AppendAllText(startFullFileName, sb.ToString(), Encoding.UTF8);
                throw;
            }
        }

        private static IWebHostBuilder CreateWebHostBuilder(string[] args, string currentDir)
        {
            return WebHost.CreateDefaultBuilder(args)
                .UseKestrel()
                .UseContentRoot(currentDir)
                .UseUrls("http://*:80;https://*:443")
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config.SetBasePath(currentDir);
                    config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: false);
                    
                    var env = hostingContext.HostingEnvironment;
                    config.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: false);

                    config.AddJsonFile("hosting.json", optional: true);
                    config.AddEnvironmentVariables();
                    config.AddCommandLine(args);
                })
                .ConfigureLogging((hostingContext, logging) =>
                {
                    logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                    logging.AddConsole();
                    logging.AddDebug();
                })
                .UseStartup<Startup>();
        }
    }
}