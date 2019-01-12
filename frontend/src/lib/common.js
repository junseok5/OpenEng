import storage from 'lib/storage'
import { SearchActions } from 'store/actionCreators'

export const getScrollTop = () => {
  if (!document.body) return 0

  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop

  return scrollTop
}

export const getScrollBottom = () => {
  if (!document.body) return 0

  const { scrollHeight } = document.body
  const { innerHeight } = window
  const scrollTop = getScrollTop()

  return scrollHeight - innerHeight - scrollTop
}

/* recent keyword logic */
export const writeKeyword = keyword => {
  let patchData = [keyword]
  let originData = storage.get('keywords')

  if (originData) {
    const index = originData.indexOf(keyword)

    if (index >= 0) {
      originData.splice(index, 1)
    } else if (originData.length >= 3) {
      originData.pop()
    }

    patchData = patchData.concat(originData)
  }

  storage.set('keywords', patchData)
  SearchActions.writeRecentKeywords(patchData)
}

export const getKeywordList = async () => {
  const keywords = await storage.get('keywords')
  if (keywords) {
    SearchActions.writeRecentKeywords(keywords)
  }
}

export const removeKeyword = index => {
  let originData = storage.get('keywords')
  originData.splice(index, 1)

  const removedData = originData

  storage.set('keywords', removedData)
  SearchActions.writeRecentKeywords(removedData)
}

export const clearKeywords = () => {
  storage.set('keywords', [])
  SearchActions.writeRecentKeywords([])
}
