# HANDOFF - Portfolio Deploy / Polish - 2026-06-16

## 当前网站目录

实际网站目录：

```text
C:\Users\Administrator\Documents\Codex\2026-06-08\files-mentioned-by-the-user-c0e048fb94f4d67ce1cf0aa141dcf1ec\outputs\portfolio-prototype
```

线上仓库：

```text
https://github.com/3025857678-gif/portfolio-prototype.git
```

Cloudflare Pages 项目名：

```text
portfolio-prototype
```

## 已完成的关键修改

1. 首页项目卡片恢复为旧矩形图卡方向：图片铺满，分类和标题叠在图片底部，不使用蓝色底栏，不生成 fit-cards。
2. 项目卡片点击进入详情页的问题已修复。
3. 首页营销区画廊改成更清楚的 3 张可见卡片，大按钮和进度条。
4. 联系弹窗卡片改为描边玻璃样式，不再大面积蓝色填充。
5. 联系弹窗和底部联系栏的电话/邮箱 icon 已统一为品牌蓝圆底、白色 icon。
6. 联系弹窗右侧微信二维码卡片已补上 hover 动效。
7. 网页里的 Impact 英文小标签，如 Contact，已改为品牌蓝。
8. 左上角 HeLong 去掉左侧 icon，点击 HeLong 会从左侧滑出个人信息面板。
9. 详情页标题增加出现动效。
10. 工作经历页返回按钮文字已反白。
11. 联系弹窗文案已改为：

```text
如果需要品牌视觉、AI 创意、营销设计或长图设计方面的人才，可以通过下面方式联系我。
```

12. 修复了首页 `#home` 下滚后会弹回 hero 的 bug。
    - 根因：脚本里有多次延迟执行的 hash 自动定位，URL 为 `#home` 时会把页面拉回顶部。
    - 当前处理：`#home` 不再执行延迟强制定位；`#marketing / #longform / #creative` 仍保留直达定位；用户滚动后不再被脚本抢滚动。

当前缓存版本号：

```text
20260616-scroll-anchor-fix-1
```

## GitHub / Cloudflare 进度

1. GitHub Desktop 已添加本地仓库。
2. 曾经 Git push 失败，原因是 Git 全局代理指向失效本地代理：

```text
http://127.0.0.1:17890
```

已清除：

```powershell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

并测试 `github.com:443` 可连通。

3. Cloudflare Pages 第一次失败原因：

```text
npm run build
Could not read package.json
```

原因：这是纯静态 HTML/CSS/JS 网站，不是 npm 项目。

Cloudflare Pages 配置应为：

```text
Framework preset: None / 无
Build command: 空
Build output directory: 空；如果强制要求则填 .
Root directory: 空或默认根目录
```

4. Cloudflare Pages 第二次失败原因：

```text
Pages only supports files up to 25 MiB in size
assets/hero-video-jimeng.mp4 is 63.9 MiB in size
```

进一步本地扫描发现，除了这个未引用大视频，还有多张图片超过 25 MiB，Cloudflare 也会继续卡：

```text
assets/golden-spatula/golden-spatula-cover.png      80.05 MiB
assets/longform-real/winter-camp-v2.png             27.76 MiB
assets/mayday-card/5.png                            50.12 MiB
assets/mayday-card/6.png                            53.36 MiB
assets/mayday-card/7.png                            32.13 MiB
assets/super-symbol/super-symbol-frame22.png        70.27 MiB
assets/venow/source.png                             46.20 MiB
```

`assets/hero-video-jimeng.mp4` 已确认没有被页面引用，首页实际使用的是：

```text
assets/hero-video-jimeng-pingpong.mp4
```

当前已经执行过：

```powershell
git rm assets/hero-video-jimeng.mp4
```

但还没有完成后续图片压缩、提交、推送。

## 下一步建议

下一步不要直接重新部署，因为 Cloudflare 仍会被其他大图卡住。

应该做：

1. 生成上述超限 PNG 的 WebP 压缩版，目标每个文件小于 25 MiB，优先控制在 8-15 MiB。
2. 替换 HTML/CSS 引用到新的 `.webp` 文件。
3. `git rm` 删除原超限 PNG 和已删除的大视频。
4. 检查仓库实际输出文件中没有任何大于 25 MiB 的文件。
5. 提交并推送到 GitHub。
6. 回 Cloudflare Pages 点重新部署。

注意：

- 不要破坏视觉质量，详情页长图可以用 WebP 高质量压缩，不要裁切内容。
- 不要再使用 PowerShell 默认 `Set-Content` 写 HTML，之前会导致中文乱码。需要用 UTF-8 安全读写。
- 如果用脚本改 HTML/CSS，使用 UTF-8 无 BOM 写回。

## 新对话可直接粘贴的提示词

请继续处理我的个人作品集网站部署问题。先读取这个 handoff 文件：

```text
C:\Users\Administrator\Documents\Codex\2026-06-08\files-mentioned-by-the-user-c0e048fb94f4d67ce1cf0aa141dcf1ec\outputs\portfolio-prototype\HANDOFF-portfolio-deploy-20260616.md
```

实际网站目录是：

```text
C:\Users\Administrator\Documents\Codex\2026-06-08\files-mentioned-by-the-user-c0e048fb94f4d67ce1cf0aa141dcf1ec\outputs\portfolio-prototype
```

现在 Cloudflare Pages 部署失败，原因是单个文件不能超过 25 MiB。请先不要乱改页面设计，重点完成部署修复：

1. 检查所有实际会被部署的文件，找出大于 25 MiB 的文件。
2. 已知超限文件包括：
   - `assets/golden-spatula/golden-spatula-cover.png`
   - `assets/longform-real/winter-camp-v2.png`
   - `assets/mayday-card/5.png`
   - `assets/mayday-card/6.png`
   - `assets/mayday-card/7.png`
   - `assets/super-symbol/super-symbol-frame22.png`
   - `assets/venow/source.png`
   - `assets/hero-video-jimeng.mp4`，这个已确认未引用，已执行过 `git rm`
3. 把超限图片压缩成 WebP，保证每个小于 25 MiB，尽量保持视觉质量。
4. 更新 HTML/CSS 里的引用到新的 WebP 文件。
5. 删除不再使用的超限原文件。
6. 检查没有任何非 `.git` 文件超过 25 MiB。
7. `node --check script.js`。
8. 用本地浏览器快速确认首页、`super-symbol.html`、`winter-camp.html`、`golden-spatula.html` 仍能显示图片。
9. 提交并推送到 GitHub，方便 Cloudflare Pages 重新部署。

请注意：用户是设计师，不懂代码，回复用中文，少讲技术细节，但要把结果说清楚。
