// 地理位置检测和访问控制
(function() {
    'use strict';
    
    // 检测用户是否在中国大陆
    function isChinaRegion() {
        // 方法1: 检测时区
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const chinaTimezones = [
            'Asia/Shanghai',
            'Asia/Chongqing', 
            'Asia/Harbin',
            'Asia/Kashgar',
            'Asia/Urumqi'
        ];
        
        if (chinaTimezones.includes(timezone)) {
            return true;
        }
        
        // 方法2: 检测语言设置
        const language = navigator.language || navigator.userLanguage;
        if (language.startsWith('zh-CN') || language.startsWith('zh-Hans')) {
            return true;
        }
        
        // 方法3: 检测IP地理位置 (需要第三方服务)
        // 这里使用一个简单的检测方法
        const userAgent = navigator.userAgent;
        if (userAgent.includes('China') || userAgent.includes('CN')) {
            return true;
        }
        
        return false;
    }
    
    // 显示404页面
    function show404Page() {
        document.documentElement.innerHTML = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page Not Found</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                
                .error-container {
                    text-align: center;
                    max-width: 600px;
                    padding: 2rem;
                }
                
                .error-code {
                    font-size: 8rem;
                    font-weight: 900;
                    margin-bottom: 1rem;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }
                
                .error-message {
                    font-size: 1.5rem;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }
                
                .error-description {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                    opacity: 0.8;
                    line-height: 1.6;
                }
                
                .back-button {
                    display: inline-block;
                    padding: 12px 30px;
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    text-decoration: none;
                    border-radius: 50px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }
                
                .back-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .error-code {
                        font-size: 6rem;
                    }
                    
                    .error-message {
                        font-size: 1.2rem;
                    }
                    
                    .error-description {
                        font-size: 1rem;
                    }
                }
            </style>
        </head>
        <body>
            <div class="error-container">
                <div class="error-code">404</div>
                <div class="error-message">Page Not Found</div>
                <div class="error-description">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </div>
                <a href="javascript:history.back()" class="back-button">Go Back</a>
            </div>
        </body>
        </html>
        `;
    }
    
    // 检查并执行访问控制
    if (isChinaRegion()) {
        // 延迟执行，避免影响页面加载
        setTimeout(show404Page, 100);
    }
})();
