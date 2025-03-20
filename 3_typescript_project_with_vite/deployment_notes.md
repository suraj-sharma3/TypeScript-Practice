# 🚀 Understanding `npm run build` in Vite  

## 📌 Purpose
- Generates a production-ready version of the project in the `dist/` folder.  
- Optimized for faster performance and deployment.  

## 📌 What is the Build Used For?  
### 1️⃣ Deployment: Upload `dist/` to a Web Server  
- `dist/` contains compiled and optimized static files (HTML, CSS, JS, images).  
- Manually upload to servers like Apache, Nginx, AWS, DigitalOcean.  
- **Steps:**  
  1. Run `npm run build` → Generates `dist/` folder.  
  2. Use FTP/SFTP to upload `dist/` to `/var/www/html/`.  
  3. Configure the web server to serve `dist/index.html`.  

### 2️⃣ Hosting: Deploying to Cloud Platforms  
- Deploy `dist/` to hosting services that specialize in static sites.  

#### **Popular Hosting Platforms:**  
| Platform | Features | Deployment Command |  
|------------------|--------------------------------|----------------------|  
| **GitHub Pages** | Free, GitHub integration | `gh-pages` |  
| **Vercel** | Fast CDN, auto deployments | `vercel --prod` |  
| **Netlify** | CI/CD, serverless functions | `netlify deploy --prod` |  
| **Firebase Hosting** | Google Cloud integration | `firebase deploy` |  

### 3️⃣ Performance Optimization  
- Minifies files (`.js`, `.css`, `.html`) for faster loading.  
- **Techniques Used:**  
  - **Tree Shaking**: Removes unused JavaScript code.  
  - **Code Splitting**: Loads only required parts of the app.  
  - **Lazy Loading**: Loads assets only when needed.  
- **Benefits**: Faster load times, reduced bandwidth, better SEO.  

## 📦 How to Deploy the Build?  
### 1️⃣ GitHub Pages (Free)  
```sh  
npm install gh-pages --save-dev  
npm run build  
npm run deploy  # Uses "gh-pages -d dist"  
```
- Enable GitHub Pages: **Settings → Pages → Branch: gh-pages**  
✅ **Live at:** `https://your-username.github.io/your-repo-name/`  

### 2️⃣ Vercel (Fast, CDN, Serverless)  
```sh  
npm install -g vercel  
vercel --prod  
```
✅ **Live at:** `https://your-project.vercel.app/`  

### 3️⃣ Netlify (Easy CI/CD)  
```sh  
npm install -g netlify-cli  
netlify deploy --prod  
```
✅ **Live at:** `https://your-project.netlify.app/`  

### 4️⃣ Firebase Hosting (Google Cloud)  
```sh  
npm install -g firebase-tools  
firebase login  
firebase init  
firebase deploy  
```
✅ **Live at:** `https://your-project.web.app/`  

## 🎯 Summary  
| **Use Case** | **Explanation** |  
|-----------------------|----------------|  
| **Web Server Deployment** | Upload `dist/` to Apache, Nginx, AWS, DigitalOcean. |  
| **GitHub Pages** | Free hosting for static sites using `gh-pages`. |  
| **Vercel** | Fast, serverless hosting with CDN, Git integration. |  
| **Netlify** | CI/CD, auto deployments, serverless functions. |  
| **Firebase Hosting** | Google-backed hosting for performance. |  

# 🛠 Fix: "The specified token is not valid" Error in Vercel  

This error occurs because Vercel requires authentication before deploying a project. Follow these steps to resolve it:  

## 🔹 1. Log in to Vercel  
Run the following command to authenticate your Vercel account:  
```sh  
vercel login  
```
- Log in using GitHub, GitLab, Bitbucket, or Email.  
- Once logged in, Vercel generates a new valid token for deployment.  

## 🔹 2. Retry the Deployment  
After logging in, retry deploying your project:  
```sh  
vercel --prod  
```
✅ If successful, Vercel will deploy your project and provide a live URL.  

## 🔹 3. (Optional) Manually Set a New Token  
If the error persists, manually set a new authentication token:  
- Go to **Vercel Dashboard → Settings → Tokens** ([Vercel Tokens](https://vercel.com/dashboard))  
- Click **"Create Token"** and copy the generated token.  
- Run the following command to set the token manually:  
```sh  
vercel login --token YOUR_NEW_TOKEN  
```
- Retry deployment:  
```sh  
vercel --prod  
```

## 🎯 Summary of Fixes  
| Issue | Solution |  
|--------|------------|  
| Invalid token error | Run `vercel login` |  
| Still not working? | Generate a new token from Vercel's dashboard |  
| Manually set token | `vercel login --token YOUR_NEW_TOKEN` |  

---  

# 🚀 Why is Your Vercel Project Not Available as a Public URL?  
If your Vercel project isn't accessible via a public URL after deployment, here are possible reasons and solutions:  

## 1️⃣ Project Not Deployed Successfully  
🔹 **Issue**: The deployment process may have failed.  
✅ **Solution**:  
```sh  
vercel logs --all  
```
- If the build failed, retry the deployment:  
```sh  
vercel --prod  
```

## 2️⃣ Private Deployment (Not Linked to a Git Repository)  
🔹 **Issue**: If you deployed using `vercel --prod` but haven’t linked a GitHub, GitLab, or Bitbucket repository, the project may be accessible only to you.  
✅ **Solution**:  
```sh  
git remote add origin https://github.com/your-username/your-repo.git  
git push -u origin main  
vercel --prod  
```

## 3️⃣ Custom Domain Not Set  
🔹 **Issue**: Your project may be deployed, but Vercel did not assign a public domain.  
✅ **Solution**:  
- Open **[Vercel Dashboard](https://vercel.com/dashboard)**  
- Select your project and check the **"Domains"** section.  
- If no domain is assigned, add one manually.  
- Alternatively, check the assigned URL:  
```sh  
vercel domains  
```

## 4️⃣ Deployment is Only Available on Local (localhost)  
🔹 **Issue**: Running `vercel dev` starts a local development server that is not accessible publicly.  
✅ **Solution**: Make sure you deployed using:  
```sh  
vercel --prod  
```

## 5️⃣ Vercel Project Visibility is Set to Private  
🔹 **Issue**: By default, some Vercel projects are set to private mode.  
✅ **Solution**:  
- Open **Vercel Dashboard**  
- Go to **Settings → General**  
- Check if **"Project Privacy"** is set to **Public**.  
- If not, change it and redeploy.  

## 6️⃣ Firewall or Network Issues  
🔹 **Issue**: Your internet provider or firewall may be blocking the Vercel domain.  
✅ **Solution**:  
- Try accessing the site using a different network or device.  
- Disable VPN or firewall temporarily and retry.  

## ✅ How to Check if Deployment is Live  
After running `vercel --prod`, check the assigned public URL:  
```sh  
vercel ls  
```
This should display something like:  
```sh  
first-vite-ts-project.vercel.app  
```
Now visit:  
```sh  
https://first-vite-ts-project.vercel.app  
```
If it's not loading, follow the troubleshooting steps above.  

## 🎯 Summary of Fixes  
| Issue | Solution |  
|-----------------|------------------------------|  
| Deployment failed | Check logs: `vercel logs --all` |  
| Not linked to GitHub | Link repo and redeploy |  
| No public domain assigned | Check `vercel domains` |  
| Running in local mode | Use `vercel --prod` |  
| Project privacy is private | Change settings in Vercel Dashboard |  
| Network issues | Try another network/device |  

