const validationCheck = (regex, target) => {
  if (regex.test(target)) {
    return true
  }

  return false
}

export const emailCheck = email => {
  const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  return validationCheck(regex, email)
}

export const passwordCheck = password => {
  const regex = /^[A-Za-z0-9!@#$%^&+=]{6,30}$/
  return validationCheck(regex, password)
}

export const displayNameCheck = displayName => {
  const regex = /^[0-9a-zA-Z0-9ㄱ-힣]{2,12}$/
  return validationCheck(regex, displayName)
}
