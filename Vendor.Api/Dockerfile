FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Vendor.Api/Vendor.Api.csproj", "Vendor.Api/"]
RUN dotnet restore "Vendor.Api/Vendor.Api.csproj"
COPY . .
WORKDIR "/src/Vendor.Api"
RUN dotnet build "Vendor.Api.csproj" -c Debug -o /app

FROM build AS publish
RUN dotnet publish "Vendor.Api.csproj" -c Debug -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Vendor.Api.dll"]