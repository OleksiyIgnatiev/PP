import React, { useState } from 'react';
import styles from './AddWordPage.module.css';

const AddWordPage: React.FC = () => {
  const [category, setCategory] = useState('');
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImageFile = event.target.files?.[0];

    if (newImageFile) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(newImageFile.type)) {
        alert('Invalid image format. Please select a JPEG, PNG, or GIF image.');
        return;
      }

      setImageFile(newImageFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(newImageFile);
    }
  };

  const handleSubmit = async () => {
    // Handle form submission logic here

    if (imageFile) {
      // Implement logic to upload the image file to a server or storage service
      // Update the state with the uploaded image URL (optional)
    }

    console.log({
      category,
      word,
      transcription,
      translation,
      imageFile,
      imageUrl,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <div className={styles.form1}>
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className={styles.select}
        >
          <option value="">Виберіть категорію</option>
          <option value="english">Англійські слова</option>
          <option value="special">Особливі</option>
          <option value="own">Власні слова</option>
        </select>
        </div>
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="word" className={styles.label}></label>
        <input
          type="text"
          id="word"
          value={word}
          onChange={e => setWord(e.target.value)}
          placeholder="Слово англійською"
          className={styles.input}
        />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="transcription" className={styles.label}></label>
        <input
          type="text"
          id="transcription"
          value={transcription}
          onChange={e => setTranscription(e.target.value)}
          placeholder="Транскрипція"
          className={styles.input}
        />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="translation" className={styles.label}></label>
        <input
          type="text"
          id="translation"
          value={translation}
          onChange={e => setTranslation(e.target.value)}
          placeholder="Переклад"
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="imageUpload" className={styles.label}>Зображення</label>
        <input type="file" id="imageUpload" onChange={handleImageUpload} />
        {imageUrl && <img src={imageUrl} alt="Preview" className={styles.previewImage} />}
      </div>
      <button onClick={handleSubmit} className={styles.button}>Додати</button>
    </div>
  );
};

export default AddWordPage;
