# Sperminfo 医疗试剂公司网站

## ⚠️ 关于控制台 404 与本地预览

### 若出现 **GET http://localhost:3001/en/ 404**

说明当前在 3001 端口起的**不是**从 `out` 目录提供的服务（例如在项目根目录执行了 `serve` 或 `serve .`，根目录下没有 `en` 文件夹，所以 `/en/` 会 404）。

**正确做法：**

1. 关掉占用 3001 端口的进程。
2. 在项目根目录执行：
   ```bash
   npm run preview
   ```
   （会先 `next build`，再用 `npx serve out -p 3001`，**必须**从 `out` 目录提供）。
3. 在浏览器中打开 **http://localhost:3001/**（只输入根地址，不要直接输入 `/en/`），页面会自动跳转到 `/en/`。

**错误示例：** 在项目根执行 `npx serve -p 3001` 或 `npx serve . -p 3001`，再访问 `/en/` → 会 404。

---

若出现 **layout.css / webpack.js / main-app.js 等 404**，通常是因为：

1. **不要用「直接打开文件」方式**  
   不要双击 `out/en/index.html` 用 `file://` 打开。静态资源路径是绝对路径 `/_next/...`，在 file 协议下会请求失败。

2. **正确预览静态导出**  
   在项目根目录执行 `npm run preview`，然后浏览器访问 **http://localhost:3001/**（先访问根路径，页面会自动跳转到 /en/）。  
   不要用 `serve` 或 `serve .` 在项目根目录起服务，必须用 `npx serve out` 或上述 `npm run preview`（从 `out` 起服务，端口 3001）。

3. **GitHub Pages 放在子路径时**  
   若站点是 `https://用户名.github.io/sperminfo/`（带仓库名），需在 `next.config.js` 里取消注释 `basePath` 和 `assetPrefix` 为 `'/sperminfo'`，然后重新 `npm run build` 再部署。

4. **开发模式报错 "Cannot find module './vendor-chunks/next.js' 或 @formatjs.js"**  
   多为 `.next` 缓存损坏。先停止 dev 服务，再执行：
   ```bash
   Remove-Item -Recurse -Force .next
   npm run dev
   ```
   或直接运行：`npm run dev:fresh`（会先清缓存再启动 dev）。

5. **其他控制台提示**  
   - **"[Intervention] Images loaded lazily..."**：Edge 的懒加载说明，可忽略。  
   - **"Unchecked runtime.lastError: The message port closed..."**：多为浏览器扩展（如密码管理器、翻译）引起，与本站代码无关。

---

## 项目简介

Sperminfo是一家专门针对男性生殖领域的医疗试剂公司网站，展示公司的专业产品和服务。网站采用现代化的设计风格，体现医疗实验室的专业性和科技感。

## 产品线

- **Sperm DNA Fragmentation (SCD assay)** - 精子DNA碎片检测试剂
- **Sperm Morphology Quick Staining** - 精子形态快速染色试剂
- **Sperm MAR test** - 精子混合抗球蛋白反应检测试剂
- **Sperm Viability Staining** - 精子活力染色试剂
- **Sperm Leukocyte Staining** - 精子白细胞染色试剂
- **Semen Liquefaction Solution** - 精液液化溶液

## 技术特性

### 设计特点
- 🎨 专业的医疗实验室风格设计
- 📱 完全响应式设计，支持所有设备
- ⚡ 现代化的用户界面和交互体验
- 🔬 体现医疗科技的专业性

### 功能特性
- 📋 产品展示和详细介绍
- 📞 联系表单和客户服务
- 🎯 平滑滚动和导航
- ✨ 动画效果和视觉反馈
- 📊 统计数据动态展示
- 🔔 消息通知系统

### 技术栈
- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体优化

## 文件结构

```
Sperminfo网站/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 项目说明
```

## 🌐 在线访问

网站已部署到GitHub Pages，您可以通过以下链接访问：
**https://您的用户名.github.io/仓库名**

## 使用方法

### 本地开发
1. **直接打开**: 双击 `index.html` 文件在浏览器中打开
2. **本地服务器**: 使用Python启动本地服务器
   ```bash
   python -m http.server 8000
   # 访问 http://localhost:8000
   ```

### GitHub Pages部署
1. 在GitHub上创建新仓库
2. 将所有文件上传到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择主分支作为源
5. 等待部署完成

## 浏览器支持

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 主要功能

### 导航系统
- 固定顶部导航栏
- 移动端汉堡菜单
- 平滑滚动到锚点
- 滚动时导航栏效果

### 首页横幅
- 动态实验室设备图标
- 响应式布局
- 行动号召按钮

### 产品展示
- 网格布局产品卡片
- 悬停动画效果
- 产品特性列表
- 专业图标设计

### 技术优势
- 3D悬停效果
- 图标动画
- 专业内容展示

### 联系表单
- 表单验证
- 消息通知
- 响应式设计
- 用户体验优化

### 动画效果
- 滚动触发动画
- 数字计数动画
- 悬停效果
- 加载动画

## 自定义配置

### 颜色主题
在 `styles.css` 文件的 `:root` 选择器中修改CSS变量：

```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --secondary-color: #059669;  /* 辅助色 */
    --accent-color: #dc2626;     /* 强调色 */
    /* ... 其他颜色变量 */
}
```

### 联系信息
在 `index.html` 文件中修改联系信息：

```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h4>电话咨询</h4>
        <p>400-888-8888</p>  <!-- 修改电话号码 -->
    </div>
</div>
```

### 产品信息
在 `index.html` 文件的产品卡片中修改产品信息。

## 性能优化

- 🚀 优化的CSS和JavaScript
- 📦 压缩的资源文件
- 🖼️ 延迟加载图片
- ⚡ 防抖滚动事件
- 🎯 高效的DOM操作

## 部署建议

### 静态托管
- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS

### 服务器部署
- Apache/Nginx
- Node.js服务器
- PHP服务器

## 维护和更新

### 定期更新
- 检查浏览器兼容性
- 更新依赖库版本
- 优化性能
- 添加新功能

### 内容管理
- 更新产品信息
- 修改联系信息
- 添加新闻动态
- 优化SEO

## 技术支持

如需技术支持或定制开发，请联系开发团队。

## 许可证

本项目仅供Sperminfo公司使用。

---

**Sperminfo** - 专业的男性生殖医疗试剂解决方案提供商
