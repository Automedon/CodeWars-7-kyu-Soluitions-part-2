/*
The new football league season is coming and the Football Association need some help resetting the league standings. Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.

It has been decided that team who finished first last season will begin the next season in first place. Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.

The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.

The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.

For example. If in the previous season the standings were:

1:'Leeds United' 2:'Liverpool' 3:'Manchester City' 4:'Coventry' 5:'Arsenal'

Then the new season standings should

1:'Leeds United' (first last season) 2:'Arsenal' (alphabetical) 3:'Coventry' (alphabetical) 4:'Liverpool' (alphabetical) 5:'Manchester City' (alphabetical)
*/
function premierLeagueStandings(teamStandings) {
  let arr= Object.values(teamStandings)
  let first = arr.shift()
  arr=arr.sort((a,b)=>a.localeCompare(b))
  arr = [first].concat(arr)
  let obj={};
  arr.map((v,i)=>obj[i+1]=arr[i])
  return obj
}
