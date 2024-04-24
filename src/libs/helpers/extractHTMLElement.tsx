function extractElements(htmlResponse: string) {
  const pRegex = /<p>(.*?)<\/p>/s
  const imgRegex = /<img(.*?)\/>/

  const pMatch = htmlResponse.match(pRegex)
  const imgMatch = pMatch ? pMatch[0].match(imgRegex) : null

  return {
    pElement: pMatch ? pMatch[0] : null,
    imgElement: imgMatch ? imgMatch[0] : null,
  }
}

export function ShowQuestion({ htmlResponse }: { htmlResponse: string }) {
  const { pElement, imgElement } = extractElements(htmlResponse)
  return (
    <div className="flex flex-col">
      <div dangerouslySetInnerHTML={{ __html: pElement }} />
      <div>{imgElement}</div>
    </div>
  )
}
