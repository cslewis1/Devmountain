import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Random;



public class GuessingGame {
    public GuessingGame() {
        System.out.println("Hello");
        System.out.println("Please enter your name");

        Scanner input = new Scanner(System.in);

        String name = input.nextLine();

        System.out.println("Hello, " + name);
        System.out.println("Can you guess the number I'm thinking");

        int count = 0;

        Random rand = new Random();
        int number = rand.nextInt(100);
        int guess;

        while (true) {

            try {
                System.out.println("Please choose a number between 1 and 100");
                guess = input.nextInt();
            } catch (InputMismatchException e){
                String bad_input = input.next();   // need to progress past bad input
                System.out.println("That's not an integer, try again");
                continue;
            }

            if (guess < 1 || guess > 100) {
                System.out.println(guess + " is not a valid number, try again");
                continue;
            }
            count++;
            if (guess > number) {
                System.out.println("You guess is too high");
            } else if (guess < number) {
                System.out.println("You guess is too low");
            } else {
                System.out.println("You guessed correctly");
                System.out.println("You won the game in " + count + " tries.");
                break;
            }
        }
    }
}
