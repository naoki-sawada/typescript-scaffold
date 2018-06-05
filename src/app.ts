const delayEcho = (str: string, delay: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, delay);
  });
};

async function iterateDelayEcho() {
  const delayEchoInputs: Array<{ str: string; delay: number }> = [
    { str: "aaa", delay: 1000 },
    { str: "bbb", delay: 2000 },
    { str: "ccc", delay: 3000 },
  ];
  delayEchoInputs.forEach(async elem => {
    await delayEcho(elem.str, elem.delay);
  });
}

export async function main() {
  const str = await delayEcho("Hello, world!", 1000);
  return str;
}
