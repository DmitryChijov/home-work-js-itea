 //  1. Среди трех чисел найти среднее арифметическое. 
// Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
// а) запрашиваем значение трех переменных
// б) если 1!== 2 и 2!==3 то выводим рузультат (1+2+3)/3
// в) иначе выводим сообщение об ошибке
    
        let a = parseInt(prompt('Введите первое число'));
        let b = parseInt(prompt('Введите второе число'));
        let c = parseInt(prompt('Введите третье число'));
        
    
        if (a !== b & b !== c) {
            let average = (a + b + c) / 3;
            document.write('Среднее арифметическое число ' + average);
        } else {
            document.write('Ошибка');
        }; 