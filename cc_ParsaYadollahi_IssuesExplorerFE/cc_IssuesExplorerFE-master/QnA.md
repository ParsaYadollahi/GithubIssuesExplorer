# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?
- Luckily, there doesn't seem to many risks possible for this assessment since the task at hand is very clear and to the point. I think the biggest risk is time. Being able to make a project look exactly as it is implied to be is a hard task to complete in a specific timeframe, especially when working with CSS. The exception errors are another aspect that I would have to pay close attention to. But knowing Github's API and all the possible user mistakes, it doesn't seem like it will be an impossible task.

> What changes/additions would you make to the design?
- This is a hard question to answer in the sense that design is centered more on the target audience. To create the optimal UI, I would have to know which type of user I am creating this project for. If I were the target audience, I would change the search page into something more welcoming, like round borders, a button at the bottom saying "Issue Search" that will have the same functionality as pressing enter. I feel as though the search page is following in the steps of Google's front page. The biggest change I would make is on the second page that displays the issue. My guess is that the audience targetted is most likely a project manager or somewhere along those lines, where someone does not like how GitHub displays their issues. That being said, that means that the user would have to be able to know the dates of the issues. The way the blocks are displayed makes it difficult at first glance to know if I should be the boxes from right-to-left or up-to-down. Another feature I would add would be to be able to filter the issues by, for example, their labels, title, description, and date. I would have different colors for the pull request and issues icon since the user wouldn't always be able to differentiate between pull requests and issues title and description as well as the fact that the icon is difficult to notice for first time users. All-in-all, I would add some clarification to the boxes to make sure the user can follow with ease of mind.

-

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- I was lucky with this coding assessment since it is done with React JS which is my goto for frontend development.
- I followed through with using google's Material UI framework since I work well with it and it is one of the most versatile and widely used frameworks
in React JS. I decided to only use this one UI framework because I knew that using multiple can, many times, lead to unwanted results
- I used React Router to navigate between components, lazy loading, and speed.
- I decided not to follow with Redux because I found that there wasn't much use for it and that it would take more time to implement then benefit from it

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- First setting up the project (25-35 minutes), as in planning which frameworks I will use, what I can add, fully understanding the task at hand, setting up and creating the files and folders my project will need. Luckily this step did not take too long since I was already given a look I was to replicate. I didn't have to work with Figma this time.
- Implementing the front page (30 minutes) was straight forward since it was just a text box I needed to add. The aspect that took me a while was working with the CSS and making sure everything on the front page looked like the image that was provided to me.
- Implementing the Navbar in Navbar.js took the least amount of time (30 minutes) since this was easily implementable with Material UI.
- The states bar indicating 'All/Open/closed issues and Pull requests took longer than expected (45 minutes to 1 hour), since I wrongly planned how I would implement it. I assumed that to get the Pull requests, I needed to use Github pull request API instead of the issues API, which has the extension "/pulls" instead of "/issues?state=:state". This meant that I had to replan my entire project around that mistake.
- The results page took the most amount of time (1 - 1:15 hour) because this is where most of the bulk of the work happened. This is where most of the components linked. On this page, I fetched the data and handle most of the errors like loading, wrong repo. The biggest issue was with my pull request and issues extension, which I had to create two different schemas for fetching the issues data and the pull requests data.
- The IssuesBox page was following the trend of wrong planning (30-40 minutes), where I had to figure out a new way to set up how I was going to display each error. The biggest issue was with the Icon to display if this issue is a pull request or a closed issue. Since the Github's pulls API did not have the same response as this issues API. Meaning that the 'Pull Requests' filter was implemented differently in the other 3.
- Close to finishing the MVP, I had a small issue where I tried to git stash my work and by doing so I lost the IssuesPage.js file and the NavBar file. Luckily, I had them fresh in my mind, so it didn't take much time to reimplement the two files I had deleted by accident. This one small issue took me back at least 45 minutes.
- All in all, I had an MVP in roughly 4-5 hours. But I did not like the UI. So I spent the next few hours tinkering with the design of the webpage, adding some CSS, working on the bonus tasks and adding new features.


> If you could go back and give yourself advice at the beginning of the project, what would it be?
- The biggest advice I would give myself is to plan out even more. Research the API, on the frameworks. That way I would be able to code much faster. Since I was still not fully understanding of the API, which led to many mistakes and was not entirely sure how to use React Router, which I had to do some research which took time out of my coding.

> Did you learn anything new?
- I learned how to implement an SVG file as an Icon. This might seem simplistic, but this is one of the issues that took me the longest to figure out. I've never done it because I usually use the frameworks icons.
- I learned that planning a project out from start to finish is much more important than I thought. It leads to a more meticulous flow and steady flow of work.
- I recently completed a full-stack project which was done with React and Material UI. This was a good refresher of that project, where I really dug deep and fully grasped the concept of this framework.

> Do you feel that this assignment allowed you to showcase your abilities effectively?
- Yes, since frontend is my strong suit and more specifically using React js, I feel that this was a good assessment to showcase my creative mindset and my approach to solving challenges in unique ways. I was also lucky to be able to display the entire project meticulously.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
- Unfortunately, I was unable to use Redux for this project because I didn't feel the need to use it in this scenario. Since your internal tech stack uses React, I feel as though that would have been a great addition to my candidacy
