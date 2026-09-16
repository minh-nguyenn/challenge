<template>
  <VxApp>
    <div class="wrap">
      <header id="pageHeader" class="header-page" :class="{ 'drawer-open': isVisibleNavigation }">
        <div class="head-inner">
          <h1 id="headLogo"><a href="/">
              <svg class="logo">
                <use xlink:href="#icon_logo"></use>
              </svg>

            </a></h1>
          <div class="head-contact">
            <div class="about-us">
              <a href="/company/">会社情報</a>
            </div>
            <div class="root-page">
              <a href="http://www.entetsu.co.jp/" target="_blank">
                <img src="/assets/images/logo_entetsu_group.gif" alt="遠鉄グループ" width="102" height="38">
              </a>
            </div>
          </div>
        </div>
        <nav id="grobalNav" role="navigation">
          <ul>
            <li v-for="nav in navDes" :key="nav.to" :class="nav.name">
              <a :href="nav.to" :class="{ active: isCurrentRoute(nav.to) }"
                :target="nav.externalLink ? '_blank' : '_self'">{{ nav.label }}</a>
            </li>
          </ul>
        </nav>
        <nav id="mobileNav" role="navigation">
          <ul>
            <li v-for="nav in navMobile" :key="nav.to" :class="nav.name">
              <div class="img-nav"></div>
              <a :href="nav.to" :class="{ active: isCurrentRoute(nav.to) }"
                :target="nav.externalLink ? '_blank' : '_self'">{{ nav.label }}</a>
            </li>
          </ul>
        </nav>
        <button type="button" class="drawer-hamburger" :class="{ open: isVisibleNavigation }"
          @click="isVisibleNavigation = !isVisibleNavigation">
          <img v-if="isVisibleNavigation" src="/assets/images/icon_menu_close.svg" alt="MENU" class="close">
          <img v-else src="/assets/images/icon_menu_default.svg" alt="MENU" class="open">
        </button>
        <VxNavigationDrawer v-model="isVisibleNavigation" fixed temporary right width="400px"
          class="drawer-navlist">
          <div class="wrap-navMobile">
            <p class="navTitle">MENU</p>
            <ul class="nav-list">
              <li v-for="nav in navList" :key="nav.to">
                <a :href="nav.to" :class="{ active: isCurrentRoute(nav.to), 'nav-child': nav.navMobile }">
                  <svg class="icon">
                    <use :xlink:href="nav.svgId"></use>
                  </svg>
                  {{ nav.labelMobile ? nav.labelMobile : nav.label }}
                </a>
              </li>
            </ul>
            <div class="subNavi">
              <ul>
                <li><a href="/info/">遠鉄ストアからのお知らせ</a></li>
                <li><a href="/event/">キャンペーン・イベント情報</a></li>
                <li class="company"><a href="/news/">企業情報・ニュースリリース</a></li>
              </ul>
            </div>
          </div>
        </VxNavigationDrawer>
      </header>
      <!--
        Smart Search chèn vào layout nên có mặt ở MỌI trang — đúng tinh thần
        "tích hợp vào site có sẵn", không phải làm web mới.
        Trang /search tự hiển thị ô tìm riêng nên ở đây ẩn đi để khỏi trùng.
      -->
      <SmartSearchBar v-if="!isSearchPage" :compact="!isHomePage" />
      <slot />
      <footer class="footer-page">
        <div id="footBnrList" class="d-none-des">
          <ul class="bnr mobile-box">
            <li class="recruit"> <a href="https://entstore-recruit.net/jobfind-smartphone/" target="_blank">
                <p>遠鉄ストアで一緒に働きませんか？<span>アルバイト・パート・正社員積極採用中！</span></p>
              </a> </li>
            <li class="pointcard"> <a href="https://entetsucard.entetsu.co.jp/" target="_blank">
                <p>えんてつポイントの<br>
                  貯め方・使い方<span>1P=1円で使えたり、ギフトをもらったり</span></p>
              </a> </li>
            <li class="kidsclub"><a href="https://entetsucard.entetsu.co.jp/kids/" target="_blank">
                <p><img src="/assets/images/ban_pointkids.webp" alt="えんてつカードキッズクラブスタート"></p>
              </a> </li>
            <li class="text-center">
              <a target="_blank" href="https://tokubai.co.jp/offices/426/shops?from=widget_225x80&amp;office_id=426">
                <img alt="遠鉄ストアのチラシ・特売情報"
                  src="https://assets.tokubai.co.jp/assets/themes/bargain_shops/office_widgets/banner_225x80-47b2efe97bcf52aee2bfbb25aa0bf6e2ead0d1d184052c84ddad536bf8ffba7c.png">
              </a>
            </li>
          </ul>
        </div>
        <section class="footerInfo d-none-mobile">
          <div class="footer-banner">
            <img src="/assets/images/ban_smp.webp" alt="スマホサイトもご利用ください">
          </div>
          <div class="banner-list">
            <a href="https://entstore-recruit.net/jobfind-pc/" target="_blank"><img
                src="/assets/images/ban_recruit.webp" alt="遠鉄ストアで一緒に働きませんか？"></a>
            <a href="https://entetsucard.entetsu.co.jp/kids" target="_blank"><img
                src="/assets/images/ban_pointkids.webp" alt="遠鉄ストアで一緒に働きませんか？"></a>
            <a href="https://entetsucard.entetsu.co.jp/" target="_blank"><img src="/assets/images/ban_point.webp"
                alt="遠鉄ストアで一緒に働きませんか？"></a>
            <a href="https://tokubai.co.jp/offices/426/shops?from=widget_225x80&office_id=426" target="_blank"
              class="text-center link-custom"><img src="/assets/images/banner_footer.webp" alt="遠鉄ストアで一緒に働きませんか？"></a>
          </div>
        </section>
        <section id="siteInfo">
          <section class="toLink" @click="toTop">
            <div class="to-top">
              <a>ページの上へ戻る</a>
            </div>
          </section>
          <div class="footerDefoltNav d-none-des">
            <div class="defoltBnr">
              <ul>
                <li><a href="https://cards.entetsu.co.jp/card/" target="_blank"><img
                      src="/assets/images/bnr_footPointcard.webp" alt="えんてつポイントがたまる！使える！毎日お得なえんてつカード"></a></li>
                <li><a href="https://shop.entstore.co.jp/f/ec" target="_blank"><img
                      src="/assets/images/bnr_footMailorder.webp" alt="遠鉄ストアネット通販"></a></li>
                <li><a href="/traceability/"><img src="/assets/images/bnr_footBeef.webp" alt="牛肉安全・安心システム"></a></li>
              </ul>
            </div>
            <ul class="footTxtNav">
              <li><a href="/sitemap/">サイトマップ</a></li>
              <li><a href="/privacy/">個人情報保護方針について</a></li>
              <li><a href="/pdf/マルチステークホルダー方針_遠鉄ストア.pdf" target="_blank">マルチステークスホルダー方針</a></li>
              <li><a href="/faq/">よくあるご質問</a></li>
              <li><a href="/contact/">お客様の声をお寄せください</a></li>
            </ul>
            <p id="copyright"><small>Copyright © Entetsu Store All Rights reserved.</small></p>
          </div>
          <p id="footLogo" class="d-none-mobile"><a href="/"></a></p>
          <dl class="d-none-mobile">
            <dt><a href="/">遠鉄ストアトップ</a></dt>
            <dt>店舗情報</dt>
            <dd><a href="/shop/">店舗一覧</a></dd>
            <dt>チラシ情報</dt>
            <dd><a href="/chirashi/">チラシ情報一覧</a></dd>
            <dt>お知らせ</dt>
            <dd>
              <ul>
                <li><a href="/info/">店舗からのお知らせ</a></li>
                <li><a href="/event/">イベント・キャンペーン情報</a></li>
                <li><a href="/news/">ニュースリリース</a></li>
              </ul>
            </dd>
            <dt>サービス</dt>
            <dd>
              <ul>
                <li><a href="/service/cooking/">調理サービス</a></li>
                <li><a href="/service/item/">商品サービス</a></li>
                <li><a href="/service/counter/">サービスカウンター取り扱いサービス</a></li>
              </ul>
            </dd>
            <dt>会社情報</dt>
            <dd>
              <ul>
                <li><a href="/company/profile/">会社概要・沿革</a></li>
                <li><a href="/company/message/">トップメッセージ</a></li>
                <li><a href="/company/green/">環境への取り組み</a></li>
                <li><a href="/company/social/">社会活動への取り組み</a></li>
              </ul>
            </dd>
            <dt>採用情報</dt>
            <dd>
              <ul>
                <li><a href="/recruit/#recruit01">遠鉄ストアについて</a></li>
                <li><a href="/recruit/#recruit02">遠鉄ストアのお仕事</a></li>
                <li><a href="/recruit/#recruit03">オンライン応募</a></li>
              </ul>
            </dd>
            <dt>このサイトについて</dt>
            <dd>
              <ul>
                <li><a href="/sitemap/">サイトマップ</a></li>
                <li><a href="/privacy/">個人情報保護方針</a></li>
                <li><a href="/pdf/マルチステークホルダー方針_遠鉄ストア.pdf" target="_blank">マルチステークスホルダー方針</a></li>
                <li><a href="/faq/">よくあるご質問</a></li>
              </ul>
            </dd>
            <dt>お問い合わせ</dt>
            <dd><a href="/contact/">お客様の声をお寄せください</a></dd>
            <dt class="wider"><a href="https://shop.entstore.co.jp/f/ec">遠鉄ストアネット通販</a></dt>
          </dl>
          <p id="copyright" class="d-none-mobile">Copyright © 2014 Entetsu Store All Rights Reserved.</p>
        </section>
        <div class="slick-footer d-none-mobile">
          <div class="footer-slider" :class="[{ 'footer-slider-homepage': isHomePage }]">
            <ClientOnly>
              <VxSlick :options="slickOptions">
                <a href="http://wellseason.jp/"><img src="/assets/images/ban_wellseason.webp" alt=""></a>
                <a href="http://www.entetsu.net/"><img src="/assets/images/ban_insurance.webp" alt=""></a>
                <a href="http://www.entetsusekiyu.co.jp/"><img src="/assets/images/ban_sekiyu.webp" alt=""></a>
                <a href="https://www.e-trip.co.jp/"><img src="/assets/images/ban_travel.webp" alt=""></a>
                <a href="http://www.matsukiyo.co.jp/"><img src="/assets/images/ban_matsumotokiyoshi.webp" alt=""></a>
                <a href="https://www.chateraise.co.jp/ec/default.aspx"><img src="/assets/images/ban_chateraise.webp"
                    alt=""></a>
                <a href="http://bus.entetsu.co.jp/"><img src="/assets/images/ban_bus.webp" alt=""></a>
                <a href="/traceability"><img src="/assets/images/ban_beef.webp" alt=""></a>
                <a href="https://cards.entetsu.co.jp/card/"><img src="/assets/images/ban_card.webp" alt=""></a>
                <a href="http://www.cgcjapan.co.jp/"><img src="/assets/images/ban_cgc.webp" alt=""></a>
                <a href="http://concorde.co.jp/"><img src="/assets/images/ban_concorde.webp" alt=""></a>
              </VxSlick>
            </ClientOnly>
          </div>
        </div>
      </footer>
      <!-- Chatbot RAG đa ngôn ngữ (Yêu cầu 4) — nổi ở góc phải mọi trang -->
      <ChatWidget />
      <!--
        Thanh giỏ hàng — chỉ hiện khi trong giỏ đã có hàng, nên khi chưa dùng
        tính năng mới thì giao diện vẫn khớp đúng pixel với site gốc.
      -->
      <CartBar />
      <svg class="svgDefolt">
        <symbol id="icon_home" viewBox="0 0 28.4 28.4">
          <path
            d="M22.9,8V1.5h-3.6v3.8l-5.2-4.1L0,11.9l2.7,2.9l2-1.1v13.4h20.1V13.8l1.5,1.1l2.1-2.9L22.9,8z M17.5,25.3h-7.4v-9.2h7.4V25.3z" />
        </symbol>

        <symbol id="icon_logo" viewBox="0 0 89.8 19.1">
          <g>
            <polygon fill="#646757" points="29.2,6.1 29,7.5 38.2,7.5 38.4,6.1 34.7,6.1 34.8,5.3 38.1,5.3 38.4,4 35.1,4 35.3,3 33.4,3
				33.2,4 29.9,4 29.7,5.3 33,5.3 32.8,6.1 	" />
            <path fill="#646757" d="M52.1,10.5l0.3-1.3h-2.6l0.5-2.4h2.3l0.3-1.3h-2.3L50.9,3h-1.7l-0.5,2.4h-0.6c0.2-0.5,0.3-1.2,0.3-1.9h-1.4
				c0,0-0.3,3-1.1,3.2l-0.4,1.9c0,0,1.2-0.2,2.1-1.9h0.9l-0.5,2.4h-2.6l-0.3,1.3h2.3c-0.1,1-1.7,3.1-3.1,4l-0.4,1.9
				c0,0,1.8-0.3,4.2-3.9c0,0,0.9,3.1,2.6,3.9l0.4-1.8c0,0-1.8-2-1.6-4.1H52.1z" />
            <path fill="#646757" d="M54.7,3.7l-0.4,1.9h7.2c-0.1,0.8-2.3,7.6-9.1,8.9l-0.4,1.9c0,0,4.3-0.2,8-3.8c1.7,1,3.6,3.9,3.6,3.9
				l0.6-2.7c-1.3-1.7-2.2-2.4-2.8-2.8c1.4-1.8,2.6-4.2,3.3-7.3H54.7z" />
            <path fill="#646757"
              d="M77.6,9c-3-1.5-6.1-2-7.3-2.1L71,3h-2.4L66,16.3h2.5l1.4-7.4c3.6,0.3,7.3,2.3,7.3,2.3L77.6,9z" />
            <path fill="#646757" d="M89.8,3.6L89.8,3.6l-11.5,0l-0.4,1.9h9c0,1.3-1,3.8-3.8,4c0,0,0,0-0.1,0C83.3,8.6,83.3,8,83.3,8h-2.2
				c-1.1,6.1-4,6.1-4,6.1l-0.4,2.2c3.3-0.3,4.9-2.8,5.8-5C86.8,11.2,89.3,8.2,89.8,3.6L89.8,3.6z" />
            <path fill="#646757" d="M29.1,4.3c0,0-2-0.9-2.7-0.9L26.1,5c0,0,1.5,0.3,2.6,1L29.1,4.3z" />
            <path fill="#646757" d="M28.7,11.1h1.8l-2.1,1.5l-0.3,1.6l2.8-1.8l-0.5,2.7h-0.9c0,0-2.4,0-2-1.8l0.9-5.1h-2.9l-0.3,1.5h1.2
				l-0.8,4.2l-1.4,0.9l-0.4,1.9l2.2-1.2h0.3c0.2,0.7,2,1.1,2.5,1.1h7.7l0.3-1.4h-4.5l0.5-2.7c1.1,1.7,3.7,2.6,3.7,2.6l0.3-1.5
				c-0.5-0.2-0.9-0.4-1.3-0.6c1.5-0.9,1.4-1.5,1.4-1.5h-1.6c-0.3,0.4-0.6,0.7-0.9,0.8c-0.6-0.5-0.7-0.8-0.8-1h3.5l0.6-2.9h-8.4
				L28.7,11.1z M30.6,9.2H36L35.8,10h-5.3L30.6,9.2z" />
            <path fill="#646757"
              d="M44.3,13.9c0,0-0.3,0.3-2,0.5l0.7-3.9h1.7L45,9.2h-1.7L43.6,8h1.2L45,6.7c0.2,0.2,0.4,0.4,0.6,0.6l0.2-1.7
				c0,0-0.7-0.7-1.6-2.6h-1.2c0,0-1.4,2.1-3,3.1l-0.3,1.8c0,0,0.5-0.2,1.1-0.6L40.8,8h1.1l-0.2,1.3h-2.1l-0.3,1.3h2.1l-0.8,4.2
				c-0.6,0.1-1.3,0.1-2.2,0.2L38,16.6c0,0,5.4-0.7,6.1-1.3L44.3,13.9z M41.7,6.6c0.5-0.5,1.1-1.1,1.7-1.8c0,0-0.1,0.4,1.4,1.8H41.7z" />
            <polygon fill="#646757" points="40.4,11.3 39.2,11.3 39,14.2 40.2,14.2 	" />
            <path fill="#646757" d="M43.8,13.7c0.2,0,0.9-2.4,0.9-2.4h-1.2l-0.8,2.4H43.8z" />
          </g>
          <g>
            <path fill="#D7063B" d="M4.3,14.3C2.7,10.3,5.5,6.4,8.7,4c1.4-1,3-1.9,4.7-1.4c0.5,0.1,0.8,0.5,0.9,0.9c0.4,2.8-2,4.8-4,6.4
				c-1.1,1-2.4,1.7-3.8,2.2c2.3-0.1,4.4-1,6.3-2.3c2.4-1.7,4.8-4.5,3.7-7.5c-0.4-0.9-1-1.6-1.9-2c-1.4-0.5-2.9-0.3-4.4,0.1
				C7.6,1.2,5.5,2.8,3.6,4.8c-2.8,3-4.8,7.5-2.8,11.5c0.5,1,1.3,1.6,2.2,2.1c1.4,0.7,2.9,0.8,4.5,0.5c3.3-0.6,6.3-2.3,8.6-4.7
				c-2.3,1.5-4.9,2.7-7.7,2.7C6.6,16.9,4.9,15.9,4.3,14.3z" />
            <path fill="#D7063B" d="M21.2,9.7C20.8,9,20,8.4,19.1,8.4c-1.6-0.2-3,1.2-2.9,2.8c0.1,1.2,1,2.1,2.1,2.4c1.3,0.3,2.7-0.5,3.1-1.8
				C21.6,11.1,21.6,10.4,21.2,9.7z" />
          </g>
        </symbol>

        <!-- icon  -->
        <symbol id="icon_shop" viewBox="0 0 28.4 27.3">
          <g>
            <path d="M4.2,20.9v-8.4h18.2v1c0.8,0.1,1.6,0.3,2.3,0.7v-4H1.9v15.3h14.8c-1.2-1.2-2-2.8-2.1-4.6H4.2z" />
            <path d="M28,25.5l-2.2-2.2c0,0,0,0-0.1,0c0.6-0.8,0.9-1.8,0.9-2.8c0-2.8-2.3-5-5-5c-2.8,0-5,2.3-5,5c0,2.8,2.3,5,5,5
				c1,0,1.9-0.3,2.6-0.8c0,0,0,0.1,0.1,0.1l2.2,2.2c0.4,0.4,1.1,0.4,1.5,0C28.4,26.6,28.4,25.9,28,25.5z M21.6,24.1
				c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C25.3,22.4,23.7,24.1,21.6,24.1z" />
            <path d="M4.2,6.8V5.5L7.6,0H5.4L0,5.5v1.3c0,1.2,0.9,2.1,2.1,2.1S4.2,7.9,4.2,6.8z" />
            <path d="M5.6,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L11.1,0H9L5.6,5.5V6.8z" />
            <path d="M11.1,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L14.5,0h-2.2l-1.2,5.5V6.8z" />
            <path d="M22.5,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L21.3,0h-2.2l3.3,5.5V6.8z" />
            <path d="M16.9,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L17.7,0h-2.2l1.3,5.5V6.8z" />
          </g>
        </symbol>

        <!-- icon  -->
        <symbol id="icon_location" viewBox="0 0 14.4 21">
          <path d="M7.2,0C4.3,0,0,1.3,0,6.6C0,9.2,5.8,18.4,7.2,21c1.4-2.6,7.2-11.8,7.2-14.4C14.4,1.3,10.1,0,7.2,0 M7.2,8.9
			c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3s2.3,1,2.3,2.3C9.5,7.8,8.5,8.9,7.2,8.9" />
        </symbol>

        <!-- icon  -->
        <symbol id="icon_area" viewBox="0 0 28.4 28.4">
          <g>
            <polygon points="0,23.1 8.9,26.6 8.9,5.2 0,1.7" />
            <polygon points="19.4,1.7 19.4,23.1 28.3,26.6 28.3,5.2" />
            <polygon points="10.7,26.6 17.7,23.1 17.7,1.7 10.7,5.2" />
          </g>
        </symbol>

        <!-- icon  -->
        <symbol id="icon_chirashi" viewBox="0 0 28.4 28.4">
          <path d="M27,11.5h-2.8L19,5.2c0-0.3,0-0.5,0-0.7c0-1.1-0.8-1.9-1.8-1.9s-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9c0.1,0,0.3,0,0.3,0l4.2,5.2
			h-14l4.2-5.2c0.1,0,0.1,0,0.3,0c1.1,0,1.9-0.8,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.8-1.9,1.9c0,0.3,0,0.5,0.1,0.7l-5.2,6.4
			H1.4c-0.7,0-1.4,0.3-1.4,0.9c0,0.5,0.5,0.9,1.4,0.9H27c0.7,0,1.4-0.3,1.4-0.9S27.7,11.5,27,11.5" />
          <path d="M25.4,15.1H2.8c-0.7,0-1.2,0.5-1.2,1.4l1.2,8.3c0.1,0.7,0.8,1.1,1.5,1.1h19.3c0.7,0,1.5-0.4,1.5-1.1l1.2-8.4
			C26.6,15.5,26.2,15.1,25.4,15.1 M6.9,23.1C6.9,23.6,6.5,24,6,24S5,23.6,5,23.1v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z
			 M12.2,23.1c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9V23.1z M17.6,23.1
			c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z M22.9,23.1c0,0.5-0.4,0.9-0.9,0.9
			c-0.5,0-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z" />
        </symbol>

        <!-- icon  -->
        <symbol id="icon_service" viewBox="0 0 20.5 21">
          <path d="M20,16c-0.6-1-2.7-1.6-4.7-2.4c-2-0.8-2.5-1.1-2.5-1.1l0-2c0,0,0.8-0.6,1-2.4c0.5,0.1,1-0.7,1-1.2c0-0.4-0.1-1.6-0.7-1.5
			c0.1-0.9,0.2-1.7,0.2-2.1C14.2,1.7,12.6,0,10.2,0S6.3,1.7,6.1,3.2c0,0.4,0,1.2,0.2,2.1C5.7,5.3,5.6,6.5,5.7,6.9c0,0.4,0.5,1.3,1,1.2
			c0.2,1.8,1,2.4,1,2.4l0,2c0,0-0.5,0.3-2.5,1.1C3.1,14.4,1,15,0.4,16C-0.1,16.8,0,21,0,21h10.2h10.2C20.4,21,20.6,16.8,20,16
			 M16.5,18.3h-5.3V17h5.3V18.3z" />
        </symbol>

        <!-- icon  -->
        <symbol id="icon_supermarket" viewBox="0 0 20.5 20.4">
          <path d="M18.7,13.2l1.8-8.6L3.8,2.5L2.5,1.6c0-0.1,0.1-0.2,0.1-0.3C2.6,0.6,2,0,1.3,0C0.6,0,0,0.6,0,1.3C0,2,0.6,2.6,1.3,2.6
			c0.1,0,0.2,0,0.3-0.1l1.6,1l2.6,10.2l0.8,0L5.8,16c0,0-0.1,0-0.1,0c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c0.9,0,1.7-0.5,2-1.3
			h6.9c0.3,0.8,1.1,1.3,2,1.3c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1c-1,0-1.8,0.7-2.1,1.6H7.8c-0.1-0.5-0.4-1-0.8-1.3l0.9-2.7
			L18.7,13.2z M10,12.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S10.4,12.1,10,12.1 M12.6,12.1
			c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S13,12.1,12.6,12.1 M15.2,12.1c-0.4,0-0.8-0.4-0.8-0.8
			s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S15.7,12.1,15.2,12.1 M17.9,5.3c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8
			c-0.4,0-0.8-0.4-0.8-0.8C17.1,5.6,17.4,5.3,17.9,5.3 M17.3,8.7c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8
			C17,7.9,17.3,8.2,17.3,8.7 M15.2,5.3C15.7,5.3,16,5.6,16,6c0,0.4-0.4,0.8-0.8,0.8S14.4,6.5,14.4,6C14.4,5.6,14.8,5.3,15.2,5.3
			 M14.7,8.7c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C14.4,7.9,14.7,8.2,14.7,8.7 M12.6,5.3
			c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8C11.8,5.6,12.2,5.3,12.6,5.3 M12.1,8.7c0,0.4-0.4,0.8-0.8,0.8
			c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C11.7,7.9,12.1,8.2,12.1,8.7 M10,5.3c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8
			C9.5,6.8,9.2,6.5,9.2,6C9.2,5.6,9.5,5.3,10,5.3 M9.4,8.7c0,0.4-0.4,0.8-0.8,0.8S7.9,9.1,7.9,8.7c0-0.4,0.4-0.8,0.8-0.8
			S9.4,8.2,9.4,8.7 M6.6,6c0-0.4,0.4-0.8,0.8-0.8S8.1,5.6,8.1,6c0,0.4-0.4,0.8-0.8,0.8S6.6,6.5,6.6,6" />
        </symbol>

        <!-- icon  -->
        <symbol id="icon_company" viewBox="0 0 28.4 28.4">
          <path d="M24.3,4.1c-5.5-5.5-14.5-5.5-20.2,0c-5.5,5.6-5.5,14.5,0,20.2c5.5,5.5,14.5,5.5,20,0C29.8,18.8,29.8,9.7,24.3,4.1 M14,2.4
			c1.6,0,2.7,1.3,2.7,2.7c0,1.6-1.3,2.7-2.7,2.7c-1.6,0.1-2.7-1.1-2.7-2.5C11.3,3.7,12.4,2.4,14,2.4 M18.3,22.4c0,0.6-0.3,0.8-0.8,0.8
			h-7.1c-0.6,0-0.8-0.3-0.8-0.8v-1.8c0-0.6,0.3-0.8,0.8-0.8h1.3v-7.5h-1.3c-0.6,0-0.8-0.3-0.8-0.8V9.6c0-0.6,0.3-0.8,0.8-0.8h4.9
			c0.6,0,0.8,0.3,0.8,0.8v10.2h1.3c0.6,0,0.8,0.3,0.8,0.8V22.4z" />
        </symbol>

        <!-- icon  -->
        <symbol id="icon_recruit" viewBox="0 0 20.5 19.3">
          <path
            d="M4,19.3c-0.8,0-1.6-0.4-2.3-1.1l-0.1-0.1c-0.8-0.8-3-3.9,0-7.1c1.5-1.6,3.6-3.7,5.9-5.9c1.2-1.2,2.4-2.4,3.7-3.7
			c2.2-2.2,3.9-1.7,6.4,0.7c3,2.9,3.6,5.7,2.3,7.2c-1.7,2-8.3,8.5-8.5,8.8c-0.4,0.4-1,0.4-1.3,0c-0.4-0.4-0.4-1,0-1.3
			c0.1-0.1,6.8-6.8,8.4-8.7c0.4-0.4,0.4-2.1-2.1-4.6c-1.5-1.4-1.9-2.6-3.8-0.7C11.2,4,9.9,5.2,8.7,6.4c-2.2,2.2-4.3,4.3-5.8,5.9
			c-1.8,1.9-0.9,3.7-0.1,4.5L3,16.9c0.7,0.7,1.3,0.9,2.3-0.1c0.3-0.3,0.9-0.8,1.6-1.6c2-2,5.8-5.6,6.6-6.6c0.2-0.3,0.6-1,0.3-1.3
			c-0.5-0.4-1.3,0.4-1.6,0.7C9.4,10.7,6,14,5.9,14.1c-0.4,0.4-1,0.3-1.3,0c-0.4-0.4-0.3-1,0-1.3c0,0,3.5-3.3,6.1-6.1
			c1.7-1.8,3.3-1.6,4.2-0.8c1.1,1,0.8,2.8,0,3.9c-0.8,1-3.7,3.9-6.7,6.8c-0.7,0.7-1.3,1.3-1.6,1.5C5.7,18.9,4.8,19.3,4,19.3" />
        </symbol>
        <symbol id="icon_mailorder" viewBox="0 0 21 21">
          <path d="M11.8,15.8h6.6v2.6h-6.6V15.8z M3.7,1.3h5.5v3.9H2L3.7,1.3z M11.8,1.3h5.3h0.3L19,5.3h-7.2V1.3z M2.8,0L0,6.6V21h21V6.6
			L18.2,0H2.8z" />
        </symbol>
        <symbol id="icon_recipe" viewBox="0 0 27 32">
          <path
            d="M7,0C3.69,0,1,3.13,1,7c0,3.31,2,6.08,4.62,6.81L4.62,30A1.86,1.86,0,0,0,6.5,32h1a1.86,1.86,0,0,0,1.88-2l-1-16.19C11,13.08,13,10.31,13,7c0-3.87-2.69-7-6-7ZM27.17,0,25.5,10H24.25L23.42,0h-.83l-.83,10H20.5L18.83,0H18V13a1,1,0,0,0,1,1h2.6l-1,16a1.86,1.86,0,0,0,1.88,2h1a1.86,1.86,0,0,0,1.88-2l-1-16H27a1,1,0,0,0,1-1V0h-.83Z"
            transform="translate(-1)" />
        </symbol>
        <!-- eslint-disable -->
        <symbol id="icon_arrow03" viewBox="0 0 595.3 841.9">
          <g>
            <path fill="#FFFFFF" d="M297.6,695.5C144.6,695.5,21,571.9,21,418.8c0-155.1,121.6-274.6,276.7-274.6
				c153,0,276.7,123.7,276.7,276.7C572.2,571.9,448.6,695.5,297.6,695.5z" />
            <path fill="#666666" d="M297.6,165.2c140.4,0,255.7,115.3,255.7,255.7S438.1,674.6,297.6,674.6S41.9,559.3,41.9,418.8
				C41.9,276.3,153,165.2,297.6,165.2 M297.6,123.3C132.1,123.3,0,253.3,0,418.8s134.1,297.6,297.6,297.6s297.6-130,297.6-295.5
				C593.2,255.4,459,123.3,297.6,123.3L297.6,123.3z" />
            <polygon fill="#666666" points="473.7,420.9 431.8,379 431.8,379 343.8,291 259.9,291 360.5,391.6 142.5,391.6 142.5,450.3
				360.5,450.3 259.9,548.8 343.8,548.8 431.8,462.9 431.8,462.9" />
          </g>
        </symbol>
        <symbol id="icon_arrow02" viewBox="0 0 595.3 841.9">
          <path d="M480,385.3L197,138c-21-18.9-56.6-18.9-81.7,0c-21,18.9-21,50.3,0,69.2l245.2,211.7L115.3,630.6
			c-21,18.9-21,50.3,0,69.2c12.6,8.4,25.2,14.7,39.8,14.7c14.7,0,29.3-6.3,39.8-14.7l283-247.3c12.6-8.4,18.9-21,18.9-35.6
			C494.7,406.3,488.4,395.8,480,385.3" />
        </symbol>

        <symbol id="icon_baloon" viewBox="0 0 28.35 28.35">
          <path d="M28.349,11.339C28.349,5.077,22.003,0,14.175,0C6.348,0,0.002,5.077,0.002,11.339
			c0,5.916,5.664,10.766,12.888,11.287c0.394,0.544,2.454,3.098,5.453,1.574c-0.55-0.179-1.175-0.884-1.737-1.701
			C23.273,21.575,28.349,16.937,28.349,11.339z" />
        </symbol>

        <symbol id="icon_arrow01" viewBox="0 0 595.3 841.9">
          <path fill="#C7273B" d="M480,385.3L197,138c-21-18.9-56.6-18.9-81.7,0c-21,18.9-21,50.3,0,69.2l245.2,211.7L115.3,630.6
			c-21,18.9-21,50.3,0,69.2c12.6,8.4,25.2,14.7,39.8,14.7c14.7,0,29.3-6.3,39.8-14.7l283-247.3c12.6-8.4,18.9-21,18.9-35.6
			C494.7,406.3,488.4,395.8,480,385.3" />
        </symbol>
      </svg>
    </div>
  </VxApp>
