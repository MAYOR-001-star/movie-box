Add-Type -AssemblyName System.Drawing

$logoPath = "c:\Users\User\Desktop\moviebox\assets\images\project-image\company-logo.png"
$logo = [System.Drawing.Image]::FromFile($logoPath)
$logoWidth = $logo.Width
$logoHeight = $logo.Height
$aspect = $logoWidth / $logoHeight

function Create-Image($canvasWidth, $canvasHeight, $targetLogoWidth, $bgColor, $outputPath) {
    $bmp = New-Object System.Drawing.Bitmap $canvasWidth, $canvasHeight
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    if ($bgColor -ne $null) {
        $brush = New-Object System.Drawing.SolidBrush $bgColor
        $g.FillRectangle($brush, 0, 0, $canvasWidth, $canvasHeight)
        $brush.Dispose()
    } else {
        $g.Clear([System.Drawing.Color]::Transparent)
    }

    $targetLogoHeight = [int]($targetLogoWidth / $aspect)
    $x = [int](($canvasWidth - $targetLogoWidth) / 2)
    $y = [int](($canvasHeight - $targetLogoHeight) / 2)

    $g.DrawImage($logo, $x, $y, $targetLogoWidth, $targetLogoHeight)
    $g.Dispose()

    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Created $outputPath"
}

$darkColor = [System.Drawing.ColorTranslator]::FromHtml("#030014")

# 1. Main App Icon (1024x1024 with dark background and logo centered)
Create-Image 1024 1024 560 $darkColor "c:\Users\User\Desktop\moviebox\assets\images\icon.png"

# 2. Android Adaptive Icon Foreground (1024x1024 transparent, logo within 66% safe zone: ~480px)
Create-Image 1024 1024 460 $null "c:\Users\User\Desktop\moviebox\assets\images\android-icon-foreground.png"

# 3. Android Adaptive Icon Background (1024x1024 solid dark #030014)
$bgBmp = New-Object System.Drawing.Bitmap 1024, 1024
$bgG = [System.Drawing.Graphics]::FromImage($bgBmp)
$brush = New-Object System.Drawing.SolidBrush $darkColor
$bgG.FillRectangle($brush, 0, 0, 1024, 1024)
$bgG.Dispose()
$brush.Dispose()
$bgBmp.Save("c:\Users\User\Desktop\moviebox\assets\images\android-icon-background.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bgBmp.Dispose()
Write-Output "Created android-icon-background.png"

# 4. Splash Screen Icon (512x512 transparent with logo centered)
Create-Image 512 512 360 $null "c:\Users\User\Desktop\moviebox\assets\images\splash-icon.png"

# 5. Favicon (192x192 with logo)
Create-Image 192 192 140 $null "c:\Users\User\Desktop\moviebox\assets\images\favicon.png"

$logo.Dispose()
Write-Output "All icons generated successfully!"
