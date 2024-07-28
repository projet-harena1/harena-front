export function UrlSite(lien:string = "" ):any {
  if (lien=="") {
    
    return process.env.NEXT_PUBLIC_API_URL ;
  }
    return process.env.NEXT_PUBLIC_API_URL + "/" + lien;
  }
  