# Lab 8 - Starter
## Bryce Beeson 

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
    - Within a Github action that runs whenever code is pushed
        We want to test the code incrementally so that we can test on any changes that get made to our code. It will make sure that it doesn't break any code that is already in our repo and we are more likely to keep an idea of what works and what doesn't work in our testing. 

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    - No, thats too much effort for a test if we are just checking if a function is returning the correct output.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - No. The purpose of unit test is to isolate code and test if it works as intended and the messaging feature most likely requires multiple functions to test code which falls outside the range that is expected for unit test.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    - Yes, because a length feature can be tested in one unit test and can be checked with a single function instead of multiple, meaning that the code can be isolated to ensure it works correctly.
