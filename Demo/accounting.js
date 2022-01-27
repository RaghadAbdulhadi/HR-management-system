function gettingItems() {
    let stringObj = localStorage.getItem('employee');
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null) {
      return parsObj;
    } else {
      return [];
    }  
  }
  console.log(parsObj)
  let ideato = gettingItems();

