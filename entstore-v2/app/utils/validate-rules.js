/**
 * Cac luat kiem tra chep NGUYEN VAN tu plugins/vee-validate.js cua site goc
 * (ke ca cac regex dai cua so dien thoai Nhat), de hanh vi kiem tra khong doi.
 *
 * Tra ve true neu hop le, hoac chuoi thong bao loi.
 */
const regExpZenkaku = /^[ぁ-んー\s]+$/u
const regExpNumber = /^\d+$/

function isValidEmail(email) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
}

function isValidZipcode(code) {
  return /^[0-9]{3}-[0-9]{4}$/.test(code) || /^[0-9]{7}$/.test(code)
}

function isValidTel(code) {
  const patterns = [
    /^[0][0-9]{1}[-ーー−][0-9]{4}[-ーー−][0-9]{4}$/,
    /^[0][0-9]{2}[-ーー−][0-9]{3}[-ーー−][0-9]{4}$/,
    /^[0][0-9]{3}[-ーー−][0-9]{2}[-ーー−][0-9]{4}$/,
    /^[0][0-9]{4}[-ーー−][0-9]{1}[-ーー−][0-9]{4}$/,
    /^(0[256789]0)[-ーー−][0-9]{4}[-ーー−][0-9]{4}$/,
    /^\+[0-9]{1,2}[ ][0-9]{2,4}[-ーー−][0-9]{3,4}[-ーー−][0-9]{4}$|\+[0-9]{1,2}[ ][0-9]{10}$|\+[0-9]{11,12}$/,
    /^[0-9]{10,11}$/,
  ]
  return patterns.some((p) => p.test(code))
}

export const RULES = {
  required(value, _p, field) {
    if (value === 0) return true
    if (!value || String(value).trim().length === 0) return `${field}は、必ず指定してください。`
    return true
  },
  email: (v) => isValidEmail(v) || 'メールアドレスの形式が正しくありません。',
  zenkaku_hiragana: (v) => regExpZenkaku.test(v) || 'お名前ふりがな を入力して下さい。',
  number: (v) => regExpNumber.test(v) || '数字で入力してください。',
  zipcode: (v) => isValidZipcode(v) || '郵便番号の形式が正しくありません。',
  tel: (v) => isValidTel(v) || '電話番号の形式が正しくありません。',
  email_confirmation: (v, target) => v === target || 'メールアドレスが一致しません。',
  isTrue: (v) => (v === 0 ? true : !v || v.length === 0 ? '必ず指定してください。' : true),
  maxlength: (v, n) => (String(v).length > Number(n) ? `${n}文字以下にしてください。` : true),
  minlength: (v, n) => (String(v).length < Number(n) ? `${n}文字以上にしてください。` : true),
}

/**
 * Chay chuoi rule dang "required|email" hoac "required|email_confirmation:@email".
 * `resolve` dung de tra gia tri cua truong khac khi rule tham chieu @ten.
 */
export function runRules(rulesStr, value, fieldName, resolve = () => undefined) {
  if (!rulesStr) return []
  const errors = []
  for (const part of String(rulesStr).split('|')) {
    const [name, arg] = part.split(':')
    const fn = RULES[name]
    if (!fn) continue
    const param = arg && arg.startsWith('@') ? resolve(arg.slice(1)) : arg
    const r = fn(value, param, fieldName)
    if (r !== true) errors.push(typeof r === 'string' ? r : `${fieldName}が正しくありません。`)
  }
  return errors
}
