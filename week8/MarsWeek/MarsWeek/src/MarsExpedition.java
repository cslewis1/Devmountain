import java.util.InputMismatchException;
import java.util.Scanner;

public class MarsExpedition {
    public MarsExpedition() throws InterruptedException {
        Scanner input = new Scanner(System.in);

        System.out.println("Expedition Prep Starting");
        Thread.sleep(250);
        System.out.println("Buffering");
        Thread.sleep(250);
        System.out.println("Expedition Prep Booting");
        Thread.sleep(250);
        System.out.println("Expedition Prep is Ready");
        Thread.sleep(250);

        System.out.println("Please enter your name");
        String name = input.nextLine();

        System.out.println("Hi, " + name + " — Welcome to the Expedition prep program. " +
                "Are you ready to head out into the new world? Type Y or N");

        String answer = input.nextLine();
        int team;
        int teamSize = 2;

        if (answer.equalsIgnoreCase("Y")) {
            System.out.println("I knew you would say that. You are team leader for a reason.");
        } else {
            System.out.println("Too bad you are team leader. You have to go.");
        }

        while (true) {
            try {
                System.out.println("How many people do you want on your team");
                team = input.nextInt();
            } catch (InputMismatchException e) {
                String bad_input = input.next();   // need to progress past bad input
                System.out.println("That's not an integer, try again");
                continue;
            }
            if (team > 2) {
                System.out.println("That’s way to many people. We can only send 2 more members");
                teamSize = 2;
            } else if (team < 2) {
                System.out.println("That’s not enough people. We need 2 more members");
                teamSize = 2;
            } else {
                System.out.println("That's a perfect team");
               break;
            }
        }

            System.out.println("You are allowed to bring one snack with you. What do you want to bring?");

            String snack = input.next();

            System.out.println("Nice choice, you will be bringing a " + snack + " with you.");

            System.out.println("Please choose your vehicle");
            System.out.println("A: Range Rover" +
                    "\nB: Dodge Ram" +
                    "\nC: Ford F-150");
        String vehicle = input.next();

        if (vehicle.equalsIgnoreCase("A")) {
            vehicle = "a Range Rover";
        } else if (vehicle.equalsIgnoreCase("B")) {
            vehicle = "a Dodge Ram";
        } else if (vehicle.equalsIgnoreCase("C")) {
            vehicle = "a Ford F-150";
        } else {
            vehicle = "your feet";
        }

        System.out.println("Your team is ready to explore Mars" +
                "\nThe team lead is " + name + " leading " + teamSize + " teammates." +
                "\nYou will have " + snack + " as a snack." +
                "\nYou will drive around Mars in a " + vehicle + "." +
                "\nGood Luck on you travels!!!");
    }
}



