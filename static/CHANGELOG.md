# (Cilent) Update [2026-10-8]

  - This version of the client is owned and maintained by Faraj
  - Now live at arras-io.duckdns.org

# Announcement [2026-10-07]

  - Maintenance has completed.
  - Asia servers have been readded and will remain available for the foreseeable
    future!

# Update [2026-10-03]

  - Readded the Sandbox $ nexus command.
  - Reverted 2TDM bases to be on the left and right edges of the arena, and 4TDM
    bases to be on the corners.

# Balance [2026-10-03]

  - Reverted Fork and Conqueror to their old behavior with a slight damage nerf.

# Announcement [2026-10-03]

  - Arras.io will be undergoing maintenance on
    {% raw %}{{Intl.DateTimeFormat([],{weekday:'long',month:'numeric',day:'numeric'}).format(new
    Date('2026-10-07T04:00:00Z'))}}{% endraw %} at
    {% raw %}{{Intl.DateTimeFormat([],{hour:'numeric',timeZoneName:'short'}).format(new
    Date('2026-10-07T04:00:00Z'))}}{% endraw %}.
  - All servers will temporarily shut down before restarting. We expect that the
    maintenance period will be brief.

# Patch [2026-10-02]

  - Removed support for IPv6.

# Announcement [2026-09-27]

  - We're running some polls and looking for feedback about some changes you'd
    like us to revert in the unofficial community Discord server. Come share
    your thoughts, or just hang out and talk with other players!
  - We've also brought back chat and player names in all modes and reopened the
    Nexus so players can discuss the upcoming changes.
  - Join the Community Discord

# Announcement [2026-09-24]

  - Arras.io has been through a lot over the past eight years, and we know that
    many of you haven't had the best experience.
  - We'd like to better understand what the players think, and what you want to
    see from the game moving forward.
  - As such, we're putting out a survey for you to share your experiences,
    frustrations, ideas, and hopes for the game.
  - Your responses will be read and analyzed to help shape the future of
    arras.io. We appreciate you taking the time to give us your feedback!
  - Take the Survey

# Patch [2026-09-15]

  - Fixed multiple vulnerabilities that caused server crashes.

# Patch [2026-09-10]

  - Added Cloudflare Turnstile.

# Announcement [2026-09-09]

  - Maintenance has mostly completed.
  - Expect more server restarts than usual over the next few days as we finish
    up.

# Announcement [2026-09-05]

  - Arras.io will be undergoing maintenance beginning on
    {% raw %}{{Intl.DateTimeFormat([],{weekday:'long',month:'numeric',day:'numeric'}).format(new
    Date('2026-09-09T04:00:00Z'))}}{% endraw %} at
    {% raw %}{{Intl.DateTimeFormat([],{hour:'numeric',timeZoneName:'short'}).format(new
    Date('2026-09-09T04:00:00Z'))}}{% endraw %}.
  - All servers will shut down and become unavailable during this maintenance
    period. We expect that this maintenance period may take several hours.

# Patch [2026-08-22]

  - Fixed an issue where occasionally the game persistently loads to a blank
    screen for all players.

# Patch [2026-08-17]

  - Oceania servers have been restored.
  - Asia servers have been removed and will remain unavailable for the
    foreseeable future.

# Mods [2026-05-22]

  - Added following mods:
  - showhiddenlobbies.js, adblock.js

# (Cilent) Update [2026-05-22]

  - Added mod loader.

# (Cilent) Update [2026-05-17]

  - Added death screen parser.
  - Updated mockup parser.
  - Added admin and self-destruct packet constructors.
  - Bypassed the latest patch.

# Announcement [2025-12-13]

  - Over the past several weeks, arras.io has received multiple DMCA takedown
    notices from 3AM Experiences LLC, the owner of diep.io.
  - These notices resulted in the deletion of our official Discord server and
    most proxy sites, as well as various server outages.
  - We believe that the claims raised in these notices overstate the scope of
    copyright protection of video game mechanics, and we are working with
    Discord and our hosting providers to restore affected services.
  - A detailed, transparent summary of the situation is available here:
  - View Full Announcement

# Patch [2025-12-02]

  - Temporarily Removed the Discord button.

# Update [2025-09-08]

  - Balancing changes. See the Balance section for more details.

# Balance [2025-09-08]

  - Nerfed Assailant's reload speed
  - Fixed an oversight that allowed Assailant branch to reload without waiting
    to cycle.

# Gamemode [2025-09-07]

  - The server rotations have been updated again.
  - Gameplay variants (Growth, Arms Race, Normal) will still travel across
    servers every 3 days.
  - 3 Servers within each region will feature no gameplay variants.
  - 2 Servers within each region will feature Growth.
  - 2 servers within each region will feature Arms Race.
  - 2 servers within each region will feature Growth Arms Race.

# (Cilent) Update [2025-08-23]

  - Added "P" packet parsing and data handling.

