// The 3AM Fridge Text — make.fun bounty entry
// A smart fridge texts its owner at 3am. One line, 139 characters.
// The competition caps entries at 140 characters, so the line is
// guarded: if it ever grows past the cap, the program refuses to print it.

const FRIDGE_TEXT =
  "It's 3am. You opened my door, stared into the light like it owed you answers, took nothing, and now the pickles think YOU'RE the weird one.";

const MAX_CHARS = 140;

if (FRIDGE_TEXT.length > MAX_CHARS) {
  console.error(
    `Fridge text is ${FRIDGE_TEXT.length} characters, over the ${MAX_CHARS} cap.`,
  );
  process.exit(1);
}

console.log(FRIDGE_TEXT);
