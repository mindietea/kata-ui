import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging

import 'rxjs/Rx';

export class Curator {
	name: string;
	id: number;
	image: string;
	coverImage: string;
	description: string;
	kards: Kard[];
}

export class Kard {
	curator: number;
	id?: number;
	title: string;
	description: string;
	products: Product[];
}

export class Product {
	id: number;
	image: string;
	link: string;
	title?: string;
	status: boolean;

	constructor() {
		this.status = true;
	}
}

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class DataService {

	activeCurator: Curator;

	curators: Curator[];

	following: boolean[];

	kards: Kard[];

  constructor(private http: Http) {

  	

	let extraP: Product = {
		id: 0,
		image: "http://10dlq823u3q32ztyku1fnglg.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/30884867426_4567423b7a_b.jpg",
		link: "http://www.extrapetite.com/2016/11/holiday-work-style-wrap-jacket-jewelled.html",
		title: "check out her blog",
		status: true
	}

	let beltCoat: Product = {
		id: 0,
		image: "https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;itemID=445319&amp;swatchID=4769&amp;viewID=ALT2&amp;recipeName=pdlg488x601",
		link: "https://www.anntaylor.com/petite-shawl-collar-wrap-coat/445319?skuId=23941403&defaultColor=2222&colorExplode=true&catid=cata000032&utm_source=467020&utm_medium=Affiliates&utm_campaign=QFGLnEolOWg&cid=aff_QFGLnEolOWg&siteID=QFGLnEolOWg-t52_QduA_SFmmkY2Zxr3lQ&Pubname=rewardStyle&SID=2575853",
		title: "Petite Shawl Collar Wrap Coat, $198",
		status: true
	}

	let skirt: Product = {
		id: 0,
		image: "https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;itemID=418445&amp;swatchID=6615&amp;recipeName=pdlg488x601",
		link: "https://www.anntaylor.com/sequin-tweed-skirt/418445?skuId=21900723&defaultColor=6615&colorExplode=true&catid=cata000016&utm_source=467020&utm_medium=Affiliates&utm_campaign=QFGLnEolOWg&cid=aff_QFGLnEolOWg&siteID=QFGLnEolOWg-UWJAue8vXRwulU6QqxZJww&Pubname=rewardStyle&SID=2575853",
		title: "Sequin Tweed Skirt, $19.88",
		status: false
	}

	this.kards = [{
		curator: 0,
		id: 0,
		title: "extra petite, extra warm",
		description: "Jean from Extra Petite is one of my favorite fashion bloggers. As a professional in Boston, she excels at cute yet work-appropriate outfits for the small of us out there.",
		products: [ extraP, beltCoat, skirt ]
	}];

	this.curators = [
		{
			name: "leah",
			id: 0,
			image: "https://instagram.fftw1-1.fna.fbcdn.net/t51.2885-19/s320x320/19623192_394639797597333_2631693613796425728_a.jpg",
			coverImage: "https://i.imgur.com/Ir9Ps4Y.jpg",
			description: "A city girl.",
			kards: [
				this.kards[0]
			]
		},
		{
			name: "Tech Buddy TV",
			id: 1,
			image: "https://i.imgur.com/wPFLMIq.png",
			coverImage: "http://eskipaper.com/images/tv-wallpaper-6.jpg",
			description: "We're Tech Buddy TV! We review everything from PC parts to keyboards to headphones to weird snacks! Check out our YouTube channel.",
			kards: [
			]
		}
	]

	this.activeCurator = this.curators[0];

	this.following = [true, false];

	// Get curator cards from service
	this.updateKards();

  }

  updateKards() {
  	this.getKards(0)
		.subscribe(
			r => {
				this.curators[0].kards = r;
			}
		);

	this.getKards(1)
		.subscribe(
			r => {
				this.curators[1].kards = r;
			}
		);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */

   getKards(id) {
   	return this.http.get("http://76b40d76.ngrok.io/api/curator/" + id + "/posts")
  		.map((res:Response) => res.json());
   }

   postKard(k:Kard) {
   	return this.http.post("http://76b40d76.ngrok.io/api/post/create_json",
   		JSON.stringify(k))
   		.map((res:Response) => res.json());
   }

   getVisionResults(image_url: String){
	return this.http.post("http://76b40d76.ngrok.io/api/post/vision",
	JSON.stringify({url:image_url}))
	.map((res:Response) => res.json());
   }

   getRecommendationResults(name:String, brand:String){
	return this.http.get("http://76b40d76.ngrok.io/api/post/recommendations?name=name&brand=brand")
	.map((res:Response) => res.json());
   }

   getSearchResults(substring: String){
	   console.log(substring)
	return this.http.post("http://76b40d76.ngrok.io/api/post/search",
	JSON.stringify({substring:substring}))
	.map((res:Response) => res.json());
   }
}
