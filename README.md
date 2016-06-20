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

There are two directories in the root: `boilerplate` and `solution`. The `boilerplate` directory contains everything you 
need to work with throughout the workshop, and the `solution` directory contains, well...the solution. Try not to cheat,
but it's there if you need it.

We have an existing web app called `vanity-website` implemented in React. Architecturally, it's very simple. It's not complete, we're
going to put the finishing touches on it to make sure we all understand the different pieces that come together to make a React web app.

Once we're done with the web app, we'll try to implement similar functionality in a React Native app. We'll get a feel for 
where native differs from the web and where it's the same, what kind of code we can reuse across platforms and what we can't. 
We'll also see that some functionality that works well on the web doesn't work in mobile, and some of the things you can get
away with (or without) on the web you can't on mobile.

## Step 0 - Our Web App


## Step 1 - Create an App

This is easy - the React Native documentation tells you how to do this. If you're not familiar with
the RN docs, now is the time to get to know them. Bookmark the link, you'll be going back there. 

Call your app `VanityApp`. When this step is done, you should have a `VanityApp` directory
with a React Native app inside. `cd` to the `VanityApp` directory and run `react-native run-ios` to make sure
it works.

Having trouble? Ask for help.

## Step 2 - Write Some Code

You probably have a favorite IDE for developing JavaScript. Open the project directory in your IDE and take a look around.
We'll talk about the structure of the project a bit to get you familiar with what each part does.

Make some changes to the `index.ios.js` file and reload in the simulator. You should see your changes reflected in 
the app. If you do, congratulations! You're a React Native developer! If you don't...time to learn to debug. Hit Cmd + D
click the button to debug your JavaScript remotely. This will run your JS in Chrome, and allow you to debug using 
the dev tools there.

##Step 3 - HideousHomePage

Create a `src/` directory for your code. There are various conventions for project organization, but this project is small
so it doesn't really matter. Use whatever makes you feel comfortable.

Add a background image (you'll probably have to consult with Google to figure out how to do this) and some lines of text
like your name and a welcome message.

###Step 3.1 - Styling

Your mission, should you choose to accept it, is to attempt to get the background image to take the entire screen (regardless of device size)
and center all the text both vertically and horizontally. For most people, this isn't as easy as it sounds. Good luck.

(You can ask for help if you need it, of course.)

##Step 4 - Third Party Native Components

No 1990s site or app is complete without an annoying scrolling marquee. Fortunately for us, we don't have to implement the marquee 
ourselves. Somebody else did it for us. Now it's time to learn how to add third party native components to our app.

##Step 5 - Reusing Business Logic

This step is fun, because it's copy/paste. Go ahead and implement the visitor count feature from the web. The good news is
that all the business logic should work out of the box, you just have to write the component. And even that is 80% reusable.

##Step 7 - Navigation

Navigation is one of the more complicated parts of the React Native ecosystem. No app is complete without proper transitions 
from scene to scene, so we'll use the out of the box `Navigator` component and build three screens:

- HideousHomePage
- MonkeyList
- Monkey

##Step 8 - ListView

ListViews are a major building block of mobile apps, and getting the hang of how they're generated is crucial. In this step,
try to render all the images of chimpanzees with their tongues out in a list. You should be able to scroll through the list
and select an image by tapping on it, which should push a new scene with just that image on it.
 
##Step 9 - Touch Touch Touch

A mobile app that is simply a website packaged for a phone isn't much of a mobile app. What makes mobile a powerful platform
is how it makes touch interaction a first-class citizen and emphasizes natural UX. In this step, you should allow the user
to drag the image around the screen with their finger. Remember to give the user some visual feedback when they tap so they
know they're dragging the image.

##Step 11 - Global Styling

Houston, we have a problem. We built an entire nineties app but forgot to change the font to something ugly. How can we globally
change the font of our app? (And not just the font family - we'd like to color all the text purple as well.) This, unfortunately,
isn't as easy as it might appear... `<evil-laugh />`

##Bonus: Android