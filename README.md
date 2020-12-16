# Unit Testing Module Project

## Instroduction

In this project, you will **write unit tests and the implementation code** for a module that helps players see the results of a _success_ or _failure_ when trying to enhance their in-game items. The requirements are listed under the _Minimum Viable Product_ section below.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push -u origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

After a set of interviews with the potential users of the solution, we gathered the following information about the functionality of the game's enhancing system. Your job is to add tests to `./enhancing/enhancer.spec.js` and code to `./enhancing/enhancer.js` to implement the requirements; `./enhancing/enhancer.js` exports an object that has the following methods:

- a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
- a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
- a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
- a `get()` method for use when working on the stretch problem.

The following sections list information provided by the client about `items` and the game's enhancing system.

### Items

- Items have `name`, `durability` and `enhancement`.
- The item's `enhancement` it's a number from 0 to 20.
- The item's `durability` it's a number from 0 to 100.

### When enhancement succeeds

- The item's enhancement increases by 1.
- If the item enhancement level is 20, the enhancement level is not changed.
- The durability of the item is not changed.

### When enhancement fails

- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

### Task 3: Stretch Goals

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- Add a `get()` method to the `enhancer` object that takes an `item` and **returns a new item** with the `name` property modified according to the following rules:
  - if the enhancement level is 0, the the name is not modified.
  - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
- Design and build a Web Application to test the enhancing module you implemented for the MVP.
- Work on [this repository for extra practice testing JavaScript Functions](https://github.com/LambdaSchool/Testing).

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge `<firstName-lastName>` Branch into master (student's  Repo). **Please don't merge your own pull request**
