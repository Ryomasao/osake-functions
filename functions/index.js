const functions = require('firebase-functions');

// Realtimedatabseの書き込みに必要
// Firebase Adminの設定方法って認証回りの設定が必要そうなんだけれども、何も設定していない
// Cloudfunctionsはうまくいくのかな？
// https://github.com/Ryomasao/osake-admin こっちはsecret.jsonを設定した
// https://firebase.google.com/docs/admin/setup?hl=ja#add_firebase_to_your_app
const admin = require('firebase-admin');
const app = admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

//exports.copyUserPostTOIndexes = functions.database.ref('/users/{userId}/posts/{postId}')
//.onCreate((snapshot, context) => {
//  const createdPost = snapshot.val()
//  admin.database().ref('posts/' + context.params.postId).set(createdPost)
//  return true
//})

exports.copyUserPostTOIndexes = functions.database.ref('/users/{userId}/posts/{postId}')
.onWrite((change, context) => {
  //onWriteはCreate・Update・Deleteを包括してるっぽい

  const { userId, postId } = context.params;

  //RealTimeDataBaseに書き込まれる前の値
  const oldPost = change.before.val();
  //RealTimeDataBaseに書き込まれた値
  const newPost = change.after.val();

  console.log(`userid: ${userId}, postid: ${postId}`);
  console.log('before value:', oldPost);
  console.log('after value:', newPost);

  admin.database().ref('posts/' + postId).set(newPost);

  return true
})