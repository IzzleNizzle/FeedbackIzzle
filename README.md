# FeedbackIzzle

A customizable React feedback widget component that allows users to easily collect feedback from their applications. The widget provides an elegant, emoji-based interface for gathering user sentiment and detailed feedback.

## ✨ Features

- 🎭 **Emoji-based feedback** - Users can express their sentiment using intuitive emoji reactions
- 💬 **Multi-stage interface** - Progressive disclosure with expandable feedback forms
- 📱 **Responsive design** - Works seamlessly across desktop and mobile devices
- 🎨 **Customizable styling** - LESS-based styles that can be easily customized
- 📤 **API integration** - Built-in support for sending feedback to backend services
- ⚡ **Lightweight** - Minimal bundle size with React as peer dependency
- 🔧 **Easy integration** - Simple drop-in component for any React application

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 12.x or higher)
- **npm** (version 6.x or higher) or **yarn**
- **React** (version 16.9.0 or higher)
- **React DOM** (version 16.9.0 or higher)

## 🚀 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/IzzleNizzle/FeedbackIzzle.git
cd FeedbackIzzle
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the development dependencies including:
- Webpack and loaders
- Babel for React transpilation
- LESS compiler
- Development server

### 3. Start Development Server

```bash
npm start
```

This command will:
- Start the webpack development server
- Open your browser to `http://localhost:8080`
- Enable hot reloading for rapid development
- Serve the component demo from `src/develop.js`

The development server uses the configuration in `webpack.dev.js` and includes:
- Source maps for debugging
- Hot module replacement
- Development-optimized builds

### 4. Development Workflow

- **Main component**: Edit `src/components/FeedbackIzzle/FeedbackIzzle.js`
- **Styles**: Modify `src/components/FeedbackIzzle/index.less`
- **Demo/Testing**: Update `src/develop.js` to test your changes
- **Hooks**: Custom hooks are in `src/hooks/`

The widget will automatically reload in your browser as you make changes.

## 🔨 Build Steps

### Production Build

To create a production-ready library bundle:

```bash
npm run build
```

This command:
- Uses the `webpack.prod.js` configuration
- Creates an optimized bundle in the `dist/` directory
- Outputs `main.bundle.js` configured as a CommonJS library
- Excludes React and React-DOM from the bundle (peer dependencies)
- Applies production optimizations (minification, tree shaking)

### Build Output

After building, you'll find:
- `dist/main.bundle.js` - The main library bundle
- This file is specified as the `main` entry point in `package.json`

### Build Configuration

The build process uses:
- **webpack.common.js** - Shared configuration (Babel, LESS processing, cleaning)
- **webpack.prod.js** - Production-specific settings (externals, library target)
- **webpack.dev.js** - Development-specific settings (dev server, source maps)

## 📦 Installation & Usage

### Installing the Package

```bash
npm install feedbackizzle
```

### Basic Usage

```jsx
import React from 'react';
import FeedbackIzzle from 'feedbackizzle';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      {/* The feedback widget will appear as a fixed positioned element */}
      <FeedbackIzzle />
    </div>
  );
}

export default App;
```

### Advanced Usage

The component automatically handles:
- Fixed positioning in the bottom-right corner
- Progressive disclosure through multiple stages
- Form input collection (contact info and feedback text)
- Submission to the configured API endpoint

## 🚀 Deployment Steps

### 1. Version Management

Update the version in `package.json`:

```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

### 2. Build for Production

```bash
npm run build
```

### 3. Publish to npm

```bash
npm login
npm publish
```

### 4. Git Tagging

```bash
git tag v1.0.12  # or whatever version you're releasing
git push origin --tags
```

### 5. GitHub Release (Optional)

Create a release on GitHub with:
- Release notes describing changes
- The built `dist/main.bundle.js` as an asset
- Version tag

## 🛠️ Available Scripts

- **`npm start`** - Start development server with hot reloading
- **`npm run build`** - Build production library bundle
- **`npm install`** - Install all dependencies
- **`npm audit`** - Check for security vulnerabilities
- **`npm audit fix`** - Fix security issues automatically

## 🏗️ Project Structure

```
FeedbackIzzle/
├── src/
│   ├── components/
│   │   └── FeedbackIzzle/
│   │       ├── FeedbackIzzle.js    # Main component
│   │       ├── index.less          # Styles
│   │       ├── Thoughts/           # Sub-components
│   │       ├── Emojis/
│   │       └── UserInput/
│   ├── hooks/
│   │   └── useFormInput.js         # Custom form hook
│   ├── index.js                    # Library entry point
│   ├── develop.js                  # Development demo
│   └── Helpfulz.js                 # Utility functions
├── dist/                           # Built library (generated)
├── webpack.common.js               # Shared webpack config
├── webpack.dev.js                  # Development config
├── webpack.prod.js                 # Production config
├── .babelrc                        # Babel configuration
└── package.json                    # Project configuration
```

## 🎨 Customization

### Styling

The component uses LESS for styling. Key style files:
- `src/components/FeedbackIzzle/index.less` - Main component styles
- Styles are scoped to avoid conflicts when embedded in other applications

### API Configuration

The component currently sends data to:
```
https://intense-atoll-16720.herokuapp.com/api/feedbacks/
```

To customize the endpoint, modify the `sendData` function in `FeedbackIzzle.js`.

### Component Behavior

The widget goes through several stages:
1. **Stage 0**: Collapsed state with emoji trigger
2. **Stage 1**: Expanded with emoji feedback options
3. **Stage 2**: Full form with contact and feedback fields

## 🧪 Development Notes

- Uses **React Hooks** for state management
- **LESS** preprocessing for advanced CSS features
- **Webpack** for module bundling and development server
- **Babel** for JSX and modern JavaScript transpilation
- **Peer dependencies** approach to avoid React version conflicts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and test them locally
4. Build the project to ensure it compiles: `npm run build`
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to your fork: `git push origin feature/new-feature`
7. Create a Pull Request

## 📄 License

ISC License - see the repository for details.

## 👤 Author

**Iz P** - *ctrlzdev@gmail.com*

## 🐛 Issues

Report issues at: https://github.com/IzzleNizzle/FeedbackIzzle/issues

## 🔗 Links

- **Repository**: https://github.com/IzzleNizzle/FeedbackIzzle
- **NPM Package**: https://www.npmjs.com/package/feedbackizzle