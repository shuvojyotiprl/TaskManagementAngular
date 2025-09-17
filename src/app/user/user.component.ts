import { Component,input,computed,signal, Input,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();

  onSelectUser(){
    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  /*selectedUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])

  
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser(){
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])
    console.log('User selected');
  }*/
}
