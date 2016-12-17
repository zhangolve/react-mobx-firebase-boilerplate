import {observable, computed} from 'mobx';
import {Fb} from '../../firebase/firebase-store';  //FB是引入的firebase数据库 
import {map, toJS} from 'mobx';

class Todos {
  @observable todos = map({});

  constructor() {
    Fb.todos.on('value', (snapshot) => {
      this.todos = snapshot.val();
    });
  }

  @computed get json() {
    return toJS(this.todos);
  }

  //store.todos.add('') 往tudos 列表里面添加

  // 这里的id是类似随机取出来的。
  add = (name) => {
    const id = Fb.todos.push().key;

    this.update(id, name);
  };

  update = (id, name) => {
    Fb.todos.update({[id]: {name}})
  };
  //要想要删除的话，应该找到对应的ID ，而不是他的name .
  del = (id) => {
    Fb.todos.child(id).remove();
  };
}

const todos = new Todos();
export {todos};