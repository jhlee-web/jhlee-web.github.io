

let themeToggle = function (){
    // 토글 버튼을 검색해서 themeToggleBtn 변수에 담습니다.
    const themeToggleBtn = document.querySelector('#btn_theme');
    const loadTheme = localStorage.getItem('color-theme');

    if(loadTheme === 'dark'){
        document.documentElement.setAttribute('color-theme', 'dark');
        themeToggleBtn.textContent = 'light_mode';
    }
    else{
        document.documentElement.setAttribute('color-theme', 'light');
        themeToggleBtn.textContent = 'dark_mode';
    }

    // 토글 함수
    const toggleTheme = (btn) => {
        const currentTheme = document.documentElement.getAttribute('color-theme');

        // 현재 테마가 라이트 테마이거나 설정된 테마가 없을 경우
        if(currentTheme === 'light') {
            document.documentElement.setAttribute('color-theme', 'dark');
            localStorage.setItem('color-theme','dark');
            btn.textContent = 'light_mode';
        }
        // 그 외(다크모드)일 경우
        else if(currentTheme === 'dark'){
            // console.log('click')
            document.documentElement.setAttribute('color-theme', 'light');
            localStorage.setItem('color-theme','light');
            btn.textContent = 'dark_mode';
        }
    };

    // 토글 버튼에 클릭 이벤트가 발생할 경우 위에서 선언한 toggleTheme 이벤트가 호출되도록 등록해줍니다.
    themeToggleBtn.addEventListener('click', () => {
        toggleTheme(themeToggleBtn);
    });
}