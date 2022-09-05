var xPolicy;
var socialRDR;
function lineLogin (appId, scopePermission, policy, socialRDR, isNativeApp) {
    mPolicy = policy
    const lineURL = "https://access.line.me/oauth2/v2.1/authorize?"
    socialRDR = socialRDR

    if (isNativeApp === 'false') {
      const url = `${lineURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/line&state=${mPolicy}&scope=${scopePermission}`
      window.location = url
    } else {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) { // Android
        if(typeof admdAuth !== "undefined" && admdAuth) {
          admdAuth.login('line')
        } else {
          const url = `${lineURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/line&state=${mPolicy}&scope=${scopePermission}`
          window.location = url
        }
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { // iOS
        if (typeof webkit !== "undefined" && webkit) {
          webkit.messageHandlers.login.postMessage({ type: "line" });
        } else {
          const url = `${lineURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/line&state=${mPolicy}&scope=${scopePermission}`
          window.location = url
        }
      } else {
        const url = `${lineURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/line&state=${mPolicy}&scope=${scopePermission}`
        window.location = url
      }
    }
}

function callBackLoginLine(accessToken, id_token) {
  const idToken = parseObject(decodeURIComponent(id_token))
  const cusIdToken = JSON.stringify({ "sub": idToken.sub, "email": idToken.email })
  window.location = `${socialRDR}/line?code=${accessToken}&state=${mPolicy}&id_token=${encodeURIComponent(btoa(cusIdToken))}`
}
