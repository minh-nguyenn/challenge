import{B as e,J as t,L as n,d as r,i,kt as a,m as o,p as s,st as c,t as l,u,v as d,y as f}from"./D9xJr2Zl.js";import{c as p,i as m}from"#entry";import{t as h}from"./XJ4V3T5q.js";import{n as g,t as _}from"./CEAVOtS7.js";import{t as v}from"./BXa1aKUa.js";import{t as y}from"./6x37F6G9.js";var b={class:`wrap-content page-pad`},x={key:0,class:`ct-empty`},S={class:`ct-hint`},C={class:`ct-list`},w={class:`ct-main`},T={class:`ct-name`},E={key:0,class:`ct-tag-sale`},D={class:`ct-meta`},O={key:0,class:`ct-uriba`},k={key:1,class:`ct-unit`},A={class:`ct-qty`},j=[`onClick`],M={class:`ct-qty-n`},N=[`onClick`],P={class:`ct-price`},F={key:0,class:`ct-price-old`},I={class:`ct-price-new`},L=[`onClick`],R={class:`ct-summary`},z={class:`ct-sum-row`},B={key:0,class:`ct-sum-row ct-sum-saved`},V={class:`ct-checkout`},H=[`href`],U={class:`ct-actions`},W=`https://shop.entstore.co.jp/`,G=l({__name:`cart`,setup(l){let G=g(),K=u(()=>[{text:`ホーム`,disabled:!1,href:`/`},{text:`カート`,disabled:!0,href:`/cart`}]);return p({title:`カート｜遠鉄ストア`}),(l,u)=>{let p=v,g=m,q=h,J=y;return n(),o(`div`,null,[r(`div`,b,[r(`main`,null,[f(p,{items:K.value,divider:`>`},null,8,[`items`]),u[34]||=d(),u[35]||=r(`h2`,null,`カート`,-1),u[36]||=d(),f(q,null,{default:t(()=>[c(G).items.value.length?(n(),o(i,{key:1},[u[29]||=r(`p`,{class:`ct-lead`},[r(`span`,{class:`ct-badge-demo`},`DEMO`),d(`
              価格は実際の販売価格ではありません。デモ用の仮データです。
            `)],-1),u[30]||=d(),r(`ul`,C,[(n(!0),o(i,null,e(c(G).items.value,e=>(n(),o(`li`,{key:e.id,class:`ct-item`},[r(`div`,w,[r(`p`,T,[d(a(e.name)+` `,1),e.salePrice?(n(),o(`span`,E,`🔥特売`)):s(``,!0)]),u[11]||=d(),r(`p`,D,[e.uribaLabel?(n(),o(`span`,O,a(e.uribaLabel),1)):s(``,!0),u[10]||=d(),e.unit?(n(),o(`span`,k,a(e.unit),1)):s(``,!0)])]),u[15]||=d(),r(`div`,A,[r(`button`,{type:`button`,"aria-label":`減らす`,onClick:t=>c(G).setQty(e.id,e.qty-1)},`
                    −
                  `,8,j),u[12]||=d(),r(`span`,M,a(e.qty),1),u[13]||=d(),r(`button`,{type:`button`,"aria-label":`増やす`,onClick:t=>c(G).setQty(e.id,e.qty+1)},`
                    ＋
                  `,8,N)]),u[16]||=d(),r(`div`,P,[e.salePrice?(n(),o(`span`,F,a(e.taxIncluded)+`円`,1)):s(``,!0),u[14]||=d(),r(`span`,I,a((c(G).unitPrice(e)*e.qty).toLocaleString())+`円
                  `,1)]),u[17]||=d(),r(`button`,{type:`button`,class:`ct-remove`,"aria-label":`削除`,onClick:t=>c(G).remove(e.id)},`
                  ✕
                `,8,L)]))),128))]),u[31]||=d(),r(`div`,R,[r(`p`,z,[r(`span`,null,`小計（`+a(c(G).count.value)+` 点）`,1),u[18]||=d(),r(`strong`,null,a(c(G).subtotal.value.toLocaleString())+`円`,1)]),u[21]||=d(),c(G).saved.value>0?(n(),o(`p`,B,[u[19]||=r(`span`,null,`特売による割引`,-1),u[20]||=d(),r(`strong`,null,`−`+a(c(G).saved.value.toLocaleString())+`円`,1)])):s(``,!0)]),u[32]||=d(),r(`div`,V,[r(`a`,{href:c(_),target:`_blank`,rel:`noopener`,class:`ct-buy`},`
                ご購入手続きへ（遠鉄ストアネット通販）
              `,8,H),u[24]||=d(),r(`p`,{class:`ct-note`},[u[22]||=d(`
                ご購入は既存のネットスーパー
                `,-1),r(`a`,{href:W,target:`_blank`,rel:`noopener`},`shop.entstore.co.jp`),u[23]||=d(`
                で完了します。
              `,-1)]),u[25]||=d(),u[26]||=r(`p`,{class:`ct-note ct-note-warn`},`
                ※ デモ版のため、カートの中身は引き継がれません。引き継ぐには
                ネットスーパー側のカート連携APIが必要です。
              `,-1)]),u[33]||=d(),r(`div`,U,[f(g,{class:`ct-continue`,to:`/products`},{default:t(()=>[...u[27]||=[d(`買い物を続ける`,-1)]]),_:1}),u[28]||=d(),r(`button`,{type:`button`,class:`ct-clear`,onClick:u[0]||=e=>c(G).clear()},`カートを空にする`)])],64)):(n(),o(`div`,x,[u[5]||=r(`p`,null,`カートは空です。`,-1),u[6]||=d(),u[7]||=r(`p`,{class:`ct-hint`},`商品一覧から「🛒 カートに入れる」で追加できます。`,-1),u[8]||=d(),r(`p`,S,[u[2]||=d(`
              お店で買う場合は
              `,-1),f(g,{to:`/list`},{default:t(()=>[...u[1]||=[d(`買い物リスト`,-1)]]),_:1}),u[3]||=d(`
              が便利です（売場ごとに並びます）。
            `,-1)]),u[9]||=d(),f(g,{class:`ct-link`,to:`/products`},{default:t(()=>[...u[4]||=[d(`商品一覧を見る ›`,-1)]]),_:1})]))]),_:1}),u[37]||=d(),f(J,{class:`d-none-mobile ct-back`,title:`前のページへ戻る`,"is-back":``,href:`/`})])])])}}},[[`__scopeId`,`data-v-9ab8a67c`]]);export{G as default};