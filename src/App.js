import './App.css';
import Customer from './components/Customer';

const customers =[{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길녀',
  'birthday' : '880902',
  'gender' : '남',
  'job' : '재학생'

},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '한민지',
  'birthday' : '770830',
  'gender' : '여',
  'job' : '복학생'

},
{
  'id' :3 ,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김갑수',
  'birthday' : '650102',
  'gender' : '여',
  'job' : '갑부'

}]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
                  <Customer key={c.id}
                      id={c.id}
                      image = {c.image}
                      name={c.name} 
                      birthday={c.birthday} 
                      gender={c.gender} 
                      job={c.job}>
                  </Customer>
                  )
          })
      }
    </div>
  );
}

export default App;
