![Banner](/images/evernote-banner.svg)
# Evernote

During my internship at Evernote, I was fortunate enough to work with the Evernote mobile development team. I learned how to adapt quickly to a professional environment, keep a keen eye for details, and make a real impact through software. In this article, I will go over some of the tasks that I worked on and my overall experience at the company.

## Learning the Ropes - Offline Toggle

The first task I had was a simple UI change, adding an on/off toggle for offline notebook availability, meant to ease me into working at Evernote. The ticket helped me learn how to communicate with my team members and product manager for support and clarity. It also helped me to grow familiar with Evernote’s code base and Agile development practices. 

## Discovering the Root of the Problem - iOS Headers

Another notable task, was fixing a bug on the iOS version of the Evernote app. The issue was that headers for certain pages would intersect with the camera notch on newer iPhones when the phone was rotated. A short term fix was to add paddings and call it a day, but doing so wouldn’t explain the unexpected behavior.

I eventually diagnosed the issue as a bug caused by an external dependency that was in the process of being upgraded. As a result, I documented the issue and noted how several short term fixes in other parts of the app would break once the dependency was updated. 

## Main Project - Redesigning Sharing

My main project at Evernote, which spanned the entire duration of my internship, was redesigning the way users shared information into the Evernote app. The redesign was motivated by…

1. Feature Parity with iOS:

    To ensure consistency across platforms, the Android experience needed to be altered to match iOS, which remains in the current context.

2. Addressing Usability Concerns:

    Customer feedback indicated that sharing multiple notes into the Android Evernote app was cumbersome. Users had to navigate back and forth between their browser and the Evernote app, which was inconvenient.


In order to create the new experience, I utilized a lighter version of the Evernote app used for widgets. Using the lighter app I opened a dialog that overlayed the current context. The final product of which can now be seen in production: 

![GIF](/images/evernote-recording.gif)

## Conclusion

Throughout my internship, I was actively supported by my colleagues at Evernote, leveraging their expertise to drive my work forward. I took the opportunity to communicate beyond just other engineers and would seek out insight from product designers, managers and QA testers, wanting to learn and grow beyond traditional boundaries. Evernote was marked by personal and professional growth that I will take into the work that I do in the future.

