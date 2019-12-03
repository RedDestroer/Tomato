FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Vandor.Api/Vandor.Api.csproj", "Vandor.Api/"]
RUN dotnet restore "Vandor.Api/Vandor.Api.csproj"
COPY . .
WORKDIR "/src/Vandor.Api"
RUN dotnet build "Vandor.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Vandor.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Vandor.Api.dll"]