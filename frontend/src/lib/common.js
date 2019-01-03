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

/* recent tag logic */
export const writeTag = tag => {
  let patchData = [tag]
  let originData = storage.get('tags')

  if (originData) {
    const index = originData.indexOf(tag)

    if (index >= 0) {
      originData.splice(index, 1)
    } else if (originData.length >= 3) {
      originData.pop()
    }

    patchData = patchData.concat(originData)
  }

  storage.set('tags', patchData)
  SearchActions.writeRecentTags(patchData)
}

export const getTagList = async () => {
  const tags = await storage.get('tags')
  if (tags) {
    SearchActions.writeRecentTags(tags)
  }
}

export const removeTag = index => {
  let originData = storage.get('tags')
  originData.splice(index, 1)

  const removedData = originData

  storage.set('tags', removedData)
  SearchActions.writeRecentTags(removedData)
}

export const clearTags = () => {
  storage.set('tags', [])
  SearchActions.writeRecentTags([])
}
