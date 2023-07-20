async function job() {
  const hello = setTimeout(() => {
    console.log("hello world");
  }, "2000");
  return hello;
}

async function callJob() {
  return await job();
}

callJob();

//Jest napisane, ze job() musi zwracac promise (w moim rozumieniu nie rozwiazany).