</template>

<script setup>
/**
 * Layout goc cua site 遠鉄ストア — chep nguyen <template> va <style> (847 dong),
 * chi viet lai <script> tu Vue 2 Options API sang Vue 3.
 *
 * Doi so voi ban goc:
 *   <v-app>                -> <VxApp>              (component tu viet)
 *   <v-navigation-drawer>  -> <VxNavigationDrawer> (component tu viet)
 *   <Nuxt />               -> <slot />             (Nuxt 4 dung slot cho layout)
 *   <slick> (vue-slick)    -> <VxSlick>            (vue-slick khong ho tro Vue 3)
 *   window.$ (jQuery)      -> bo han, VxSlick chay bang CSS transform
 *   mounted/beforeDestroy  -> onMounted/onBeforeUnmount
 */
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navList = [
  { labelMobile: '遠鉄ストア ホーム', label: 'ホーム', to: '/', name: 'home', svgId: '#icon_home' },
  { label: 'チラシ情報', to: '/chirashi/', name: 'chirashi', svgId: '#icon_chirashi' },
  { label: '店舗情報', to: '/shop/', name: 'shop', svgId: '#icon_shop' },
  { label: '現在地から探す', to: '/shop#gps', name: 'shop', svgId: '#icon_location', navMobile: true },
  { label: 'エリアから探す', to: '/shop#area', name: 'shop', svgId: '#icon_area', navMobile: true },
  { label: 'サービス', to: '/service/', name: 'service', svgId: '#icon_service' },
  { label: 'レシピ集', to: '/service/recipe/', name: 'recipe', svgId: '#icon_recipe' },
  { label: '採用情報', to: '/recruit/', name: 'recruit', svgId: '#icon_recruit' },
  { label: 'ネット通販', to: 'https://shop.entstore.co.jp/f/ec', name: 'giftshop', svgId: '#icon_mailorder', externalLink: true },
]

