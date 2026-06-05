const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function formatDates(arr) {
  return arr.filter(item => {
      const date = new Date(item);
      return !isNaN(date.getTime());
    }).map(dateString => {
      if(dateString.includes('-')){
        return dateString;
      }
      if(dateString.includes('/')){
      const parts = dateString.split('/');
      return `${parts[1]}-${parts[0]}-${parts[2]}`;
    }
});

   
}

 const validDates = formatDates(dates);
console.log(validDates);