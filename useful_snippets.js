CREATING COMPONENTS / DEFINING COMPONENTS / СОЗДАНИЕ КОМПОНЕНТОВ / ОПРЕДЕЛЕНИЕ КОМПОНЕНТОВ

// Как создать компонент с помощью функции-хелпера React.createClass()
var Hello = React.createClass({
    render: function(){
        return(<h1>Hello</h1>);
    }
});


// Как создать компонент с помощью функции (самый простой способ)
function Welcome() {
  return <h1>Hello</h1>;
}

// Как создать / обьявить компонент с помощью arrow function
const Module = (props) => <div>Hello {props.name}</div>;
// Этот компонент - функция, она принимает один аргумент - обьект "props" с данными
// Эта функция возвращает React-элемент


// Как создать компонент используя класс ES6 ( define a component ) отнаследовать от React.Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Как создать компонент Button
var buttonStyle = {
  margin: '10px 10px 10px 0'
};

var Button = React.createClass({
  render: function () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});
// Зачем писать отдельно компонент для кнопки? Можно же просто использовать элемент <button>. 
// Компонент будет обертывать button и его стили. В основном кнопки на сайте делают с одними стилями, 
// имеет смысл засунуть обьект стиля внутрь компонента и наштамповать экземпляров этого компонента - кнопок.
// Компонент Button получает 2 свойства из компонента - парента 
// свойство  label - это надпись на кнопке
// свойство handleClick - это калбек функция, которая вызывается когда юзер тычет кнопку
    




// Как раскрасить свой компонент 
var divStyle = { background: '#cccccc', padding: "20px" };
const Module = (props) => <div style={divStyle}>Hello</div>;


// Как передать в компонент параметр
const Module = (props) => <div>Hello {props.name}</div>;
ReactDOM.render(<Module name="World" />, document.getElementById("root"));

// Как законсолить экземпляр компонента. Перебор всех свойств компонента.
var o = <Module/>; 
for(var key in o) {console.log(key, o.key)};

// До этого мы видели только React-элементы, представляющие DOM теги. const element = <div />;
// Однако, React-элементы также могут представлять пользовательские компоненты const element = <Lay name="John" />;

// Если надо сделать пустой тег, то можно написать одиночный тег с  закрытием 
const element = <img src={user.avatarUrl} />;

//Как написать JSX выражение?  <h1>Hello, Stranger.</h1>;
//Фундаментально, JSX является синтаксическим сахаром для функции React.createElement(component, props, ...children)
//После компиляции JSX выражения становятся обычными JavaScript обьектами
//Это значит, что мы можем присваивать JSX выражения переменным, 
//использовать внутри циклов или if-инструкций,
//принимать их как аргументы,
//возвращать из функций

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
    return <h1>Hello, Stranger.</h1>;
}


// Как вставить в компонент переменную, в которой есть React элемент
const tema = <h1>Here it is</h1>; 
const Module = () => <div>{tema}</div>;

// Как передать строку как проп
<MyComponent message="hello world" />
<MyComponent message={'hello world'} />

// Название компонентов должно начинаться с заглавной буквы.

// Все react компоненты должны уважать свои props и никогда не модифицировать props.
// Сам props представляет неизменяемый объект, который предназначен только для чтения.read-only

// Концептуально, компоненты подобны функциям JavaScript. 
// У них есть параметр "props" и они возвращают React -элементы - обьекты, описывающие что должно появиться на экране




// Как создать React-элемент, вручную набрав обьект
var second = 
{
$$typeof: Symbol.for('react.element'),
"type": "h1",
"key": null,
"ref": null,
"props": {"children": "Important"},
"_owner": null,
"_store": {}
}
// Этот обьект - инструкция, которая говорит реакту как строить DOM элемент <h1>Important</h1>
ReactDOM.render(second, document.getElementById('root'));


INITIALIZING COMPONENTS / Создание экземпляра пользовательского компонента
// Весь смак компонента в том чтобы его использовать несколько раз.
<Hello name="Tom" age="33" />
// Значение из атрибута name="Tom" перейдет в свойство props.name у объекта "props".

// У нас есть данные: var BUTTONTEXT = "Click the button"; Мы их захардкодим в переменной, но вообще они могут прийти ajax-ом из API. 
// Теперь инициализируем компонент App  <App text={BUTTONTEXT} />
// После этого внутри самого компонента можно пользоваться данными из переменной BUTTONTEXT через this.props.text
// Компонент App не может менять эти данные. Зато он может передать их дальше в дочерний компонент.

var BUTTONTEXT = "Click the damn button";
   
class App extends React.Component {
	render(){
		return (
			<div>         
				<input type="submit" value={this.props.text} />	
			</div>
			);
	}
}

ReactDOM.render(<App text={BUTTONTEXT} />,  document.getElementById("root"));


// Когда приложение работает, у вас может быть несколько экземпляров одного компонента на экране, 
// каждый экземпляр компонента со своими индивидуальными свойствами и внутренним состоянием.


//Создание экземпляра пользовательского компонента 
<Welcome name="Sait" />;
//Все JSX-атрибуты проникают в этот компонент как один обьект.Мы называем его props
<Welcome name="Sait" />;
//Для компонента Welcome значение props.name будет Sait
<MyComponent sum={1 + 2 + 3 + 4} />
//Для компонента MyComponent значение props.sum будет 10

//В экземпляр компонента можно передавать любое JavaScript-выражение как prop, оборачивая {}
<MyComponent foo={1 + 2 + 3 + 4} />

// Пропсом даже не обязательно пользоваться. Данные можно передать в компонент и все. Они там будут в свойстве пропс этого обьекта записаны

RENDERING

// if you want to render a component you use it as if it was an html tag <Module/>
ReactDOM.render(<Module />, document.getElementById("root"));


