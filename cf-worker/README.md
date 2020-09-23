# p5.js-benchmark Cloudflare Worker

This Cloudflare Worker is used to communicate with the Backblaze API to retrieve the list of files stored on the B2 storage.

To run it you need the account ID and set it in the environment as `CF_ACCOUNT_ID=(account ID)`. You will also need to set some secret variables with `wrangler` as follow:

- `BACKBLAZE_ID`: The API key ID
- `BACKBLAZE_KEY`: The API key secret
- `BACKBLAZE_BUCKET_ID`: The bucket ID associated with the API key and where the data are stored

Once everything is set and assuming `wrangler` is installed, run `wrangler preview --watch` to preview the worker for development purposes and `wrangler publish` to publish the worker. Check Cloudflare Worker's [documentation](https://developers.cloudflare.com/workers/) for more detailed info.