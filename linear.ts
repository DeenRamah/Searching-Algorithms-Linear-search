function linier(arr: T[], target: T): number{
  for(let i=0; i<arr.length; i++){
    if(arr[i]=== target){
      return i;
    }
  }

  return -1;
}
