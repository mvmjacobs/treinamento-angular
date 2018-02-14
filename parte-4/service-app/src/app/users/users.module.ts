import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { GithubService } from './github.service';

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		GithubService
	],
	declarations: [UserListComponent]
})
export class UsersModule { }
