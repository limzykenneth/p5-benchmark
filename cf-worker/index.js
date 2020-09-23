/* globals BACKBLAZE_ID, BACKBLAZE_KEY, BACKBLAZE_BUCKET_ID */

let BACKBLAZE_AUTH_TOKEN = null;
let API_URL = null;

addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request))
});

async function handleRequest() {
	if(BACKBLAZE_AUTH_TOKEN === null){
		await fetchAuthToken();
	}

	const fetchRequest = new Request(API_URL, {
		method: "POST",
		headers: {
			"Authorization": BACKBLAZE_AUTH_TOKEN,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			bucketId: BACKBLAZE_BUCKET_ID
		})
	});

	let result;

	result = fetch(fetchRequest);

	if(result.status === 401){
		await fetchAuthToken
		result = fetch(fetchRequest);
	}

	const data = await result.then((res) => res.json());

	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		}
	});
}

async function fetchAuthToken(){
	const authRequest = new Request("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
		method: "GET",
		headers: {
			"Authorization": `Basic ${btoa(BACKBLAZE_ID + ":" + BACKBLAZE_KEY)}`,
		}
	});

	const authResponse = await fetch(authRequest).then((res) => res.json());

	BACKBLAZE_AUTH_TOKEN = authResponse.authorizationToken;
	API_URL = authResponse.apiUrl + "/b2api/v2/b2_list_file_names";
}
