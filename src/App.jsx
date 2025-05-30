import './App.css'

function App() {
  const handleRedirect = () => {
    window.location.href = 'https://chrome.google.com/webstore'; // Replace with your actual extension URL if available
  };

  return (
    <>
      <div className="container">
        <h1>Welcome to Dexicon</h1>
        <p>Your ultimate companion for a richer browsing experience.</p>
        <button onClick={handleRedirect} className="cta-button">
          Add to Chrome
        </button>
      </div>
    </>
  )
}

export default App