# (Cilent) Update [2025-08-22]

  - Development of a reversed protocol has begun.
  - Access to fully decoded outgoing and incoming packets.
  - Packet parsers are in work ("u", "b", "R", COMPLETE, "J" mockup names
    completed, remaining info isn't necessary).
  - Functionality to construct custom outgoing packets
    (window.packet_constructors) is supported.
  - Functionality to send custom outgoing packets (push to window.packet_queue)
    is supported.

# Update [2025-08-14]
- Labyrinth portals will now display their region.

# Patch [2025-08-14]
- Fixed a bug that caused Manhunt to crash.
- Fixed a bug that allowed for players to receive double skill points.
- Fixed a bug that caused Arms Race and Growth gamemodes to disappear.

# Gamemode [2025-08-06]
- Removed "Walker" maze generation from all TDM modes.
- Increased the amount of rocks in Rock FFA from 128 to 512.
- Increased the overload threshold in sandbox servers.
- Bosses will no longer receive Growth size buffs.

# Patch [2025-08-06]
- Fixed a bug that caused players to not receive the entire score from kills in Manhunt.
- Fixed a bug that prevented players from chatting with teammates in Clan Wars.

# Update [2025-08-05]
- After reading community feedback regarding the mode rotation changes, we have reinstated rotations similar to what they were prior to their change.
- Gameplay variants (Growth, Arms Race, Normal) will travel across servers every 3 days.
- 3 Servers within each region will feature no gameplay variants.
- 3 Servers within each region will feature Growth.
- 3 servers within each region will feature Arms Race.

# Balance [2025-08-05]
- Players will now continue to receive health buffs from their current size in growth until level 120

# Update [2025-07-23]
- Bosses, Motherships, Dominators, and Sanctuaries will now display their names.
- Chat has been re-enabled in the Nexus.
- The rate you grow at in Growth has been increased.
- You will no longer receive more health from your size.

# Gamemode [2025-07-23]
- Chat has been disabled in FFA, Squads, and Duos. This change does not apply to your squadmates or Sandboxes.
- In modes with Teams, you will only be able to chat with your teammates. This change does not apply to the Nexus.
- In FFA, Squads, and Duos, you will no longer be able to see enemy names. This change does not apply to your squadmates or Sandboxes.
- The above changes are due to an increase in cross-teaming amongst enemy players, particularly in Squads/Duos. Please direct your frustrations toward them.

# Gamemode [2025-07-11]
- Thanks to your feedback, we've made a few changes to the aforementioned gamemode rotation changes.
- The Minigame servers will now rotate between Manhunt, Siege, and Assault every three days. This means that one of each of those gamemode will always be present.
- Servers that rotated every 3 days will now rotate every 24 hours instead.
- Elimination, Capture the Flag, and Soccer have been moved to the Legacy Minigames rotations.
- Fixed a bug that causes Asia servers not receive proper Arms Race rotations.
- Fixed Walker maze generation in Labyrinth not creating enough walls.
- We are also currently investigating a reported issue regarding random bouts of disconnections. We thank you for your reports and patience while we investigate and resolve this problem.

# Announcement [2025-06-27]
- The amount of servers have been reduced to 4 per region (excluding Nexus, Forge, Limbo, and other hidden servers).
- The first server in each region is dedicated for traditional PvP gamemodes. The server will rotate to the next gamemode on a three day basis.
- The second sever in each region is dedicated for Growth gamemodes. The server will rotate to the next gamemode on a three day basis.
- The third server in each region is dedicated for Minigame gamemodes. The server will rotate to the next gamemode on a three day basis.
- The fourth server in each region is dedicated to a weekly rotation between Labyrinth, Old Dreadnoughts, and Legacy Minigames (Tag, Mothership, and Domination).
- Arms Race will travel between the first three servers (PvP, Growth, and Minigames) every 3 days.
- Every 3 rotations (9 days), there is a 3 day period for Legacy Gamemodes to become available again. This includes: Space, Outbreak, Tetromino, Classic, Portal Mothership, Growth Manhunt, and Ma[...]
- Made maze and map adjustments to various Assault layouts.
- Added two more alternative maze generations to maze gamemodes.
- Made quality of life adjustments to some Minigame gamemodes.
- You can read more details about every change in the Changelog section.
- The Oceania and Asia servers have been replaced and it's hardware upgraded.

# Gamemode [2025-06-27]
- Simplified Capture The Flag gamemode's maze generation, and changed the flag locations.
- Made the Soccer gamemode's field shorter.
- Added another alternative Dominator layout to 4TDM Domination.
- Motherships initial spawn corner is randomized every time the gamemode begins.
- Rocks will spawn randomly throughout the arena instead of in designated areas (unless explicitly specified). Most gamemodes have their rock count capped at around 10.
- Added another alternative base layout to 2/4TDM gamemodes.
- Remade Yin Yang layout to closer resemble a "Yin Yang".
- Made slight modifications to the maze generations of Trenches and Bastion layout.
- Added an alternative entrance to the sanctuary in Line layout.
- Made Stronghold, Acropolis, and Booster layout's maze symmetrical and modified them a bit.
- Modified Booster layout to more closely resemble a Booster.
- All three types of maze generation have been integrated into (almost) all gamemodes.
- Noise Maze Generation features nine unique variations: Normal, Clamped, Experiment 1, Experiment 2, Quantized, Domain Warped, Multiscale, and Marble.
- Walker Maze Generation features no unique variations. However, you may find it to be familiar.
- Erosion Maze Generation is the widely used maze generation you are already familiar with. However, some adjustments have been made to it for certain gamemodes.
- If you would like to provide feedback, you can use the $ maze command to retrieve the maze type, maze variation (if applicable), and maze seed.
- Maze symmetry is supported across all three maze generations now.
- Magic Maze no longer uses a corn maze-esque generation, and can now function with any maze generation.

# Announcement [2025-06-25]
- We're upgrading our servers to improve stability and performance. Over the next few days, there may be occasional downtime during maintenance. Once complete, the new servers will be less likely[...]

# Update [2025-06-03]
- Added bases to the Labyrinth.
- Dreadnoughts can no longer enter modes other than the Labyrinth, and Siege.
- Dreadnoughts that enter Siege will not be allowed to return to the Forge.
- Dreadnoughts will fight alongside players on their team.
- Dreadnoughts will no longer appear to every player on the minimap.
- Removed the level 60 requirement to join the Labyrinth.
- Greatly increased the rare polygon spawn rate in the Labyrinth.
- The Nexus can no longer be joined from the home menu.

# Update [2025-05-26]
- Nemesis will now only hunt the leader in Manhunt if they are suspected to have forged allegiances.

# Patch [2025-05-26]
- Fixed an oversight that would give a random player the leader kill in Manhunt, rather than the player that contributed the most to the kill.
- Fixed a bug that would sometimes instantly kill players upon reloading their tab.
- Fixed a bug that caused players to take damage if they were near a normal wall while under a permeable wall.

# Balance [2025-05-26]
- Fork bullets will only "fork" if it dies at its max range.

# Update [2025-04-08]
- The April Fools' event has ended. All of the skins have been removed except for the flag related skins.
- Skins are disabled by default, and can be enabled in the options menu.

# Patch [2025-04-08]
- Skins are no longer displayed on tanks with turrets.

# Update [2025-04-01]
- Added skins.

# Patch [2025-04-01]
- 3D mode has been removed fully.

# Patch [2025-03-07]
- The game is now playable on Firefox version 52.

# Patch [2025-02-19]
- Players with scores under 50k will no longer keep their tank when they reload their tab.

# Update [2025-02-14]
- Added an in-game moderation team. You can join the Discord at discord.gg/arras for information.
- Disabled projectiles in the nexus. You can still recoil as normal, but bullets and traps won't be fired.

# Patch [2024-07-31]
- Made the ad blocker banner less likely to randomly show up.

# Update [2024-07-31]
- The notification bar is now limited to 4 notifications unless you hover over it.

# Update [2024-07-30]
- Added an $ arena spawnpoint subcommand for sandbox.
- The maximum number of walls which can be placed has been raised.
- Added Portal walls, which teleports a player to another portal wall of the same color, and Checkpoint walls, which changes your spawnpoint.
- You can now drag on the class tree to pan instead of moving your cursor around.

# Patch [2024-07-30]
- Fixed the chat input being glitchy sometimes.

# Patch [2024-07-28]
- Fixed Sandboxes never inheriting to regular users.
- Special walls now look more different from each other.
- Sandboxes are now more likely to overload.

# Update [2024-07-27]
- Some of the Asia servers have now been moved to the old server to improve performance.
- Added a Sandbox attribute which allows entities to pass through walls.
- Added a Sandbox menu for mobile users. Click the \` button, and then press the equivalent key on desktop.
- You can now click on the extra information display on mobile to expand it.
- Slightly redesigned the links menu.

# Patch [2024-07-27]
- Fixed the game always reloading when you fail to connect to a server.

# Patch [2024-07-24]
- Fixed a bug where the "Sandbox" text in the server selector is misaligned.
- Fixed the arena size being uneven in Sandbox.
- Fixed the old multi-drag bug, which is now superseded by joints.
- Fixed joints being stuck on dead entities.
- Fixed too many Dreadnoughts getting into the same server.
- Fixed other bugs.

# Update [2024-07-19]
- Added a new operator action in sandbox. Various attributes and abilities can now be controlled by holding \` + A and another key. To view these attributes, press \` + A + F1. Note that you do n[...]
- Additionally, \` + J can now be pressed to create a joint either to a point or to another entity. You can press the key multiple times to switch between a fixed joint, a rotatable joint, a dire[...]
- Furthermore, \` + S can now be used to control your skill points. Use \` + S + F1 to view all skill commands.
- The previous \` + M, \` + S, and \` + L have been superceeded. \` + M is now \` + A + T. \` + S is now \` + S + H + M. \` + L is now \` + A + L.
- Added Healing, Paint, Filter, Team, and Base walls.
- Added an $ arena command, allowing Arena Operators to set the size and team count of the arena, as well as allowing them to close the arena or make the sandbox public.
- Added a permission tier system and a player list. Arena Conductors can do most basic actions, but cannot kick players, manage permissions, or use the $ arena command. Arena Supervisors can kick[...]
- Added a sandbox nexus, accessible with the $ nexus command, where you can portal to all public sandboxes.
- Added Healer to the preset menu.
- Added sandbox servers in Asia.
- The sandbox command help menu is now automatically adjusted for those not using a standard 104-key US QUERTY keyboard layout.

# Gamemode [2024-07-12]
- Added Overgrowth, a spinoff of the Growth game mode. In this mode, you will grow much faster than in Growth, but upon the first time you reach level 400, you stop growing and gain the ability t[...]

# Update [2024-07-12]
- Added a new branch to Sniper: Marksman.
- Marksman branch's bullets are able to pierce through multiple targets.

# Patch [2024-07-12]
- The time between Siege waves is now capped at a maximum of 60 seconds.
- Fixed certain dark theme extensions causing the name input to be invisible.
- Increased the amount of time you have to reconnect before your tank disappears automatically.

# Patch [2024-07-02]
- Ads should no longer be able to fully cover the spawn buttons.

# Update [2024-06-25]
- Ads should no longer be able to cover the buttons on the death and disconnection screens.

# Patch [2024-06-25]
- Fixed names being able to be edited while spawning.

# Update [2024-06-24]
- Added a reconnect button on the disconnection screen, as well as a back button to return to the spawn screen.
- Fixed an issue where certain device settings can cause the minimum scroll amount to be larger than the viewport size.
- For those unaware, touchpad users are able scroll by holding down two fingers and dragging them up and down the touchpad.
- Added a temporary option to undo the spawn menu scaling, which will be available until the spawn menu is redesigned.

# Update [2024-06-23]
- The spawn menu will now scale with the screen size and the UI size setting.

# Balance Update [2024-06-22]
- Dreadnoughts have been further rebalanced. They will now be faster again, but deal less damage.

# Patch [2024-06-21]
- Made some minor UI changes to the spawn screen.

# Update [2024-06-19]
- Dreadnoughts will now be displayed like bosses on the minimap.
- Nerfed the speed of all Dreadnoughts except Eggnaughts.
- Nerfed the health scaling of Juggernaut branch.
- Fixed the design of Hexagonal Photosphere being outdated.

# Update [2024-06-18]
- Added a Hexagon tier to Dreadnoughts at level 240.
- The Labyrinth portal in the Nexus now requires level 60 in order to access.
- Dreadnoughts can now enter normal game modes like before. However, only 4 may be present in any TDM server, and only 2 may be present in any FFA server.
- The Labyrinth now consists of one team instead of four. Dreadnoughts, however, will still be on a separate team from tanks.

# Update [2024-06-16]
- Growth Maze modes now have a size cap at level 300 like Old Dreadnoughts.
- Made a few UI changes, such as adding a respawn button. Additionally, we've also added a system to prevent ads from covering anything important on the death screen.
- The least popular themes have been removed. If you still want to use them, the theme codes are available here: [pastebin.com/raw/Zd0Eix4j](https://pastebin.com/raw/Zd0Eix4j)

# Announcement [2024-05-31]
- Now is the time to voice your opinions if you have any feedback about the Old Dreadnought growth curve, and we've published a survey here: [forms.gle/ckQYzbR9igt6CouKA](https://docs.google.com/forms/d/e/1FAIpQLSe0W0PA1k8f6ix0DxfQ4rsdW-5f2pa0qK7rY-sPiR0q7l6gQ/viewform)

# Update [2024-05-30]
- The list of themes in the theme selector has been sorted by popularity, and some of the more popular themes were updated to have a proper Hexagon color.
- We've reworked how the game handles input and implemented a new system to allow for scrolling.
- The mobile options menu now looks the same as the one on desktop. If the menu is too large, you may scroll down on the menu.
- Similarly, you can now scroll down on dropdown menus if there are too many items to be displayed.

# Patch [2024-05-25]
- Fixed auto-turrets becoming highly inaccurate when the entity it's attached to is moving at high speeds.
- Fixed a bug which caused Old Dreadnoughts to move slightly faster than intended.

# Balance Update [2024-05-25]
- We have done a large variety of balancing changes to Arms Race. Go to the [balance update section](#balance) for more details.

# Balance Update Details [2024-05-25]
- Bonker branch now has a new stat called **Body Size**. Upgrading it will decrease its size, which also decreases its knockback resistance.
- Nerfed Basher's health and acceleration slightly.
- Banger branch now has a new stat called **Body Size**. Upgrading it will increase its size, which also increases its knockback resistance.
- Buffed all of Banger branch's health significantly.
- Slightly nerfed Crowbar branch's bullet damage.
- Slightly buffed Triple-Auto turrets and gave them 360 degree vision.
- Underdrive turrets no longer attack polygons.
- Slightly buffed the side auto-turrets on Scrimmer.
- Underseer branch can now ram polygons to infect them like normal modes.
- Buffed Equalizer, Auto-Equalizer, Cutlass, Double Equalizer, Dagger, and Equalizer Guard.
- Nerfed the acceleration of Doper branch's drones.
- Increased Mega Trapper's trap lifetime.
- Buffed Sniper-3 branch's bullet health and speed.
- Slightly increased Death Star branch's bullet health and penetration.
- Buffed Stomper recoil.
- Slightly nerfed the basic barrel of Cockatiel branch and gave its front barrels a little bit of recoil.
- Very slightly nerfed all the barrels on Gale.
- Nerfed the reload of Honcho branch.
- Nerfed the reload and lifetime of Draftsman charges.
- Slightly nerfed Carnivore.
- Buffed Shaver and Hurler-3 missiles.
- Buffed Tricker traps.
- Buffed Mega-Auto turrets.
- Traps shot by Squaller and Guarder missiles will now remain after the missile dies.

# Patch [2024-05-23]
- Reworked how touches are processed on mobile. You are now able to upgrade your skills while moving.

# Update [2024-05-23]
- Portals now display how many players are in the other server.
- Added a global leaderboard in Old Dreadnoughts. As a reminder, you can now switch between multiple leaderboards with the $ leaderboard command.
- Portals no longer change the team you are on in Old Dreadnoughts.
- We've implemented a new growth curve for Old Dreadnoughts. Like in Growth, tanks will now also gain more health as they level up. Unlike Growth, there will also be a size cap at level 300.

# Patch [2024-05-22]
- Made entities less likely to spawn on top of each other.

# Announcement [2024-05-21]
- Now is the time to voice your opinions if you have any feedback about the new growth curve, and we've published a survey here: [forms.gle/i5EHUk1GJ1NunPnB9](https://docs.google.com/forms/d/e/1FAIpQLSdeN-uWkD7rHnQW3NRTHFH11nEWd0q1Qd8gX6g_3YwX7Qq0zw/viewform)

# Patch [2024-05-20]
- Temporarily changed \` + A to \` + M in preparation for a future update.

# Update [2024-05-20]
- We've implemented a new growth curve for Growth.
- Unlike the previous curve, tanks no longer get exponentially bigger until they are too big to fit in the map.
- Tanks will now also gain more health as they level up.
- We'll be publishing a survey tomorrow about the new growth curve.

# Update [2024-05-18]
- The Asia servers have been moved to a new provider and given a bandwidth upgrade, ensuring that they will no longer become unavailable near the end of the month.
- We'd like to know how the change have affected the servers' latency. If you have played in an Asia server both before and after the change, please complete the survey here: [forms.gle/UeRcZ5UBp[...]

# Patch [2024-05-16]
- Slightly reworked the level and FOV curves. This should have no impact on the growth curve in Growth and Old Dreadnought, but the score requirements of the Dreadnought upgrades did change.
- Becoming a Dreadnought still requires level 90, which would now require more score. Upgrading to a Square Dreadnought still requires level 120, now requiring more score.
- Upgrading to a Triangle Dreadnought now requires level 150, now requiring less score. Upgrading to a Pentagon Dreadnought now requires level 180, now requiring less score.

# Patch [2024-05-13]
- Slightly optimized the game's rendering engine.
- Fixed a bug which caused Necromancers to have an incorrect amount of drone health.

# Balance [2024-05-13]
- Reworked how health is gained each level. This should have no effect on the game overall, except Old Dreadnoughts now gain more health each level compared to normal tanks.

# Update [2024-05-11]
- The controls for the class tree have been changed. You may either scroll or use buttons to zoom.
- You can now switch between multiple leaderboards with the $ leaderboard command.

# Patch [2024-05-05]
- Instead of disconnecting, players should now be pushed out of portals when they fail to reconnect.
- Fixed a bug where players could use names that are too long in Clan Wars.

# Patch [2024-04-30]
- The pull strength of portals are now much weaker when they initially spawn.
- Fixed portals being able to spawn directly on top of players.

# Patch [2024-04-28]
- Fixed the rarity of certain rare polygons.

# Patch [2024-04-25]
- Reworked polygon spawning slightly in Old Dreadnoughts.
- Polygons are now less clustered and should be less likely to spawn on players.

# Patch [2024-04-23]
- The Forge is now treated as a base. This will make sure players can use the $ afk command, and won't be pulled into portals while AFK.
- Added the $ save command, which does the same thing as pressing the save key.

# Patch [2024-04-21]
- Portals now remain open for longer.
- Bullets and traps are now damaged when they are deflected by portals.

# Update [2024-04-17]
- Old Dreadnoughts modes now use the new portal system.

# Patch [2024-04-17]
- Players can no longer spawn in enemy bases in Old Dreadnoughts.
- All Dreadnoughts, as well as tanks in the Labyrinth, can now reload their tab like normal tanks.

# Patch [2024-04-15]
- Portals now push bullets away and pull players in.
- AFK players in bases can no longer enter portals.

# Patch [2024-04-13]
- Added secret options.

# Patch [2024-04-11]
- 3D mode has been removed.

# Update [2024-04-03]
- 3D mode is now off by default. You will still be able to turn it on in the options menu for a week.

# Update [2024-04-01]
- Added a whole new dimension to the game.

# Balance [2024-03-29]
- The reload of Battleship's AI drone spawners now match the reload of its normal drone spawners.
- Nerfed the drone speed of Inquisitor, Invader, and Assailant in Old Dreadnought, but buffed their damage slightly.
- Buffed the swarm range of Infiltrator.
- Buffed the bullet damage of the Sword branch.
- Fixed Old Dreadnoughts being slightly slower than intended.

# Patch [2024-03-29]
- You no longer lose the score you should respawn at when you press O to self-destruct.

# Balance [2024-03-27]
- Shiny polygons in Old Dreadnought no longer gain extra size compared to their normal variants.

# Update [2024-03-27]
- All servers now close after a predefined amount of time. Use the $ status command to check when exactly a server will close.

# Update [2024-03-24]
- You can now save your themes to the dropdown menu.

# Balance [2024-03-24]
- The level scaling curve in Old Dreadnought has been changed once again. The FOV, health, and size gained from each level have been raised, but the size and health of Dreadnoughts relative to no[...]

# Patch [2024-03-23]
- Fixed a bug where you cannot move immediately after sending a chat message.
- Fixed a bug where entities moving out of your FOV triggers the death animation.
- Significantly reduced the bandwidth usage in most situations.

# Update [2024-03-22]
- For arras.io's 6th anniversary, we've done a ton of quality of life improvements!
- If you have any feedback about the update, make sure you voice them in the form here: [forms.gle/GWrRLthTR9YRE7SSA](https://docs.google.com/forms/d/e/1FAIpQLScrkOOfcBd_W1a4_6jK3Am2IO_Xt3XVP5O46n8c7mTtNBXw/viewform)
- The options menu has been completely revamped! It's now accessible at the top left corner, and may be used while in game. A few more options have also been added.
- A theme editor has been added to the options menu, allowing you to create your own custom themes while in game. A number of colors which were previously intertwined are now separated, including[...]
- The mobile UI have been majorly improved. Joysticks now look better, and indicators have been added to show the current movement, aim, and whether right click is being used. It's also now possi[...]
- On desktop, it's also possible to apply multiple skill points by clicking on the skill bar.
- A search bar has been added to the class tree, which is now also accessible on mobile.
- The categories in the server selector has been reorganized.
- A number of improvements have been made to the rendering engine, and the medium graphics level has been removed. The new high graphics level should perform better than the old medium graphics l[...]

# Patch [2024-03-21]
- The level scaling curve in Old Dreadnought has been changed. The highest effective level has been raised, but the amount of FOV and health gained from each level has been reduced.
- Fixed permanently transparent entities not having their AI active.

# Update [2024-03-19]
- Old Dreadnought servers will now be able to receive updates like regular game modes.
- Added a new operator action in sandbox. The color of entities can now be changed by pressing \` + C and dragging to indicate which color to use. Pressing \` + C once will change the entity to t[...]
- We've also changed \` + Z to use the new system, where you can drag to indicate which wall type to use. This should hopefully make it faster to find a specific wall. Furthermore, the same comma[...]
- Additionally, \` + G can now be pressed to get the information of an entity, and the old \` + C has been moved to \` + L.

# Update [2024-03-11]
- There are lot of talented content creators within the arras.io community, and we've now made it possible to list all the featured YouTube channels at once by opening the links menu!
- We'd also like to put the spotlight on today's new featured ArrasTuber, [infynotarras](https://www.youtube.com/@infynotarras328)! Make sure to check out our their channel!

# Patch [2024-03-08]
- Sandbox servers have been given a small rework. The server will now try to automatically send you to an empty server when you connect.

# Patch [2024-03-01]
- Crashers will no longer cause kill notifications to be displayed.

# Update [2024-02-14]
- Crasher polygons have been added into regular game modes.

# Update [2024-02-13]
- Removed the colored nest option because they no longer accurately represent the size of the pentagon nest in most modes.

# Event [2024-02-10]
- The Classic event has ended.
- We are considering adding the Crasher polygons into regular game modes.
- Now is the time to voice your opinions on if they should be added or changed, and we've published a form here: [forms.gle/bKbmM2dVzx4F1ohz7](https://docs.google.com/forms/d/e/1FAIpQLSeAXSiEZdhxQ-Exx8mr9GZ_yv_-8GdP7LQe0aPO-KA4Nn9cFQ/viewform)

# Event [2024-02-05]
- Added a new event called Classic!
- In this event, you do not have the luxury of instant level 45! You will need to farm or fight for your place among the top.
- There is a new shape mutation within this event's ecosystem, and it's a rather vicious one. Proceed with caution...

# Update [2024-02-02]
- We have added a new assist system, which awards assists based on the percentage of damage inflicted, as opposed to the previous system that depended on contact with the entity at the time of it[...]
- Players contributing over 5% of the total damage to a killed entity will now earn a proportionate share of the score, equivalent to the damage percentage they dealt.
- If a player doesn't consistently deal damage to the entity, they will lose their ability to receive an assist from the entity when it is killed.
- The player that does the most damage to the killed entity will receive the kill credit, while everyone else will receive an assist credit.

# Patch [2024-02-02]
- Rogue Palisades, Armadas, and Celestials can no longer be pushed into the red zone in Siege.

# Update [2024-02-01]
- Growth game modes now have a 20% chance to be Arms Race like other regular game modes.
- Added Growth Clan Wars to Growth's rotations.

# Balance [2024-01-29]
- Fixed auras being unintentionally buffed by 10 times.

# Balance Update [2024-01-07]
- We have done a large variety of balancing changes to the new Dreadnoughts. Go to the [balance update section](#balance) for more details.
- We will continue to adjust them as necessary based off of suggestions from our official [Discord](https://discord.gg/arras).

# Balance Update Details [2024-01-07]
- Buffed the range of Pacifier branch.
- Buffed all of the Eggnaughts all around.
- Slightly buffed the reload of Sabre branch.
- Slightly buffed the FOV of Sabre and Gladius branch.
- Slightly buffed the reload and range of Gladius branch.
- Slightly nerfed the bullet stats on Negotiator branch.
- Slightly buffed the reload on Negotiator branch.
- Slightly nerfed the bullet damage of Peacekeeper.
- Slightly buffed the bullet speed of Enforcer branch.
- Completely rebalanced the missiles of Executor branch.
- Increased drone count of Invader from 4 to 8.
- Decreased drone count of Inquisitor from 12 to 8.
- Slightly buffed the drones of Invader branch.
- Buffed the speed of Assailant branch minions.
- Completely rebalanced Centaur branch.
- Merged Photosphere's inner auras into one big aura.
- Slightly buffed the bullet speed, range, and FOV of Automation branch.
- Slightly nerfed the healing of Thermosphere branch.
- Slightly nerfed the health of Jumbo branch.
- Slightly nerfed aura damage.

# Update [2024-01-01]
- The Winter Mayhem event has concluded, and the Grinch has been renamed to Nemesis.
- In celebration of the start of 2024, all projectiles will now explode into a firework!
- Added two new map layouts in Assault called **Acropolis** and **Booster**.

# Patch [2024-01-01]
- Fixed the bug that allowed players to avoid Nemesis by sitting in a corner.
- Fixed the bug where Nemesis wouldn't see invisible tanks.

# Event [2023-12-25]
- Merry Christmas! May your holidays be jolly and your scores be bountiful! But watch out - for the Grinch wants it just as much as you do!
- The Grinch, also known as Nemesis, has been added to Manhunt! The days of gluttony and hubris is no more, as they will provide retribution for the sinners!

# Event [2023-12-13]
- The Daily Tank event has started! A daily tank will be featured on the upgrade menu each day, until after Christmas. Watching a short ad will allow you to access the daily tank five times.
- Additionally, Winter Mayhem has begun once again in Siege!

# Update [2023-12-07]
- The categories in the server selector has been reorganized. Note that sandbox servers have been moved to their own category.

# Patch [2023-11-18]
- Fixed a few bugs in Sandbox and Arms Race Capture the Flag.
- Polygons with higher tiers are now harder to push.

# Update [2023-11-18]
- The game mode rotation has been slightly updated again.
- Unlike Arms Race, Growth will no longer appear throughout all modes and will have its own servers instead.
- Every Growth and Arms Race server will now restart automatically after 24 hours.

# Update [2023-11-15]
- The game mode rotation has been updated. Now, most regular game modes will be randomly chosen between normal, Growth, and Arms Race.

# Update [2023-11-08]
- In the past few days, we've made a number of changes to the servers.
- A new US West server has been added, and the previous US server is now labeled US Central.
- The Europe server has been upgraded.
- The Asia server has been moved to Oceania, and replaced with a different Asia server.
- We'll be changing the game mode rotation in the next few days.
- Also note that the party link scheme has changed slightly. Servers previously starting with *w* now starts with *c*, and servers previously starting with *h* now starts with *e*.

# Event [2023-10-29] Halloween
- The final Halloween event has been released. In this event, you will explore a haunted asylum.
- First, there is a generator on each wing of the asylum. Unless they are powered on, you will only be able to see with your flashlights.
- Second, behind the asylum is a pumpkin patch, but you are advised to not stay in it for long, as otherwise you may receive a curse.
- Lastly, make sure to avoid any zombies that will reanimate when others die. Happy Halloween!

# Event [2023-10-24] Blackout
- In the third Halloween event, you will navigate through the inky blackness of night. Armed only with your flashlights and sharp wits, tread carefully. Shadows hide secrets in these corridors...

# Update [2023-10-23]
- Added Quadruplex, an upgrade of Helix.
- Holding right click will now switch the direction in which the bullets curve for Desmos branch.
- In Clan Wars, the amount of players in one clan is now limited to a third of the total players in the arena.

# Event [2023-10-20]
- It is time for the second event: Graveyard! Just like last year, in this mode you play in a seemingly normal lobby... But this is no normal lobby, as upon your death your corpse will be reanima[...]
- Additionally, Necromancer can revive the undead for a lost soul to claim the body of.
- Lastly, this year we have added a new feature to spice things up! Zombies are now capable of pathfinding through the maze with ease, and will greatly favor traveling in hordes than traveling al[...]

# Balance Update [2023-10-20]
- Slightly buffed the size curve in Growth.

# Patch [2023-10-20]
- Fixed another bug that allowed players to join the zombie team.
- Fixed the bug that made everything move faster than they're supposed to.

# Patch [2023-10-18]
- Fixed the bug that allowed players to join the zombie team.
- Fixed the bug that allowed Spawner branch to infinitely repel.
- Made drones slightly less bouncy.

# Balance Update [2023-10-18]
- Nerfed the size curve in Growth.
- Nerfed the amount of speed lost by size.

# Event [2023-10-16] Pumpkin Patch
- It's Halloween time once again! We will be doing three events with a grand finale as we did last year, but this time with some new gimmicks and features!
- In the first event, you will traverse into a cursed pumpkin patch. Rumors have it that long ago it was cursed by a maleficitor to rip the souls of all those who enter from their body...
- The next event will be released in 4 days.

# Update [2023-10-12]
- It's spooky time!
- In the spirit of Halloween, we have readded pumpkins and summoned spirits to haunt the mazes.

# Update [2023-10-04]
- Replaced Whirlwind with Desmos, a level 15 branch dedicated to bullets that can wind and curve themselves in unimaginable ways!
- Currently there is only one upgrade path for Desmos. If this branch is well received, we will continue to expand on it further.

# Announcement [2023-10-03]
- We are currently hosting a Halloween art contest with prizes! Participate by joining our official [Discord](https://discord.gg/arras).

# Balance Update [2023-10-03]
- Conqueror's builder blocks now share the same reload rate as its destroyer bullets.
- We've also applied a number of balance changes to Arms Race. Go to the [balance update section](#balance) for more details.

# Balance Update Details [2023-10-03]
- Nerfed Productionalist branch minion bullets.
- Nerfed Slitshot's bullets.
- Nerfed Cubicle, Fender, Former, Fortifier, Compartment, Encircler, Pommel, Picket, Hurdle, Incarcerator, Overthrower, Booth, and Sty's basic bullets.
- Nerfed Rimflak's side bullets.
- Nerfed Recursor's bomb and its shrapnel.
- Nerfed Raven's recoil.
- Nerfed Captain branch minions.
- Nerfed Doper branch drone damage.

# Poll [2023-09-13] Should the Whirlwind branch be kept in regular game modes?
- 36, 2023-09-18T07:00:00.000Z, radio
- Yes, keep Whirlwind in regular game modes
- No, remove Whirlwind from regular game modes, possibly bringing it back in event modes in the future

# Poll [2023-09-13] If the Whirlwind branch is removed, what should the 9th upgrade from Basic be?
- 35, 2023-09-18T07:00:00.000Z, radio
- Create a new level 15 branch
- Create a new level 30 branch
- Leave Single as a level 45 upgrade from Basic

# Update [2023-09-09]
- For the first time since the game's release, a new level 15 branch has been added to the game!
- Whirlwind is a unique class that whirls its satellites around itself with the force of the wind! It can extend its satellites with ease, but at the expense of its defensive capabilities.
- Moved Single's upgrade path to Assassin.
- We will continue to expand the branch further in the future!

# Update [2023-08-04]
- The new polygons have now been implemented into the main game!
- Furthermore, Underseers will also be able to pick up the new polygons. Additionally, they can now pick up polygons by ramming them.

# Announcement [2023-07-28]
- The new polygons from Dreadnoughts and Labyrinth have been moved back to their original servers.
- Now is the time to voice your opinions on if they should replace the current system! Since this is a bit long for a regular poll, we've published a form here: [forms.gle/BshYJ1Jj6QJ7yEdT7](http[...]

# Event [2023-07-21]
- The new polygons from Dreadnoughts and Labyrinth have been temporarily implemented into the main game as a whole!
- On top of that, we've redone how shapes spawn in general. Hopefully that shouldn't be too noticeable, though.
- This is **temporary**, we will be removing them in a few days and create a form for you to voice your opinions and thoughts on the new shape system and whether it should replace the current sys[...]

# Update [2023-07-21]
- The soccer ball in Soccer and Grudge Ball is now more bouncy!
- Thanks to your efforts to explore the labyrinth, our cartographers have created a map to allow us to navigate it with ease.

# Patch [2023-07-21]
- Fixed some bugs because they were, in fact, not features.

# Balance [2023-07-21]
- Reduced the speed buff that Colossus branch receives.
- Reduced the health buff that Jumbo branch receives
- Nerfed the auras on Photosphere.
- Dreadnought auto-turrets now have a 180 degree firing arc instead of 360 degree firing arc.

# Update [2023-07-13]
- Have you ever hated one team in particular? Have you ever wanted to specifically target them for no reason other than your own personal motives? Well we have the game mode for you! In Grudge Ba[...]

# Balance Update [2023-07-12]
- We did a full rebalance to every Dreadnought's arsenal. Because this is arras.io - something is bound to be completely busted, and it is your god given right to yell at us about it in our publi[...]
- To make up for this, we've added a new branch to Juggernaut!

# Patch [2023-06-17]
- Removed the Space and Half events from the event rotation.
- Removed the Portals layout from Assault.
- Made it more unlikely for players to get false banned.

# Update [2023-06-14]
- Players now respawn with a fourth of their original score upon death, capped at level 120.
- The level requirement to enter the Labyrinth has been removed.
- Added a new operator action in sandbox. Walls created with \` + X can now be turned into special walls by hovering your cursor over them and pressing \` + Z.
- The maximum amount of walls allowed has also been increased.

# Patch [2023-06-14]
- Fixed the issue that caused players to sometimes get auto-banned.
- Increased the chance of shiny shapes spawning in the Labyrinth slightly.

# Balance [2023-06-14]
- Nerfed the health of polygons in the Labyrinth.
- Dreadnought auras can now damage polygons.
- Nerfed the range, health, and damage of Executor missiles.
- Buffed Inhibitor and Tyrant missiles slightly.
- Nerfed the reload on Byte, Kilobyte, Megabyte, and Gigabyte.
- Buffed Kilobyte, Megabyte, and Gigabyte.
- Automation, Mechanism, and Skynet auto turrets now only have a 150 degree firing arc.
- Nerfed Pacifier branch again.

# Event [2023-06-12]
- We've received reports of an unidentified realm that has made a connection to our Nexuses. If you wish to explore it, please proceed with caution.
- Dreadnoughts can no longer access normal game modes. Instead, they will only be able to access Dreadnoughts servers, as well as the new realm.
- The Nexus can still access the Forge, the Dreadnoughts servers, and normal modes.
- Nexus Points will now spawn on the outskirts of the arena, and will destabilize after 30 to 45 seconds.
- The number of realms you've visited is now displayed on the death screen.
- The class tree for Dreadnoughts can now be viewed when you are a Dreadnought.
- We've received another encrypted message, and we aren't sure what to make of it: *33 2f af 8a c8 a8 9e cf a8 7f eb 61 7b e7 ee b6 ea de fa 16 af 7b e7 28 99 ef ad a3 ea 5a b2 cf fe 59 ef 9a ad [...]

# Event [2023-06-11]
- Fixed a bug that allowed Doctor's drone to shove their teammates to their death.
- Fixed a bug that caused players to stick to walls.
- Fixed a bug that allowed players to spike bounce AFK spikes out of the base.
- Fixed a bug that reset your time alive when going through a Nexus Point.

# Balance [2023-06-11]
- Nerfed Dreadnoughts movement speed.
- Nerfed Pacifier branch.
- Buffed Centaur branch.
- Buffed Executor, Inhibitor, and Tyrant.
- Buffed the reload of Enforcer, Suppressor, and Retardant.
- Slightly nerfed Invader branch's drone speed.

# Patch [2023-05-29]
- We've changed the level requirements of the Dreadnought upgrades. Becoming a Dreadnought requires level 90. Upgrading to a Square Dreadnought requires level 120. Upgrading to a Triangle Dreadnought
- Added labels above all Nexus Points to indicate their destination.
- Nexus Points now appear more often.
- Dreadnoughts will no longer be on the same team when joining FFA modes.
- Changed the designs of the healing and damage auras to better distinguish the two.

# Balance [2023-05-29]
- Nerfed Infiltrator and Raider drones.
- Buffed Sword, Sabre, Bayonet, and Javelin damage slightly.
- Nerfed Inhibitor and Tyrant's reload and missile range.

# Patch [2023-05-29]
- Fixed a bug that messed up Dreadnoughts' builds when going through Nexus Points.
- Nexus Points to the same destination can no longer

# Update [2023-05-28] Nexus
- The time has come to unite! A Nexus for all arenas has been created within each of the three regions!
- Nexus Points will periodically appear within arenas and the Nexus itself to allow passage. However, they tend lose stability and dematerialize soon after.
- We've heard rumors of foreign Nexus Points leading to uncharted arenas, but the only proof of that is this seemly encrypted message we've received: *Nf n tvsg bs nyyrtvnapr, V jvyy jryq lbh cbj[...]
- We would like to mention that this event was heavily inspired by scenexe.io! Be sure to check their game out!

# Update [2023-05-25]
- We've decided to spice things up and add a new tank that is like no other! The Assembler class is a level 45 upgrade from Builder that's identical to Builder, except that its blocks will merge [...]

# Patch [2023-05-21]
- Fixed a bug where players could become an invisible Dreadnought.
- Fixed a bug where Dreadnoughts could lose the ability to upgrade.

# Event [2023-05-21]
- In Dreadnoughts, the rate at which tanks gain skill points has been drastically reduced. However, players will gain an additional 30 skill points when evolving into a Dreadnought.
- Increased the arena size in Dreadnoughts and added 4TDM, 2TDM, and Open 3TDM variants to the list of possible map layouts.
- A massive overhaul to Dreadnoughts will be happening soon. We have released some sneak peeks of it in our official Discord server!
- Reduced the number of walls in the new Capture the Flag layout. Furthermore, the minimap is now bigger.
- The $ clan command now requires you to be away from other players instead of waiting 15 seconds.

# Event [2023-05-20]
- Reworked the map layout in Capture the Flag.
- Furthermore, the number of flags dropped have been decreased, while the number of outposts have increased.

# Event [2023-05-19]
- Added a new command in Clan Wars, $ clan, that allows you to change the clan you're on without leaving and rejoining the server.
- As a reminder, you can use $ help to list all the other commands.

# Event [2023-05-18]
- Added two new wall types to Magic Maze.

# Patch [2023-05-18]
- Fixed a bug that caused walls in Magic Maze to have glitchy movement.

# Poll [2023-05-14] How many event modes should there be during the weekdays?
- 34, 2023-05-21T07:00:00.000Z, radio
- 0, reserve them only for weekends
- 1-2, rotating between regions
- 3-4, around one per region
- 5-7, around two per region
- 8-10, about half of the servers

# Poll [2023-05-14] How many event modes should there be during the weekend?
- 33, 2023-05-21T07:00:00.000Z, radio
- 2-4, around one per region
- 5-7, around two per region
- 8-10, about half of the servers
- 11+, a large majority of the servers

# Event [2023-05-07]
- Most Growth maps are now larger.

# Balance [2023-05-06]
- Nerfed Ultra Spawner's minion reload and speed.
- Nerfed the FOV on Trap, Swarm, and Bee Auto Turrets.
- Nerfed the shrapnel from bomb missiles.

# Event [2023-05-06]
- Removed the Medicaid branch from Dreadnoughts.
- Raised the required level to evolve into a Dreadnought from 120 to 150, which roughly requires a score of 750k.
- Nerfed the growth rate and maximum number of skill points in the Dreadnoughts event.

# Event [2023-04-28]
- We've added a new minigame event called Capture the Flag!
- Compromising the opposing team's outpost will release a few flags. Bringing a flag back to your team's base will destroy the outpost that it came from.
- Destroy all of the opposing team's outposts to win the game, but make sure to defend your own outposts!

# Update [2023-04-27]
- Over the past few days, we have made some major performance improvements to the servers, and we hope that it improves your gameplay!
- As such, the maximum recommended player count has been increased. Note that they didn't and still do not represent hard limits.

# Update [2023-04-15]
- The old Asia servers have been replaced with new ones, which will hopefully offer better uptime as well as performance.
- This has also allowed us to add sandbox servers in Asia.

# Patch [2023-04-14]
- Fixed a bug in Tag and Pandemic where all the players are on the same team without the arena closing.

# Update [2023-04-09]
- Added Vulture, an upgrade of Tri-Angle and Minigun.

# Update [2023-04-06]
- Added a button to the home screen that features some of arras.io's content creators.
- Added a new operator action in sandbox. Walls can be created and removed by pressing \` + X. You can also create differently sized walls by holding down the keys and dragging.
- Added a new command, $ afk, which can be used while in base to prevent other players from pushing you out of base. Using $ afk again will disable it.
- As a reminder, you can use $ help to list all the other commands, such as $ toggle which can be used to disable chat.

# Event [2023-04-03]
- Due to popular demand, we've extended the April Fools' event by another year.

# Event [2023-04-02]
- We've extended the April Fools' event by another day. Additionally, there is now a chat button on mobile.

# Poll [2023-04-02] Should chat be kept in the game?
- 32, 2023-04-03T07:00:00.000Z, radio
- Yes, permanently on all servers
- Yes, only for players on the same team
- No, but keep it as an event
- No, remove it fully

# Update [2023-04-01]
- Added the ability to chat in-game. You can now press enter to send messages to other players in-game. Furthermore, you can view the available commands with $ help.
- You can now finally yell (or laugh) at your teammates for experiencing what is called a "skill issue."
- Please follow human decency and be civil with one another **or you will be forever cursed to play Auto-3**.

# Patch [2023-03-28]
- Added more types for walls and relics to Magic Maze.
- The Magic Maze now moves constantly instead of once every 5 seconds.
- The event now rotates between Open 3TDM or FFA.

# Patch [2023-03-27]
- Fixed an issue with the Relic that caused clients to crash.

# Event [2023-03-26] Magic Maze
- The Maze grows restless! In the Magic Maze, you must navigate through a constantly changing environment while avoiding whatever hazards lie ahead.
- Who will claim the Relic that lies within?

# Patch [2023-03-12]
- Higher level players are no longer stronger and faster in Growth Clan Wars.

# Event [2023-03-04] Outbreak
- Originally a Halloween-only event, Graveyard has now been rereleased as Outbreak.
- In the event, players who die will turn into zombies! Additionally, Necromancers can revive zombie tanks, bringing them onto their team. Will you survive this zombie outbreak?

# Patch [2023-03-04]
- Fixed the Lyric theme.
- Removed some TDM layouts.

# Patch [2023-03-01]
- Added a report button to ads.

# Update [2023-02-25]
- Added Infestor, an upgrade of Underseer.
- Added X-Hunter, an upgrade of Hunter.
- Sprayer was moved down an upgrade tier, and now has four new upgrades: Redistributor, Atomizer, Focal, and Phoenix.
- Added three new themes: Gruvbox, Lyric, and Blindness.
- Added two new map layouts in Assault called **Portals** and **Stronghold**.
- The full screen key (F11), self-destruct key (O), and score pause key (G) now have corresponding buttons in the mobile UI.
- TDM arenas now have more variations to make them more interesting. This includes the positions of the bases, the rock formation, and the team colors. The Portal TDM rework was also reverted.
- Tweaked the original maze generation slightly to reduce the number of huge walls. The new experimental maze generation was also removed.
- Fixed a few bugs and made a few more quality of life changes. Go to the [changelog](#changelog) for more details.
