import React from 'react';
import One from '../../assets/About.jpg';

const Food = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/'; // External navigation
  };

  return (
    <div style={styles.container}>
      <img 
        src={One} // Directly use the imported image
        alt="Delicious Food" 
        style={styles.image} 
      />
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Hungry?</h1>
        <p style={styles.text}>Discover delicious recipes, order your favorite meals, or explore nearby restaurants.</p>
        <button style={styles.button} onClick={handleButtonClick}>Explore Now</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  image: {
    width: '50%',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
  },
  textContainer: {
    maxWidth: '50%',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#ff4500',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Food;
