// 地理位置访问控制配置
window.GeoBlockConfig = {
    // 是否启用地理位置检测
    enabled: true,
    
    // 禁止访问的国家代码列表  
    blockedCountries: ['CN'],
    
    // 404页面显示延迟（毫秒）
    delay: 100,
    
    // 是否显示调试信息
    debug: false,
    
    // 自定义404页面消息
    errorMessages: {
        title: "404 - Page Not Found",
        message: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
        button: "Go Back"
    }
};

