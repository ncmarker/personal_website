## Deployment to GitHub Pages

### Steps to deploy an update:
1. **Build the React app**:
   Run the following command to build your app:

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   After the build is complete, deploy the site to the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

3. **Update custom domain**:
    - Go to your GitHub repository's Settings.
    - Scroll down to the Pages section.
    - Re-input your custom domain (e.g., nickmarker.com) in the Custom domain field and click Save.
    - Click Publish to make sure the changes are live.

4. **Wait for the site to be available**:
The site will show a 404 error on the default GitHub Pages URL (https://ncmarker.github.io/personal_website/) until you update the custom domain. After setting the custom domain, the site should be accessible at your custom URL (e.g., https://nickmarker.com).