import BotaoAdicionar from '../../components/BotaoAdicionar'
import SideBar from '../../containers/SideBar'
import ContactsList from '../../containers/ContactsList'

const Home = () => (
  <>
    <SideBar showSearch />
    <ContactsList />
    <BotaoAdicionar />
  </>
)

export default Home
