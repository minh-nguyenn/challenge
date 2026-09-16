// Chep tu utils/index.js cua site goc. Giu nguyen logic fetchData/fetchDataV2
// de cac trang loc theo open_from/open_to y het ban cu.

export const convertArr = (firstIndex, lastIndex, str = '') => {
  const arr = []
  for (let index = firstIndex; index <= lastIndex; index++) {
    arr.push(`${index}${str}`)
  }
  return arr
}
export const listRules = {
  isTrue: {
    validate: (value) => !!value,
  },
}
export const formatDateYMD = (inputDate, separateCharacter = '-') => {
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${separateCharacter}${month}${separateCharacter}${day}`
}

// Ban goc dung moment-timezone. Thay bang Intl san co de khong them thu vien;
// ket qua giong het vi chi can dinh dang YYYY-MM-DD theo gio Tokyo.
export const formatDateMomentYMD = (inputDate, separateCharacter = '-') => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(inputDate))
  const get = (t) => parts.find((p) => p.type === t).value
  return [get('year'), get('month'), get('day')].join(separateCharacter)
}

export const checkLengthTitle = (title, maxLength = 100) => {
  if (!title) return ''
  title = title.trim()
  return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
}

export const formatDateToISO = (inputDate) => {
  const date = new Date(inputDate);
  return date.toISOString();
}

export const fetchData = async (
  $microcms,
  {
    endpoint,
    limit = 100,
    orders,
    offset = 0,
    paramsRequest = [],
    fieldStart = 'open_from',
    fieldEnd = 'open_to',
    q = '',
  }
) => {
  const now = new Date()

  const response = await Promise.all([
    $microcms.get({
      endpoint,
      queries: {
        limit,
        offset,
        orders,
        filters: [
          ...paramsRequest,
          `${fieldStart}[less_than]${formatDateToISO(now)}`,
          `${fieldEnd}[not_exists]`,
        ],
        q,
      },
    }),
    $microcms.get({
      endpoint,
      queries: {
        limit,
        offset,
        filters: [
          ...paramsRequest,
          `${fieldStart}[less_than]${formatDateToISO(now)}`,
          `${fieldEnd}[greater_than]${formatDateToISO(now)}`,
        ],
        q,
      },
    }),
  ])
  if (limit === 1000) {
    return {
      totalCount: 0,
      contents: [...response[1].contents, ...response[0].contents],
    }
  } else {
    const totalCount = response[0].totalCount + response[1].totalCount

    let result = []
    if (response[0].contents.length === limit) {
      result = response[0].contents
    } else {
      const lackNumber = limit - response[0].contents.length
      result = [
        ...response[0].contents,
        ...response[1].contents.filter((item, index) => index < lackNumber),
      ]
    }
    return {
      totalCount,
      contents: result,
    }
  }
}

export const fetchDataV2 = async (
  $microcms,
  {
    endpoint,
    limit = 100,
    orders,
    offset = 0,
    paramsRequest = [],
    fieldStart = 'open_from',
    fieldEnd = 'open_to',
    q = '',
  }
) => {
  const now = new Date()
  const nowStr = formatDateToISO(now)

  // Tạo chuỗi filter phức hợp
  const filterCombined = `${fieldStart}[less_than]${nowStr}[and](${fieldEnd}[not_exists][or]${fieldEnd}[greater_than]${nowStr})`

  const filters = [...paramsRequest, filterCombined].join('[and]')

  const response = await $microcms.get({
    endpoint,
    queries: {
      limit,
      offset,
      orders,
      filters,
      q,
    },
  })

  return {
    totalCount: response.totalCount,
    contents: response.contents,
  }
}
