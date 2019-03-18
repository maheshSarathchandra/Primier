import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  bookId:any;
  comment = {commentss:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public book : BookProvider) {
    this.bookId = navParams.get('id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
    console.log(this.bookId);
  }
  addComment(){






let value = this.comment.commentss;

let bookId = this.bookId;









    this.book.addComment(value,bookId).subscribe(data=>{
      console.log(data);
    });
  }
}
