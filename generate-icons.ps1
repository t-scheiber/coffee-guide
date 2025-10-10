# PowerShell script to generate coffee-themed PWA icons based on the provided SVG design
Add-Type -AssemblyName System.Drawing

function Create-CoffeeIcon {
    param(
        [int]$Size,
        [string]$FileName
    )

    $bmp = New-Object System.Drawing.Bitmap $Size, $Size
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    # Background - light beige like in the SVG (#FEE6CC)
    $backgroundColor = [System.Drawing.Color]::FromArgb(255, 254, 230, 204)
    $graphics.Clear($backgroundColor)

    # Main coffee cup body - cream/white color
    $cupWidth = [int]($Size * 0.7)
    $cupHeight = [int]($Size * 0.6)
    $cupX = [int](($Size - $cupWidth) / 2)
    $cupY = [int](($Size - $cupHeight) / 2)

    # Coffee cup outline - darker brown
    $cupPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 228, 120, 14), 2)
    $graphics.DrawEllipse($cupPen, $cupX, $cupY, $cupWidth, $cupHeight)

    # Coffee surface (darker brown) - inspired by the SVG design
    $coffeeHeight = [int]($cupHeight * 0.7)
    $coffeeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 165, 80, 0)) # Darker brown from SVG
    $graphics.FillEllipse($coffeeBrush, $cupX + 2, $cupY + 2, $cupWidth - 4, $coffeeHeight)

    # Handle - positioned like in the SVG
    $handleRadius = [int]($Size * 0.15)
    $handleX = [int]($Size * 0.75)
    $handleY = [int]($Size * 0.45)
    $graphics.DrawEllipse($cupPen, $handleX, $handleY, $handleRadius * 2, $handleRadius * 2)

    # Handle inner fill - lighter color from SVG
    $handleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 252, 206, 153)) # #FCCE99 from SVG
    $graphics.FillEllipse($handleBrush, $handleX + 2, $handleY + 2, ($handleRadius - 1) * 2, ($handleRadius - 1) * 2)

    $bmp.Save($FileName, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bmp.Dispose()
    Write-Host "Created $FileName"
}

# Generate all required icon sizes based on the coffee cup SVG design
Create-CoffeeIcon 16 "public/icons/favicon-16x16.png"
Create-CoffeeIcon 32 "public/icons/favicon-32x32.png"
Create-CoffeeIcon 96 "public/icons/favicon-96x96.png"
Create-CoffeeIcon 36 "public/icons/android-icon-36x36.png"
Create-CoffeeIcon 48 "public/icons/android-icon-48x48.png"
Create-CoffeeIcon 72 "public/icons/android-icon-72x72.png"
Create-CoffeeIcon 96 "public/icons/android-icon-96x96.png"
Create-CoffeeIcon 144 "public/icons/android-icon-144x144.png"
Create-CoffeeIcon 192 "public/icons/android-icon-192x192.png"
Create-CoffeeIcon 57 "public/icons/apple-icon-57x57.png"
Create-CoffeeIcon 60 "public/icons/apple-icon-60x60.png"
Create-CoffeeIcon 72 "public/icons/apple-icon-72x72.png"
Create-CoffeeIcon 76 "public/icons/apple-icon-76x76.png"
Create-CoffeeIcon 114 "public/icons/apple-icon-114x114.png"
Create-CoffeeIcon 120 "public/icons/apple-icon-120x120.png"
Create-CoffeeIcon 144 "public/icons/apple-icon-144x144.png"
Create-CoffeeIcon 152 "public/icons/apple-icon-152x152.png"
Create-CoffeeIcon 180 "public/icons/apple-icon-180x180.png"
Create-CoffeeIcon 192 "public/icons/apple-icon.png"

Write-Host "Coffee-themed icons generated successfully based on your SVG design!"
