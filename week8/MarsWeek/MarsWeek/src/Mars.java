public class Mars {
    public static void main(String[] args) throws InterruptedException {
        String colonyName = "MegaSpace";
        int shipPopulation = 300;
        double meals = 4000.00;
        boolean landing = true;
        String landingLocation = "The Ocean";

        meals = meals - (shipPopulation * (0.75 * 2));
        System.out.println(meals);

        meals = meals + (meals * .50);

        shipPopulation = shipPopulation + 5;

        if(landingLocation.equalsIgnoreCase("The Plain")){
            System.out.println("Bbzzz Landing on the Plain");
        } else {
            System.out.println("ERROR!!! Flight plan already set. Landing on the Plain");
        }

//        landing = landingCheck(0);
//
//        new GuessingGame();
//        new MarsExpedition();
       new FindingsList();
    }

    private static boolean landingCheck (int minutesLeft) throws InterruptedException {
        for(int minute = 0; minute <= minutesLeft; minute++){
            if((minute % 2 == 0) && (minute % 3 == 0)){
                System.out.println("Keep Center");
            } else if (minute % 2 == 0) {
                System.out.println("Right");
            } else if (minute % 3 == 0) {
                System.out.println("Left");
            } else {
                System.out.println("Calculating");
            }
            Thread.sleep(250);
        }
        System.out.println("Landed");

        return false;
    }
}
