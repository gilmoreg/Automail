function addCustomCSS(){
	if(useScripts.SFWmode){
		return
	};
	let URLstuff = location.pathname.match(/^\/user\/([^/]*)\/?/);
	if(!customStyle.textContent || (decodeURIComponent(URLstuff[1]) !== currentUserCSS)){
		const query = `
		query($userName: String) {
			User(name: $userName){
				about
			}
		}`;
		let variables = {
			userName: decodeURIComponent(URLstuff[1])
		}
		generalAPIcall(query,variables,data => {
			customStyle.textContent = "";
			if(!data){
				return;
			};
			let jsonMatch = (data.data.User.about || "").match(/^<!--(\{.*})-->/);
			if(!jsonMatch){
				return
			};
			try{
				let jsonData = JSON.parse(jsonMatch[1]);
				if(jsonData.customCSS){
					customStyle.textContent = jsonData.customCSS;
					currentUserCSS = decodeURIComponent(URLstuff[1]);
				}
			}
			catch(e){
				console.warn("Invalid profile JSON for " + variables.userName + ". Aborting.");
				console.log(jsonMatch[1]);
			}
		},"hohProfileBackground" + variables.userName,30*1000);
	}
}
