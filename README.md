# Testing I

In this project, you will demonstrate proficiency by writing unit tests and production code to satisfy the _Minimum Viable Product_ described below.

Some of the topics covered were:

- introduction to automated testing.
- using `Jest` as a test runner.
- writing unit tests for JavaScript functions.
- the _Test Driven Development (TDD)_ workflow.

## Instructions

**Read these requirements carefully. Understand exactly what is expected _before_ starting.**

You are allowed, and encouraged, to collaborate with your peers while working on this assignment. Remember to follow the _twenty-minute rule_ and post questions to your cohort's help channel before seeking support from your PM and Instructor.

## Commits

Please push your code often and use descriptive commit messages, this helps you and your project manager.

## Project Description

In this project, you will **write unit tests and the implementation code** for a module that helps players see the results of a _success_ or _failure_ when trying to enhance their in-game items. The requirements are listed under the _Minimum Viable Product_ section below.

## Project Set Up

Follow these steps to setup your git _fork_ and _branch_.

- [x] Fork this repository.
- [x] Use GitHub's website to add your project manager as collaborator on **your fork**.
- [x] **Clone your forked version** of the repository (**Not Lambda's**!).
- [x] Create a new branch: `git checkout -b <firstName-lastName>`.
- [x] Commit changes to your `<firstName-lastName>` branch.
- [x] Push often to your branch: `git push origin <firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge the `<firstName-lastName>` branch into the master branch on your fork. **Please don't merge your own pull request**
- [ ] Use GitHub's website to add your project manager as a reviewer on the pull-request.
- [ ] Your project manager will count the project as complete by merging the branch back into the master branch of your forked repository.

## Minimum Viable Product

After a set of interviews with the potential users of the solution, we gathered the following information about the functionality of the game's enhancing system. Your job is to add tests to `./enhancing/enhancer.spec.js` and code to `./enhancing/enhancer.js` to implement the requirements; `./enhancing/enhancer.js` exports an object that has the following methods:

- a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
- a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
- a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
- a `get()` method for use when working on the stretch problem.

The following sections list information provided by the client about `items` and the game's enhancing system.

### Items.

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

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- Add a `get()` method to the `enhancer` object that takes an `item` and **returns a new item** with the `name` property modified according to the following rules:
  - if the enhancement level is 0, the the name is not modified.
  - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
- Design and build a Web Application to test the enhancing module you implemented for the MVP.
- Work on [this repository for extra practice testing JavaScript Functions](https://github.com/LambdaSchool/Testing).
