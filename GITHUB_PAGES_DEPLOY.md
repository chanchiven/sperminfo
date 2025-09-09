# GitHub Pages 部署指南

## 📋 部署前准备

### 1. 检查文件完整性
确保以下文件存在：
- ✅ `index.html` - 主页面
- ✅ `styles.css` - 样式文件  
- ✅ `script.js` - JavaScript文件
- ✅ `images/` - 图片资源文件夹
- ✅ `.github/workflows/deploy.yml` - 自动部署配置
- ✅ `README.md` - 项目说明

### 2. 文件路径检查
所有路径都使用相对路径，适合GitHub Pages部署：
- 图片路径: `images/文件名.jpg`
- CSS路径: `styles.css`
- JS路径: `script.js`

## 🚀 部署步骤

### 方法一：使用GitHub网页界面

1. **创建新仓库**
   - 访问 [GitHub](https://github.com)
   - 点击 "New repository"
   - 仓库名建议: `sperminfo-website` 或 `sperminfo`
   - 选择 "Public" (GitHub Pages免费版需要公开仓库)
   - 不要勾选 "Add a README file"

2. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 拖拽所有文件到上传区域
   - 提交信息: "Initial commit - Sperminfo website"
   - 点击 "Commit changes"

3. **启用GitHub Pages**
   - 进入仓库 "Settings" 页面
   - 左侧菜单找到 "Pages"
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 或 "master"
   - 点击 "Save"

4. **等待部署**
   - 部署通常需要1-2分钟
   - 部署完成后会显示绿色勾号
   - 访问地址: `https://你的用户名.github.io/仓库名`

### 方法二：使用Git命令行

1. **初始化Git仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sperminfo website"
   ```

2. **连接远程仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   git branch -M main
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 按照方法一的步骤3-4操作

## 🔧 自动部署配置

项目已包含GitHub Actions自动部署配置：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main, master ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/configure-pages@v3
    - uses: actions/upload-pages-artifact@v2
      with:
        path: '.'
    - uses: actions/deploy-pages@v2
```

## 📱 访问网站

部署成功后，您的网站将在以下地址可用：
- **主地址**: `https://你的用户名.github.io/仓库名`
- **示例**: `https://john.github.io/sperminfo-website`

## 🔄 更新网站

### 方法一：网页界面更新
1. 在GitHub仓库中编辑文件
2. 提交更改
3. 自动触发重新部署

### 方法二：本地更新
1. 修改本地文件
2. 提交并推送到GitHub
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

## 🐛 常见问题

### 1. 网站无法访问
- 检查仓库是否为公开仓库
- 确认GitHub Pages已启用
- 等待几分钟让部署完成

### 2. 图片不显示
- 检查图片文件名是否包含特殊字符
- 确认图片路径正确
- 检查文件大小（建议小于1MB）

### 3. 样式不生效
- 检查CSS文件路径
- 清除浏览器缓存
- 检查CSS语法错误

### 4. 部署失败
- 检查文件编码（建议UTF-8）
- 确认所有文件都已上传
- 查看GitHub Actions日志

## 📞 技术支持

如果遇到部署问题，可以：
1. 查看GitHub Pages文档
2. 检查仓库的Actions页面
3. 联系技术支持

---

**注意**: 首次部署可能需要几分钟时间，请耐心等待。
