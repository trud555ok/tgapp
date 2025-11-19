

function App() {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  // const theme = window.Telegram?.WebApp?.themeParams;

  
  return (
    <>
      
        <div className="text-large border p-10">
          Helllo, {user?.first_name || 'gegege'} !
        </div>
    </>
  )
}

export default App
