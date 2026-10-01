import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/pages/privacy.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	data() {
		return { breadcrumbItems: [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "個人情報保護方針",
			disabled: true,
			href: "/privacy"
		}] };
	},
	setup() {
		useHead$1({ title: "個人情報保護方針｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-8b374d91><main data-v-8b374d91>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-8b374d91>個人情報保護方針</h2> <div class="mobile-box" data-v-8b374d91><p data-v-8b374d91>
          株式会社遠鉄ストア（以下「弊社」といいます）は、弊社が保有する個人情報について、個人の人格尊重の理念のもとに慎重に取り扱われるべきものとし、その取扱いにおいては「個人情報の保護に関する法律」（個人情報保護法）及び関連する法令、ガイドライン等を遵守した業務運営に努め、以下の方針に従って個人情報保護に万全を尽くします。
        </p> <ul data-v-8b374d91><li data-v-8b374d91>1.個人情報の取得・利用</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>
              弊社は、個人情報を取得する際には、利用目的を公表または通知し（本方針による公表を含む。）、また、直接ご本人様から契約書その他の書面（電磁的記録を含む）に記載された個人情報を取得する場合にはあらかじめ利用目的を明示し、適法かつ公正な手段によって取得いたします。
            </li> <li data-v-8b374d91>弊社は、利用目的の達成に必要な範囲内で、適正に個人情報を利用いたします。</li></ul> <li data-v-8b374d91>2.個人情報の利用目的</li> <ul class="under" data-v-8b374d91><ul class="inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（１）お客様に関する個人情報<br data-v-8b374d91>
                弊社が行う各事業の商品・情報・サービス提供のための郵便物発送、電話、電子メールの発信、ショートメッセージ、アフターサービスおよびマーケティング活動など、各事業の達成に必要な範囲で利用します。（詳細は各事業別の利用目的を参照）<br data-v-8b374d91>
                ・スーパーマーケット事業<br data-v-8b374d91>
                ・ドラッグストア事業<br data-v-8b374d91>
                ・調剤事業</li></ul> <ul class="inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（２）お取引様（法人のお客様の場合はその役職員の皆様）に関する個人情報<br data-v-8b374d91>
                弊社の事業・サービスに関するお取引を履行し、管理するために利用します。</li></ul> <ul class="inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（３）採用・募集活動応募者様に関する個人情報<br data-v-8b374d91>
                応募者様への連絡・情報提供に利用するほか、取得した情報を分析し、採否検討・決定に利用します。</li></ul> <ul class="inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（４）従業員に関する個人情報<br data-v-8b374d91>
                人事業務としての社員管理や連絡、グループの商品・サービスおよび福利厚生等の情報提供ならびに個人を特定しない統計資料の作成に利用します。</li></ul></ul> <li data-v-8b374d91>3.安全管理措置に関する事項</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>
              弊社は、個人情報について、以下のとおり漏えい、滅失又は毀損の防止等、個人データの必要かつ適切な管理のための措置を講じます。また、個人データを取り扱う従業者や委託先（再委託先等を含みます。）に対して、必要かつ適切な監督を行います。
            </li> <li class="inunder text_indent" data-v-8b374d91>（個人情報保護方針の策定）<br data-v-8b374d91>
              ・個人情報の適正な取扱いを確保し、質問及び苦情処理の窓口をお知らせするため、本方針を定めています。</li> <li class="inunder text_indent" data-v-8b374d91>（個人データの取扱いに係る規律の整備）<br data-v-8b374d91>
              ・取得、利用、保存、提供、削除・廃棄等の段階ごとに、取扱方法、責任者・担当者及びその任務等について遠鉄グループ個人情報保護規程を<br data-v-8b374d91> 策定しています。</li> <li class="inunder text_indent" data-v-8b374d91>（組織的安全管理措置）<br data-v-8b374d91>
              ・個人データの取扱いに関する管理者を設置するとともに、個人データを取り扱う従業者及び当該従業者が取り扱う個人データの範囲を明確化し、<br data-v-8b374d91> 個人情報保護法や遠鉄グループ個人情報保護規程に違反している事実又は兆候を把握した場合の事務取扱責任者への報告連絡体制を<br data-v-8b374d91> 整備しています。<br data-v-8b374d91>
              ・個人データの取扱状況について、定期的に自己点検を実施するとともに、他部署や外部の者による監査を実施しています。</li> <li class="inunder text_indent" data-v-8b374d91>（人的安全管理措置）<br data-v-8b374d91>
              ・個人情報の取扱いに関する留意事項について、従業者に定期的な研修を実施しています。<br data-v-8b374d91>
              ・個人情報についての秘密保持に関する事項を就業規則に記載しています。</li> <li class="inunder text_indent" data-v-8b374d91>（物理的安全管理措置）<br data-v-8b374d91>
              ・個人データを取り扱う区域において、従業者の入退室管理及び持ち込む機器等の制限を行うとともに、権限を有しない者による個人データの<br data-v-8b374d91> 閲覧を防止する措置を実施しています。<br data-v-8b374d91>
              ・個人データを取り扱う機器、電子媒体及び書類等の盗難又は紛失等を防止するための措置を講じるとともに、事業所内の移動を含め、<br data-v-8b374d91> 当該機器、電子媒体等を持ち運ぶ場合、容易に個人データが判明しないよう措置を実施しています。
            </li> <li class="inunder text_indent" data-v-8b374d91>（技術的安全管理措置）<br data-v-8b374d91>
              ・アクセス制御を実施して、担当者及び取り扱う個人情報データベース等の範囲を限定しています。<br data-v-8b374d91>
              ・個人データを取り扱う情報システムを外部からの不正アクセス又は不正ソフトウェアから保護する仕組みを導入しています。</li> <li class="inunder text_indent" data-v-8b374d91>（外的環境の把握）<br data-v-8b374d91>
              ・弊社は、システム業務委託先子会社（遠鉄ベトナム有限会社）の所在地であるベトナムにおける個人情報の保護に関する<br data-v-8b374d91> 制度を把握した上で安全管理措置を実施しています。</li></ul> <li data-v-8b374d91>4.個人情報の第三者提供について</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>弊社は、以下のいずれかに該当する場合を除き、お預かりした個人情報を第三者に提供することはありません。<br data-v-8b374d91>
              なお、仮名加工情報は、（２）（３）（７）の場合を除き第三者に提供することはありません。</li> <li class="text_indent_3 inunder" data-v-8b374d91>（１）ご本人の同意をいただいた場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>（２）利用目的の達成に必要な範囲内において外部委託した場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>（３）法令に基づき提供を求められた場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>（４）人の生命、身体または財産の保護のために必要な場合であって、ご本人の同意を得ることが困難である場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>（５）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>
              （６）国または地方公共団体などが法令の定める事務を実施するうえで、協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>（７）共同利用者（６．共同利用を参照）の範囲に掲げる者に対して提供する場合</li> <li class="text_indent_3 inunder" data-v-8b374d91>
              （８）カード発行会社がおこなう不正利用検知・防止のためにお客様から収集した個人情報（インターネット利用環境に関する情報等）をカード発行会社へ提供する場合<br data-v-8b374d91>
              なお、お客様が利用されているカード発行会社が外国にある場合、これらの情報は当該発行会社が所属する国に移転される場合があります。<br data-v-8b374d91>
              お客様が未成年の場合、親権者または後見人の承諾を得た上で、本サービスを利用するものとします。
            </li></ul> <li data-v-8b374d91>5.委託</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>弊社は、次の各事業において利用目的の達成に必要な範囲内において第三者に事務等の委託をすることがあります。この場合、弊社は個人情報保護法に従って、委託先に対する必要かつ適切な監督を行います。</li> <li data-v-8b374d91>・スーパーマーケット事業</li> <li data-v-8b374d91>・ドラッグストア事業</li> <li data-v-8b374d91>・調剤事業</li></ul> <li data-v-8b374d91>6.個人情報の共同利用</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>弊社は、お客様の個人情報を次のとおり共同利用させていただきます。</li> <ul class="text_indent inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（１）共同して利用する個人情報の項目<br data-v-8b374d91>
                お客様の氏名、住所、電話番号、性別、生年月日、メールアドレス、およびお客様との取引に関する事項<br data-v-8b374d91>
                ・共同利用者の範囲<br data-v-8b374d91>
                 株式会社マツモトキヨシ<br data-v-8b374d91>
                ・利用目的<br data-v-8b374d91>
                 上記２（１）「お客様に関する個人情報」の利用目的の範囲で共同利用いたします。<br data-v-8b374d91>
                ・共同利用する個人データの管理について責任を有する会社の名称・住所・代表者等<br data-v-8b374d91>
                 会社名：株式会社遠鉄ストア<br data-v-8b374d91>
                 住所：静岡県浜松市中央区佐鳴台4-16-10<br data-v-8b374d91>
                 代表者：取締役社長 宮田洋
              </li></ul> <ul class="text_indent inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（２）共同して利用する個人情報の項目<br data-v-8b374d91>
                お客様の氏名、住所、電話番号、性別、生年月日、メールアドレス、およびお客様との取引に関する事項<br data-v-8b374d91>
                ・共同利用者の範囲<br data-v-8b374d91>
                 株式会社シャトレーゼ<br data-v-8b374d91>
                ・利用目的<br data-v-8b374d91>
                 上記２（１）「お客様に関する個人情報」の利用目的の範囲で共同利用いたします。<br data-v-8b374d91>
                ・共同利用する個人データの管理について責任を有する会社の名称・住所・代表者等<br data-v-8b374d91>
                 会社名：株式会社遠鉄ストア<br data-v-8b374d91>
                 住所：静岡県浜松市中央区佐鳴台4-16-10<br data-v-8b374d91>
                 代表者：取締役社長 宮田洋
              </li></ul> <ul class="text_indent inunder" data-v-8b374d91><li class="text_indent_3" data-v-8b374d91>（３）共同して利用する個人情報の項目<br data-v-8b374d91>
                お客様の氏名、住所、電話番号、性別、生年月日、メールアドレス<br data-v-8b374d91>
                ・共同利用者の範囲<br data-v-8b374d91>
                 遠鉄グループ各社（海外法人を除く）※遠鉄グループ各社は<a href="https://www.entetsu.co.jp/company/group/" class="privacy_link" target="_blank" data-v-8b374d91>コチラ</a>をご確認ください<br data-v-8b374d91>
                ・利用目的<br data-v-8b374d91>
                 遠鉄グループとしての経営管理業務の遂行ならびにお客様への商品・サービス等のご案内・ご提供およびその判断のために共同利用いたします。<br data-v-8b374d91>
                ・共同利用する個人データの管理について責任を有する会社の名称・住所・代表者等<br data-v-8b374d91>
                 会社名：遠州鉄道株式会社<br data-v-8b374d91>
                 住所：〒432-8655 浜松市中央区旭町12-1 遠鉄百貨店新館 事務所フロア12階<br data-v-8b374d91>
                 代表者：取締役社長 丸山晃司<br data-v-8b374d91>
                 管理担当：遠州鉄道個人情報保護事務局
              </li></ul></ul> <li data-v-8b374d91>7.Cookie等に紐づけされた情報の取得・利用・提供</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>
              Cookie（クッキー）とは、ウェブサイトを閲覧した際の情報をユーザーが使用されたインターネット閲覧ソフト（ウェブブラウザ）に保存させる機能です。保存される情報には、ユーザーの氏名、住所、電話番号など個人を特定する情報は一切含まれません。また、ユーザーのデバイス（コンピューター又はモバイルデバイス等）へ悪影響を及ぼすことはありません。弊社ウェブサイトではCookie、またはそれに類似する技術（以下
              Cookie等という）を利用して収集した閲覧情報等を以下の目的のために利用することがあります。</li> <li data-v-8b374d91>・弊社ウェブサイトにおけるユーザーの利便性向上および品質維持・改善</li> <li data-v-8b374d91>・ターゲティング広告配信および広告活動</li></ul> <ul class="under" data-v-8b374d91><li data-v-8b374d91>
              弊社は、Cookie等に保存された情報を以下の広告配信サービス会社に提供し、広告配信のために利用することがあります。ユーザーは、広告・宣伝の配信を望まない場合、各広告配信サービス会社のサイトにアクセスし無効化の手続きをとることにより、広告・宣伝の配信を停止することができます。また、ユーザーは、ご自身でウェブブラウザの設定を変更することで、Cookieの受信を拒否することも可能です。
            </li></ul> <ul class="under" data-v-8b374d91><li data-v-8b374d91>ウェブブラウザの設定方法は各ソフト製造元へお問い合わせください。</li> <li data-v-8b374d91>・Google <a href="https://policies.google.com/technologies/ads?hl=ja" class="browser_link" target="_blank" data-v-8b374d91>【 https://policies.google.com/technologies/ads?hl=ja 】</a></li> <li data-v-8b374d91>・Yahoo! <a href="https://btoptout.yahoo.co.jp/optout/index.html" class="browser_link" target="_blank" data-v-8b374d91>【
                https://btoptout.yahoo.co.jp/optout/index.html 】</a></li> <li data-v-8b374d91>・Facebook <a href="https://www.facebook.com/legal/terms" class="browser_link" target="_blank" data-v-8b374d91>【
                https://www.facebook.com/legal/terms 】</a></li> <li data-v-8b374d91>・LINE <a href="https://optout.tr.line.me/" class="browser_link" target="_blank" data-v-8b374d91>【
                https://optout.tr.line.me/ 】</a></li></ul> <li data-v-8b374d91>8.仮名加工情報</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>弊社は、次の各事業において、情報と照合しない限りお客様を識別することができないように加工した仮名加工情報を作成し公表する目的の範囲内で利用しています。</li> <li data-v-8b374d91>・スーパーマーケット事業</li> <li data-v-8b374d91>・ドラッグストア事業</li> <li data-v-8b374d91>・調剤事業</li> <li data-v-8b374d91>弊社は仮名加工情報について、「遠鉄グループ個人情報保護規程」を遵守して安全管理のための措置を講じます。</li></ul> <li data-v-8b374d91>9.匿名加工情報</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>
              弊社は、次の各事業において、お客様を識別することができないよう加工した匿名加工情報を作成し、第三者に提供しています。匿名加工情報に含まれる項目や提供方法は各事業の「匿名加工情報の作成と第三者提供」を参照下さい。
            </li> <li data-v-8b374d91>・スーパーマーケット事業</li> <li data-v-8b374d91>・ドラッグストア事業</li> <li data-v-8b374d91>・調剤事業</li> <li data-v-8b374d91>弊社は匿名加工情報について、「遠鉄グループ個人情報保護規程」ならびに「遠鉄グループ匿名加工情報取扱規程」を遵守して安全管理のための措置を講じます。</li></ul> <li data-v-8b374d91>10.保有個人データの開示等の請求</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>
              弊社は､本人またはその代理人から、当該保有個人データの開示のご請求があったときは、次の各号の場合を除き、遅滞なく回答します。なお、開示しない場合または当該保有個人データが存在しない場合にはその旨を回答します（仮名加工情報を除く）。
            </li> <li data-v-8b374d91>（１）本人または第三者の生命、身体、財産その他の権利利益を害する恐れがある場合</li> <li data-v-8b374d91>（２）当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li> <li data-v-8b374d91>（３）法令に違反することとなる場合</li> <ul class="inunder" data-v-8b374d91><li data-v-8b374d91>
                また、弊社は、本人またはその代理人から、当該保有個人データに関して、訂正･追加もしくは削除のご請求または利用の停止・消去もしくは第三者提供の停止のご請求があったときも、調査の上、法令に従って対応いたします。<br data-v-8b374d91>
                なお、開示等のご請求に際してご提出いただく書面およびご請求の方法等については、<a href="/images/pdf/privacyinvoice.pdf" class="privacy_link" target="_blank" data-v-8b374d91>コチラ</a>をご参照ください。</li></ul></ul> <li data-v-8b374d91>11.ご質問及び苦情処理の窓口</li> <ul class="under" data-v-8b374d91><li data-v-8b374d91>弊社の個人情報の取り扱いに関する質問または苦情につきましては、下記の窓口までお問い合わせください。</li> <li data-v-8b374d91>窓口：株式会社遠鉄ストア 総務課</li> <li data-v-8b374d91>住所：〒432-8021 浜松市中央区佐鳴台4-16-10</li> <li data-v-8b374d91>電話番号：053-445-1000</li> <li data-v-8b374d91>受付時間：月曜～金曜（祝日・年末年始は除く）9時30分～12時、13時～17時</li> <ul class="text_indent inunder text-right" data-v-8b374d91><li data-v-8b374d91>2022年4月1日<br data-v-8b374d91>
                株式会社遠鉄ストア<br data-v-8b374d91>
                浜松市中央区佐鳴台4-16-10<br data-v-8b374d91>
                取締役社長 宮田洋
              </li></ul></ul></ul></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "スーパーマーケット事業",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 data-v-8b374d91${_scopeId}>お客様に関する個人情報の利用目的</h4> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【えんてつカード会員又はキッズクラブ会員入会時及びご利用時にご提供いただく個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）ポイントサービス等の提供</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動
          </li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li> <li data-v-8b374d91${_scopeId}>（６）スマートレシートサービスの提供</li></ul> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【商品（ギフト品・ご予約品）ご注文時にご提供頂く個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）商品の配送</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動</li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li></ul> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【「イベント・キャンペーン」懸賞応募時にご提供いただく個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）当選者の決定、景品のお引渡し</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動</li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li></ul> <h4 data-v-8b374d91${_scopeId}>委託</h4> <p data-v-8b374d91${_scopeId}>商品の配送業務、懸賞の集計・抽選、当選者への景品発送業務、レシート情報の送信事務を第三者に委託する場合があります。</p> <h4 data-v-8b374d91${_scopeId}>匿名加工情報の作成と第三者提供</h4> <ul data-v-8b374d91${_scopeId}><li class="text_indent_3" data-v-8b374d91${_scopeId}>（１）匿名加工情報に含まれる個人に関する情報の項目<br data-v-8b374d91${_scopeId}>
            購入商品、購入店舗、購入日時</li> <li class="text_indent_3" data-v-8b374d91${_scopeId}>（２）提供される匿名加工情報に含まれる個人に関する情報の項目<br data-v-8b374d91${_scopeId}>
            （１）に同じ</li> <li class="text_indent_3" data-v-8b374d91${_scopeId}>（３）提供の方法<br data-v-8b374d91${_scopeId}>
            電子ファイルは電子的な通信手段、紙ファイルは郵送または直接提供</li></ul>`);
			else return [
				createVNode("h4", null, "お客様に関する個人情報の利用目的"),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【えんてつカード会員又はキッズクラブ会員入会時及びご利用時にご提供いただく個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）ポイントサービス等の提供"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動\n          "),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡"),
					createTextVNode(),
					createVNode("li", null, "（６）スマートレシートサービスの提供")
				]),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【商品（ギフト品・ご予約品）ご注文時にご提供頂く個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）商品の配送"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動"),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡")
				]),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【「イベント・キャンペーン」懸賞応募時にご提供いただく個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）当選者の決定、景品のお引渡し"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動"),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡")
				]),
				createTextVNode(),
				createVNode("h4", null, "委託"),
				createTextVNode(),
				createVNode("p", null, "商品の配送業務、懸賞の集計・抽選、当選者への景品発送業務、レシート情報の送信事務を第三者に委託する場合があります。"),
				createTextVNode(),
				createVNode("h4", null, "匿名加工情報の作成と第三者提供"),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（１）匿名加工情報に含まれる個人に関する情報の項目"),
						createVNode("br"),
						createTextVNode("\n            購入商品、購入店舗、購入日時")
					]),
					createTextVNode(),
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（２）提供される匿名加工情報に含まれる個人に関する情報の項目"),
						createVNode("br"),
						createTextVNode("\n            （１）に同じ")
					]),
					createTextVNode(),
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（３）提供の方法"),
						createVNode("br"),
						createTextVNode("\n            電子ファイルは電子的な通信手段、紙ファイルは郵送または直接提供")
					])
				])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "ドラッグストア事業",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 data-v-8b374d91${_scopeId}>お客様に関する個人情報の利用目的</h4> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【えんてつカード会員又はキッズクラブ会員入会時及びご利用時にご提供いただく個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）ポイントサービス等の提供</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動</li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li></ul> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【商品（ギフト品・ご予約品）ご注文時にご提供頂く個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）商品の配送</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動</li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li></ul> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【「イベント・キャンペーン」懸賞応募時にご提供いただく個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）当選者の決定、景品のお引渡し</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動</li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li></ul> <h4 data-v-8b374d91${_scopeId}>委託</h4> <p data-v-8b374d91${_scopeId}>商品の配送業務、懸賞の集計・抽選、当選者への景品発送業務を第三者に委託する場合があります。</p> <h4 data-v-8b374d91${_scopeId}>匿名加工情報の作成と第三者提供</h4> <ul data-v-8b374d91${_scopeId}><li class="text_indent_3" data-v-8b374d91${_scopeId}>（１）匿名加工情報に含まれる個人に関する情報の項目<br data-v-8b374d91${_scopeId}>
            購入商品、購入店舗、購入日時</li> <li class="text_indent_3" data-v-8b374d91${_scopeId}>（２）提供される匿名加工情報に含まれる個人に関する情報の項目<br data-v-8b374d91${_scopeId}>
            （１）に同じ</li> <li class="text_indent_3" data-v-8b374d91${_scopeId}>（３）提供の方法<br data-v-8b374d91${_scopeId}>
            電子ファイルは電子的な通信手段、紙ファイルは郵送または直接提供</li></ul>`);
			else return [
				createVNode("h4", null, "お客様に関する個人情報の利用目的"),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【えんてつカード会員又はキッズクラブ会員入会時及びご利用時にご提供いただく個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）ポイントサービス等の提供"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動"),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡")
				]),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【商品（ギフト品・ご予約品）ご注文時にご提供頂く個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）商品の配送"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動"),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡")
				]),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【「イベント・キャンペーン」懸賞応募時にご提供いただく個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）当選者の決定、景品のお引渡し"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動"),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡")
				]),
				createTextVNode(),
				createVNode("h4", null, "委託"),
				createTextVNode(),
				createVNode("p", null, "商品の配送業務、懸賞の集計・抽選、当選者への景品発送業務を第三者に委託する場合があります。"),
				createTextVNode(),
				createVNode("h4", null, "匿名加工情報の作成と第三者提供"),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（１）匿名加工情報に含まれる個人に関する情報の項目"),
						createVNode("br"),
						createTextVNode("\n            購入商品、購入店舗、購入日時")
					]),
					createTextVNode(),
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（２）提供される匿名加工情報に含まれる個人に関する情報の項目"),
						createVNode("br"),
						createTextVNode("\n            （１）に同じ")
					]),
					createTextVNode(),
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（３）提供の方法"),
						createVNode("br"),
						createTextVNode("\n            電子ファイルは電子的な通信手段、紙ファイルは郵送または直接提供")
					])
				])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "調剤事業",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 data-v-8b374d91${_scopeId}>お客様に関する個人情報の利用目的</h4> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>（１）調剤サービスの提供</li> <li data-v-8b374d91${_scopeId}>（２）医薬品を安全に使用していただくために必要な事項の把握（副作用歴、既往歴、アレルギー、体質、併用薬、ご住所や緊急時の連絡先など）</li> <li data-v-8b374d91${_scopeId}>（３）病院、診療所、薬局、訪問看護ステーション、介護サービス事業者などとの必要な連携</li> <li data-v-8b374d91${_scopeId}>（４）病院、診療所などからの照会への回答</li> <li data-v-8b374d91${_scopeId}>（５）家族などへの薬に関する説明</li> <li data-v-8b374d91${_scopeId}>（６）医療保険事務（審査支払機関への調剤報酬明細書の提出、審査支払機関または保険者からの照会への回答など）</li> <li data-v-8b374d91${_scopeId}>（７）薬剤師賠償責任保険などに係る保険会社への相談または届出など</li> <li data-v-8b374d91${_scopeId}>（８）調剤サービスや業務の維持・改善のための基礎資料</li> <li data-v-8b374d91${_scopeId}>（９）当薬局内で行う症例研究</li> <li data-v-8b374d91${_scopeId}>（１０）当薬局内で行う薬学生の薬局実務実習</li> <li data-v-8b374d91${_scopeId}>（１１）外部監査機関への情報提供</li> <li data-v-8b374d91${_scopeId}>（１２）学会、学術誌での発表、報告</li></ul> <ul data-v-8b374d91${_scopeId}><li data-v-8b374d91${_scopeId}>【「イベント・キャンペーン」懸賞応募時にご提供いただく個人情報】</li> <li data-v-8b374d91${_scopeId}>（１）当選者の決定、景品のお引渡し</li> <li data-v-8b374d91${_scopeId}>（２）お客様からの各種お問い合わせへの対応</li> <li data-v-8b374d91${_scopeId}>（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動</li> <li data-v-8b374d91${_scopeId}>（４）統計資料作成、顧客動向分析または商品開発等の調査分析</li> <li data-v-8b374d91${_scopeId}>（５）お客様との連絡</li></ul> <h4 data-v-8b374d91${_scopeId}>委託</h4> <p data-v-8b374d91${_scopeId}>商品の配送業務、懸賞の集計・抽選、当選者への景品発送業務を第三者に委託する場合があります。</p> <h4 data-v-8b374d91${_scopeId}>匿名加工情報の作成と第三者提供</h4> <ul data-v-8b374d91${_scopeId}><li class="text_indent_3" data-v-8b374d91${_scopeId}>（１）匿名加工情報に含まれる個人に関する情報の項目<br data-v-8b374d91${_scopeId}>
            購入商品、購入店舗、購入日時</li> <li class="text_indent_3" data-v-8b374d91${_scopeId}>（２）提供される匿名加工情報に含まれる個人に関する情報の項目<br data-v-8b374d91${_scopeId}>
            （１）に同じ</li> <li class="text_indent_3" data-v-8b374d91${_scopeId}>（３）提供の方法<br data-v-8b374d91${_scopeId}>
            電子ファイルは電子的な通信手段、紙ファイルは郵送または直接提供</li></ul>`);
			else return [
				createVNode("h4", null, "お客様に関する個人情報の利用目的"),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "（１）調剤サービスの提供"),
					createTextVNode(),
					createVNode("li", null, "（２）医薬品を安全に使用していただくために必要な事項の把握（副作用歴、既往歴、アレルギー、体質、併用薬、ご住所や緊急時の連絡先など）"),
					createTextVNode(),
					createVNode("li", null, "（３）病院、診療所、薬局、訪問看護ステーション、介護サービス事業者などとの必要な連携"),
					createTextVNode(),
					createVNode("li", null, "（４）病院、診療所などからの照会への回答"),
					createTextVNode(),
					createVNode("li", null, "（５）家族などへの薬に関する説明"),
					createTextVNode(),
					createVNode("li", null, "（６）医療保険事務（審査支払機関への調剤報酬明細書の提出、審査支払機関または保険者からの照会への回答など）"),
					createTextVNode(),
					createVNode("li", null, "（７）薬剤師賠償責任保険などに係る保険会社への相談または届出など"),
					createTextVNode(),
					createVNode("li", null, "（８）調剤サービスや業務の維持・改善のための基礎資料"),
					createTextVNode(),
					createVNode("li", null, "（９）当薬局内で行う症例研究"),
					createTextVNode(),
					createVNode("li", null, "（１０）当薬局内で行う薬学生の薬局実務実習"),
					createTextVNode(),
					createVNode("li", null, "（１１）外部監査機関への情報提供"),
					createTextVNode(),
					createVNode("li", null, "（１２）学会、学術誌での発表、報告")
				]),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", null, "【「イベント・キャンペーン」懸賞応募時にご提供いただく個人情報】"),
					createTextVNode(),
					createVNode("li", null, "（１）当選者の決定、景品のお引渡し"),
					createTextVNode(),
					createVNode("li", null, "（２）お客様からの各種お問い合わせへの対応"),
					createTextVNode(),
					createVNode("li", null, "（３）商品・情報・サービス提供のための郵便物、広告印刷物、電話、電子メール、訪問等による営業活動やアフターサービス及びマーケティング活動"),
					createTextVNode(),
					createVNode("li", null, "（４）統計資料作成、顧客動向分析または商品開発等の調査分析"),
					createTextVNode(),
					createVNode("li", null, "（５）お客様との連絡")
				]),
				createTextVNode(),
				createVNode("h4", null, "委託"),
				createTextVNode(),
				createVNode("p", null, "商品の配送業務、懸賞の集計・抽選、当選者への景品発送業務を第三者に委託する場合があります。"),
				createTextVNode(),
				createVNode("h4", null, "匿名加工情報の作成と第三者提供"),
				createTextVNode(),
				createVNode("ul", null, [
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（１）匿名加工情報に含まれる個人に関する情報の項目"),
						createVNode("br"),
						createTextVNode("\n            購入商品、購入店舗、購入日時")
					]),
					createTextVNode(),
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（２）提供される匿名加工情報に含まれる個人に関する情報の項目"),
						createVNode("br"),
						createTextVNode("\n            （１）に同じ")
					]),
					createTextVNode(),
					createVNode("li", { class: "text_indent_3" }, [
						createTextVNode("（３）提供の方法"),
						createVNode("br"),
						createTextVNode("\n            電子ファイルは電子的な通信手段、紙ファイルは郵送または直接提供")
					])
				])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile btn-back",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var privacy_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8b374d91"]]);

export { privacy_default as default };
//# sourceMappingURL=privacy-CwrQfd3i.mjs.map
