function subitoExtractor() {
  const figures = document.querySelectorAll("figure");
  figures.forEach((figure) => {
    const picture = figure.firstChild!;
    const source = picture.firstChild!;
    const srcString = (source as any).getAttribute("srcset");
    const splitted = srcString.replace(/\s/g, "").split(",");
    const biggest = splitted[splitted.length - 1];
    const image = biggest.substring(0, biggest.length - 2);
    window.open(image, "_blank");
  });
}

function ruoteclassicheExtractor() {
  const containers = document.querySelectorAll("div.owl-item");
  containers.forEach((c) => {
    const picture = c.firstChild;
    const srcString = (picture as any).getAttribute("style");
    const splitted = srcString.split("background-image: url('")
    const dirtyUrl = splitted[1]
    const image = dirtyUrl.substr(0, dirtyUrl.length - 2);
    window.open(image, "_blank");
  })
}

function repubblicaExtractor() {
  const container = document.getElementsByClassName("thumbs")[0]
  const containers: any[] = Array.from(container.children)
  containers.forEach((c: any) => {
    const linkEl = c.querySelector("a")
    const link = linkEl.getAttribute("href")
    const cleanLink = link.replace('/M/', '/D/')
    window.open(`https://annunci.repubblica.it${cleanLink}`, "_blank")
  })
}


export function getExtractor() {
  const host = window.location.host
  switch (host) {
    case "www.subito.it":
      return subitoExtractor
    case "ruoteclassiche.quattroruote.it":
      return ruoteclassicheExtractor
    case "annunci.repubblica.it":
      return repubblicaExtractor
    default:
      throw new Error("host not supported")
  }
}
