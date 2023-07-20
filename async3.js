async function job(result, database, errorManager) {
  try {
    await result;
    //Nie rozumiem, czemu return jest pierwszy i jest returnowany?
    //Result tutaj jest promisem
    const getId = async function (id) {
      return await database.get(id);
    };

    const infoName = async function (info) {
      return await info.name;
    };
  } catch (error) {
    errorManager.notify(error);
    throw error;
  }
}
