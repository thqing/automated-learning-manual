# 工业自动化学习手册中心

这是一个工业自动化领域的学习手册资源中心，包含提升机控制系统、TIA-WTC 等技术文档和交互式学习模块。

## 📚 包含内容

### 提升机控制系统
- 提升机控制系统学习手册（完整版，新布局）
- 提升机控制系统补充资源
- PI控制理论 - 交互式学习模块
- 矿井提升机设备术语手册（中英文对照）

### TIA-WTC 技术手册
- TIA-WTC 中英文对照学习手册（完整版）
- TIA-WTC 学习手册

## 🚀 在线访问

访问 GitHub Pages 部署的网站：
```
https://[你的用户名].github.io/learning-manuals/
```

## 🛠️ 本地使用

1. 克隆仓库到本地：
```bash
git clone https://github.com/[你的用户名]/learning-manuals.git
cd learning-manuals
```

2. 用浏览器打开 `index.html` 即可本地浏览

或者使用本地服务器：
```bash
# Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

## 🔍 功能特性

- **响应式设计**：支持手机、平板、电脑等多种设备
- **搜索功能**：快速搜索所有手册内容
- **分类管理**：按主题分类整理手册
- **交互式学习**：部分手册包含交互式演示和模拟
- **离线使用**：所有资源都在本地，无需联网

## 📁 目录结构

```
learning-manuals/
├── index.html              # 首页（手册目录）
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署配置
├── assets/
│   ├── css/
│   │   └── style.css     # 样式文件
│   └── js/
│       └── search.js      # 搜索功能
├── hoist-control/         # 提升机控制相关手册
│   ├── 提升机控制系统_学习手册_新布局.html
│   ├── 提升机控制系统_补充资源.html
│   ├── PI控制理论_交互式学习.html
│   └── 矿井提升机设备术语_完整学习手册.html
├── tia-wtc/              # TIA-WTC 相关手册
│   ├── TIA-WTC_中英文对照学习手册_完整版.html
│   └── TIA-WTC_中英文对照学习手册.html
└── README.md              # 本文件
```

## 🌐 部署到 GitHub Pages

1. 在 GitHub 创建新仓库，命名为 `learning-manuals`
2. 推送代码到仓库：
```bash
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/[你的用户名]/learning-manuals.git
git push -u origin main
```

3. 在仓库设置中启用 GitHub Pages：
   - 进入仓库 → Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存后，GitHub Actions 会自动部署

4. 等待部署完成（通常 1-2 分钟），然后访问：
   ```
   https://[你的用户名].github.io/learning-manuals/
   ```

## 📝 添加新手册

1. 将新的 HTML 手册文件放到对应分类目录（`hoist-control/` 或 `tia-wtc/`）
2. 在 `index.html` 中对应的分类下添加新的卡片代码
3. 提交并推送更新

示例卡片代码：
```html
<div class="manual-card" data-keywords="关键词1 关键词2">
    <div class="card-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>手册标题</h3>
    <p>手册描述</p>
    <div class="card-meta">
        <span><i class="fas fa-file"></i> HTML</span>
        <span><i class="fas fa-clock"></i> 2026-05</span>
    </div>
    <a href="分类目录/手册文件名.html" class="card-link">开始学习 <i class="fas fa-arrow-right"></i></a>
</div>
```

## 🤝 贡献

欢迎提交 Pull Request 来添加新的手册或改进现有内容！

## 📄 许可证

本项目的文档和资源仅供学习使用，请尊重原作者的版权。

## 📧 联系

如有问题或建议，欢迎提出 Issue。

---

**最后更新**：2026-05-13
