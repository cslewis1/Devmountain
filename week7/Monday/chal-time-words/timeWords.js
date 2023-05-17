/* Time Words
Difficulty
Medium

Concepts
General


Write a function that turns a string of 24-hour time into words.
You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). 
Hours 0-11 are am, and hours 12-23 are pm.

Handle noon and midnight specially:

timeWord("00:00")
// 'midnight'

timeWord("12:00")
// 'noon'
Otherwise, covert times to text:

timeWord("01:00")
// "one o'clock am"

timeWord("06:01")
// 'six oh one am'

timeWord("06:10")
// 'six ten am'

timeWord("06:18")
// 'six eighteen am'

timeWord("06:30")
// 'six thirty am'

timeWord("10:34")
// 'ten thirty four am'
Don’t forget to handle early morning properly:

timeWord("00:12")
// 'twelve twelve am'
For times after noon, add ‘pm’:

timeWord("12:09")
// 'twelve oh nine pm'

timeWord("23:23")
// 'eleven twenty three pm' */

let hours = ['midnight','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
//define an array of words for the tens of minutes
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']
// define an array of words for minutes
const ones = ['o', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', ' eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

let timeWord = (time) => {
    let timeArr = []
    let newTime = time.split(':')
    let hour = +newTime[0]
    let mins = +newTime[1]
    console.log(newTime)
    console.log(hour)
    console.log(mins)

    if (time === '00:00') {
        timeArr = 'midnight'
    } else if (time === '12:00') {
        timeArr = 'noon'
    } else if()
}

console.log(timeWord('11:59'))