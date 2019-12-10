#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["Vendor.Api/Vendor.Api.csproj", "Vendor.Api/"]
RUN dotnet restore "Vendor.Api/Vendor.Api.csproj"
COPY . .
WORKDIR "/src/Vendor.Api"
RUN dotnet build "Vendor.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Vendor.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Vendor.Api.dll"]