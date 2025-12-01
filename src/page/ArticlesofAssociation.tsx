import React from 'react';

export function ArticlesofAssociation() {
    // 定義樣式物件 (Styles)
    const styles = {
        container: {
            backgroundColor: '#121212', // 深色背景
            color: '#E0E0E0',           // 淺灰文字，比純白不刺眼
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            lineHeight: '1.6',
            padding: '2rem',
            minHeight: '100vh',
        },
        paper: {
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: '#1E1E1E', // 卡片背景略淺於底色
            padding: '3rem',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            borderTop: '4px solid #D32F2F', // 頂部紅色裝飾條
        },
        mainTitle: {
            textAlign: 'center',
            color: '#FF5252', // 鮮亮的資安紅
            borderBottom: '1px solid #333',
            paddingBottom: '1.5rem',
            marginBottom: '2rem',
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        chapterTitle: {
            color: '#FF5252',
            fontSize: '1.5rem',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            borderLeft: '4px solid #D32F2F',
            paddingLeft: '1rem',
            backgroundColor: 'rgba(211, 47, 47, 0.1)', // 標題背景淡紅
            padding: '0.5rem 1rem',
        },
        articleTitle: {
            color: '#FFFFFF',
            fontSize: '1.2rem',
            marginTop: '1.5rem',
            marginBottom: '0.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
        },
        paragraph: {
            marginBottom: '1rem',
            color: '#CCCCCC',
            textAlign: 'justify',
        },
        list: {
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
        },
        listItem: {
            marginBottom: '0.8rem',
        },
        highlightTerm: {
            color: '#FF8A80', // 關鍵字亮色
            fontWeight: 'bold',
            display: 'block', // 讓標題獨佔一行
            marginBottom: '0.25rem',
        },
        footer: {
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #333',
            fontSize: '0.9rem',
            color: '#888',
            textAlign: 'right',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.paper}>
                <h1 style={styles.mainTitle}>國立臺北科技大學 is1ab club 組織章程</h1>

                {/* 第一章 */}
                <h2 style={styles.chapterTitle}>第一章 總則</h2>
                
                <h3 style={styles.articleTitle}>第一條 本社群定名</h3>
                <p style={styles.paragraph}>
                    本社群定名為 <strong>is1ab club</strong>，社團定名 <strong>is1ab club</strong>（以下簡稱本社）。
                </p>

                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <span style={styles.highlightTerm}>is1ab club 是什麼</span>
                        <p style={styles.paragraph}>為一般性學生學術服務性社團組織，希望把實驗室的資源帶給更多對資安有興趣的人，出發致力於幫助學校辦理資安週等相關活動，提升學生的資安意識。並協助本校同學建立資安能力，建立學習與交流的友善社群環境。</p>
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlightTerm}>is1ab club 計畫理念</span>
                        <p style={styles.paragraph}>本社主要以在校園內推廣資訊安全概念，授之以社員，並積極參加校內外資安議程志工、資安社群等活動比賽，目的為提升社員的資安能力。讓社員將在社團所學回饋於學校、社會。除了讓校園內能夠擁有良好的學習空間，也推廣並實踐資安教育，將教育資源落實到更多資源不足的群體。</p>
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.highlightTerm}>is1ab club 計畫簡介</span>
                        <p style={styles.paragraph}>每年協助 北科大/北聯大 舉辦資安 CTF 大型賽事，並承辦校內資安相關活動。暑假期間提供國內學校單位資安宣導與技術協助服務。每月定期舉辦讀書會，分享研究與技術成果。不定期與國內知名資安企業交流，提升實務經驗與人脈。</p>
                    </li>
                </ul>

                {/* 第二章 */}
                <h2 style={styles.chapterTitle}>第二章 社員資格</h2>
                <h3 style={styles.articleTitle}>第一條 社員資格</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>學校任何人皆可參加。</li>
                    <li style={styles.listItem}>校外任何有興趣的人不分年級皆可加入。</li>
                </ul>

                {/* 第三章 */}
                <h2 style={styles.chapterTitle}>第三章 社員之權利與義務</h2>
                <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}}>
                    <div>
                        <h3 style={styles.articleTitle}>第一條 凡本社社員均享有下列權利</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>擔任本社幹部之權利。</li>
                            <li style={styles.listItem}>投票權。</li>
                            <li style={styles.listItem}>優先使用本社資源之權利。</li>
                            <li style={styles.listItem}>優先參加本社舉辦活動之權利。</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={styles.articleTitle}>第二條 凡本社社員均應盡下列義務</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>懷抱熱誠參與社團任何活動。</li>
                            <li style={styles.listItem}>與其他社員交流共進步。</li>
                            <li style={styles.listItem}>珍惜一切資源、課程及活動。</li>
                            <li style={styles.listItem}>不可破壞本社名譽。</li>
                            <li style={styles.listItem}>遵守本社一切規則。</li>
                        </ul>
                    </div>
                </div>

                {/* 第四章 */}
                <h2 style={styles.chapterTitle}>第四章 組織權限與任期</h2>
                
                <h3 style={styles.articleTitle}>第一條</h3>
                <p style={styles.paragraph}>本社常置社長一人、副社長一人。</p>

                <h3 style={styles.articleTitle}>第二條 社長及副社長之權限</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>社長對外代表本社，對內綜理社務並協調各組別工作。</li>
                    <li style={styles.listItem}>副社長協助社長執行職務。</li>
                    <li style={styles.listItem}>社長、副社長擁有調整本社幹部職位和工作之權利。</li>
                </ul>

                <h3 style={styles.articleTitle}>第三條 本社設下重要幹部。其各職權如下</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
                    {[
                        {role: "教學", desc: "計畫並執行定期的教學練習，策劃觀摩以及各種講座，安排學期課表。"},
                        {role: "公關", desc: "負責本社對外相關宣傳、募款、交流等等事宜，定期發佈社群貼文限動。"},
                        {role: "宣傳", desc: "製作海報、傳單等等以推廣本社。"},
                        {role: "總務", desc: "保管社團之存摺，負責社團的經費控管支出與收入透明化。"},
                        {role: "秘書", desc: "負責協助社長推動社團事務，且負責記錄會議之紙本及電子檔，製作社團於學期中之行事曆及活動。"},
                        {role: "場地", desc: "負責租借上課教室等事宜。"},
                        {role: "器材", desc: "保存社內資產，比賽其中負責保管錄影機，筆電，印表機，錄音筆等貴重物品之保管者。"},
                        {role: "活動", desc: "負責本社資安競賽之建立與安排。"}
                    ].map((item, index) => (
                        <div key={index} style={{backgroundColor: '#252525', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #555'}}>
                            <span style={styles.highlightTerm}>{item.role}</span>
                            <span style={{fontSize: '0.9rem', color: '#bbb'}}>{item.desc}</span>
                        </div>
                    ))}
                </div>

                <h3 style={styles.articleTitle}>第四條</h3>
                <p style={styles.paragraph}>社長、副社長與各重要幹部任期均為一年，一學年改選一次，連選得連任。</p>

                <h3 style={styles.articleTitle}>第五條</h3>
                <p style={styles.paragraph}>幹部罷免須由社員進行投票，達三分之二同意票數，即通過。</p>

                {/* 第五章 */}
                <h2 style={styles.chapterTitle}>第五章 本社經費來源</h2>
                <h3 style={styles.articleTitle}>第一條</h3>
                <p style={styles.paragraph}>本社為志工向，不收取社費。</p>
                <h3 style={styles.articleTitle}>第二條</h3>
                <p style={styles.paragraph}>根據服務性質、活動性質校友不定期贊助。</p>

                {/* 第六章 */}
                <h2 style={styles.chapterTitle}>第六章 社員大會</h2>
                <h3 style={styles.articleTitle}>第一條</h3>
                <p style={styles.paragraph}>社員大會由全體社員組成，為本社最高權力機構。但日常事務由幹部會議議決執行之。</p>

                <h3 style={styles.articleTitle}>第二條 社員大會之職權如下</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>選舉社長（副社長）及各重要幹部。</li>
                    <li style={styles.listItem}>修改本社組織章程。</li>
                    <li style={styles.listItem}>議決重要事項。</li>
                </ul>

                <h3 style={styles.articleTitle}>第三條</h3>
                <p style={styles.paragraph}>每學期舉辦兩次時間於期中後一週與期末後一週。</p>

                {/* Footer */}
                <div style={styles.footer}>
                    <p>章程訂立日期為中華民國114年10月12日（幹部會議）</p>
                    <p>章程修訂日期為中華民國114年11月28日（期中社員大會）</p>
                    <p>章程最後修改日期為中華民國114年11月28日</p>
                </div>
            </div>
        </div>
    );
}