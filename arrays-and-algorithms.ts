// arrays-and-algorithms.ts
 
// ************************************************************
// Tek boyutlu diziye 5 sayı alma ve yazdırma
// ************************************************************

// let myList: number[] = [];
// for (let i = 0; i < 5; i++) {
//   myList[i] = parseInt(prompt('Lütfen 5 sayı giriniz:')!);
// }
// console.log(myList);

// for (let i = 0; i < myList.length; i++) {
//   console.log(`MyList[${i}] = ${myList[i]}`);
// }

// ************************************************************
// İki boyutlu dizi oluşturma ve kullanıcıdan değer alma
// ************************************************************

// let MyList: number[][] = [];
// for (let i = 0; i < 4; i++) {
//   MyList[i] = [];
//   for (let j = 0; j < 3; j++) {
//     MyList[i][j] = parseInt(prompt(`Satır ${i} Sütun ${j} sayısını giriniz:`)!);
//   }
// }
// console.log(MyList);

// ************************************************************
// Dizi elemanlarının toplamı ve ortalamasını bulma
// ************************************************************

// let MyList: number[] = [];
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   MyList[i] = parseInt(prompt('Lütfen bir sayı giriniz:')!);
//   sum += MyList[i];
// }
// console.log(MyList);
// console.log("Toplam:", sum);
 
// let ort = sum / MyList.length;
// console.log("Ortalama:", ort);

// console.log("Ortalamadan büyük sayılar:");
// for (let i = 0; i < MyList.length; i++) {
//   if (MyList[i] >= ort) {
//     console.log(MyList[i]);
//   }
// }

// ************************************************************
// İki diziyi toplama
// ************************************************************

// let MyList1 = [1, 2, 3, 4, 5, 6];
// let MyList2 = [6, 5, 4, 3, 2, 1];
// let MyList3: number[] = [];

// for (let i = 0; i < MyList2.length; i++) {
//   MyList3[i] = MyList1[i] + MyList2[i];
// }
// console.log(MyList3);

// ************************************************************
// Bubble sort algoritması ile diziyi sıralama
// ************************************************************

// let MyList = [3, 2, 5, 1, 4];
// let temp: number;

// for (let i = 0; i < MyList.length - 1; i++) {
//   for (let j = i + 1; j < MyList.length; j++) {
//     if (MyList[i] > MyList[j]) {
//       temp = MyList[i];
//       MyList[i] = MyList[j];
//       MyList[j] = temp;
//     }
//   }
// }
// console.log("Sıralı Dizi:", MyList);
