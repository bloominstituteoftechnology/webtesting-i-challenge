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

In this project, you will **write unit tests and the implementation code** for a module that helps gamers see the results of a _success_ or _failure_ when trying to enhance their in-game items. The requirements are listed under the _Minimum Viable Product_ section below.

## Project Set Up

Follow these steps to setup your git _fork_ and _branch_.

- [ ] Fork this repository.
- [ ] Use GitHub's website to add your project manager as collaborator on **your fork**.
- [ ] **Clone your forked version** of the repository (**Not Lambda's**!).
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Commit changes to your `<firstName-lastName>` branch.
- [ ] Push often to your branch: `git push origin <firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge the `<firstName-lastName>` branch into the master branch on your fork. **Please don't merge your own pull request**
- [ ] Use GitHub's webiste to add your project manager as a reviewer on the pull-request.
- [ ] Your project manager will count the project as complete by merging the branch back into the master branch of your forked repository.

## Minimum Viable Product

After a set of interviews with the potential users of the solution, we gathered the following information about the functionality of the game's enhancing system. Your job is to design and build an `enhancer` object that publishes the following methods:

- a `success(item)` method that accepts an `item` object and returns a new `item` object modified according to the rules defined by the client for enhancement success.
- a `fail(item)` method that accepts an `item` object and returns a new `item` object modified according to the rules defined by the client for enhancement failure.
- a `repair(item)` method that accepts an `item` object and returns a new `item` with the durability restored to 100.

Not all the information provided by our client is relevant to the design of the solution, but it's included to help understand how the enhancing system works.

The following sections list information provided by the client about `items` and the game's enhancing system.

### Items.

- Items have `name`, `type`, `durability` and `enhancement`. Add any other properties you need to implement the client's requirements.
- The item's `type` can be _weapon_ or _armor_.
- The maximum _durability_ of an item is 100.
- The durability of an item starts at 100.
- The enhancement level of an item starts at 0 and can reach a maximum of PEN.
- The durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +14.
- The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.

### Enhancement

- The enhancement level of an item starts at 0.
- The maximun enhancement possible is PEN.
- Enhacing an armor up to 5 cannot fail.
- Enhacing a weapon up to 7 cannot fail.
- Enhancement level is displayed as a string with a plus sign ( + ) before the number for levels 1 to 15.
- Enhancement level of 0 is not displayed.
- when an item is enhanced, the `name` should be modified to include the enhancement level between square brackets before the item's `name`. Example: the new name of a "Elven Sword" enhanced to 7 would be _"[+7] Elven Sword"_, at DUO would be _"[DUO] Elven Sword"_.
- From +0 to +15 the enhacement is displayed using Arabic Numerals.
- After +15 the display for the enhancing level follows the table below:

| Level | Display |
| :---: | :-----: |
|  16   |   PRI   |
|  17   |   DUO   |
|  18   |   TRI   |
|  19   |   TET   |
|  20   |   PEN   |

### When enhacement fails

- The durability of the item is decreased by 5 if the item's `enhancement` is between 0 and 14.
- The durability of the item is decreased by 10 if the item's `enhancement` is greater than 14.
- If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
- The name is updated to reflect the new enhancement level if it was decreased.
- If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
- If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.

### When enhancement succeeds

- The item's enhancement increases by 1.
- The name is updated to reflect the new enhancement level.

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- Design and build a Web Application to test the enhancing module you implemented for the MVP.
- Work on [this repository for extra practice testing JavaScript Functions](https://github.com/LambdaSchool/Testing).

-abcd
