# Test creating a simple PNG file
Add-Type -AssemblyName System.Drawing

$bmp = New-Object System.Drawing.Bitmap 100, 100
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.Clear([System.Drawing.Color]::Red)
$bmp.Save('test.png', [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bmp.Dispose()
Write-Host 'Test PNG created'
