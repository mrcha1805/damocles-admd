var xPolicy;
var socialRDR;
function facebookLogin (appId, scopePermission, policy, socialRDR, isNativeApp) {
  xPolicy = policy
  const facebookURL =  "https://www.facebook.com/v3.1/dialog/oauth?"
  socialRDR = socialRDR

  if (isNativeApp === 'false') {
    const url = `${facebookURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/facebook&state=${xPolicy}&scope=${scopePermission}`
    window.location = url
  } else {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) { // Android
      if(typeof admdAuth !== "undefined" && admdAuth) {
        admdAuth.login('facebook')
      } else {
        const url = `${facebookURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/facebook&state=${xPolicy}&scope=${scopePermission}`
        window.location = url
      }
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { // iOS
      if (typeof webkit !== "undefined" && webkit) {
        webkit.messageHandlers.login.postMessage({ type: "facebook" });
      } else {
        const url = `${facebookURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/facebook&state=${xPolicy}&scope=${scopePermission}`
        window.location = url
      }
    } else {
      const url = `${facebookURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/facebook&state=${xPolicy}&scope=${scopePermission}`
      window.location = url
    }
  }
}

function callBackLoginFB(accessToken) {
  window.location = `${socialRDR}/facebook?code=${accessToken}&state=${xPolicy}`
}
