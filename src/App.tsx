import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from './users';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
  </Admin>
);

export default App;
