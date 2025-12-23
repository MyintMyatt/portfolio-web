import bg from './assets/bg-2.jpg';
import Navbar from './component/Navbar';

function App(){
   return(
    <div className='w-dvw h-dvh overflow-hidden relative'>
      <Navbar />
      <img src={bg} className='h-full w-full object-cover absolute top-0 left-0 -z-10'></img>
    </div>
   );
}

export default App;
