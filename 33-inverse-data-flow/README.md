# Inverse Data Flow

## Deliverables

* ~~Render dragons on the left side of the screen (at home)~~
* When a dragon is clicked it moves to the right side of the screen (at war)
* If you click a dragon at war returns home



## Component Structure

* App
  * *State*
    * dragons
      * Object (Toothless)
      * Object (Smaug)
      * Object (Bozar)
  * Home
    * DragonCard (Toothless)
      * onClick Event Listener (sendDragonToWar)
    * DragonCard (Smaug)
      * onClick Event Listener (sendDragonToWar)
    * DragonCard (Bozar)
      * onClick Event Listener (sendDragonToWar)
  * War
    * DragonCard (Toothless)
      - onClick Event Listener (sendDragonHome)
    * DragonCard (Smaug)
      - onClick Event Listener (sendDragonHome)
    * DragonCard (Bozar)
      - onClick Event Listener (sendDragonHome)

> > Q: How do we change a dragon object from inside a DragonCard?
> >
> > A: Pass a callback from App (`selectDragon`) to **each** DragonCard we render. We call this **Inverse Data Flow**
> >
> >