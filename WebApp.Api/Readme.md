docker rm -f 208c0e759cf8fafc805fdcf7c3e1b50945709a4fe468f015a3dc567124021287

docker build -f "C:\Git\INET\Tomato\WebApp.Api\WebApp.Api\Dockerfile" --force-rm -t webappapi:dev --target base  --label "com.microsoft.created-by=visual-studio" --label "com.microsoft.visual-studio.project-name=WebApp.Api" "C:\Git\INET\Tomato\WebApp.Api"

docker run -dt -v "C:\Users\Sergei_Iakovlev\vsdbg\vs2017u5:/remote_debugger:rw" -v "C:\Git\INET\Tomato\WebApp.Api\WebApp.Api:/app" -v "C:\Git\INET\Tomato\WebApp.Api:/src" -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\Microsoft\UserSecrets:/root/.microsoft/usersecrets:ro" -v "C:\Users\Sergei_Iakovlev\AppData\Roaming\ASP.NET\Https:/root/.aspnet/https:ro" -v "C:\Users\Sergei_Iakovlev\.nuget\packages\:/root/.nuget/fallbackpackages2" -v "C:\Program Files\dotnet\sdk\NuGetFallbackFolder:/root/.nuget/fallbackpackages" -e "DOTNET_USE_POLLING_FILE_WATCHER=1" -e "ASPNETCORE_ENVIRONMENT=Development" -e "ASPNETCORE_URLS=https://+:443;http://+:80" -e "ASPNETCORE_HTTPS_PORT=5051" -e "NUGET_PACKAGES=/root/.nuget/fallbackpackages2" -e "NUGET_FALLBACK_PACKAGES=/root/.nuget/fallbackpackages;/root/.nuget/fallbackpackages2" -p 5050:80 -p 5051:443 -P --name WebApp.Api --entrypoint tail webappapi:dev -f /dev/null 
208c0e759cf8fafc805fdcf7c3e1b50945709a4fe468f015a3dc567124021287

# удаление висящих образов
docker rmi $(docker images -f "dangling=true" -q)

# Просмотр файловой системы образа
docker run --rm -it --entrypoint=/bin/bash webappapi:dev

# Просмотр файловой системы контейнера
docker exec -it name-of-container bash

docker run -dt webappapi:dev -p 5050:80 -p 5051:443 -P --name WebApp.Api --entrypoint tail -f /dev/null

# Запуск контейнера индивидуально
docker run -d=false -p 5050:80 --name webappapi webappapi:dev