FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Auth0.Api/Auth0.Api.csproj", "Auth0.Api/"]
RUN dotnet restore "Auth0.Api/Auth0.Api.csproj"
COPY . .
WORKDIR "/src/Auth0.Api"
RUN dotnet build "Auth0.Api.csproj" -c Debug -o /app

FROM build AS publish
RUN dotnet publish "Auth0.Api.csproj" -c Debug -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Auth0.Api.dll"]