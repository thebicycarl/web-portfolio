# Profile Web Page

A monorepo structure for hosting multiple projects under `logicarl.com`. The profile page is at the root, and additional projects can be added as routes.

## Project Structure

This repository uses a monorepo approach with folder-based isolation:

```
src/
  projects/
    profile/          # logicarl.com/ (main profile page)
    thirty/           # logicarl.com/30th
    chess/            # logicarl.com/chess (future project)
  App.jsx             # Main router
```

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Adding New Projects

### Simple Projects (Monorepo)

For simple projects that fit well in this React app:

1. Create a new folder in `src/projects/[project-name]/`
2. Add your component files (e.g., `ProjectName.jsx`, `ProjectName.css`)
3. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="/[project-name]" element={<ProjectName />} />
   ```
4. **No Netlify configuration needed** - it works automatically!

Example: The 30th birthday page is a simple project at `logicarl.com/30th`

### Complex Projects (Separate Repos)

For complex projects that need strict isolation or different tech stacks:

1. Create a separate repository for the project
2. Deploy it to its own Netlify site
3. Add a proxy redirect in `netlify.toml`:
   ```toml
   [[redirects]]
     from = "/[project-name]/*"
     to = "https://[project-name]-app.netlify.app/:splat"
     status = 200
     force = true
   ```
4. The project will appear at `logicarl.com/[project-name]` (URL stays in address bar)

Example: The chess app could be a separate repo if it needs different dependencies or build processes.

## Features

- Modern, responsive design
- Beautiful hero section with your landscape image
- Smooth animations and transitions
- Clean, professional layout
- Mobile-friendly
- Monorepo structure for easy project management

## Customization

Edit `src/projects/profile/Home.jsx` to update:
- Your name, title, and bio
- Social media links
- Skills and about sections

The image in the `public` folder is automatically used as the hero background.

