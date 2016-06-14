# rn-workshop

## Prerequisites

<i>Note: Unfortunately, you'll need a Mac to participate in this workshop. You can't develop iOS apps without a Mac, and we'll be focusing on iOS first to keep things simple and straightforward.</i>

Follow the setup guide for iOS/Mac on React Native's [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) page. Make sure to do this before coming to the workshop, because some of these steps are time-consuming (Xcode, we're looking at you) 
and we don't want to waste time on installations when we should be coding.

The tldr of what you need is: 

- Mac
- Homebrew
- Node 4.0+ (`brew install node`)
- React Native CLI (`npm install -g react-native-cli`)
- Xcode 7.0+ 
- Watchman (`brew install watchman`)
- Flow (`brew install flow`)

When you're done, make sure to run `react-native run-ios` to make sure everything works. 


## The Big Idea

Back in the day, people used to make super-cool websites to advertise their brands. Like [this one](http://www.doron.com). 
Go on, have a look. It's a wonderful site. I'll wait...

Pretty cool, huh? 

Now just imagine a world in which mobile apps existed in 1995. The possibilities would have been endless. 

In this workshop, we're going to try to build the mobile apps we wish we had in 1995. We'll create a "Vanity App"
that advertises all the horribly ugly things technology can do and how it can be abused. And we'll learn React Native
as we go. 

### How This Repo Works


## Step 1 - Create an App

This is easy - the React Native documentation tells you how to do this. If you're not familiar with
the RN docs, now is the time to get to know them. Bookmark the link, you'll be going back there. 

When this step is done, you should have a directory with a README, LICENSE, and `VanityApp` directory
with a React Native app inside. `cd` to the `VanityApp` directory and run `react-native run-ios` to make sure
it works.

Having trouble? Ask for help.

## Step 2 - Write Some Code

You probably have a favorite IDE for developing JavaScript. Open the project directory in your IDE and take a look around.
We'll talk about the structure of the project a bit to get you familiar with what each part does.

Make some changes to the `index.ios.js` file and reload in the simulator. You should see your changes reflected in 
the app. If you do, congratulations! You're a React Native developer! If you don't...time to learn to debug.

### Step 2.1 - Debugging

Let's get familiar with debugging. Use the Chrome Dev Tools.

##Step 3 - HideousHomePage

Create a `src/` directory for your code. There are various conventions for project organization, but this project is small
so it doesn't really matter. Use whatever makes you feel comfortable.

- Name
- Background Image

###Step 3.1 - Styling

##Step 4 - Animations

- The Marquee

##Step 5 - Data & Redux

- Visitor Count
- Persistency

##Step 6 - Connecting to a Server

- Identifying Unique Visitors

##Step 7 - Touch Touch Touch

- Scrolling Marquee with Touch, Animations, etc

##Step 8 - Tongue Trick

- Introducing Navigation
- Should we use redux here? 

##Step 9 - Realtime Data

- Introducing Firebase

##Step 10 - Resume

- Load JSON from file and render
- Scrolling isn't a thing

##Bonus: Android

