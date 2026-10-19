import { useState } from 'react';

export function Calculator() {
  // 表示欄（display）の状態管理
  const [display, setDisplay] = useState("");

  // displayを更新するイベントハンドラ
  const handleClick = (btn) => {
    // クリアボタンが押された場合、表示欄を空にする
    if (btn === "C") {
      setDisplay("0");
      return;
    } else if (btn === "=") {
      calculate(display);
      return;
    } else {
      if (display === "0") {
        setDisplay(btn);
        return;
      }else {
        setDisplay(display + btn);
        return;
      }
    }
  };

  const calculate = (expression) => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    
    // 有効な式であるかチェック
    const match = expression.match(validExpression);
    if (!match) {
    setDisplay("エラー");
    throw new Error('無効な式です。');
    }

    const num1 = Number(match[1]); // 1つ目の整数
    const operator = match[2]; // 演算子
    const num2 = Number(match[3]); // 2つ目の整数

    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      
    }
    setDisplay(result.toString());
  };

  // ボタンの配置を表す配列（記述順に表示）
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  return (
    <div className="calculator">
      <h2>電卓アプリ</h2>
      <div className="calculator-container">
        {display}
      </div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}; 