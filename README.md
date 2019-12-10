# Tomato

docker build -t tomato/webapp/api:latest .
docker build -t tomato/auth0/api:latest .
docker build -t tomato/vendor/api:latest .

docker create tomato/webapp/api:latest -p 5050:80 -p 5051:443

https://localhost:5051/api/values


docker build -t webapp.api:dev .
docker create webapp.api:dev -p 5050:80 -p 5051:443

docker run -dt -v 
"C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5:/remote_debugger:rw"
 -v "X:\Git\INET\Tomato\WebApp.Api\WebApp.Api:/app"
 -v "X:\Git\INET\Tomato\WebApp.Api:/src"
 -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\Microsoft\UserSecrets:/root/.microsoft/usersecrets:ro"
 -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\ASP.NET\Https:/root/.aspnet/https:ro"
 -v "C:\Users\Sergei_Iakovlev\.nuget\packages\:/root/.nuget/fallbackpackages2"
 -v "C:\Program Files\dotnet\sdk\NuGetFallbackFolder:/root/.nuget/fallbackpackages"
 -e "DOTNET_USE_POLLING_FILE_WATCHER=1"
 -e "ASPNETCORE_ENVIRONMENT=Development"
 -e "NUGET_PACKAGES=/root/.nuget/fallbackpackages2"
 -e "NUGET_FALLBACK_PACKAGES=/root/.nuget/fallbackpackages;/root/.nuget/fallbackpackages2"
 -p 54514:80
 -p 44392:443
 --entrypoint tail tomato/webapp/api:latest -f /dev/null 
 
 
docker run -dt -v "C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5:/remote_debugger:rw"  -v "X:\Git\INET\Tomato\WebApp.Api\WebApp.Api:/app"  -v "X:\Git\INET\Tomato\WebApp.Api:/src"  -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\Microsoft\UserSecrets:/root/.microsoft/usersecrets:ro"  -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\ASP.NET\Https:/root/.aspnet/https:ro"  -v "C:\Users\Sergei_Iakovlev\.nuget\packages\:/root/.nuget/fallbackpackages2"  -v "C:\Program Files\dotnet\sdk\NuGetFallbackFolder:/root/.nuget/fallbackpackages"  -e "DOTNET_USE_POLLING_FILE_WATCHER=1"  -e "ASPNETCORE_ENVIRONMENT=Development"  -e "NUGET_PACKAGES=/root/.nuget/fallbackpackages2"  -e "NUGET_FALLBACK_PACKAGES=/root/.nuget/fallbackpackages;/root/.nuget/fallbackpackages2"  -p 54514:80  -p 44392:443  --entrypoint tail tomato/webapp/api:latest -f /dev/null 

Info: C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5 exists, deleting.
Info: Successfully installed vsdbg at 'C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5'
C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe -NonInteractive -NoProfile -WindowStyle Hidden -ExecutionPolicy RemoteSigned -File "C:\Users\Sergei_Iakovlev\AppData\Local\Temp\GetVsDbg.ps1" -Version vs2017u5 -RuntimeID linux-musl-x64 -InstallPath "C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5\linux-musl-x64"
Info: Using vsdbg version '16.3.10904.1'
Info: Using Runtime ID 'linux-musl-x64'
Info: Successfully installed vsdbg at 'C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5\linux-musl-x64'
docker run -dt -v "C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5:/remote_debugger:rw" -v "C:\Users\Sergei_Iakovlev\source\repos\WebApplication2\WebApplication2:/app" -v "C:\Users\Sergei_Iakovlev\source\repos\WebApplication2:/src" -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\Microsoft\UserSecrets:/root/.microsoft/usersecrets:ro" -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\ASP.NET\Https:/root/.aspnet/https:ro" -v "C:\Users\Sergei_Iakovlev\.nuget\packages\:/root/.nuget/fallbackpackages2" -v "C:\Program Files\dotnet\sdk\NuGetFallbackFolder:/root/.nuget/fallbackpackages" -e "DOTNET_USE_POLLING_FILE_WATCHER=1" -e "ASPNETCORE_ENVIRONMENT=Development" -e "NUGET_PACKAGES=/root/.nuget/fallbackpackages2" -e "NUGET_FALLBACK_PACKAGES=/root/.nuget/fallbackpackages;/root/.nuget/fallbackpackages2" -p 54514:80 -p 44392:443 --entrypoint tail webapplication2:dev -f /dev/null 
2bb0557a0eb984bc781e184abf2b8742dbb90419c879193769c4e6be30ce1b04
Container started successfully.
========== Finished ==========