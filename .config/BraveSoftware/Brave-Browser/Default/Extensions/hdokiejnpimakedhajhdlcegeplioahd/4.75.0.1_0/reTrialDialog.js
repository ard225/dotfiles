var ReTrialDialog=function(e){Dialog.call(this,e,{additionalHeaderClasses:[],dynamicHeight:!0,buttonsInsideContent:!0,closeButtonEnabled:!1,hidePreviousDialogs:!0,overlayDialog:!0,blurOverlay:!0})};ReTrialDialog.prototype=Object.create(Dialog.prototype),(ReTrialDialog.prototype.constructor=ReTrialDialog).prototype.initialize=function(e){Dialog.prototype.initialize.apply(this,arguments),function(e){if("/acctsiframe.php"!==location.pathname){var t={action:{dismiss:"Dismiss",learnMore:"Learn More",startTrial:"Start Trial"},IsRetry:!1,source:"Vault Pop Up",trialLength:30,trialType:"Premium"};bg.sendLpImprove("ro_retrial_prompt_shown",{Source:t.source,TrialLength:t.trialLength,TrialType:t.trialType}),document.querySelector("#reTrialDialog #closeReTrialDialog").addEventListener("click",a),document.querySelector("#reTrialDialog #startReTrial").addEventListener("click",o),document.querySelector("#reTrialDialog #reTrialPremiumLink").addEventListener("click",function(){i(t.action.learnMore)}),document.querySelector("#reTrialDialog .media__figure img").src="images/vault_4.0/paywall/premium-diamond.png"}function i(e){bg.sendLpImprove("ro_retrial_prompt_clicked",{Action:e,IsRetry:t.IsRetry,Source:t.source,TrialLength:t.trialLength,TrialType:t.trialType})}function r(){document.getElementById("spinner").classList.add("is-hidden"),e.close()}function a(){document.getElementById("spinner").classList.remove("is-hidden"),i(t.action.dismiss),bg.setDisplayRetrialOffer(!1,r,r)}function o(){document.getElementById("spinner").classList.remove("is-hidden"),i(t.action.startTrial),bg.setDisplayRetrialOffer(!0,function(){try{localStorage.setItem(bg.get("g_username_hash")+"LPNotificationSuccessMessage",Strings.translateString("Congrats! Your free 30-day Premium trial has started."))}catch(e){}top.location.reload()},function(){t.IsRetry=!0,r(),Notifications.displayErrorMessage("We couldn’t start your Premium trial. Don’t worry, you can try again.",{text:"Try again",callback:o})})}}(this)};