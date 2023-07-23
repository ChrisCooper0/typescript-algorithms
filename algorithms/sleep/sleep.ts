// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis: number): Promise<void> {
  // Promises - Pending, Resolved or Rejected states
  //   const cb = (resolve: any, _reject: any) => {
  // setTimeout(resolve, millis);
  //   };

  //   return new Promise(cb);

  // Alternative solution
  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
