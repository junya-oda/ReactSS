// const,letなどの変数宣言
function con(v) {
  console.log(v);
}

// var val1 = "var変数";
// con(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き可能";
// con(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// con(val1);

// let val2 = "let変数";
// con(val2);

// // let変数も上書き可能
// val2 = "let変数を上書き";
// con(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// constは上書き・再宣言　不可能
// const val3 = "const変数";
// con(val3);

// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "oda",
//   age: 34,
// };
// val4.name = "aida";
// val4.address ="kagawa";
// con(val4);

// ★Reactの開発は基本constを使う
// const val5 = ['dog','cat'];
// val5[0]='bird';
// val5.push('monkey');
// con(val5);

// テンプレート文字列 `` ${}
// const name = "oda"
// const age = "34"
// // 「私の名前はodaです。年齢は34歳です。」
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// con(message2);

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// con(func1("func1です"));

// アロー関数 =>　　※()はなくても良いが自動で追加される
// const func2 = (str) => {
//   return str;
// }
//return省略も可能
// const func2 = (str) => str;
// con(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;
// con(func3(10,20));

// 分割代入
// const myProfile = {
//   name: "oda",
//   age: 34,
// };

// const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// con(message1);

// const {name, age} = myProfile;
// const message2 =`名前は${name}です。年齢は${age}歳です。`;
// con(message1);

// const myProfile = ['oda', 34];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// con(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// con(message4);

// デフォルト値、引数　　※name=""
// const sayHello = (name = "ゲスト") => con(`こんにちは！${name}さん！`);
// sayHello("小田");

// スプレッド構文　　※... 元の構文が上書きもされない！
// 配列の展開
// const arr1 = [1, 2];
// con(arr1);
// con(...arr1);

// const sumFunc = (num1, num2) => con(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// con(num1);
// con(num2);
// con(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// con(arr6);

// const arr7 = [...arr4, ...arr5];
// con(arr7);

// const arr8 = arr4;
// con(arr8);

// mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++){
//   // con(nameArr[index]);
//   con(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// con(nameArr2);

// nameArr.map((name) => con(name));
// nameArr.map((name, index) => con(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// con(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// con(newNameArr);

// 三項演算子
// ある条件　？　条件がtrueの時 ： 条件がfalseの時
// const val1=1>0 ? 'trueです' : 'falseです'
// con(val1);

// const num = "1300";
// // con(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// con(formattedNum);

// const checkSum = (num1,num2)=>{
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
// }
// con(checkSum(50,40));

// 論理演算子の本当の意味　&& ||
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   con("1か2はtrueになります");
// }
// if(flag1 && flag2){
//   con("1か2はtrueになります");
// }

const num = null;
