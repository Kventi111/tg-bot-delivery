import { useEffect } from 'react'
import data from './data.json'

import './App.css'

const tg = window.Telegram.WebApp
const isPremium = tg.initDataUnsafe?.user?.is_premium


const Header = () => {
  return <div className='header'>Header {tg.initDataUnsafe?.user?.username} {isPremium ? "rich" : "bitch"}</div>
}

const Wrapper = ({ children }) => (
  <div className='wrapper'>
    {children}
  </div>
)

const Content = ({ children }) => (
  <div className="content">
  {children}
  </div>
)

const Footer = ({ children }) => (
  <div className="footer">
  {children}
  </div>
)


const Item = ({ price,description }) => (
  <div className='item'>
    <div className='description'>{description}</div>
    <div>price : {price}</div>
    <div className='addToCard'> add to card </div>
  </div>
)


const List = ({  items }) => (<div className='list'>{
items.map(({ id,price,description }) => <Item key={id} price={price} description={description} />)}</div>)


function App() {
  console.log({ tg })

  useEffect(() => {
    tg.ready()
  },[])


  const onClose = () => tg.close()

  return (
    <Wrapper>
      <Header />
      <Content>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui saepe non blanditiis nostrum sint amet exercitationem illum dignissimos dolorum! Cupiditate dolorum sequi fugit. Ut reiciendis minima sapiente. Aperiam, reprehenderit exercitationem.
        <List items={data} />
      </Content>
      <Footer>
        <button onClick={onClose}>Close App test</button>
      </Footer>
    </Wrapper>
  )
}

export default App
