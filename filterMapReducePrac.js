function getTranscript(subject, score, callbackFunc){
  const transcript = `${subject} ${score}`;
  console.log(transcript);
  callbackFunc(transcript);
}

function displayFunc(transcript){
  console.log('displayFunc is called', transcript);
}

getTranscript('chinese', '23', function(transcript){
  console.log('one func is called', transcript);
});


const AllTranscript=[
  {subjet: 'Chinese', score: 23, quarter: 'spring2017'},
  {subjet: 'English', score: 25, quarter: 'winter2017'},
  {subjet: 'Math', score: 30, quarter: 'summer2017'},
  {subjet: 'Science', score: 100, quarter: 'summer2017'},

];

// for (let i = 0; i < AllTranscript.length; i++){
//   const eachSubject = AllTranscript[i];
//   const transcript = `${eachSubject.subject} ${eachSubject.score}`;
//   console.log(transcript, eachSubject.quarter);
// }

AllTranscript.forEach(function(eachSub, index,originalArray){
  const transcript = eachSub.subject + eachSub.score;
  console.log(transcript, eachSub.quarter)
})

const scorOver50 = AllTranscript.filter(function(eachSub,index,originalArray){
  console.log('filter function is called');

  return eachSub.score > 50;
});

console.log('scoreOver50', scoreOver50);