const navMobile = [
  { label: 'チラシ情報', to: '/chirashi/', name: 'chirashi' },
  { label: '店舗情報', to: '/shop/', name: 'shop' },
  { label: '採用情報', to: '/recruit/', name: 'recruit' },
]

const isVisibleNavigation = ref(false)

const slickOptions = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
}

const navDes = computed(() => navList.filter((item) => !item.navMobile))
const isHomePage = computed(() => route.path === '/')
const isSearchPage = computed(() => route.path === '/search')

// Giu nguyen logic highlight menu cua ban goc, khong doi mot nhanh if nao
function isCurrentRoute(routePath) {
  const split = route.path.split('/')
  if (split[1] && split[2] && routePath === '/service/') {
    if (split[1] === 'service' && split[2] !== 'recipe') return true
  }
  if (split[1] && split[2] && routePath === '/service/recipe/') {
    if (split[1] === 'service' && split[2].includes('recipe')) return true
  }
  if (split[1] === 'company' && routePath === '/recruit/') return true
  if (split[1] === 'shop' && routePath === '/shop/') return true
  return route.path === routePath
}

function toTop() {
  window.scroll({ top: 0, behavior: 'smooth' })
}

// Ban goc an nut hamburger khi cuon qua 60px
function onScroll() {
  const btn = document.querySelector('.drawer-hamburger')
  if (!btn) return
  if (window.scrollY >= 60) btn.classList.add('d-none')
  else btn.classList.remove('d-none')
}

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="scss" scoped>
.root {
  font-size: 14px;
}

