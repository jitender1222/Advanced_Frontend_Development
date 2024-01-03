import './App.css';
import TweetList from './Components/TweetList';

const initialDummyArray=[

  {content:"How are you ??" , likeCount: 20 },
  {content:"Hey WhatsUpp" , likeCount: 2 },
  {content:"What are you doing today ??" , likeCount: 10 },
]

function App() {
  return (
    <div >
      <TweetList tweets={initialDummyArray}  />
    </div>
  );
}

export default App;
