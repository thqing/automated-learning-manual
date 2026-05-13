// 搜索功能
let searchIndex = [];

// 初始化搜索索引
function initSearchIndex() {
    const cards = document.querySelectorAll('.manual-card');
    searchIndex = [];

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        const keywords = card.getAttribute('data-keywords') || '';
        const link = card.querySelector('.card-link').getAttribute('href');

        searchIndex.push({
            title: title,
            description: description,
            keywords: keywords,
            link: link,
            element: card
        });
    });
}

// 执行搜索
function searchManuals() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.trim().toLowerCase();

    // 如果搜索框为空，隐藏结果
    if (query.length === 0) {
        searchResults.classList.remove('active');
        // 显示所有卡片
        document.querySelectorAll('.manual-card').forEach(card => {
            card.style.display = 'block';
        });
        document.querySelectorAll('.category').forEach(cat => {
            cat.style.display = 'block';
        });
        return;
    }

    // 执行搜索
    const results = searchIndex.filter(item => {
        const searchText = (item.title + ' ' + item.description + ' ' + item.keywords).toLowerCase();
        return searchText.includes(query);
    });

    // 显示结果
    displaySearchResults(results, query);
}

// 显示搜索结果
function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item"><p>未找到相关手册</p></div>';
        searchResults.classList.add('active');
        return;
    }

    // 隐藏所有卡片
    document.querySelectorAll('.manual-card').forEach(card => {
        card.style.display = 'none';
    });

    // 隐藏所有分类（除了使用说明）
    document.querySelectorAll('.category').forEach(cat => {
        const h2 = cat.querySelector('h2');
        if (h2 && !h2.textContent.includes('使用说明')) {
            cat.style.display = 'none';
        }
    });

    // 显示匹配的卡片
    results.forEach(result => {
        result.element.style.display = 'block';
        // 确保父分类可见
        let parentCategory = result.element.closest('.category');
        if (parentCategory) {
            parentCategory.style.display = 'block';
        }
    });

    // 构建结果列表
    let resultsHTML = '';
    results.forEach(result => {
        const highlightedTitle = highlightText(result.title, query);
        const highlightedDesc = highlightText(result.description, query);
        
        resultsHTML += `
            <div class="search-result-item" onclick="location.href='${result.link}'">
                <h4>${highlightedTitle}</h4>
                <p>${highlightedDesc}</p>
            </div>
        `;
    });

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add('active');
}

// 高亮匹配文本
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// 转义正则表达式特殊字符
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 点击页面其他地方时隐藏搜索结果
document.addEventListener('click', function(event) {
    const searchBox = document.querySelector('.search-box');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchBox.contains(event.target)) {
        searchResults.classList.remove('active');
    }
});

// 页面加载时初始化搜索索引
window.addEventListener('load', function() {
    initSearchIndex();
});

// 键盘快捷键
document.addEventListener('keydown', function(event) {
    // Ctrl + K 或 Cmd + K 聚焦搜索框
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }

    // ESC 清空搜索
    if (event.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        searchInput.value = '';
        searchResults.classList.remove('active');
        
        // 显示所有卡片
        document.querySelectorAll('.manual-card').forEach(card => {
            card.style.display = 'block';
        });
        document.querySelectorAll('.category').forEach(cat => {
            cat.style.display = 'block';
        });
    }
});

// 实时搜索（输入时立即搜索）
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchManuals, 300); // 300ms 防抖
});
