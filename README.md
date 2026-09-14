# Ringcraft Throws

A responsive, no-build static website for a shot put and discus coach. It is ready for GitHub Pages.

## Personalize it

The name and email are already configured for Jorge. Open `site-config.js` if you want to update the location or any contact details:

```js
window.SITE_CONFIG = {
  coachName: "Jorge Hinojosa",
  email: "jrhinojosa00@gmail.com",
  location: "Your city / region",
  siteTitle: "Jorge Hinojosa | Shot Put & Discus Coaching"
};
```

You can preview the site by opening `index.html` in a browser or by running:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public GitHub repository (for example, `throws-coaching`).
2. Upload these files to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then click **Save**.

GitHub will publish the site at `https://jhinojosa1.github.io/throws-coaching/`.

If the repository is named `jhinojosa1.github.io`, it will instead appear at `https://jhinojosa1.github.io/`.
