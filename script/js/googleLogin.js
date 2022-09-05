var xPolicy;
var socialRDR;
function googleLogin (appId, scopePermission, policy, socialRDR, isNativeApp) {
  mPolicy = policy
  const googleURL = "https://accounts.google.com/o/oauth2/v2/auth?"
  socialRDR = socialRDR

  if (isNativeApp === 'false') {
    const url = `${googleURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/google&state=${mPolicy}&scope=${scopePermission}`
    window.location = url
  } else {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log('userAgent: ' + userAgent);

    if (/android/i.test(userAgent)) { // Android
      if(typeof admdAuth !== "undefined" && admdAuth) {
        console.log('Android')
        admdAuth.login('google')
      } else {
        const url = `${googleURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/google&state=${mPolicy}&scope=${scopePermission}`
        window.location = url
      }
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { // iOS
      if (typeof webkit !== "undefined" && webkit) {
        console.log('iOS');
        webkit.messageHandlers.login.postMessage({ type: "google" });
      } else {
        const url = `${googleURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/google&state=${mPolicy}&scope=${scopePermission}`
        window.location = url
      }
    } else {
      console.log('undetect');
      const url = `${googleURL}response_type=code&client_id=${appId}&redirect_uri=${socialRDR}/google&state=${mPolicy}&scope=${scopePermission}`
      window.location = url
    }
  }
}


function parseObject(obj) {
  if (typeof obj !== Object && typeof obj !== String) {
    try {
      return JSON.parse(obj)
    } catch (error) {
      console.log(error)
      return error
    }
  }
  return obj
}