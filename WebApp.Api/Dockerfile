FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["WebApp.Api/.", "WebApp.Api/"]
COPY ["WebApp.App/.", "WebApp.App/"]
RUN dotnet restore "WebApp.App/WebApp.App.csproj"
RUN dotnet build "WebApp.App/WebApp.App.csproj" -c Debug -o /app
RUN dotnet restore "WebApp.Api/WebApp.Api.csproj"
RUN dotnet build "WebApp.Api/WebApp.Api.csproj" -c Debug -o /app

FROM build AS publish
RUN dotnet publish "WebApp.Api/WebApp.Api.csproj" -c Debug -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WebApp.Api.dll"]