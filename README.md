# Reddy Onboarding - Interview task

## Why are you here

You are reading this, mostly, because one of our Engineers (Aida) dislikes
reading CVs and talked the rest of the team into giving this method a go.

The way this works is pretty simple - in this repository there's a task to do,
one that reflects something directly from our work stream, and we want you to
spend about 2 hours solving it. Once you are done, either open a PR, or
fork/repost the repository and send a link, together with your CV to aida@reddy.io
and put "Onboarding - Interview task" in the subject line.

### The process

Everyone who submits a solution (aka actual code contributions in it) will get
invited to an hour chat with someone from the engineering to discuss your
solution, work history, what we do at Reddy, and what you are looking for
in your next role, etc. All the usual.

Those who pass will be invited to meet the rest of the team, and that's it for
the process, nice and simple as we like it!

It's important to note that there are no other checks to get the call, if you
submit a solution, you will get a call. Simple as that - you put the time in,
and so will we - fair is fair right?

## The task

### The problem

When training call center employees we are mostly working with young people,
and when they are faced with hours of training, they tend to get bored and
lose focus. Traditionally this training is done in a classroom, and usually
involves a lot of reading and listening to the trainer or pre-recorded
materials.

We want to change that, and make the training more interactive and engaging.

### The solution

To combat that let's gamify the process, ensuring good engagement and
interaction. We don't want you to build the actual training platform, but
rather the general flow of how would you see that working.

A good starting point would be to create a leaderboard, where the employees
can see their progress, and how they are doing compared to their peers. From
there, they could go and do the training modules and then keep track of
their progress.

### Requirements (what do you need to do)

We've provided you with a bare bones django project, with all the models you
should need to get started. It also has function called `do_training` which is
how you can simulate user taking on a training session, it will return a random
number of points the user has earned from 0 to 100, but will not store it.

You have to take those components and take it from there.

How you do it, is up to you, but keep in mind that sleek UI and UX is a must.
You should take into account future gamification of the process, and consider
support for a lot of animations, badges, and other visual elements. So with
that in mind I do recommend to use one of JS frameworks to help you with that
and create an API for the frontend to consume. If you think you can do it
without it, go for it! But I do expect you to showcase both your frontend and
backend skills within this task.

### Time constraints

We expect you to spend about 2 hours on this task, please do not spend more
time than that. We are not looking for a finished product, but rather a
showcase of your skills and how you approach the problem.

We are a startup, and we move fast, so we need to see that you can do the same.
We are not looking for a perfect solution, but rather a good one that can be
built upon.

### Technical details

We've provided you with a basic Poetry setup for managing dependencies - you
can install all the dependencies by running `poetry install`. We also provided
you with a `manage.py` file, so you can run the server by running
`python manage.py runserver`.

For the purpose of this exercise do not worry about authentication, just assume
that the user is logged in, and you have access to the user object, feel free
to hardcode that in the views.

Past that I leave the rest to you.

## Questions

If you have any questions, feel free to reach out to Aida at aida@reddy.io.
Keep in mind that this is not a way to skip the process, please do not ask.
I also won't answer question of "What should I focus on?" - the task is
very intentionally vague, and I want to see how you navigate this on your own,
as that is a big part of the job.
