export const downloadApiKeyTxt = (apiKey: string) => {
  const blob = new Blob([apiKey], { type: "text/plain;charset=utf-8" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "api-key.txt"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
