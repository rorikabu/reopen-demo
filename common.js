/* ========================================
   ReOpen 共通JS（ヘッダー・フッター・FAQ）
   ======================================== */

(function () {
  var page = document.body.getAttribute('data-page') || '';

  /* ---------- ヘッダー生成 ---------- */
  var navItems = [
    { href: 'property-list.html', label: '物件をさがす', pages: ['property-list', 'building-list'] },
    { href: 'beginners-guide.html', label: 'はじめての方へ', pages: ['beginners-guide'] },
    { href: 'features.html', label: 'ReOpenの特徴', pages: ['features'] },
    { href: 'mypage.html', label: 'マイページ', pages: ['mypage'] }
  ];

  var logoHref = (page === 'home') ? 'home.html' : 'index.html';

  var navHtml = navItems.map(function (item) {
    var isActive = item.pages.indexOf(page) !== -1;
    var style = isActive ? ' style="color:var(--primary);font-weight:700;"' : '';
    return '<li><a href="' + item.href + '"' + style + '>' + item.label + '</a></li>';
  }).join('\n        ');

  /* home用：ログアウトリンク追加 */
  if (page === 'home') {
    navHtml += '\n        <li><a href="index.html" style="color:var(--text-muted);font-size:0.85rem;">ログアウト</a></li>';
  }

  var rightHtml = '';
  if (page === 'index') {
    rightHtml = '\n    <div style="display:flex;gap:10px;align-items:center;">' +
      '\n      <a href="#" style="font-size:0.85rem;color:var(--text-light);text-decoration:none;">ログイン</a>' +
      '\n      <a href="register.html" style="font-size:0.85rem;padding:8px 18px;background:var(--accent);color:#fff;border-radius:var(--radius-sm);text-decoration:none;font-weight:600;">無料登録</a>' +
      '\n    </div>';
  }

  var hamburgerHtml = '';
  if (page === 'home') {
    hamburgerHtml = '\n    <button class="hamburger" onclick="document.querySelector(\'.header-nav\').classList.toggle(\'open\')" aria-label="メニュー">☰</button>';
  }

  var headerEl = document.querySelector('header.site-header');
  if (headerEl) {
    headerEl.innerHTML =
      '<div class="header-inner">\n' +
      '    <div class="site-logo"><a href="' + logoHref + '" style="text-decoration:none;color:inherit;">Re<span>Open</span></a></div>' +
      hamburgerHtml + '\n' +
      '    <nav>\n' +
      '      <ul class="header-nav">\n' +
      '        ' + navHtml + '\n' +
      '      </ul>\n' +
      '    </nav>' +
      rightHtml + '\n' +
      '  </div>';
  }

  /* ---------- フッター生成 ---------- */
  var footerEl = document.querySelector('footer.site-footer');
  if (footerEl) {
    footerEl.innerHTML =
      '<div class="footer-inner">\n' +
      '    <div class="footer-grid">\n' +
      '      <div>\n' +
      '        <div class="footer-brand">Re<span style="color:var(--accent)">Open</span></div>\n' +
      '        <p class="footer-desc">中古マンションを、もっとかんたんに。<br>個人間で安心して売買できるプラットフォームです。</p>\n' +
      '      </div>\n' +
      '      <div>\n' +
      '        <div class="footer-heading">サービス</div>\n' +
      '        <ul class="footer-links">\n' +
      '          <li><a href="property-list.html">物件をさがす</a></li>\n' +
      '          <li><a href="building-list.html">一棟マンション</a></li>\n' +
      '          <li><a href="register.html">出品する</a></li>\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '      <div>\n' +
      '        <div class="footer-heading">サポート</div>\n' +
      '        <ul class="footer-links">\n' +
      '          <li><a href="beginners-guide.html">はじめての方へ</a></li>\n' +
      '          <li><a href="features.html">ReOpenの特徴</a></li>\n' +
    '          <li><a href="guide.html">売買ガイド</a></li>\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '      <div>\n' +
      '        <div class="footer-heading">会社情報</div>\n' +
      '        <ul class="footer-links">\n' +
      '          <li><a href="#">運営会社</a></li>\n' +
      '          <li><a href="#">利用規約</a></li>\n' +
      '          <li><a href="#">プライバシーポリシー</a></li>\n' +
      '        </ul>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="footer-bottom">\n' +
      '      &copy; 2026 ReOpen Inc. All rights reserved.\n' +
      '    </div>\n' +
      '  </div>';
  }
})();

/* ---------- FAQ共通関数 ---------- */
function toggleFaq(btn) {
  var answer = btn.nextElementSibling;
  var isOpen = btn.classList.contains('open');

  /* 全て閉じる（.faq-q = index用, .faq-question = features用） */
  document.querySelectorAll('.faq-q, .faq-question').forEach(function (q) {
    q.classList.remove('open');
  });
  document.querySelectorAll('.faq-a, .faq-answer').forEach(function (a) {
    a.classList.remove('open');
  });

  /* クリックしたものが閉じていたら開く */
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}
