function domainName(url){
    let x = 0;
    if (url.includes("www")) {
      x = 1 + url.indexOf("."); 
    } else if (url.includes("http")) {
      x = 2 + url.indexOf("/"); 
    }
    let y = url.slice(x, url.length);  
    let z = y.indexOf(".");
    let u = y.slice(0,z);
    return u;
  };
    // the beater solution:
    // function domainName(url){
    //     url = url.replace("https://", '');
    //     url = url.replace("http://", '');
    //     url = url.replace("www.", '');
    //     return url.split('.')[0];
    //   };
