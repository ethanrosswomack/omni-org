# Website Editing Guide for OmniversalMedia.org

## Overview
This guide will help you easily update and customize your website sections, especially the new features we've added: book recommendations, featured artist section, and video content.

## 📁 File Structure
Your main editable sections are located in:
- `client/src/sections/` - Homepage sections
- `client/src/pages/` - Individual pages
- `client/src/assets/` - Images and media files

## 🎨 Updating the Featured Artist Section

**File:** `client/src/sections/FeaturedArtistSection.tsx`

### What to Change:
1. **Artist Name & Medium** (Lines 47-48):
```typescript
<h3 className="text-3xl font-bold text-amber-500 mb-2">[Artist Name]</h3>
<p className="text-xl text-slate-300">[Art Medium/Style]</p>
```
Replace `[Artist Name]` with the actual artist's name and `[Art Medium/Style]` with their specialty (e.g., "Digital Illustration", "Mixed Media", "Photography").

2. **Artist Description** (Lines 51-54):
```typescript
<p className="text-slate-300 text-lg leading-relaxed">
  [Add a description of the artist here...]
</p>
```
Write a compelling description of the artist and their work.

3. **Latest Work** (Lines 58-61):
```typescript
<p className="text-slate-400">
  [Mention their latest project, exhibition, or piece...]
</p>
```
Highlight their most recent or notable work.

4. **Social Media Links** (Lines 65-85):
Update the `href` attributes and button text to match the artist's actual social media profiles.

5. **Artist Quote** (Lines 92-94):
```typescript
<p className="italic text-slate-300">
  "[Add a quote from the artist or testimonial...]"
</p>
```

6. **Artist Image** (Lines 25-32):
Replace the placeholder with actual image:
```typescript
<img 
  src="path/to/artist-image.jpg" 
  alt="Artist Name"
  className="w-full h-full object-cover"
/>
```

## 📚 Updating Book Recommendations

**File:** `client/src/sections/BooksSection.tsx`

### What to Change:
1. **Book Information** (Lines 8-23):
```typescript
const books = [
  {
    id: 1,
    title: "Actual Book Title",
    author: "Author's Real Name",
    description: "Compelling description of the book",
    amazonLink: "https://amazon.com/dp/ACTUAL_PRODUCT_ID",
    reviewLink: "/book-review-1",
    coverImage: "path/to/book-cover-1.jpg"
  },
  // Second book...
];
```

### Adding Book Cover Images:
1. Save your book cover images in `client/src/assets/`
2. Import them at the top of the file:
```typescript
import bookCover1 from "@assets/book-cover-1.jpg";
import bookCover2 from "@assets/book-cover-2.jpg";
```
3. Use in the books array:
```typescript
coverImage: bookCover1
```

## 📝 Writing Book Reviews

**Files:** `client/src/pages/BookReview1.tsx` and `client/src/pages/BookReview2.tsx`

### What to Update:
1. **Page Title & Meta** (Lines 13-17):
```typescript
<title>Book Review - Author Name | Omniversal Media</title>
<meta name="description" content="Read our detailed review of Book Title..." />
```

2. **Book Details** (Lines 31-43):
- Replace `[Book Title]` with actual title
- Replace `[Author Name]` with actual author
- Add book description
- Update Amazon link

3. **Book Cover Image** (Lines 27-30):
Replace placeholder with actual book cover image.

4. **Your Review** (Lines 50-60):
Write your detailed review of the book. You can add multiple paragraphs.

5. **Video Review** (Lines 65-80):
Replace the placeholder with your actual video embed code:
```typescript
<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Book Review Video"
  frameBorder="0"
  allowFullScreen
  className="rounded-lg"
></iframe>
```

## 🎥 Updating the Video Section

**File:** `client/src/sections/VideoSection.tsx`

### What to Change:
1. **Video Player** (Lines 38-65):
Replace the placeholder with your actual video:
```typescript
<video 
  controls 
  width="100%" 
  height="100%"
  poster="path/to/thumbnail.jpg"
>
  <source src="path/to/your-podcast-episode.mp4" type="video/mp4" />
</video>
```

2. **Episode Information** (Lines 69-76):
```typescript
<h3 className="text-2xl font-bold text-teal-500 mb-4">
  Your Actual Episode Title
</h3>
<p className="text-slate-300 mb-6">
  Describe what this episode covers, who was featured, and key insights.
</p>
```

3. **Episode Details** (Lines 78-84):
```typescript
<span>Episode #42</span>
<span>•</span>
<span>45 minutes</span>
<span>•</span>
<span>December 2024</span>
```

## 🖼️ Adding Images

### Steps to Add New Images:
1. **Save images** in `client/src/assets/`
2. **Import them** in your component:
```typescript
import myImage from "@assets/my-image.jpg";
```
3. **Use them** in your JSX:
```typescript
<img src={myImage} alt="Description" />
```

### Recommended Image Sizes:
- Book covers: 400x600px
- Artist photos: 800x800px (square)
- Video thumbnails: 1280x720px

## 🎨 Customizing Colors

The website uses these main colors:
- **Teal**: `text-teal-500`, `bg-teal-600`
- **Purple**: `text-purple-500`, `bg-purple-600`
- **Amber**: `text-amber-500`, `bg-amber-600`
- **Slate**: `text-slate-300`, `bg-slate-800`

## 🔄 Regular Updates

### To Feature a New Artist:
1. Open `client/src/sections/FeaturedArtistSection.tsx`
2. Update all the bracketed placeholders `[Artist Name]`
3. Add their image to `client/src/assets/`
4. Update social media links
5. Save and the changes will appear automatically

### To Add New Books:
1. Add new book object to the `books` array in `BooksSection.tsx`
2. Create a new review page by copying `BookReview1.tsx`
3. Add the new route in `client/src/App.tsx`
4. Update the book's `reviewLink` to match the new route

### To Update Video Content:
1. Upload your video file to `client/src/assets/`
2. Update the video source in `VideoSection.tsx`
3. Update episode title and description

## 🚀 Quick Tips

1. **Always backup** your files before making changes
2. **Test locally** before uploading to your server
3. **Use descriptive file names** for images (e.g., `artist-john-doe-2024.jpg`)
4. **Keep image file sizes reasonable** (under 2MB each)
5. **Update social media links** when featuring new artists

## 📞 Need Help?

If you encounter any issues:
1. Check that file paths are correct
2. Ensure image files are in the right format (jpg, png, webp)
3. Verify that all brackets `[]` have been replaced with actual content
4. Make sure quotation marks match (use `"` not `"` or `"`)

This guide covers the main editing tasks for your new features. The website will automatically update when you save your changes!