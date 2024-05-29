var emojis = [
  '🥸😰',
  '😵‍💫😰👨‍🦱',
  '😩😰👨‍🦱',
  '🦷😰',
  '😉😰👨‍🦱',
  '😖😰',
  '😇😰',
  '🧕😰👨‍🦱',
  '🧓😰👨‍🦱',
  '👀😰',
  '🧑‍🚀😰👨‍🦱',
  '🫅😰',
]

var intervalId // 用於存儲定時器 ID
var currentEmojiPair // 用於保存當前的 emoji 組合

function startEmojiChange() {
  intervalId = setInterval(displayEmoji, 500) // 每 0.5 秒更換一次 emoji
}

// 初始化，開始自動更換 emoji
startEmojiChange()

function stopEmojiChange() {
  clearInterval(intervalId) // 清除定時器
}

function getRandomNumber() {
  return Math.floor(Math.random() * emojis.length)
}

function getUniqueEmoji() {
  var randomIndex = getRandomNumber()
  var emojiPair = emojis[randomIndex].split('') // Split the pair of emojis into individual emojis
  emojis.splice(randomIndex, 1)
  return emojiPair
}

function displayEmoji() {
  var emojiHTML = ''

  if (emojis.length === 0) {
    emojiHTML = 'finished' // 如果 emojis 陣列為空，顯示 "finished"
  } else {
    var randomIndex = getRandomNumber()
    var emojiPair = emojis[randomIndex]

    emojiHTML += '<span class="emoji">' + emojiPair + '</span>'
    currentEmojiPair = emojiPair // 保存當前的 emoji 組合
  }

  // 獲取 emojiContainer 元素
  var emojiContainer = document.getElementById('emojiContainer')

  // 將 emojiHTML 插入到 emojiContainer 中
  emojiContainer.innerHTML = emojiHTML
}

// 為 emojiContainer 添加點擊事件監聽器
var emojiContainer = document.getElementById('emojiContainer')
emojiContainer.addEventListener('click', function () {
  stopEmojiChange() // 點擊時暫停更換
  displayEmoji() // 顯示當前的 emoji 組合
})

// 獲取下一題按鈕元素
var nextButton = document.getElementById('next')
nextButton.addEventListener('click', function () {
  if (currentEmojiPair) {
    var index = emojis.indexOf(currentEmojiPair) // 找到當前 emoji 組在 emojis 陣列中的索引
    if (index !== -1) {
      emojis.splice(index, 1) // 移除當前的 emoji 組
    }
  }
  startEmojiChange() // 重新啟動自動更換 emoji
})

displayEmoji()
