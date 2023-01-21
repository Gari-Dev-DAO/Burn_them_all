export const timeout=(ms)=> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const copyTextToClipboard=async(text)=> {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

export const getRandom=(limit)=>{
 return Math.floor(Math.random() * limit) + 1;
}