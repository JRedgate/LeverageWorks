
# How to View Your New Website

## 🚨 CRITICAL FIRST STEP 🚨
**You must be in the correct folder, or you will see an error like `ENOENT: no such file or directory`.**

### Step 1: Fix the Path & Directory
In your Command Prompt, copy and paste this **entire block** (it sets the path AND moves to the folder):

```cmd
set "PATH=%PATH%;C:\Program Files\nodejs"
cd c:\Users\jredg\.gemini\antigravity\scratch\LeverageWorks
```

### Step 2: Install Tools
Now that you are in the `LeverageWorks` folder, run:
```cmd
npm install
```

### Step 3: Start the Website
Run:
```cmd
npm run dev
```

### Step 4: View Design
Open your browser to: `http://localhost:5173`
