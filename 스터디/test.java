import java.util.*;

class test{
    public static void main(String args[]){
        while(true){
        
        System.out.println("===== 지원하는 연산 =====");
        System.out.println("1.      +       (더하기)");
        System.out.println("2.      -       (빼기)");
        System.out.println("3.      *       (곱하기)");
        System.out.println("4.      /       (나누기)");
        System.out.println("5.      %       (나머지)");
        System.out.println("========================");
        System.out.println("수행하고 싶은 연산을 선택해주세요 >");

        Scanner scanner = new Scanner(System.in);
        String calc = scanner.next();
        int c=0;
        if(calc.equals("exit")){
            System.out.println("프로그램이 종료되었습니다.");
            break;
        }
        else{
            c=Integer.parseInt(calc);
        }
        int a,b;
        System.out.println("첫번째 피연산자를 입력해주세요 >");
        a = scanner.nextInt();
        System.out.println("두번째 피연산자를 입력해주세요 >");
        b = scanner.nextInt();
        int result =0;
        switch(c){
            case 1:
                result=a+b;
                System.out.printf("%d + %d = %d\n",a,b,result);
                continue;
            case 5:
                result=a%b;
                System.out.printf("%d %% %d = %d\n",a,b,result);
                continue;
            case 2:
                result=a-b;
                System.out.printf("%d - %d = %d\n",a,b,result);
                continue;            
            case 3:
                result=a*b;
                System.out.printf("%d * %d = %d\n",a,b,result);
                continue;
            case 4:
                result=a/b;
                System.out.printf("%d / %d = %d\n",a,b,result);
                continue;
        }
        }
        
    }
}