.header-page {
  padding: 10px;

  @media only screen and (min-width: 1024px) {
    padding: 0;
  }

  .head-inner {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 13px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      padding-bottom: 12px;
    }

    @media only screen and (min-width: 1024px) {
      width: 980px;
      padding: 8px 0;
    }

    #headLogo {
      width: 145px;
      display: flex;
      align-items: center;

      a {
        display: block;
        width: 145px;
        height: 33px;

        svg {
          width: 100%;
          height: 100%;
        }

        // background: url('/assets/images/logo_header.webp') no-repeat;
        // background-size: contain;

        &:hover {
          opacity: 0.8;
        }
      }

      @media only screen and (min-width: 1024px) {
        width: 189px;

        a {
          width: 189px;
          height: 53px;
        }
      }
    }

    .head-contact {
      display: flex;
      height: 44px;

      @media only screen and (max-width: 767px) {
        height: 44px;
      }

      .about-us {
        margin-right: 30px;
        display: grid;
        place-items: end;

        margin-bottom: 1px;

        @media only screen and (max-width: 767px) {
          margin-right: 60px;
        }

        a {
          display: block;
          padding: 8px 0 8px 12px;
          background: url('/assets/images/ico_arrow05.webp') no-repeat;
          background-size: 6px auto;
          background-position: 0 50%;
          border-radius: 5px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          color: #323232;
          font-size: 14px;
          line-height: 14px;
          text-decoration: none;

          @media only screen and (min-width: 1024px) {
            background: url('/assets/images/ico_arrow01.webp') no-repeat;
            background-position: center left;
            background-size: unset;
            padding-left: 30px;
            font-size: 15.4px;
            background-position: 0 55%;
          }

          &:hover {
            color: #c72539;
          }
        }
      }
    }
  }

  #grobalNav {
    width: 100%;
    background-color: #CF2339;

    ul {
      width: 980px;
      margin: 0 auto;
      overflow: hidden;
      padding-left: 0;

      li {
        float: left;
        list-style: none;
        text-align: center;
        border-left: 1px solid #8F1929;

        &:hover {
          opacity: 0.5;

          a {
            background: url('/assets/images/arrow01.webp') no-repeat center bottom;
          }
        }

        &:nth-last-child(1) {
          border-right: 1px solid #8F1929;
        }

        &.home {
          background: url('/assets/images/ico_home.webp') no-repeat center 24px;
        }

        &.chirashi {
          background: url('/assets/images/ico_flier.webp') no-repeat center 24px;
        }

        &.shop {
          background: url('/assets/images/ico_shops.webp') no-repeat center 24px;
        }

        &.service {
          background: url('/assets/images/ico_service.webp') no-repeat center 24px;
        }

        &.recipe {
          background: url('/assets/images/ico_recipe.webp') no-repeat center 24px;
        }

        &.recruit {
          background: url('/assets/images/ico_recruit.webp') no-repeat center 24px;
        }

        &.giftshop {
          background: url('/assets/images/ico_giftshop.webp') no-repeat center 24px;
        }

        a {
          display: block;
          width: 137px;
          padding-top: 65px;
          padding-bottom: 18px;
          border-left: 1px solid #D84F61;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          line-height: 25px;

          &.active {
            background: url('/assets/images/arrow01.webp') no-repeat center bottom;
          }
        }
      }
    }
  }

  #mobileNav {
    display: none;

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      margin-bottom: 0;

      li {
        list-style: none;
        text-align: center;
        background-color: #CF2339;
        border-radius: 5px;
        height: 61px;

        &.chirashi {
          .img-nav {
            background: url('/assets/images/ico_flier.webp') no-repeat center 12px;
          }
        }

        &.shop {
          .img-nav {
            background: url('/assets/images/ico_shops.webp') no-repeat center 12px;
          }
        }

        &.recruit {
          .img-nav {
            background: url('/assets/images/ico_recruit.webp') no-repeat center 12px;
          }
        }

        .img-nav {
          padding-top: 10px;
          width: 20px;
          height: 30px;
          background-size: contain !important;
          margin: auto;
        }

        a {
          display: block;
          padding: 5px;
          border-left: 0px;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    #grobalNav {
      display: none;
    }

    #mobileNav {
      display: block;
    }
  }

}

