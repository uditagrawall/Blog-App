
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
  url: `mongodb+srv://uditagrawal212:3IXLfwps10rnJQDz@blog-app.jyvlm4m.mongodb.net/?retryWrites=true&w=majority`,
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];

    // Validate mimetype
    if (!match.includes(file.mimetype)) {
      return Promise.reject(new Error('Only .png, .jpg, and .jpeg formats are allowed!'));
    }

    // ✅ Return a valid object
    return  Promise.resolve({
      bucketName: 'photos',
      filename: `${Date.now()}-blog-${file.originalname}`
    });
  }
});

export default multer({ storage });
