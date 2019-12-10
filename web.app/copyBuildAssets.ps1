ROBOCOPY ./Build ./../WebApp.Api/WebApp.Api/wwwroot /MIR /XF index.html
if ($LASTEXITCODE -le 8) {
    Copy-Item ./Build/index.html ./../WebApp.Api/WebApp.Api/Views/Home/index.cshtml -Force
} else {
    exit 10;
}