.footer-page {
  clear: both;

  ::v-deep .slick-dots {
    bottom: -100px;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 49px;
    border-top: #F3E7CD solid 10px;
  }

  #siteInfo {
    background: #C52035;
    color: #fff;

    .toLink {
      width: 100%;
      display: block;
      background: #cccccc;
      text-align: right;
      margin-bottom: 0;

      &:hover {
        background-color: #dedede;
      }

      @media only screen and (min-width: 1024px) {
        margin-bottom: 30px;
      }

      .to-top {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        padding-right: 12px;

        @media only screen and (min-width: 1024px) {
          width: 980px;
        }

        a {
          display: block;
          color: #666666;
          width: 100%;
          padding: 15px 10px;
          font-size: 14px;
          line-height: 16px;

          @media only screen and (min-width: 1024px) {
            text-decoration: underline;
            padding: 9px 0 5px 0;
            line-height: 25.2px;

            &:hover {
              text-decoration: none;
            }
          }

        }
      }
    }

    #footLogo {
      width: 185px;
      margin: 0 auto;
      margin-bottom: 18px;

      a {
        display: block;
        width: 185px;
        height: 56px;
        margin-bottom: 17px;
        background: url('/assets/images/logo_footer.webp') no-repeat;
      }
    }

    #copyright {
      width: 100%;
      margin: 0 auto;
      padding-bottom: 10px;
      color: #e2909a;
      text-align: right;
      font-size: 12px;
      height: 43px;
      align-content: center;

      @media only screen and (max-width: 500px) {
        height: 37px !important;
      }

      @media only screen and (min-width: 1024px) {
        width: 980px;
      }
    }

    dl {
      width: 980px;
      margin: 0 auto;
      overflow: hidden;

      a {
        color: #fff;
        font-size: 14px;
        text-decoration: underline;
      }

      dt {
        clear: left;
        width: 150px;
        margin-bottom: 10px;
        height: 25.19px;
        float: left;
        font-weight: bold;
        overflow: hidden;
        font-size: 14px;
        align-content: center;

        a {
          &:hover {
            opacity: 0.8;
            text-decoration: none;
          }
        }
      }

      dd {
        float: left;
        width: 830px;
        margin-bottom: 10px;
        height: 25.19px;
        align-content: center;

        ul {
          padding-left: 0;

          li {
            display: inline-block;
            list-style: none;

            &:first-of-type {
              margin-right: 7px;
            }

            &:not(:first-of-type) {
              border-left: 1px solid #fff;
              margin-right: 7px;
              padding-left: 9px;
            }
          }
        }

        a {
          &:hover {
            opacity: 0.8;
            text-decoration: none;
          }
        }
      }
    }
  }

  .slick-footer {
    width: 100%;
    box-sizing: border-box;
    padding: 18px 0;
    background: #8F1525;
    overflow: hidden !important;

    .footer-slider {
      width: 980px;
      margin: auto;
      margin-bottom: -10px;
    }

    ::v-deep {
      .slick-slide {
        img {
          margin: auto;

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }

  .footerInfo {
    width: 980px;
    margin: 0 auto;
    padding-bottom: 50px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 307px 1fr;
    grid-gap: 29px;

    .banner-list {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 19px;
      height: fit-content;

      a {
        height: fit-content;
        display: block;

        &:hover {
          opacity: 0.6;
        }
      }

      a.link-custom {
        &:hover {
          opacity: 1;
        }
      }
    }

    .footer-banner {
      margin-bottom: 20px;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .footerDefoltNav {
    clear: both;
    overflow: hidden;
    background-color: #c52035;

    .defoltBnr {
      padding: 10px;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        li {
          width: 24%;
          line-height: 0;
          list-style: none;

          &:last-child {
            flex-grow: 1;
          }

          @media only screen and (max-width: 767px) {
            margin: auto;
            width: 47%;
            flex-grow: unset !important;

            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 10px;
            }

            a {
              img {
                width: 100% !important;
                height: auto !important;
              }
            }
          }

          a {
            display: block;
            background-color: #fff;
            text-align: center;

            img {
              width: auto;
              height: 40px;
            }
          }
        }
      }
    }

    .footTxtNav {
      clear: both;

      li {
        width: 100%;
        border-bottom: 1px solid #ce4153;
        list-style-type: none;

        &:first-child {
          border-top: 1px solid #ce4153;
        }

        a {
          display: block;
          padding: 15px;
          color: #fff;
          font-size: 14px;
          max-height: 46px;

          &:hover {
            background-color: #ce4153;
          }
        }
      }
    }

    #copyright {
      padding: 10px 10px 10px 0;
      text-align: right;
      color: #e2909a;
      font-size: 12px;
      margin-bottom: 0;
    }
  }

  #footBnrList {
    .mobile-box {
      padding-left: 12px !important;
    }

    ul {
      padding-left: 0;

      li {
        margin-bottom: 10px;
        list-style: none;

        &.recruit {
          &:hover {
            opacity: 0.8;
          }

          a {
            display: block;
            padding: 18px 0 15px 70px;
            background: url('/assets/images/bnr_recruit.webp') no-repeat;
            background-size: 70px auto;
            background-position: 3px bottom;
            background-color: #c7273b;
            box-sizing: padding-box;
          }

          p {
            text-align: center;
            color: #f8efdd;
            font-size: 13px;
            margin-bottom: 0;

            span {
              display: block;
              padding-top: 3px;
              font-size: 0.8em;
            }
          }
        }

        &.pointcard {

          &:hover {
            opacity: 0.8;
          }

          a {
            display: block;
            padding: 20px 0 15px 95px;
            background: url('/assets/images/bnr_point.webp') no-repeat;
            background-size: 95px auto;
            background-position: 2px 0;
            background-color: #ffc932;
            box-sizing: padding-box;

            p {
              text-align: center;
              color: #282828;
              font-size: 16px;
              line-height: 19.2px;
              margin-bottom: 0;

              span {
                display: block;
                padding-top: 5px;
                font-size: 0.6em;
              }
            }
          }
        }

        &.kidsclub {
          width: 100%;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}

.drawer-hamburger {
  position: fixed;
  z-index: 104;
  top: 12px;
  display: block;
  box-sizing: border-box;
  width: 44px;
  height: 40px;
  right: 12px;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translate3d(0, 0, 0);
  border: 0;
  outline: 0;

  &.open {
    right: 0;
    top: 0;

    img {
      height: inherit;
    }

    @media only screen and (min-width: 415px) {
      right: 400px;
      height: 44px;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
}

.root-page {
  visibility: hidden;
  width: 30px;

  &:hover {
    opacity: 0.6;
  }

  @media only screen and (min-width: 1024px) {
    visibility: visible;
    width: unset;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
}

.wrap-navMobile {
  overflow-y: auto;
  background-color: #c7273b;
  height: 100%;

  .navTitle {
    padding: 10px 0;
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-bottom: 0;
  }

  .nav-list {
    li {
      border: 2px solid #c7273b;
      border-top: 0;

      a {
        display: block;
        padding: 8px 0 10px 7px;
        background: url('/assets/images/ico_arrow05.webp') no-repeat;
        background-position: 98% 50%;
        background-color: #fff;
        color: #666666;
        font-size: 14px;

        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          padding-right: 7px;
          vertical-align: bottom;
          color: #c7273b;
          fill: #c7273b;
        }

        &.nav-child {
          padding-left: 30px;
          background-color: #faeaec;

          &:hover {
            background-color: #f4d4d8;
          }
        }

        &:hover {
          background-color: #faeaec;
        }
      }
    }
  }

  .subNavi {
    padding: 20px 10px 20px 10px;

    li {
      margin-bottom: 5px;

      a {
        display: block;
        padding: 10px 0;
        background-color: #f3e7cd;
        border: 2px solid #ccc;
        text-align: center;
        color: #c7273b;
        font-size: 14px;
        height: 40px;

        &:hover {
          background-color: #fff;
        }
      }

      &.company a {
        background-color: #666;
        color: #fff;

        &:hover {
          background-color: #fff;
          color: black;
        }
      }
    }
  }
}

.svgDefolt {
  display: none;
}
</style>


<style lang="scss">
.v-breadcrumbs {
  display: flex !important;
  list-style-type: none !important;
  padding: 18px 12px;

  @media only screen and (max-width: 1023px) {
    padding: 10px !important;
  }
}

.v-application a {
  color: #087295;
}

.footer-slider-homepage {
  margin-bottom: 30px !important;

  .slick-dots {
    display: block !important;
    bottom: -40px !important;
  }

}
</style>

<style lang="scss">
.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  width: calc(100vw - 76px) !important;
}

.drawer-hamburger.open {
  left: 17px;

  img {
    width: 44px;
    height: 44px;
  }
}
</style>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
