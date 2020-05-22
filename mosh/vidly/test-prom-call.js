function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 3) {
        console.log(`Get User Data ${id}`);
        resolve({
          message: "Success",
          user: id,
        });
      }
      reject(new Error("Not Found"));
    }, 2000);
  });
}

function getRepos(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Get User Repos ${id}`);
      //reject("REJECT REPO");
      resolve({ id: id, repos: [1, 2, 3, 5] });
    }, 2500);
  });
}

function getComents(repoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Get User Comments ${repoId}`);
      resolve({ repId: repoId, repos: ["hi", "bye", "welome"] });
    }, 3500);
  });
}

// getUser(3)
//   .then((id) => getRepos(id.user))
//   .then((repId) => getComents(repId.repos[0]))
//   .catch((err) => {
//     console.log(err);
//   });

async function getInfo(id) {
  try {
    const userData = await getUser(id);
    const repos = await getRepos(userData.user);
    const comments = await getComents(repos.repos[0]);
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

getInfo(3);
