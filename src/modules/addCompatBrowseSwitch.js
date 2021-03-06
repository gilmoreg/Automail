function addCompactBrowseSwitch(){
	let URLstuff = location.pathname.match(/^\/search\//)
	if(!URLstuff){
		return
	};
	if(document.querySelector(".search-page-unscoped .hohThemeSwitch")){
		return
	};
	let target = document.querySelector(".search-page-unscoped");
	if(!target){
		setTimeout(addCompactBrowseSwitch,100);
		return;
	}
	let themeSwitch = create("div",["theme-switch","hohThemeSwitch"],false,target);
	let compactListView = create("span",false,false,themeSwitch);
	let listView = create("span",false,false,themeSwitch);
	let compactView = create("span","active",false,themeSwitch);
	let cardView = create("span",false,false,themeSwitch);
	compactListView.appendChild(svgAssets2.listView.cloneNode(true));
	listView.appendChild(svgAssets2.bigListView.cloneNode(true));
	compactView.appendChild(svgAssets2.compactView.cloneNode(true));
	cardView.appendChild(svgAssets2.cardView.cloneNode(true));
	compactView.onclick = function(){
		document.querySelector(".hohThemeSwitch .active").classList.remove("active");
		compactView.classList.add("active");
		target.classList.remove("cardView");
		target.classList.remove("listView");
		target.classList.remove("compactListView");
	}
	cardView.onclick = function(){
		document.querySelector(".hohThemeSwitch .active").classList.remove("active");
		cardView.classList.add("active");
		target.classList.add("cardView");
		target.classList.remove("listView");
		target.classList.remove("compactListView");
	}
	listView.onclick = function(){
		document.querySelector(".hohThemeSwitch .active").classList.remove("active");
		listView.classList.add("active");
		target.classList.add("cardView");
		target.classList.add("listView");
		target.classList.remove("compactListView");
	}
	compactListView.onclick = function(){
		document.querySelector(".hohThemeSwitch .active").classList.remove("active");
		compactListView.classList.add("active");
		target.classList.add("cardView");
		target.classList.remove("listView");
		target.classList.add("compactListView");
	}
}
