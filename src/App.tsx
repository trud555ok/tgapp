

function App() {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  // const theme = window.Telegram?.WebApp?.themeParams;

  
  return (
    <>
      
        <div className="text-large border p-10">
          Hello, {user?.first_name || 'але я не знаю як тебе звуть'} !
        </div>
    </>
  )
}

export default App
