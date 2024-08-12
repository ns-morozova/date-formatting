import { DateTimeWithPretty } from "./components/DateTimePretty";

interface VideoProps {
  url: string;
  date: string;
}

function Video({ url, date }: VideoProps) {
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video"
      ></iframe>
      <DateTimeWithPretty date={date} />
    </div>
  );
}

interface VideoListProps {
  list: Array<{
    url: string;
    date: string;
  }>;
}

function VideoList({ list }: VideoListProps) {
  return (
    <>
      {list.map((item, index) => (
        <Video key={index} url={item.url} date={item.date} />
      ))}
    </>
  );
}

function App() {
  const list = [
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00',
    },
  ];
  
  return (
    <VideoList list={list} />
  )
}

export default App
