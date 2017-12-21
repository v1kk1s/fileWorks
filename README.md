HW on files

copy, write, read => make asynchronus
fn = async () => {
  await writeFile(file);
  await readFile(file);
  await deleteFile(file);
};

also
copy, write, read
check on fs.open
check for err if not any -> proceed