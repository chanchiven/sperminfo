// 高级地理位置检测和访问控制
(function() {
    'use strict';
    
    // 配置选项
    const config = {
        // 是否启用地理位置检测
        enabled: true,
        // 允许访问的国家代码列表
        allowedCountries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'JP', 'KR'],
        // 禁止访问的国家代码列表
        blockedCountries: ['CN'],
        // 404页面显示延迟（毫秒）
        delay: 100,
        // 是否显示调试信息
        debug: false
    };
    
    // 调试日志
    function debugLog(message) {
        if (config.debug) {
            console.log('[GeoBlock]', message);
        }
    }
    
    // 检测用户是否在禁止访问的地区
    function isBlockedRegion() {
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
            debugLog('Blocked by timezone: ' + timezone);
            return true;
        }
        
        // 方法2: 检测语言设置
        const language = navigator.language || navigator.userLanguage;
        if (language.startsWith('zh-CN') || language.startsWith('zh-Hans')) {
            debugLog('Blocked by language: ' + language);
            return true;
        }
        
        // 方法3: 检测用户代理
        const userAgent = navigator.userAgent;
        if (userAgent.includes('China') || userAgent.includes('CN')) {
            debugLog('Blocked by user agent');
            return true;
        }
        
        // 方法4: 使用IP地理位置API (可选)
        // 注意：这需要第三方服务，可能会影响页面加载速度
        if (typeof fetch !== 'undefined') {
            checkIPLocation();
        }
        
        return false;
    }
    
    // 使用IP地理位置检测
    function checkIPLocation() {
        // 使用免费的IP地理位置服务
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                debugLog('IP Location data:', data);
                if (config.blockedCountries.includes(data.country_code)) {
                    debugLog('Blocked by IP location: ' + data.country_code);
                    show404Page();
                }
            })
            .catch(error => {
                debugLog('IP location check failed:', error);
                // 如果IP检测失败，使用其他方法
                if (isBlockedRegion()) {
                    show404Page();
                }
            });
    }
    
    // 显示404页面
    function show404Page() {
        debugLog('Showing 404 page');
        
        // 创建404页面内容
        const errorPage = `
        <!DOCTYPE html>
        <html lang="en">
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
                    overflow: hidden;
                }
                
                .error-container {
                    text-align: center;
                    max-width: 600px;
                    padding: 2rem;
                    animation: fadeIn 0.5s ease-in;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .error-code {
                    font-size: 8rem;
                    font-weight: 900;
                    margin-bottom: 1rem;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
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
                    cursor: pointer;
                }
                
                .back-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                }
                
                .footer-text {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.9rem;
                    opacity: 0.6;
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
            <div class="footer-text">
                Error 404 - Page Not Found
            </div>
        </body>
        </html>
        `;
        
        // 替换整个页面内容
        document.documentElement.innerHTML = errorPage;
    }
    
    // 主函数
    function init() {
        if (!config.enabled) {
            debugLog('Geo-blocking is disabled');
            return;
        }
        
        debugLog('Initializing geo-blocking...');
        
        // 延迟执行，避免影响页面加载
        setTimeout(() => {
            if (isBlockedRegion()) {
                show404Page();
            } else {
                debugLog('Access allowed');
            }
        }, config.delay);
    }
    
    // 启动检测
    init();
})();
