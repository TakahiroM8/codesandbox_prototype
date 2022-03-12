// const,let等の変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能

// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言は不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // conat変数は上書き不可能
// // val3 = "const変数は上書きが不可能";

// const val3 = "const変数を再宣言"；

// const val4 = {
//   name: "takahiro",
//   age: 37,
// }
// console.log(val4);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "takahiro",
//   age: 37,
// }
// val4.name ="HIRO";
// val4.addres = "yokohama";
// console.log(val4);

// constで定義した配列オブジェクトはプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "yell";
// val5.push("moonkey");
// console.log(val5);

// // テンプレート文字列
// const name = "タカヒロ";
// const age = 37;
// //  タカヒロで37歳です

// //  従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));
// カッコを省略もできる
// const func2 = str => {
//   return str;
// }
// console.log(func2("func2です"));
// 単一の場合一行で省略もできる
// const func2 = str => str;
// console.log(func2("func２です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func3(10,20));
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入
// const myPrifile = {
//   name: "たかひろ",
//   age: 37,
// };
// const message1 = `名前は${myPrifile.name}です。年齢は${myPrifile.age}歳です。`;
// console.log(message1);

// const { name, age } = myPrifile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myPrifile = ["たかひろ", 37];
// const message3 = `名前は${myPrifile[0]}です。年齢は${myPrifile[1]}歳です。`;
// console.log(message3);
// const [name, age] = myPrifile;
// const message4 = `名前は${name}です。年齢はで${age}です。`;
// console.log(message4);

// デフォルト値、引数など
// const sayhello = (name) => console.log(`こんにちは！${name}さん`);
// sayhello('たかひろ');
// バグになってしまうのでデフォルト値（初期値）としての書き方です。
// const sayhello = (name = "たかひろ") => console.log(`こんにちは！${name}さん`);
// sayhello("takahiro");

// スプレッド構文　...
// 配列の展開
// const arr1 =[1,2];
// console.log(arr1);
// console.log(...arr1);
// const arr1 =[1,2];
// const sumFunc = (num1 , num2) => console.log(num1 + num2);
// // sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// 展開の反対で纏める
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);
// console.log(num1,...arr3);

// 配列のコピー、結合
// const arr4 =[10, 20];
// const arr5 =[30, 40];

// // const arr6 =[...arr4];
// // console.log(arr6);

// // const arr7 =[...arr4, ...arr5];
// // console.log(arr7);

// // 下記の様にarr4の最初の値をではなくなってしまうのでバグの原因になってしますので注意
// const arr8 = arr4;
// // console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

//  スプレッド構文だと初期値になる
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// mapを使用した配列処理
// const nameArr = ["田中","山田","たかひろ"];
// 従来の書き方
// for (let index = 0; index < nameArr.length; index++ ) {
//   console.log(nameArr[index]);
// }

// mapの使い方は2週類ある return編
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
// 一行で書く書き方
// nameArr.map((name) => console.log(name));

// 何番目は誰々と書くとき
// const nameArr = ["田中","山田","たかひろ"];
// 従来の書き方
// for (let index = 0; index < nameArr.length; index++ ) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// たかひろ以外は「さん」を付けるif文
// const nameArr = ["田中", "山田", "たかひろ"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "たかひろ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// filter使用した配列処理 特定の条件のみを抽出（探す）時に使えるのがfilter
// const numArr =[1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 3 === 0;
// });
// console.log(newNumArr);

// 三項演算子 ifを使用せずとも使える
// ある条件を ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
// const num = "1300";
// console.log(num.toLocaleString());

// const num = "1300";
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);
// const num = 1300;
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// 関数です
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
// };
// console.log(checkSum(50, 60));

// 論理演算子の本当の意味を知ろう  && ||
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

//  ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);


