#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update && apt-get install -y unzip && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND teletype
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["WebApp.Api/WebApp.Api.csproj", "WebApp.Api/"]
COPY ["WebApp.App/WebApp.App.csproj", "WebApp.App/"]
COPY ["WebApp.Infrastructure/WebApp.Infrastructure.csproj", "WebApp.Infrastructure/"]
RUN dotnet restore "WebApp.Api/WebApp.Api.csproj"
COPY . .
WORKDIR "/src/WebApp.Api"
RUN dotnet build -c Debug -o /app/build

FROM build AS publish
RUN dotnet publish -c Debug -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WebApp.Api.dll"]