//  Как получить набор однотипной разметки HTML наполненной разными данными.
//  При рендеринге создать один компонент и передать ему одни данные, а во второй компонент передать другие данные
//  Итак функция (являющаяся компонентом) получает как аргумент - обьект "props" с данними и возврашает React-элемент


ReactDOM.render(<App/>, document.getElementById('root'));
// Вызываем метод render у пакета ReactDOM и передаем в него первым аргументом <App/> компонент, а вторым аргументом DOM-элемент, 
// куда мы хотим отрендерить компонент.

// Дом контейнер зачищается изнутри и заменяется при первом вызове.
// Последующие вызовы ReactDOM.render() эффективно обновляют стандарный DOM

// ReactDOM.render не модифицирует сам контейнер, только его детей.



GENERAL JAVASCRIPT

// Как сгенерировать случайный цвет на Javascript
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

//Как обьявить переменную var а; declaring / creating variables
//Как инициализировать переменную - присвоить ей значение var а= 5;
// если в консоли браузера написать alert(five) то будет ошибка five is not defined



// Вообще в JS выражение - это любой корректный блок кода, который возвращает значение.
// По всему JSX коду, то есть везде в моей программе можно вставлять любое выражение JS, если обернуть его в курчавые скобки. 
{sait} // тут это переменная, 
{"hello"} // выдает строку hello, 
{3+7} // выдает 10 
{f()} // вызов функции
// если пишешь на JSX, то все что в курчавых скобках - чистый javascript


//Как законсолить обьект и посмотреть все свойства
var go = { width: 300, height: 200, title: "Menu" };
console.log(go);
В консоли будет написано: Object { width=300,  height=200,  title="Menu"}
Можно нажать на слово object, тогда будет список всех свойств

// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP

var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
console.log(x);
// Эта функция идет из ECMAScript 3. Это метод массива который используется для его трансформации
// Он возвращает массив с результатами вызова обозначенной функции для каждого элемента оригинального массива.
// Метод map() создает новый массив с результатами вызова функции для каждого элемента массива.
// Метод map() вызывает единожды функцию для всех элементов по порядку.
// Заметка: map() не вызывает функцию для элементов массива без значений.
// Заметка: map() не меняет оригинальный массив


// берет массив, считает длину каждого стринга и создает новый массив с длинами
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {  return name.length; });
console.log(nameLengths);



// Берет массив из обьектов с именем и фамилией и добавляет в каждый обьект дополнительное свойство - полное имя
// Получает первый обьект, модифицирует обьект, возвращает обьект. Записывает новый обьект в массив.
// Получает второй обьект, модифицирует обьект, возвращает обьект. Записывает новый обьект в массив.
// Получает третий обьект, модифицирует обьект, возвращает обьект. Записывает новый обьект в массив.
var oldArr = [{first_name:"Jim",last_name:"Brown"},{first_name:"John",last_name:"Big"},{first_name:"Romas",last_name:"Kuklis"}];
var newArr = oldArr.map(function(item,index){
        item.full_name = [item.first_name,item.last_name].join(" ");
        return item;
    });

console.log(newArr);

// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP



STRUCTURE OF PROGRAM

// Хорошее дело - нарисовать набросок моего UI и обвести все компоненты разными цветами.После этого кодить. 

// Хорошей практикой считается делать один умный компонент на страницу и вкладывать в него тупые компоненты. 
// При условии, что уровень вложенности не очень глубокий. Умный компонент может получать данные например от бекенда, 
// а тупые просто получают данные от парента, которые им пробросили и что-то рендерят.

// Typically, new React apps have a single App component at the very top.
// However, if you integrate React into an existing app, 
// you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.




// Когда планируешь, надо разбивать UI на куски. Эти куски должны быть переиспользуемые - 
// чтобы можно было в одну и ту же дом структуру впрыскивать разные данные. Каждый кусок станет компонентом


// Как передать данные из родительского компонента в дочерний компонент с помощью props.
var DATA = {    
    name: 'James Brown',
    imgURL: 'http://lorempixel.com/100/100/'
}

const App = (props) => 
	<div>
		<Profile name={props.profileData.name} imgURL={props.profileData.imgURL}/>
	</div>

const Profile = (props) =>
		<div>              
           <h3>{props.name}</h3>
           <img src={props.imgURL} />
        </div>;

ReactDOM.render(<App profileData={DATA} />, document.getElementById('root'));




// Реальный пример. Можно сделать хедер с меню. Основной компонент будет App. Это умный компонент. 
// Приткнем внутри его массив menu, потипа мы получили его с бекенда. const menu = [  { link: '/articles', label: 'Articles' }, { link: '/contacts', label: 'Contacts' }, { link: '/posts', label: 'Posts' }  ]; В массиве у нас 3 обьекта.
// Тут мы данные прописали внутри <App/>, а до этого был пример когда данные были снаружи в программе
// Вложим в умный компонент App тупой компонент Header. <Header items={menu} />
// Теперь пробросим данные в Header как параметр. Для этого мы просто указываем атрибут items со значением menu.
// Создаем сам тупой компонент <Header/>
// Теперь для того, чтобы работать с данными в Header нужно использовать объект this.props





STYLING
// Можно добавить в <head> такие стили
<style>
button { width: 100px; height:30px; border-radius: 4px; margin:50px; }
</style>



STATEFUL COMPONENT
// Как добавить в компонент состояние в самом простом виде
class App extends React.Component {
  constructor() {
    super();
    this.state = { color:'lavender' };
  }

  repaint(){
	  this.setState({ color: 'azure' });
  };

  render() {
    return <div style={{backgroundColor: this.state.color}} onClick={this.repaint.bind(this)}>here</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));




