/* tslint:disable */

export function httpGet(url: string) {
  return new Promise(function(resolve, reject) {
    console.log("Connecting to: " + url);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(new Error("POST error"));
        }
      }
    };
    xhr.onerror = function(){

      reject("Network request Error");
    }
    xhr.send();
  });
}
