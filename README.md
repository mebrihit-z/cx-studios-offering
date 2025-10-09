# Website Portfolio

A beautiful, responsive website portfolio page that displays all your websites using modern card designs.

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔍 Real-time search functionality
- ✨ Smooth hover animations and transitions
- 🎯 Clean card-based layout
- 🏷️ Tag system for categorizing websites

## How to Use

1. **Open the project**: Simply open `index.html` in your web browser

2. **Add your websites**: Edit the `script.js` file and modify the `websites` array:

```javascript
const websites = [
    {
        title: "Your Website Name",
        description: "Brief description of your website",
        url: "https://your-website-url.com",
        icon: "🚀", // Any emoji
        tags: ["Tag1", "Tag2"]
    },
    // Add more websites...
];
```

3. **Customize the design**: Edit `styles.css` to change colors, fonts, or layout:
   - Modify CSS variables in `:root` to change the color scheme
   - Adjust card sizes, spacing, and animations as needed

## Customization

### Color Scheme
The color scheme can be easily changed by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --background: #0f172a;
    /* ... other variables */
}
```

### Adding More Websites
Just add new objects to the `websites` array in `script.js` following the same structure.

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # Website data and functionality
└── README.md       # Documentation
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Free to use and modify for personal and commercial projects.

