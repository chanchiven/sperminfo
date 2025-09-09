@echo off
echo 正在准备GitHub Pages部署...
echo.

echo 1. 检查文件完整性...
if not exist "index.html" (
    echo 错误: 找不到 index.html 文件
    pause
    exit /b 1
)

if not exist "styles.css" (
    echo 错误: 找不到 styles.css 文件
    pause
    exit /b 1
)

if not exist "images" (
    echo 错误: 找不到 images 文件夹
    pause
    exit /b 1
)

echo ✓ 所有必要文件都存在

echo.
echo 2. 部署说明:
echo    - 在GitHub上创建新仓库
echo    - 将所有文件上传到仓库
echo    - 在仓库设置中启用GitHub Pages
echo    - 选择主分支作为源
echo    - 访问 https://你的用户名.github.io/仓库名

echo.
echo 3. 文件已准备就绪，可以上传到GitHub
echo.
pause
