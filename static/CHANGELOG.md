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
    {{Intl.DateTimeFormat([],{weekday:'long',month:'numeric',day:'numeric'}).format(new
    Date('2026-10-07T04:00:00Z'))}} at
    {{Intl.DateTimeFormat([],{hour:'numeric',timeZoneName:'short'}).format(new
    Date('2026-10-07T04:00:00Z'))}}.
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
    {{Intl.DateTimeFormat([],{weekday:'long',month:'numeric',day:'numeric'}).format(new
    Date('2026-09-09T04:00:00Z'))}} at
    {{Intl.DateTimeFormat([],{hour:'numeric',timeZoneName:'short'}).format(new
    Date('2026-09-09T04:00:00Z'))}}.
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
- Every 3 rotations (9 days), there is a 3 day period for Legacy Gamemodes to become available again. This includes: Space, Outbreak, Tetromino, Classic, Portal Mothership, Growth Manhunt, and Magic Maze.
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
- We're upgrading our servers to improve stability and performance. Over the next few days, there may be occasional downtime during maintenance. Once complete, the new servers will be less likely to experience random disconnects. Thanks for your patience!

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
- Added a new operator action in sandbox. Various attributes and abilities can now be controlled by holding \` + A and another key. To view these attributes, press \` + A + F1. Note that you do not need to keep the A key held, but you do need to hold the \` key.
- Additionally, \` + J can now be pressed to create a joint either to a point or to another entity. You can press the key multiple times to switch between a fixed joint, a rotatable joint, a directional joint, or no joint. Joints can be used to reliably create solid structures, trains, swivels, and sliders.
- Furthermore, \` + S can now be used to control your skill points. Use \` + S + F1 to view all skill commands.
- The previous \` + M, \` + S, and \` + L have been superceeded. \` + M is now \` + A + T. \` + S is now \` + S + H + M. \` + L is now \` + A + L.
- Added Healing, Paint, Filter, Team, and Base walls.
- Added an $ arena command, allowing Arena Operators to set the size and team count of the arena, as well as allowing them to close the arena or make the sandbox public.
- Added a permission tier system and a player list. Arena Conductors can do most basic actions, but cannot kick players, manage permissions, or use the $ arena command. Arena Supervisors can kick, promote, or demote players below them. Arena Operators can do all actions.
- Added a sandbox nexus, accessible with the $ nexus command, where you can portal to all public sandboxes.
- Added Healer to the preset menu.
- Added sandbox servers in Asia.
- The sandbox command help menu is now automatically adjusted for those not using a standard 104-key US QUERTY keyboard layout.

# Gamemode [2024-07-12]
- Added Overgrowth, a spinoff of the Growth game mode. In this mode, you will grow much faster than in Growth, but upon the first time you reach level 400, you stop growing and gain the ability to evolve with the F key. During each evolution, you are reset back to level 45, but your maximum level will increase by 100 and you gain 5 new bonus skill points. Upon your fifth evolution, you will have won the game.

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
- Now is the time to voice your opinions if you have any feedback about the Old Dreadnought growth curve, and we've published a survey here: [forms.gle/ckQYzbR9igt6CouKA](https://docs.google.com/forms/d/e/1FAIpQLScrLIoCXoAU6AH7qCyz_LLtlO6dVrP0TiCErjoOiF9ymuZxZw/viewform)

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
- Now is the time to voice your opinions if you have any feedback about the new growth curve, and we've published a survey here: [forms.gle/i5EHUk1GJ1NunPnB9](https://docs.google.com/forms/d/e/1FAIpQLSdCS7zGR4aZlONzUPi0CaXdd69pXwnlqa9g1zKmU8A4ipd7KA/viewform)

# Patch [2024-05-20]
- Temporarily changed \` + A to \` + M in preparation for a future update.

# Update [2024-05-20]
- We've implemented a new growth curve for Growth.
- Unlike the previous curve, tanks no longer get exponentially bigger until they are too big to fit in the map.
- Tanks will now also gain more health as they level up.
- We'll be publishing a survey tomorrow about the new growth curve.

# Update [2024-05-18]
- The Asia servers have been moved to a new provider and given a bandwidth upgrade, ensuring that they will no longer become unavailable near the end of the month.
- We'd like to know how the change have affected the servers' latency. If you have played in an Asia server both before and after the change, please complete the survey here: [forms.gle/UeRcZ5UBpaWdxncJ9](https://docs.google.com/forms/d/e/1FAIpQLSdiJaM4NYNrna4ZPrax3-RFFD4bZbkfyDH7R61bjydaeRmYIw/viewform)

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
- The level scaling curve in Old Dreadnought has been changed once again. The FOV, health, and size gained from each level have been raised, but the size and health of Dreadnoughts relative to normal tanks have been decreased.

# Patch [2024-03-23]
- Fixed a bug where you cannot move immediately after sending a chat message.
- Fixed a bug where entities moving out of your FOV triggers the death animation.
- Significantly reduced the bandwidth usage in most situations.

# Update [2024-03-22]
- For arras.io's 6th anniversary, we've done a ton of quality of life improvements!
- If you have any feedback about the update, make sure you voice them in the form here: [forms.gle/GWrRLthTR9YRE7SSA](https://docs.google.com/forms/d/e/1FAIpQLScrkOOfcBd_W1a4_6jK3Am2IO_Xt3XVP5O46nTBgZ8-mb4KUA/viewform)
- The options menu has been completely revamped! It's now accessible at the top left corner, and may be used while in game. A few more options have also been added.
- A theme editor has been added to the options menu, allowing you to create your own custom themes while in game. A number of colors which were previously intertwined are now separated, including Hexagons and legendary polygons, walls and barrels, and entity borders and UI borders. Old Dreadnoughts will now also follow the color of Hexagons instead of Smasher Shells.
- The mobile UI have been majorly improved. Joysticks now look better, and indicators have been added to show the current movement, aim, and whether right click is being used. It's also now possible to apply multiple skill points quickly by dragging down on the skill upgrade button.
- On desktop, it's also possible to apply multiple skill points by clicking on the skill bar.
- A search bar has been added to the class tree, which is now also accessible on mobile.
- The categories in the server selector has been reorganized.
- A number of improvements have been made to the rendering engine, and the medium graphics level has been removed. The new high graphics level should perform better than the old medium graphics level without any cosmetic defects.

# Patch [2024-03-21]
- The level scaling curve in Old Dreadnought has been changed. The highest effective level has been raised, but the amount of FOV and health gained from each level has been reduced.
- Fixed permanently transparent entities not having their AI active.

# Update [2024-03-19]
- Old Dreadnought servers will now be able to receive updates like regular game modes.
- Added a new operator action in sandbox. The color of entities can now be changed by pressing \` + C and dragging to indicate which color to use. Pressing \` + C once will change the entity to the last used color.
- We've also changed \` + Z to use the new system, where you can drag to indicate which wall type to use. This should hopefully make it faster to find a specific wall. Furthermore, the same command can now be used to change polygon types.
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
- Now is the time to voice your opinions on if they should be added or changed, and we've published a form here: [forms.gle/bKbmM2dVzx4F1ohz7](https://docs.google.com/forms/d/e/1FAIpQLSeAXSiEZdhxcS6vBKJam8Tz0dkZyKbI-mz64mbDnYRrelDpaQ/viewform)

# Event [2024-02-05]
- Added a new event called Classic!
- In this event, you do not have the luxury of instant level 45! You will need to farm or fight for your place among the top.
- There is a new shape mutation within this event's ecosystem, and it's a rather vicious one. Proceed with caution...

# Update [2024-02-02]
- We have added a new assist system, which awards assists based on the percentage of damage inflicted, as opposed to the previous system that depended on contact with the entity at the time of its death.
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
- It is time for the second event: Graveyard! Just like last year, in this mode you play in a seemingly normal lobby... But this is no normal lobby, as upon your death your corpse will be reanimated into a zombie! Will you survive the apocalypse?
- Additionally, Necromancer can revive the undead for a lost soul to claim the body of.
- Lastly, this year we have added a new feature to spice things up! Zombies are now capable of pathfinding through the maze with ease, and will greatly favor traveling in hordes than traveling alone!

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
- Now is the time to voice your opinions on if they should replace the current system! Since this is a bit long for a regular poll, we've published a form here: [forms.gle/BshYJ1Jj6QJ7yEdT7](https://docs.google.com/forms/d/e/1FAIpQLSceDTfU3iWOKLyqPovwIkeotOBYi72ETZSJTlo3F-hFQBvAvQ/viewform)

# Event [2023-07-21]
- The new polygons from Dreadnoughts and Labyrinth have been temporarily implemented into the main game as a whole!
- On top of that, we've redone how shapes spawn in general. Hopefully that shouldn't be too noticeable, though.
- This is **temporary**, we will be removing them in a few days and create a form for you to voice your opinions and thoughts on the new shape system and whether it should replace the current system.

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
- Have you ever hated one team in particular? Have you ever wanted to specifically target them for no reason other than your own personal motives? Well we have the game mode for you! In Grudge Ball, you can blast soccer balls into the faces of the colors you hate! Each team has 5 lives, and every time a goal is scored on their goal they lose one life! When they reach zero lives, their team is eliminated! Bye bye stupid reds!

# Balance Update [2023-07-12]
- We did a full rebalance to every Dreadnought's arsenal. Because this is arras.io - something is bound to be completely busted, and it is your god given right to yell at us about it in our public [Discord](https://discord.gg/arras).
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
- We've received another encrypted message, and we aren't sure what to make of it: *33 2f af 8a c8 a8 9e cf a8 7f eb 61 7b e7 ee b6 ea de fa 16 af 7b e7 28 99 ef ad a3 ea 5a b2 cf fe 59 ef 9a ad ef 9b 7a 29 e0 fa d8 6b 79 ab 5e 9d e7 7e 6f 2f ad 85 e8 ab f9 da e2 bd ef 9f a2 bf 9c a2 7b 6b a2 5f 9a 72 ba 2c b3 e6 a5 97 ea de 6a 59 ac ff e5 9e fa 6b ac b7 eb 2d 6a 77 7e b6 88 1e b6 17 ab ff e2 3e c2 29 65 f9 ca 26 7b eb 68 fa d8 5e f9 fa 2b 81 ef a6 ca c7 a5 7f eb 68 f9 ab 2c 8a cb 7e c2 2b 61 fb 08 5a b7 e2 3e 71 a9 ff f9 67 be 76 89 ff b7 e8 5a bd ef a6 b9 c8 7e b6 29 9e fa 57 9f b7 ff 92 79 cb ab 7b eb 61 7b e2 da 6f 2a e2 9e d8 7f fa d8 5a b7 e8 ac fa 8b ab fa 89 e5 cb e8 68 a5 ef fe*

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
- We've changed the level requirements of the Dreadnought upgrades. Becoming a Dreadnought requires level 90. Upgrading to a Square Dreadnought requires level 120. Upgrading to a Triangle Dreadnought requires level 180. Upgrading to a Pentagon Dreadnought requires level 210.
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
- We've heard rumors of foreign Nexus Points leading to uncharted arenas, but the only proof of that is this seemly encrypted message we've received: *Nf n tvsg bs nyyrtvnapr, V jvyy jryq lbh cbjre gung lbh pbhyq arire unir qernzg bs. V unir znqr n Sbetr cnfg lbhe Arkhf. Pbzr gb zr. V jvyy tvir lbh zl cbjre, naq va rkpunatr lbh tvir zr lbhef. Zl freinagf jvyy or jnvgvat.*
- We would like to mention that this event was heavily inspired by scenexe.io! Be sure to check their game out!

# Update [2023-05-25]
- We've decided to spice things up and add a new tank that is like no other! The Assembler class is a level 45 upgrade from Builder that's identical to Builder, except that its blocks will merge together upon contact with each other to become larger and stronger.

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

# Patch [2023-02-25]
- Server overloads will now restore your team, score, class and skill upgrades, kill statistics, and time alive as opposed to just your score.
- Shapes will no longer regenerate.
- Fixed the Eye layout in Assault not appearing.
- Fixed the Bastion layout in Assault to always have an entrance at the top of the map and not the bottom.
- Fixed a bug where Maze 4TDM's maze generation is asymmetrical.

# Patch [2023-02-07]
- Added corridors to the corn maze layout.

# Balance [2023-02-07]
- Every tank now has a consistent acceleration.
- Buffed knockback on Overseer, Underseer, and Hybrid type drones.
- Buffed Overseer branch drone health and damage slightly except Big Cheese.
- Nerfed Spawner and Auto-Spawner's minion speed.
- Nerfed Auto-Assassin's turret penetration.
- Buffed Triple Shot and Bent Hybrid's movement speed but the bullet health is the same as Bent Double.

# Event [2023-02-04] Dreadnoughts
- This seems... Oddly familiar... Maybe try going to a portal once you become strong enough to be prepared for what lies on the other side. In fact, the portals seem to reject those that seem unfit and too weak, so try to level up before entering...

# Update [2023-02-01]
- Removed the two experimental maze generations and replaced them with a new, more predictable and reliable form of maze generation.
- Now there are now only two maze generations in rotation: the original maze generation, and the new type, which we look forward to receiving feedback from.
- Added the scoping feature to all of Hunter branch.

# Event [2023-01-27] Train Wars
- CHOO! CHOO! ALL ABOARD! A new event has arrived at Arras station! In Train Wars, you can join other player's trains by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in **[VN]|[F-22]|[LM]|[K]|[AL]|[PL]|[PH]|[OVLD]|[Joe-39]|[BS]|[MG]**(random) or **<XwX>**. All players with the same clan tag will spawn in the clan's train!
- You can create a private team by putting a # and a secret number at the end of your clan tag. That'll make sure you spawn on a different team without revealing the secret number. For example, **<XwX#42>** will show up as **<XwX>**.
- The train conductor is the player with the highest score, so try your best to work your way up the ranks so you can lead your train to victory!

# Poll [2023-01-21] This week's traveling gamemode is Half Growth. Would you want to see more combo traveling gamemodes like this in the future?
- 31, 2023-01-24T00:00:00.000Z, radio
- Yes
- No
- Not sure

# Patch [2023-01-21]
- Higher level players are now both stronger and faster in Growth.

# Announcement [2023-01-12]
- An updated version of the previous post regarding upcoming content has been published at [redd.it/109fcc1](https://www.reddit.com/r/Arrasio/comments/109fcc1/updated_arrasio_2023_roadmap/).

# Patch [2023-01-01]
- Removed pine trees.

# Event [2022-12-31]
- It's time to start 2023 with a boom, quite literally! For today and tomorrow, all munitions will explode upon impact!

# Balance Update [2022-12-30]
- Buffed Machine Gun and Sprayer's bullet speed slightly.
- Gave Director, Overtrapper and Overgunner a sixth drone.
- Buffed Overseer, Manager, Overlord, Overdrive and Auto-Overseer's movement speed slightly.
- Buffed Underseer's drone count slightly.
- Buffed Underseer branch reload.
- Buffed Big Cheese's movement speed and reload slightly.
- Buffed Carrier's reload slightly.
- Buffed Fortress and Carrier's movement speed.
- Buffed Hunter branch FoV to match Predator and buffed the damage slightly.
- Buffed Dual's FoV to match Sniper.
- Buffed Triple Shot and Bent Hybrid's movement speed but nerfed the recoil slightly.
- Buffed Bent Double's movement speed but nerfed bullet health slightly.
- Buffed Penta Shot's damage slightly.
- Buffed Launcher, Twister, Skimmer and Field Gun's missile bullet health and penetration.
- Buffed Sidewinder's missile speed.
- Buffed Auto-3 and Auto-5's penetration and bullet speed slightly.
- Buffed Barricade's FoV to match Minigun.
- Added back Falcon and Eagle's recoil.
- Buffed Surfer's swarm range.
- Nerfed Auto-Tri-Angle's turret reload.
- Buffed Fighter's side cannons to match it's main cannon.
- Buffed Cyclone's bullet health and penetration.
- Buffed Crossbow's second and third side cannon bullet speed to match the first side cannon.

# Event [2022-12-30]
- Unfortunately, only the first of the four-day challenge was completed successfully.
- Although wave 61 was reached on the first day of the event, players were only able to reach wave 46, 52, and 48 on day two, three, and four respectively.

# Event [2022-12-26]
- For the fourth day of the Winter Mayhem event, all of the twists from the previous three days have been combined. More bosses will spawn, and they will be both smaller and faster, all while zombies spawn in the graveyard arena.
- You will, however, have access to all the new tanks from Arms Race!

# Event [2022-12-25]
- For the third day of the Winter Mayhem event, the arena has turned into a graveyard!
- Not only will you have to fight bosses, players who die will turn into zombies that you must eliminate.

# Event [2022-12-24]
- For the second day of the Winter Mayhem event, not only will there be more bosses, they will be a lot smaller.
- Furthermore, we've decided to post a challenge for all players. This year, there will be four mayhemic events for Winter Mayhem in total. If wave 60 is defeated during all four mayhemic events, we will create three new tanks after December that everyone can vote on to be added to the game!
- For the record, the highest wave reached on the first mayhemic event is wave 61. Three more to go!

# Event [2022-12-23]
- The Winter Mayhem event has arrived in Siege once again this year!
- Bosses, Sentries, and Sanctuaries within the mode have all been festively renamed or even redesigned.
- Throughout the event, more bosses will be spawning than usual.
- Additionally, for the first day of the event, all bosses will be moving at an increased speed.
- Each day of the event will feature a different set of twists, so make sure to stay tuned!

# Patch [2022-12-21]
- The WebGL renderer should now be more optimized for some low-end devices.

# Update [2022-12-21]
- The Rogue Palisade has been completely reworked, and is now joined by the Rogue Armada and the three Rogue Celestials, Julius, Genghis, and Napoleon, in a collective known as the Rogue Bosses.
- A Rogue Boss can spawn as an egg, and if you protect it, it will join your team and fight against other bosses with you.
- The Siege leaderboard will once again display player scores instead of boss health. Additionally, Rogue Bosses will prefer to follow players on the leaderboard.

# Update [2022-12-16]
- The long-awaited Siege update is finally here, and waves are now randomly generated and infinite!
- The **Fortress** layout is now joined by the new **Citadel** and **Blitz** layouts. Additionally, Sanctuaries now have multiple tiers, and will upgrade every 5 waves to become more powerful.
- There are now a ton of new bosses to take on, such as the Nest Warden and Nest Guardian, the Sorcerer and Enchantress, and the five Terrestrials, which are Ezekiel, Ares, Gersemi, Selene, and Eris. Are you ready to battle your way through the endless waves of bosses?
- More updates with new bosses have already been planned. Stay tuned for more updates in the future!

# Balance [2022-12-16]
- Increased the amount of score a healer gets from healing other players.

# Update [2022-12-15]
- The rocks have been changed to festive pine trees!
- Map layout names will now be displayed for Assault and most event modes.
- Pressing T will now switch the class tree between 3 modes: off, compact, and full. The "compact" mode is the same as the old class tree, whereas the "full" mode will show larger tiles similar to upgrade buttons.
- This will hopefully make it easier to explore the class tree in Arms Race in the future.

# Patch [2022-12-15]
- Pressing L now toggles debug info on and off.
- Fixed mobile joysticks getting stuck when the game first loads.
- Removed controller support.

# Announcement [2022-12-10]
- A post regarding upcoming content has been published at [redd.it/zi7e4r](https://www.reddit.com/r/Arrasio/comments/zi7e4r/arrasio_2023_roadmap/).

# Update [2022-12-07]
- Maze will now rotate between the current and new varying types of maze generation.
- Added a new map layout to Assault called **Bastion**.
- Added Field Gun, branches off of Launcher and Artillery.

# Event Poll [2022-12-02] Which of the following traveling gamemodes did you enjoy the most?
- 30, 2022-12-12T00:00:00.000Z, radioTable
- |**Bad**(small)|**Okay**(small)|**Good**(small)|**Favorite**(small)|**Never Played**(small)
- Half           |X|X|X|X|X
- Growth         |X|X|X|X|X
- Space 3TDM     |X|X|X|X|X
- Retrograde     |X|X|X|X|X
- Tetromino      |X|X|X|X|X
- Worlds Collide |X|X|X|X|X
- Manhunt        |X|X|X|X|X
- Clan Wars      |X|X|X|X|X
- Soccer         |X|X|X|X|X
- Elimination    |X|X|X|X|X
- Skinwalkers    |X|X|X|X|X
- Arms Race      |X|X|X|X|X

# Event [2022-11-25] Arms Race
- In this event, 1000 new tanks have been added to the game!
- We'd like to give our gratitude and thanks to **Rog456**(color=#e57373) and **Stark 109**(color=#800000) for creating most of the new tanks in this event!

# Update [2022-11-24]
- Arras.io now uses WebGL and WebAssembly, two technologies which should result in a significant performance improvement.
- Note that this resulted in various minor changes to the GUI, so things might look a bit different.
- As a part of the update, the leaderboard is also animated.
- Two new options have also been added to the second tab of the [options menu](#options-menu).
- The smooth camera option will make the camera follow your tank instead of being fixed at it.
- The rendering strategy dropdown will control how the game is rendered. It is recommended to leave it on Auto, which will choose the best option available automatically.
- Alternatively, you may choose between software rendering (which behave similar to the old client and is only recommended for older devices where WebGL isn't available), low (disables antialiasing, which is the fastest), medium (enable antialiasing for non-transparent pixels, which can cause some minor rendering artifacts), and high (enable antialiasing as much as possible, which looks better at the cost of lower performance).

# Event [2022-11-11] Skinwalkers
- In this event, you will be possessing the form of those you kill! Upon killing another player, their class will manifest within you!

# Balance [2022-11-04]
- Nerfed the movement speed of Bent Double.
- Fixed a speed exploit with Spawner and Auto-Spawner minions.

# Patch [2022-11-02]
- Removed the pumpkin rocks.

# Event [2022-10-30]
- A bonus Halloween event has been released. In this event, you will explore a haunted asylum.
- First, there is a generator on each wing of the asylum. Unless they are powered on, you will only be able to see with your flashlights.
- Second, behind the asylum is a pumpkin patch, but you are advised to not stay in it for long, as otherwise you may receive a curse.
- Lastly, make sure to avoid any zombies that will reanimate when others die. Happy Halloween!

# Event [2022-10-27]
- Each server will now choose one of the three events randomly until when Halloween ends. Happy Halloween!

# Event [2022-10-25] Pumpkin Patch
- In the third and last event, you will traverse into a cursed pumpkin patch. Rumors have it that long ago it was cursed by a maleficitor to rip the souls of all those who enter from their body...

# Event [2022-10-23] Blackout
- In the second event, you will play in the dead of night, with all the lights turned off. All you have is nothing but your flashlights and wits. Just beware of what lurks within the corridors...
- The last event will be released in another few days.

# Event [2022-10-21] Graveyard
- It's time to get spooky! This year, we have not one, not two, but three Halloween themed events.
- In the first event, Graveyard, you will play in a seemingly normal lobby... But this is no normal lobby, as upon your death, your corpse will be reanimated into a zombie! Will you survive the apocalypse?
- Additionally, Necromancer can revive the undead for a lost soul to claim the body of.
- The next event will be released in a few days.

# Balance [2022-10-20]
- Nerfed the initial speed that Big Cheese's drone moves at when leaving its spawner.
- Big Cheese's drone will now wait to reload instead of immediately spawning after its death.

# Patch [2022-10-20]
- The Rogue Palisade, Summoner, Nest Keeper, and Elite Skimmer are now less likely to spawn near bases.

# Patch [2022-10-15]
- The death screen will now display who gave you the most kills if you receive a lot of kills from the same player.
- The rocks are now pumpkins.

# Event [2022-09-30] Clan Wars
- The Clan Wars event has started! Team up by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in **[VN]|[F-22]|[LM]|[K]|[AL]|[PL]|[PH]|[OVLD]|[Joe-39]|[BS]|[MG]**(random) or **<XwX>**. All players with the same clan tag will spawn on the same team.
- You can create a private team by putting a # and a secret number at the end of your clan tag. The secret number will make sure you spawn on a different team, but will still be removed from your name when you spawn. For example, **<XwX#42>** will show up as **<XwX>**.

# Poll [2022-09-25] If arras.io is blocked on any network you visit, which of the following proxy links are you able to access?
- 29, 2022-10-03T00:00:00.000Z, any
- Arras.io is not blocked on my network.
- arrax.io
- arras.netlify.app
- sites.google.com/view/arras-io
- arras.cx
- None of the above

# Balance [2022-09-23]
- Buffed the movement speed of Big Cheese to match Commander.
- Buffed the FOV of Big Cheese to match Overseer.
- Buffed the drone speed of Big Cheese.

# Update [2022-09-23]
- Traveling gamemodes have been moved from the weekends to Friday and Saturday.
- They will now also start repeating, but fresh traveling modes will still be introduced around twice per month.

# Announcement [2022-09-21]
- A post regarding upcoming content has been published at [redd.it/ximykz](https://www.reddit.com/r/Arrasio/comments/ximykz/whats_next_for_arras/).

# Update [2022-09-21]
- Added Big Cheese, branches off of Director.
- Redesigned the changelog category selector.

# Patch [2022-09-20]
- Over the last couple of days, the game's CDN has been changed to hopefully provide a better uptime with fewer Cloudflare errors.

# Update [2022-09-20]
- There is now a new proxy link at [https://sites.google.com/view/arras-io](https://sites.google.com/view/arras-io), which allows you to access the game when the main domain is unavailable.
- Private servers have now been moved to use [https://arras.cx/](https://arras.cx/) as the link. A final update for private servers has also been published on [here](https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md) to fix a bug with shield bars.
- For now, [https://arras.cx/](https://arras.cx/) can also function similar to a regular proxy link, but in the future, it will be deprecated and used for private servers only.

# Update [2022-09-19]
- More options have been added to the [options menu](#options-menu), with appearance and other options put in separate sections.
- Player scores have now been disabled by default. This option may be changed in the future.
- Screenshot mode has been split into disabling health bars and the leaderboard and enabling reduced info bar.
- Low graphics has been split into low resolution and disabling fancy animations.
- Pressing O to self-destruct will no longer allow someone else to kill you and get your score.

# Patch [2022-09-17]
- Removed leader kill messages for all modes except Manhunt.
- Fixed walls absorbing score.

# Update [2022-09-17]
- Traveling game modes will now automatically restart and cycle between each region.
- All past descriptions for traveling game modes have been added retroactively.

# Event [2022-09-17] Manhunt
- Who doesn't love being #1 on the leaderboard? Who doesn't want to share their success with everyone? Who doesn't like gaining score? Well now you can enjoy all of these more than ever! In this event the leader's position will be broadcasted to the minimaps of all players so they can share their success! Additionally, killing a player will give you *all* of their score! But don't worry, #1 will of course receive some very special treatment...

# Patch [2022-09-14]
- Fixed mobile control mode option not appearing.

# Update [2022-09-12]
- Added incognito mode to the miscellaneous section of the [options menu](#options-menu). Enabling this will obfuscate your in-game score below your name and on the leaderboard to other players.

# Event [2022-09-10] Worlds Collide
- We've detected numerous anomalies that indicate that the fabric between universes have ripped and allowed travel between neighboring universes! What lies on the other side...?
- These Riftgates are dangerous, so it's advised to minimize your multiversal travel.

# Update [2022-09-07]
- Auto-level up is now enabled by default. If you want, you can still disable it in the [options menu](#options-menu).
- Curvy traps is now a separate option from sharp traps, and they are also both off by default.

# Event [2022-09-03] Tetromino
- The sky is falling - Literally! In this reality you and your teammates must fight the forces of gravity and geometry by jumping your way around the arena while fighting the opposing teams! But beware of what's above you as well!

# Event [2022-08-27] Retrograde
- Time travel! Time has dilated and bent to allow for content from the past to come to the present! The old, forgotten, and removed tanks, balancing, and features have infiltrated the arena once again! I see this as an absolute win!

# Event [2022-08-20] Space 3TDM
- After blasting off to space, you and your team must **carefully** traverse the frictionless environment of space. To assist with movement, all tanks have been equipped with an RCS turret, but disabling it with override is ill-advised.

# Event [2022-08-13] Growth
- In this reality, you must fight not only other players, but also your own size! As you continue to gain score, your size continue to grow! Additionally, your skill points now cap out at 69 rather than 42!

# Patch [2022-08-13]
- Auto-level up is now instant and more reliable.

# Event [2022-08-06]
- Traveling gamemodes have arrived!
- Every weekend, a traveling game mode will appear. Some of these are from event modes in the past, while others will be completely new!
- The current list of traveling gamemodes are **Space 3TDM**, **Clan Wars**, **Retrograde**, **Elimination**, **Pandemic**, **Half**, and **Growth**.
- The first traveling game mode is **Half**, where players will traverse and fight in a reality that has been split in half! All tanks, entities, and maps have been split in half.
- We'd also like to give our gratitude and thanks to one of our balancers, **Rog456**(color=#e57373).

# Balance [2022-08-06]
- Nerfed the health, damage, and penetration of drones.
- Buffed the movement speeds of Builder branch slightly.
- Buffed the bullet speed of Spreadshot.
- Buffed the acceleration of Hewn Double, Spawner, Auto-Spawner, and Factory.
- Gave Overgunner and Overtrapper a fifth drone.
- Redesigned Mortar's secondary barrels to be more focused.

# Update [2022-07-30]
- More options have been added to the [options menu](#options-menu), such as for the colored nest, disabling the grid, the shape corner style, and word filters. Click on the view options button to access them.

# Update [2022-07-21]
- The leaderboard in Siege will now show the health of the bosses alive. A notification will also display which wave it is when you spawn.

# Patch [2022-07-21]
- Fixed portals not giving invulnerability.

# Patch [2022-07-19]
- Fixed larger tanks being able to be pushed easily by smaller tanks.

# Event [2022-07-04]
- In celebration of Independence Day, all projectiles now explode into a firework upon death.
- This event may or may not be out for longer than a day, and only happens on US servers.

# Patch [2022-07-01]
- Readded level up to Mothership modes.
- Fixed grid alignment in 2TDM.
- Fixed Open Maze 3 Team Domination having 2 instead of 3 teams.
- Reworked mobile control to make shooting more precise.

# Balance [2022-07-01]
- Healers can no longer gain score from healing other healers, including themselves.
- The amount of score a healer gets from healing a player has been reduced.

# Patch [2022-06-21]
- Invulnerable players no longer deal damage.
- Temporarily removed doors from Assault.
- Gave Assault sanctuaries and dominators more room.

# Update [2022-06-20]
- Assault now features 6 unique map layouts: **Bunker**, **Trenches**, **Eye**, **Branches**, **Line**, and **Yin Yang**. One layout will be randomly chosen at the start of each game, and will feature different conditions that the players must play in.
- All of the maps will now feature doors, except for **Bunker** which is the original Assault layout. To unlock the door from the inside, or to lock the door, use the green button. To break the door open forcibly from the outside, or to repair it, attack the red button.
- For the **blue**(color=#00b0e1) team to win, they must capture at least half of the dominators, if there are any, in order to unlock the sanctuary. Then, they must capture all of the sanctuaries to win.
- For the **green**(color=#3cbf00) team to win, they must guard their sanctuaries and dominators and keep more than half of them continuously for 8 minutes.

# Patch [2022-04-29]
- You can now press O to self-destruct while you're invulnerable so it's easier to correct your build or select a new spawn location.
- It's now harder to die or be pushed out while you're in base.

# Patch [2022-04-22]
- Your build now appears on the disconnection screen.

# Gamemode [2022-04-19]
- FFA and Maze will now swap between USA and Europe around once a week.

# Patch [2022-04-18]
- Fixed arena not closing due to invulnerable players.

# Balance [2022-04-18]
- Buffed Swarmer's movement speed and FOV, but changed the main bullet and hives.
- Buffed Sidewinder's movement speed and main bullet, it now shoots straight for left click, sidewinds for right click.
- Buffed Auto-4's damage and bullet range.
- Buffed Cruiser and Auto-Cruiser movement acceleration.
- Buffed Maleficitor drone count slightly.
- Nerfed Manager invisible range.
- Nerfed Auto-3 and Auto-5 damage slightly.

# Patch [2022-04-13]
- Added a timestamp to the disconnection screen.

# Patch [2022-04-10]
- Fixed bosses circling around sanctuaries way too close in Siege.

# Gamemode [2022-04-10]
- The Teamer Maze event has ended.
- The way that gamemodes are randomized have been changed.
- A gamemode poll will be held soon.

# Event Poll [2022-04-10] Did you like the Teamer Maze event?
- 28, 2022-04-19T00:00:00.000Z, radio
- No
- Yes, but it should only be a one-time event
- Yes, and it should be held again in the future
- Yes, and it should be renamed and become a regular gamemode
- I did not play the event

# Event [2022-04-01]
- The Teamer Maze event has started! Team up in Maze by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in **[VN]|[F-22]|[LM]|[K]|[AL]|[PL]|[PH]|[OVLD]|[Joe-39]|[BS]|[MG]**(random) or **<XwX>**.
- All players with the same clan tag will spawn on the same team.

# Patch [2022-03-31]
- Fixed compatibility issue with Windows 7 caused by an outdated root certificate.

# Gamemode [2022-03-29]
- Europe now has Maze and US now has FFA.
- The Elimination event has ended and is now a regular gamemode.
- A new event will be held soon, and the gamemodes of other servers will be adjusted afterward.

# Balance [2022-03-29]
- Nerfed Beekeeper's FOV.
- Buffed Conqueror's destroyer cannon reload by giving it the same reload as Destroyer.
- Buffed Penta Shot and Crossbow's movement speed, but nerfed recoil.
- Buffed Auto-Cruiser's turret.
- Buffed Tri-Angle branch bullet health and damage slightly excluding Eagle and Falcon.
- Buffed Underseer branch drone speed but nerfed drone damage.
- Maleficitor is now the same as Underseer with improved reload.
- Buffed Auto-3 and Auto-5's damage and bullet speed.
- Buffed Hunter, Poacher and Ordnance's bullet penetration slightly.

# Patch [2022-03-23]
- Reworked base drones.

# Event Poll [2022-03-23] Do you like the Elimination event?
- 27, 2022-03-28T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2022-03-22]
- A new Elimination server has been added in the US.

# Event [2022-03-20]
- Added a new event: Elimination! Ensure your team doesn't have the lowest total combined score after an interval of 5 minutes to avoid being eliminated!

# Patch [2022-03-18]
- Limited drone repel distance.

# Announcement [2022-03-18]
- Arras.io will be down for maintenance starting on **2022-03-19T23:30:00Z**(timestamp) for about an hour.

# Update [2022-02-17]
- Added a new death screen with a bit more information.

# Patch [2022-02-07]
- The soccer ball in Soccer now looks like a real soccer ball.

# Update [2022-02-01]
- There is now a new proxy link at [arrax.io](https://arrax.io/), which allows you to access the game when the main domain is unavailable.
- You can now filter which servers you can see in the server selector by choosing the region and the game mode category.
- The leaderboard in Soccer now displays the number of goals scored by each team, while in Mothership it displays the health of the Motherships.

# Balance Update [2022-01-29]
- Removed the Rogue Celestials.
- Bosses no longer spawn in Assault.
- Buffed Factory minion speed slightly.
- Buffed Ordnance's recoil to be the same as Hunter.
- Buffed Director's FOV to be the same as Overseer.
- Nerfed Twister and Skimmer main bullet and thruster.
- Nerfed Sidewinder's thruster reload.
- Nerfed Triplet's FOV to be the same as Basic.
- Nerfed Nyx's minion health.
- Architect now has a right click ability that Auto-3 uses.
- Changed Sprayer and Machine Gun's bullet size.
- Fixed Auto-Double, Auto-Cruiser, and Auto-Tri-Angle auto turret being inaccurate.
- You will no longer change team in Tag if you die to an invulnerable player.

# Poll [2022-01-23] Do you use arras.io's proxy link (arras.netlify.app), which allows you to access the game when the main domain is unavailable?
- 26, 2022-02-01T00:00:00.000Z, radio
- Yes, I use it and it works.
- Yes, I use it and it does not work.
- No

# Poll [2022-01-23] Should more proxy links be added?
- 25, 2022-02-01T00:00:00.000Z, radio
- Yes
- No

# Update [2022-01-08]
- The Healer upgrades, Medic, Ambulance, Surgeon, and Paramedic, have been officially added to Siege.

# Update [2022-01-01]
- Winter Mayhem has concluded, and the rocks are now back to normal. We hope you enjoyed it!

# Event Poll [2022-01-01] Should the new Healer classes be kept in Siege?
- 24, 2022-01-08T00:00:00.000Z, radio
- Yes
- No

# Update [2021-12-25]
- Players now have a chance to spawn out of Factories in TDM gamemodes.

# Gamemode [2021-12-19]
- The Winter Mayhem event has now begun in US Siege and will end after the 25th!
- All Bosses, Sentries, and Sanctuaries within the mode have been festively redesigned and renamed.
- All Bosses have pentuple their normal base movement speed.
- All Waves feature double the amount of bosses seen in normal waves, excluding Celestial spawns.
- Sanctuaries have been slightly buffed to compensate for the increased difficulty.
- Your loss in Christmas spirit will not be ignored by the gods...

# Update [2021-12-09]
- The rocks have been changed to festive pine trees!
- For the month of December, we've added 4 new Healer upgrades to Siege: Medic, Ambulance, Surgeon, Paramedic.
- They may or may not only be here until the month ends.

# Balance [2021-12-09]
- Changed the Legionary Crasher's AI to orbit around sanctuaries from a farther distance.
- Reduced the Legionary Crasher's size by 18%.

# Update [2021-11-25]
- Happy Thanksgiving to everyone! The Motherships now look like turkeys.
- Changed the map layouts of Open 2TDM and Open 4TDM.
- Made Siege's map randomized again.
- Moved the nest in Assault into the bunker.

# Balance [2021-11-25]
- Buffed Single's reload and bullet speed slightly.
- Commander's drones now have the same damage as overseer and buffed its movement speed.
- Buffed Penta Shot's movement speed and nerfed its recoil.
- Nerfed Auto-Assassin's bullet range on its turret.
- Buffed the secondary bullet speed on Crossbow.
- Buffed Auto-4 all-around.
- Made Bomber's recoil the same as Tri-Angle.
- Changed the appearance of Director.
- Removed Rocketeer.
- Buffed Shotgun's recoil.
- Nerfed the damage and speed of Overdrive's turret's bullets.

# Patch [2021-11-12]
- Completely rework how the mockup data is sent.
- Nerf the strength of spike bounce.
- Going outside the map in Siege and Soccer now causes you to directly take damage.
- Fix Landmine looking like Smasher in the upgrade menu.
- Maleficitor drones will no longer be visible when you're near it. Manager and Stalker are also less visible than Landmine now.
- Notifications will no longer stack up after long periods of time.
- Staying still is now required to upgrade if you don't have spawn protection and are outside of your base.
- Rebalanced the player ratio in Assault.
- You will now become unpushable if you stay still while in base for 5 seconds.
- You now spawn at level 1 instead of level 0.
- Added support for the sandbox button on more keyboards.

# Update [2021-11-02]
- The physics of maze walls have been completely reworked. It's now much harder to be stuck inside of them.
- The Haunted Mansion event has ended, and rocks are now back to normal.
- The Soccer map was changed and is now rectangular.

# Patch [2021-11-02]
- Changed kill messages.
- Fixed grid alignment in portal modes.

# Event [2021-10-31]
- The Haunted Mansion event has started. Happy Halloween!
- A new server has also been added, and Soccer, Maze 2TDM, and Maze 4TDM will now appear in game mode rotation as normal again.

# Patch [2021-10-22]
- Added more protection against botting. As a consequence, you may notice spawning and respawning will take slightly longer than normal.
- Various bug fixes.

# Balance [2021-10-27]
- Decreased Maze's map size by 15%.

# Update [2021-10-18]
- Added 7 new themes: Retro, Pastel, Discord, WR Sheet Theme, Descent, Solarized Dark, and Eggplant.

# Update [2021-10-16]
- Mobile players can now use autofire, autospin, right click, and more! Go to [arras.io](/) on your phone and press the plus button on the top left to use the new mobile control buttons.
- For right click actions such as drone repelling and predator scoping, you can switch between 5 modes: Never, Always, Automatic, Manual, Double Tap. The automatic mode allows you to control your drones normally when your finger is near the middle of the joystick, while repelling from the opposite side when it's further away. The manual mode will add a new button to repel your drones. The double tap mode makes your drone repel when you tap on the joystick twice.
- Patched FOV scripts with drone tanks.

# Update [2021-10-01]
- Overhauled Portal TDM and Maze Portal TDM! Each team has their own portal in their bases that they can use to move to the other arena! Additionally, Maze Portal TDM has now been split into two different maps!
- Added Soccer! Push the ball into the opposing team's base to win!
- Fixed the final boss spawn message(s) in Siege.
- Rebalanced Nyx.
- Added the Legionary Crasher. A new Siege exclusive Elite Crasher final boss! Good luck!
- Redid the recoil change made to Triple Shot, Penta Shot, and Bent Hybrid from last month.
- Did some additional balancing changes to Rocketeer.
- Fixed the issue where smashers could sit in portals indefinitely.
- As a nod to the season, the rocks are now pumpkins!

# Balance [2021-09-06]
- Increased Maze's map size by 50%.

# Update [2021-09-02]
- Added Nyx, the final Celestial.

# Balance [2021-09-02]
- Buffed Penta Shot, Bent Hybrid, and Triple Shot's movement speed but nerfed it's recoil.
- Nerfed Hunter, Poacher, Predator, and Ordnance.
- Nerfed Rocketeer.

# Patch [2021-08-27]
- The final bosses in Siege now grow in size after spawning.

# Balance [2021-08-27]
- Nerfed the Elite Skimmer.
- Slightly buffed Zaphkiel.
- Nerfed Theia.
- Made the Summoner more resistant to bullets.
- Nerfed the Rogue Celestials.
- Buffed the Elite Spawner.

# Balance [2021-08-01]
- Slightly buffed the Minion damage of Spawner branch.
- Slightly nerfed Factory's Minion speed but buffed it's movement speed.
- Slightly nerfed Octo Tank's penetration and reload but buffed it's bullet speed.
- Slightly buffed Machine Gunner's bullet speed.
- Nerfed the drone speed of Underseer branch and Overseer branch but buffed it's drone damage.
- Nerfed Maleficitor's drone count but buffed it's drone damage and drone speed.

# Update [2021-07-15]
- Added the Elite Spawner.

# Patch [2021-07-15]
- Shortened the time between the first few waves in Siege.
- The final bosses are now invulnerable for 3 seconds after spawning.

# Balance [2021-07-14]
- Buffed the speed of Constructor, Overtrapper, Manager, Septatrapper, and Hexa-Trapper.

# Patch [2021-07-13]
- Crashes now wave around when idle.
- Only final bosses spawn in the middle of the map in Siege.

# Update [2021-07-13]
- Added very rare types of sentries to Siege.
- Waves with a single boss now spawn in the middle of the map in Siege.
- Added a new final boss to Siege. Do you believe in Ragnarok?

# Update [2021-07-11]
- Reworked Sidewinder.
- Added Rocketeer, branches from Launcher.
- Added two new bosses.

# Update [2021-07-11]
- It doesn't exist. It is just in your head.

# Patch [2021-07-11]
- Removed Bosses from Maze.
- Limited boss spawns to only one in FFA.

# Balance [2021-07-11]
- Slightly buffed Assassin branch.

# Balance [2021-07-10]
- Buffed Single's bullet speed.
- Slightly buffed Tri-Angle branch.
- Slightly nerfed Fighter's side barrels.
- Buffed Banshee's Auto Turret turn radius.

# Patch [2021-07-07]
- Flipped Hewn Double.

# Balance [2021-07-07]
- Nerfed Mega Smasher.
- Slightly buffed Crossbow.
- Slightly nerfed the damage of Hunter branch.

# Balance [2021-07-04]
- Nerfed Hunter branch damage but buffed it's penetration.
- Buffed the base speed of Hunter, Poacher, Predator, and Ordnance.
- Reworked Skimmer and Twister.

# Update [2021-07-04]
- Spike bounce is now toggleable. Turn on override to disable it.

# Patch [2021-07-04]
- Spike no longer passes through teammates.

# Balance [2021-06-27]
- Nerfed the health of all Celestials.
- Buffed Ragnarok's shield.

# Patch [2021-06-27]
- Added shapes back to Siege.
- Removed Underseer branch from Siege.

# Balance [2021-06-19]
- Slightly buffed Tri-Trapper.
- Slightly nerfed Predator.
- Slightly nerfed Bomber's back barrels.

# Balance [2021-06-18]
- Buffed Beekeeper.

# Patch [2021-06-17]
- Reverted the name change to Auto-Overseer.

# Update [2021-06-17]
- Added Beekeeper, branches from Artillery.

# Balance [2021-06-17]
- Slightly nerfed all Tri-Angle branch tanks.
- Slightly buffed Auto-Overseer's auto turret.

# Balance [2021-06-16]
- Increased damage and penetration on Single whilst reducing bullet reload and speed slightly.
- Buffed Twister's reload and bullet speed.

# Balance [2021-06-15]
- Slightly buffed the base speed of Engineer, Conqueror, Constructor, Necromancer, and Underseer.
- Removed the recoil from the front barrels of Eagle and Falcon.

# Update [2021-06-13]
- Made Sentries smoother.

# Balance [2021-06-13]
- Rebalanced Sentries.

# Update [2021-06-12]
- Reworked Hunter branch.
- Flipped Fortress.

# Balance [2021-06-12]
- Nerfed Ragnarok.
- Buffed Auto-5, Auto-3, and Mega-3.

# Balance [2021-06-09]
- Buffed the health of celestials.
- Buffed all bosses in siege.
- Slightly nerfed the damage of Ragnarok, but buffed its health.

# Patch [2021-06-09]
- Attempted to fix the AI of celestials.
- Ragnarok is no longer called a Celestial.

# Patch [2021-06-06]
- Fixed a bug that crashes servers when a boss spawns.
- Slight changes to the Siege map.

# Balance [2021-06-06]
- Buffed all bosses in Siege.
- Buffed Ragnarok heavily.

# Update [2021-06-05]
- Slightly tweaked the Siege map.

# Balance [2021-06-05]
- Buffed Ragnarok.

# Update [2021-06-05]
- Completely redesigned the Siege map.
- Added Theia: A yellow celestial.
- Added Ragnarok: A final boss in Siege.
- Siege now features 31 waves, instead of 27.

# Update [2021-06-04]
- Completely reworked Elite Sprayer.
- Added a new boss.
- Made crashers smoother.

# Balance [2021-06-04]
- Slightly buffed Elite Battleship.
- Slightly nerfed Elite Gunner.

# Balance [2021-05-30]
- Slightly buffed the speed of all Assassin branch tanks excluding Falcon.

# Patch [2021-05-29]
- Removed Spike from Siege.

# Balance [2021-05-27]
- Buffed Cruiser and Auto-Cruiser.
- Buffed Factory's movement speed.
- Buffed Nailgun's movement speed.

# Balance [2021-05-27]
- Slightly buffed Sprayer.
- Slightly buffed all Celestials.

# Balance [2021-05-25]
- Reworked the Summoner
- Buffed Elite Gunner, Rogue Palisade, Elite Battleship, Summoner, Elite Skimmer, Freyja, and Zaphkiel's movement speed.
- Nerfed Elite Sprayer, Elite Destroyer, Nest Keeper, and Paladin's movement speed.
- Nerfed the Celestial's health.
- Nerfed Freyja.
- Nerfed Paladin.
- Nerfed Zaphkiel.

# Balance [2021-05-25]
- Slightly reduced the speed of Overlord, Autoseer, Commander, Overdrive, and Overseer.

# Balance [2021-05-23]
- Slightly buffed the base speed of Overseer, Overlord, Overtrapper, Overgunner, Overdrive, Autoseer, Banshee, Commander, and Manager.

# Balance [2021-05-22]
- Slightly buffed the speed of Septa Trapper and Hexa Trapper.

# Update [2021-05-21]
- Added Launcher, branches from Pounder.
- Sidewinder no longer branches from Hunter but now branches from Launcher.
- Swarmer no longer branches from Destroyer but now branches from Launcher.
- Skimmer and Twister no longer branch from Artillery but now branches from Launcher.
- Reworked Overdrive so all of its drone turrets shoot at once and slightly increased their penetration and damage

# Gamemode Poll [2021-05-18] Which of these gamemodes do you like?
- 23, 2021-05-23T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze
- Siege

# Gamemode Poll [2021-05-18] Which of the following team gamemodes do you like?
- 22, 2021-05-23T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM               |X| |X|X| |X
- Domination        |X| |X|X| |X
- Mothership        |X| |X|X| |X
- Open TDM          |X|X|X|X|X|X
- Open Domination   |X|X|X|X|X|X
- Tag               |X|X|X|X|X|X
- Portal TDM        |X| |X|X| |X
- Portal Mothership |X| |X|X| |X
- Assault           |X| | |X| |

# Balance [2021-05-18]
- Buffed Banshee's drones and acceleration while removing the ability to control it's auto turrets.

# Balance [2021-05-17]
- Buffed the Elite Skimmer but nerfed it's health.
- Nerfed the Nest Keeper but buffed it's FoV.
- Reworked the Elite Gunner.
- Nerfed the Elite Battleship.
- Buffed the Elite Sprayer.
- Buffed the Elite Destroyer.
- Buffed the Rogue Palisade.

# Balance [2021-05-16]
- Buffed Skimmer, Twister, and Swarmer.
- Slightly buffed the FoV of Twister.
- Buffed the accuracy of AI turrets.

# Balance [2021-05-13]
- Made Bulwark's traps more focused.

# Patch [2021-05-13]
- Renamed Auto-Overseer to Autoseer.

# Balance [2021-05-05]
- Buffed Builder, Auto-Builder, Boomer, and Conqueror's movement speed.
- Buffed Machine Gunner.
- Nerfed Surfer's swarm range.

# Balance [2021-05-04]
- Slightly buffed Triple Twin.

# Balance [2021-05-02]
- Buffed Hexa-Trapper and Septa-Trapper's movement speed.
- Fixed Sprayer's mini bullet.
- Buffed Sidewinder's bullet speed and range.

# Balance [2021-04-22]
- Buffed Auto-4's bullet speed.

# Balance [2021-04-20]
- Buffed Auto-3's bullet range.
- Buffed Auto-5's bullet health, penetration, and damage.
- Buffed Auto-4's bullet health, penetration, and damage.
- Buffed Trap Guard's basic barrel.

# Patch [2021-04-12]
- Spawner, Auto-Spawner, and Factory minions will no longer bounce when colliding with each other.

# Balance [2021-04-11]
- Slightly buffed Hewn Double.
- Slightly buffed Gunner and Auto-Gunner.
- Nerfed tanks that use sunchips.

# Balance [2021-04-11]
- Doubled the time it takes for Landmine to go invisible.
- Increased the range at which you can begin to see invisible tanks.

# Patch [2021-04-10]
- Your drones will no longer collide with the drones of your teammates.

# Balance [2021-04-09]
- Slightly increased Ranger's FoV.
- Slightly increased Maleficitor's drone speed.
- Fixed bosses becoming overpowered due to the drone buff of necro classes.

# Balance [2021-04-08]
- Slightly buffed spawned drones from all necro classes.
- Slightly nerfed the FoV of drones and minions.
- Increased base speed of Maleficitor, Spawner, and Auto-Spawner.

# Balance [2021-04-08]
- Slightly nerfed Crossbow and Auto-Tri-Angle's penetration.

# Balance [2021-04-08]
- Slightly buffed all hybrid-type drones.

# Update [2021-04-07]
- Added Armsman, branches from Rifle.
- Added Crossbow, branches from Rifle.

# Balance [2021-04-07]
- Slightly increased the base speed of Ranger, Sidewinder, and Fortress.

# Balance [2021-02-25]
- Nerfed Shield Capacity.
- Nerfed Battleship AI drones.
- Fixed Sprayer and Machine Gun's recoil.
- Nerfed Skimmer and Twister's range.
- Slightly buffed Sidewinder's Snake's speed.
- Health of Surfer, Fighter, and Bomber is now consistent with Tri-Angle.
- Slightly buffed the reload of Auto-Double and Auto-Overseer's auto turrets.

# Update [2021-01-17]
- You can now press F to take control of an uncontrolled Dominator or Mothership.

# Patch [2021-01-14]
- Fixed the rotation speed of smashers.

# Gamemode [2021-01-13]
- Changed how the gamemodes are randomized in the US servers.

# Balance [2021-01-12]
- Slightly nerfed Shield Capacity and Body Damage.

# Patch [2021-01-07]
- Optimized bandwidth usage.

# Update [2021-01-05]
- The first person to join a sandbox now has operator access, and can press \` + F1 for the list of operator commands that can used while holding \`.

# Balance Update [2021-01-05]
- Buffed Body Damage and Shield Regeneration.

# Patch [2021-01-02]
- Added more Sandbox servers.
- Made sandbox arenas dynamically resize.
- Added basic controller support.

# Gamemode [2021-01-01]
- Added Sandbox mode.
- More features will be coming soon.
- Note that if there are too many players, you'll be placed in a random sandbox with another player.

# Patch [2020-12-30]
- Changed the server speed display to use mspt and made the capitalization of arras.io more consistent.
- Prevented crashers from passing through walls.

# Update [2020-12-29]
- Changed the maze generation in Maze and Open Maze TDM.
- Buffed Shield Capacity and nerfed Shield Regeneration.
- Redesigned Commander.
- Made autospin faster.
- [Other balance changes](#balance).

# Balance [2020-12-29]
- Banshee can now control its auto turrets.
- Buffed the reload of Falcon.
- Nerfed Sidewinder.

# Update [2020-12-25]
- Added Commander, branches off of Overseer.
- Added Auto-Cruiser, branches off of Cruiser.

# Patch [2020-12-24]
- Fixed the color of the purple base.

# Balance [2020-12-22]
- Invisible tanks are now more visible when you're near it.

# Patch [2020-12-22]
- Made the spawn screen faster.

# Patch [2020-12-21]
- Slightly changed the names of some gamemodes.

# Event [2020-12-20]
- The squads event has started! Added Squads in USA and Asia.
- Players spawn on teams of 4 with random players. You can also press F to create or leave a private team.

# Patch [2020-12-18]
- Fixed players spawning outside sanctuaries.

# Patch [2020-12-17]
- Made the low graphics option lower the resolution so it could actually improve performance.

# Patch [2020-12-16]
- Changed how names and health bars are rendered.

# Patch [2020-12-11]
- The arena in Tag now shrinks gradually instead of starting out small.

# Patch [2020-12-09]
- Arena closers can now see invisible players.
- Most turrets no longer fire when the target is outside the firing arc.
- Prevented players in Siege from leaving the fortress.

# Balance [2020-12-07]
- Reworked how recoil works in general and made it more consistent.

# Patch [2020-12-06]
- Added a new region code system.
- Optimized entity controllers and fixed a memory leak.

# Gamemode [2020-12-06]
- The server selector now displays the player count and player limit instead of the server provider and is sorted by region.
- Added new servers and shuffled the gamemodes. Now almost all of the servers have partially randomized gamemodes.
- USA has Maze, TDM, Domination/Mothership, Open TDM, Pandemic/Tag, Siege/Assault, and 4 Team Maze gamemodes.
- Europe has FFA and a random team gamemode.
- Asia has a Maze 4TDM variant and a random team gamemode, and sometimes Maze.
- Additionally, there's a randomized gamemode server in both USA and Asia.

# Balance Update [2020-11-29]
- Rebalanced Battleship.
- Nerfed bosses.
- Changed the way Spreadshot looks.
- Go to the [balance update section](#balance) for more details.

# Balance Update Details [2020-11-29]
- Buffed the reload, range, and damage of Battleship's guided swarm drones.
- Buffed the speed and damage of Battleship's autonomous swarm drones but nerfed their reload and range.
- Nerfed the reload and bullet stats of Elite Battleship.
- Nerfed the bullet stats of Nest Keeper's Mega Crasher.
- Nerfed the bullet stats of Elite Skimmer's Hypermissiles.
- Nerfed the range of Freyja.
- Nerfed the range and reload of Summoner.

# Patch [2020-11-28]
- Made the new prediction the default.
- Improved debug information to show prediction mode, bandwidth usage (in bytes per second), entity count, and server idle time.
- You can now press Shift + L to keep debug information on instead of holding L.
- Added a display for the author of custom themes.

# Patch [2020-11-24]
- Various client and server reworks and minor optimizations.
- Note that if you own a private server, you can now go [here](https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md) to enable the class tree.

# Update [2020-11-15]
- Added randomized gamemodes.

# Patch [2020-11-15]
- Made the text in the server selector slightly smaller.
- Banned a few multiboxing scripts.

# Balance [2020-11-15]
- Nerfed the penetration of Auto Double's auto-turret.
- Nerfed the damage of Auto Overseer's auto-turret.
- Nerfed the accuracy and bullet speed of Engineer's pillboxes.

# Event [2020-11-13]
- Started the Pandemic event, replacing Tag in US East and Asia.
- When a player on the **blue**(color=#00b0e1) team dies to a player on the **green**(color=#3cbf00) team, they are infected and will respawn on the green team.
- The game ends when everyone is infected.

# Patch [2020-11-07]
- Players can no longer get stuck in walls.
- Going through a portal now grants invulnerability for 5 seconds.

# Gamemode Poll [2020-11-01] Which of these gamemodes do you like?
- 21, 2020-11-08T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze
- Siege

# Gamemode Poll [2020-11-01] Which of the following team gamemodes do you like?
- 20, 2020-11-08T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM               |X| |X|X| |X
- Domination        |X| |X|X| |X
- Mothership        |X| |X|X| |X
- Open TDM          |X|X|X|X|X|X
- Open Domination   |X|X|X|X|X|X
- Tag               |X|X|X|X|X|X
- Portal TDM        |X| |X|X| |X
- Portal Mothership |X| |X|X| |X
- Assault           |X| | |X| |

# Patch [2020-11-01]
- Changed the gamemode code for Assault, Siege, and Tag.
- The server list is now fetched from the central servers.
- Slightly changed the sorting of the servers.
- Forced the HTTPS redirect.

# Update [2020-10-28]
- Servers that are unavailable are now automatically removed.
- You can now paste in party links without reloading.

# Patch [2020-09-28]
- Added reCAPTCHA and a few other anti-botting measures.
- Removed the reCAPTCHA badge from the bottom right during the game.

# Update [2020-09-06]
- The tag event has started! Added Tag in US East and Asia.
- Players who are killed will respawn on the team that killed them.
- A team wins when there are no other team alive.

# Patch [2020-08-22]
- Added an in-game display for server ID.
- Added a workaround for lag caused by mouse movement in Chrome 84.

# Gamemode Poll [2020-07-29] What FFA gamemodes do you like?
- 19, 2020-07-31T07:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-07-29] Which of the following team gamemodes do you like?
- 18, 2020-07-31T07:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Update [2020-07-20]
- Added Ordnance, branches off of Artillery and Hunter.

# Gamemode [2020-07-06]
- The event has ended.
- US West has Assault, US East has Siege, Europe has Portal 4TDM, and Asia has Portal Mothership.

# Event Poll [2020-06-29] Which of these gamemodes do you like?
- 17, 2020-07-06T07:00:00.000Z, any
- Assault
- Siege
- Portal 4TDM
- Portal Mothership

# Patch [2020-06-26]
- Added upgrade cooldown when you have bullets on the map.
- Fixed a vulnerability that could cause server crashes.
- Spawn protection now lasts 60 seconds.
- Shuffled the gamemodes for bandwidth optimization.

# Patch [2020-06-25]
- Fixed green team's losing condition in Assault.

# Event [2020-06-23]
- We have brought back all of the event gamemodes: Assault, Siege **Originally the boss event**(tooltip), Portal 4TDM, and Portal Mothership.
- Each region will have an opportunity to play each of these gamemodes at least once during the event.

# Gamemode [2020-06-23]
- Slightly reworked and readded Assault.
- For the **blue**(color=#00b0e1) team to win, they must invade and destroy all of the green sanctuaries.
- For the **green**(color=#3cbf00) team to win, they must guard their sanctuaries and dominators and keep at least 3 of them continuously for 8 minutes.
- When a sanctuary is destroyed, it can only be repaired to become a dominator.
- Changed the gamemodes of all of the servers.
- There are now three US West servers with the gamemodes 4TDM, Maze 2TDM, and Maze Domination.
- US East now has 2TDM, 4 Team Domination, and FFA.
- Europe only has Maze.
- Asia has FFA and Maze 4TDM.

# Patch [2020-06-23]
- Changed maze generation for Assault to make the sanctuaries more connected.

# Event Poll [2020-06-18] Do you like the portal event?
- 16, 2020-06-22T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2020-06-08]
- The portal event has started! Added Portal 4TDM and Portal Mothership.
- In Portal 4TDM, one side of the arena is normal 4TDM and the other is Maze 4TDM.
- In Portal Mothership, Motherships spawn on opposing sides of the arena.
- Portals connect the two sides of the arena.

# Gamemode [2020-06-01]
- Added Assault.
- For the **blue**(color=#00b0e1) team to win, they must invade and destroy the green sanctuary, which can be unlocked by destroying all of their three dominators.
- For the **green**(color=#3cbf00) team to win, they must guard their dominators and sanctuary and keep at least 3 of them continuously for 8 minutes.
- Added 2TDM and restored some of the servers that ran out of bandwidth.

# Gamemode Poll [2020-05-30] What FFA gamemodes do you like?
- 15, 2020-06-04T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-05-30] Which of the following team gamemodes do you like?
- 14, 2020-06-04T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Balance [2020-05-29]
- Buffed the reload and accuracy of auto-turrets.
- Nerfed the acceleration of Mega Smasher.
- Nerfed Engineer.
- Nerfed rammers.

# Balance [2020-05-27]
- Buffed Sidewinder, Spreadshot, and Auto-4.
- Buffed all auto-turrets.
- Buffed Gunner Trapper's recoil.
- Buffed Battleship's reload.
- Nerfed Carrier's field of view.
- Nerfed the bullet speed of Artillery, Mortar, Barricade, and Auto-5.
- Buffed the knockback of Factory drones.
- Mega Smasher is now faster but no longer completely immune from knockback.

# Patch [2020-05-27]
- Replaced some servers to deal with bandwidth issues.

# Event Poll [2020-05-17] Did you like the boss event?
- 13, 2020-05-22T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2020-05-17]
- The boss event has ended.

# Balance [2020-05-16]
- Buffed the shield capacity stat.

# Update [2020-05-16]
- Invisible tanks such as smasher are now slightly visible when you're near it.
- Healer can now gain score from healing other players.

# Event [2020-05-14]
- Added Sanctuaries to the boss event.
- Players can only spawn in the sanctuaries. When all of the sanctuaries are destroyed and not restored in 60 seconds, the game is lost.

# Balance [2020-05-13]
- Nerfed the knockback of Healer.

# Update [2020-05-12]
- Redesigned Healer's appearance to look different from Sidewinder.

# Patch [2020-05-12]
- Replaced some servers to deal with bandwidth issues.
- Added rocks to FFA.
- When under spawn protection, you no longer deal damage to bosses and motherships, and you also cannot turn invisible.
- Added a contact link.

# Event [2020-05-09]
- The boss event has started! Bosses will spawn in waves while players defend themselves.
- Added Healer, branching off of Basic, for the boss event.

# Balance [2020-05-09]
- Buffed bosses.

# Patch [2020-05-09]
- Shuffled the gamemodes for bandwidth optimization.

# Patch [2020-05-08]
- Reworked AI pathfinding to avoid walls.

# Patch [2020-04-14]
- Added HTTPS redirect.

# Patch [2020-04-13]
- Blacklisted suspicious IPs.

# Patch [2020-04-10]
- Changed server list sorting.
- Added support for [HTTPS](https://arras.io/).

# Gamemode Update [2020-04-10]
- Added three new servers and new gamemodes.
- There are now two US West servers with gamemodes 4 Team Mothership and Maze FFA.
- US East now has Maze 4TDM, 4 Team Maze Domination, Assault, Domination, and FFA.
- Europe has two servers with gamemodes Maze 2TDM and 4TDM.
- Asia now has Maze Domination and Open Maze 4TDM.

# Patch [2020-03-25]
- Fixed bug where the score of the Mothership is restored to players when they respawn after a server overload.

# Patch [2020-03-24]
- Added rocks to Open 3TDM.

# Patch [2020-03-20]
- Optimized text rendering on older browsers.

# Gamemode Poll [2020-03-20] What FFA gamemodes do you like?
- 12, 2020-03-24T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-03-20] What team gamemodes do you like?
- 11, 2020-03-24T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM                                        |X| |X|X| |X
- Domination                                 |X| |X|X| |X
- Mothership                                 |X| |X|X| |X
- Open TDM                                   |X|X|X|X|X|X
- Open Domination                            |X|X|X|X|X|X
- Assault **Same as the D-Day event**(tooltip) |X| | |X| |

# Gamemode [2020-03-19]
- Replaced Glitch and Heroku servers with an ExtraVM server.
- Added Open 3TDM gamemode.

# Update [2020-03-18]
- Added Elite Battleship, idea by Reflection.
- Added Nest Keeper, idea by Whert.

# Patch [2020-03-18]
- Applied a new naming scheme in party links.

# Patch [2020-03-16]
- Switched servers from DVI to ExtraVM.

# Patch [2020-03-12]
- Updated the link to the proxy server.

# Gamemode [2020-03-10]
- Removed the Space 3TDM event gamemode as the server has been down.

# Patch [2020-03-09]
- Added a button that links to [Momentum Studios](https://momentumstudios.games/).

# Patch [2020-03-09]
- Migrated from [surge.sh](https://surge.sh/) to [Netlify](https://www.netlify.com/).
- Added older changelogs into the same document.

# Announcement [2020-03-06]
- Arras.io has received no updates in the last 7 months, but that will soon change. The developer has now joined forces with Momentum Studios, a small game company specializing in the development of online games.
- We hope to be able to work with everyone soon, and bring some life back into the arras.io community!

# Patch [2020-01-10]
- Fixed a bug with more than 9 upgrades in private servers.

# Patch [2019-12-19]
- Fixed a bug with the disconnection screen showing a score instead of the disconnection message.

# Patch [2019-08-09]
- Changed the disconnection screen to display a different message in case of AFK timeout.

# Balance [2019-07-21]
- Nerfed Mega-Smasher's movement speed but made it immune to knockbacks.

# Event [2019-07-21]
- Made the arena in the Space 3TDM circular and around the moon.

# Patch [2019-07-18]
- Fixed auto-restore in Space modes.

# Patch [2019-07-17]
- Fixed a bug where you can move out of the arena bound in Space modes.
- Made the yellow event label a bit less flashy.
- Made the server selector larger.
- Made everything change in size smoothly instead of instantly again.
- Bosses now ignore you if you're within a base.

# Event [2019-07-16]
- Added a new US East server from ExtraVM that can run 2 servers.
- Moved 4TDM to the new server and added the event gamemode.
- For the 50th anniversary of Apollo 11, the event gamemode is Space 3TDM!
- Added [RCS](https://wikipedia.org/wiki/Reaction_control_system) that will automatically make you slow down if you don't press any key, which you can disable with R.
- Removed the old Glitch 4TDM server.

# Balance Update [2019-07-03]
- Nerfed Tri-Angle branch's recoil and buffed Destroyer branch's recoil.
- Buffed previously overnerfed branches including Double Twins and Necromancers.
- Slightly buffed Gunner branch's bullet speed.
- Buffed Conqueror, Sidewinder, Shotgun, and Boomer.
- Buffed the stats and reload of all regular traps.
- Made Builder branch traps not overshoot.
- Made the slower tanks faster.
- Go to the [balance update section](#balance) for more details.

# Balance Update Details [2019-07-03]
- Buffed Destroyer, Annihilator, and Hybrid's recoil.
- Buffed Conqueror's destroyer barrel's reload and recoil.
- Nerfed Annihilator's reload to be the same as Destroyer.
- Nerfed the thruster recoil of all Tri-Angle upgrades except Bomber.
- Nerfed Tri-Angle, Auto-Tri-Angle, Booster, Surfer, and Bomber's front barrel speed.
- Nerfed Fighter's front and side barrel speed.
- Slightly buffed the stats of all Double Twin upgrades except bent double.
- Slightly buffed Gunner, Auto-Gunner, and Cyclone's bullet speed.
- Buffed Sidewinder's bullet speed.
- Buffed Shotgun's bullet stats and accuracy.
- Buffed Director's reload.
- Buffed Underseer and Necromancer drones.
- Buffed the stats and reload of all regular traps.
- Buffed Boomer's damage.
- Made Builder branch traps not overshoot.
- Buffed Assassin branch, Swarmer, Banshee, Manager, Constructor, Overtrapper, Spawner, and Auto-Spawner's movement speed.

# Patch [2019-07-03]
- Added temporary fireworks for Independence Day for people in the United States.
- Fixed NaN bug with protocol.
- Made the references to changelog categories clickable.

# Balance [2019-06-24]
- Nerfed recoil of Gunner Trapper.
- Buffed bullet stats of Overgunner to be the same as Gunner Trapper.

# Patch [2019-06-22]
- Made the client send movement instantly to reduce latency.
- Used the improved encoding algorithm on the client, which was originally only used on the server.
- Note that if you own a private server, you need to go [here](https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md) to keep your server working!
- Updated the [link format for private servers](https://glitch.com/edit/#!/arras-template?path=README.md).

# Patch [2019-06-17]
- More client side optimizations.
- Set the AFK timeout to only kick players when they have been inactive for 5 minutes.
- Neutral and enabled buttons now deal no damage at all.
- Added a display for tank speed in the debug menu, which you can access by pressing L.

# Update [2019-06-17]
- Added auto-level up, which automatically makes you level up after spawning. By default it's enabled on mobile, but you can set it in the [options menu](#options-menu).
- Added the option to use the new interpolation mode, also in the [options menu](#options-menu), which can sometimes make the game smoother.
- Doors can no longer put you into walls now.

# Patch [2019-06-16]
- Added colored indicators to the result page of table polls.

# Gamemode Poll [2019-06-15] What FFA gamemodes do you like?
- 10, 2019-06-19T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2019-06-15] What team gamemodes do you like?
- 9, 2019-06-19T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM                                        |X| |X|X| |X
- Domination                                 |X| |X|X| |X
- Mothership                                 |X| |X|X| |X
- Open TDM                                   |X|X|X|X|X|X
- Open Domination                            |X|X|X|X|X|X
- Assault **Same as the D-Day event**(tooltip) |X| | |X| |

# Patch [2019-06-15]
- Added tooltips.
- Fixed a bug with invalid dates in the changelog on certain devices.
- Removed featured status from D-Day.

# Event Poll [2019-06-14] Did you like the D-Day event?
- 8, 2019-06-17T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should be renamed and kept as a possible normal gamemode

# Patch [2019-06-13]
- Fixed scrollbars in Firefox.
- Added styling for radio boxes.
- Added support for radio polls.

# Patch [2019-06-12]
- Fixed a bug with negative levels in private servers.
- Prevented everything from moving around weirdly during severe lag.
- Made the references to the [options menu](#options-menu) in the changelog clickable.
- Fixed a bug with the [options menu](#options-menu) overflowing on Firefox.

# Patch [2019-06-09]
- Minor color changes with the spawn screen.
- Fixed the changelog entries overlapping with each other on small screens.
- Various client side optimizations.

# Balance [2019-06-07]
- Buffed trapper dominator's reload.

# Patch [2019-06-07]
- Fixed some bugs with the spawn screen on Firefox.
- Modified the D-Day map, removing a diagonal hole in the wall near the Axis base.
- Fixed a bug with Maleficitor drones not turning invisible.

# Event [2019-06-06]
- Added an event mode on Maze 2TDM, which is replacing Open 3TDM.
- As today is the 75th anniversary of **D-Day**, it is the event gamemode!
- The allies, which are **blue**(color=#00B0E1), have more tanks than the Axis powers, which are **red**(color=#F04F54).
- For the allies to win, they must invade and destroy the red central base on the bottom right, which is unlocked by destroying all of their dominators scattered on the map.
- For the Axis powers to win, they must guard all of their dominators and base and keep at least 4 of them continuously for 8 minutes.

# Patch [2019-06-03]
- Fixed a bug where keys would act multiple times if you press enter multiple times while spawning.
- Changed the dropdown icon in the [options menu](#options-menu).

# Patch [2019-06-02]
- Made the changelog category selector scrollable.
- Resized maze walls so they fit together better.
- Hidden the leaderboard in screenshot mode.
- Made the server selector scroll when selected.
- Fixed a bug with spaces in text measurer fallback for older devices.
- Added a way to [specify gamemodes for private servers](https://glitch.com/edit/#!/arras-template?path=README.md).

# Patch [2019-06-01]
- Added the option to use the mouse on mobile devices in the [options menu](#options-menu).
- Made the changelog category selector be on top of the changelog on smaller screens.
- Fixed a bug with the respawn delay.
- Multiple maze walls in a square arrangement will join together.
- Added some client side optimizations.

# Patch [2019-05-28]
- Automatically select the nearest fast server by default instead of a random one.

# Patch [2019-05-26]
- Fixed a bug on mobile where you shoot immediately after tapping to spawn.
- Fixed another bug on mobile where tapping without dragging will not update your aim.
- Added notification to add to home screen on mobile.

# Patch [2019-05-25]
- Reworked broadcast system again to significantly lower bandwidth.
- Note that if you own a private server, you need to go [here](https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md) and update your server accordingly to keep your server working!
- Newly spawned tanks now flash when they're invulnerable.

# Update [2019-05-25]
- Added new mobile controls with larger buttons for stats and joysticks on the bottom. Just go to [arras.io](/) on your phone to use it!
- You can now press Q to save screenshots instead of just pressing Z to record videos.
- Added [custom keybinds](https://youtu.be/5XY8kKIZN-w), which you can access by going to the [options menu](#options-menu) and clicking on the key indicators.
- Note that you can also press backspace to unbind keys.
- Added changelog categories. [Updates](#updates) is for all major updates. [Events & Gamemodes](#events) is for major updates involving events or gamemodes. [Balance](#balance) is for every balance update, major or minor. [Changelog](#changelog) will show you every single update.

# Patch [2019-05-25]
- Added automatic sweeping to the Discord bot to save on memory usage.
- Patched kill counter to lower memory usage.
- Changed the style of the arrows of the drop-downs in the [options menu](#options-menu).

# Balance [2019-05-24]
- Buffed Hewn Double recoil and bullet stats.

# Patch [2019-05-24]
- Added notification to press N if player hasn't press N 30 seconds after spawning.

# Balance [2019-05-21]
- Nerfed Necromancer drone speed.
- Made Necromancer guard drones turn squares into regular drones instead of other guard drones.

# Balance [2019-05-20]
- Buffed shotgun damage and bullet speed.
- Nerfed Necromancer drone stats.

# Balance [2019-05-11]
- Nerfed Overdrive drone stats.
- Made squares lose score upon becoming Necromancer drones.

# Balance [2019-05-08]
- Nerfed Sniper reload slightly.

# Event [2019-05-05]
- The event has ended.
- For now, the event mode is replaced with regular Open 3TDM.

# Update [2019-05-04]
- The Glitch server is now visible only when the Heroku server is not available.
- Added tooltips when upgrading to Stalker, Manager, Landmine, Falcon, Eagle, Maleficitor, or Predator.

# Patch [2019-05-03]
- Added lines to indicate branching on the class tree, press T to show.

# Event [2019-05-03]
- Replaced 4 Team Domination for an event mode.
- In remembrance of *Freedom 7*, the first manned United States spaceflight which was on May 5, 1961, the event gamemode is Space 3TDM!
- We'll likely have more events in the future!

# Balance [2019-05-02]
- Buffed the engine acceleration stats of Smashers.

# Patch [2019-05-01]
- Fixed bug that made the servers crash.

# Gamemode [2019-04-30]
- Added a new server in Asia, also sponsored by [Server Hunter](https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website).
- Added Maze on the server.
- Changed the OVH Europe server to FFA.

# Gamemode [2019-04-20]
- Added a new US East server from OVH sponsored by [Server Hunter](https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website).
- Added Maze 2TDM on the server.

# Patch [2019-04-14]
- Made the team selector use only the number of teammates you have instead of also the team's total score.
- Fixed bug with death effect.

# Gamemode Poll [2019-04-12] What FFA gamemodes do you like?
- 7, 2019-04-15T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2019-04-12] What team gamemodes do you like?
- 6, 2019-04-15T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Balance [2019-04-12]
- Fixed Overdrive drone's reload.
- Fixed polls not loading.
- Balance changes.

# Patch [2019-04-11]
- Improved the encoding algorithm used by the server to lower bandwidth usage.

# Update [2019-04-08]
- Switched from Hetzner to OVH for the European server.
- This server is also sponsored by [Server Hunter](https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website) and should be faster.

# Gamemode [2019-04-05]
- Added a new European server from Hetzner.
- Thanks to [Server Hunter](https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website) for sponsoring it!
- Currently the gamemode is Maze but I'll likely change the gamemode for it in the future.
- I've replaced the link for [Stripe donation](https://arras-lb.glitch.me/donate), but you can still access it.

# Balance [2019-04-03]
- Nerfed spike bounce ability.

# Update [2019-04-01]
- Added spike bounce ability, touch another spike to activate.

# Gamemode [2019-03-29]
- Replaced the expired OpenShift FFA server with Glitch.

# Update [2019-03-26]
- Removed client side extrapolation and used it for interpolation.

# Gamemode [2019-03-24]
- Added back 4 Team Domination.
- Note that as there's only one DVI server, this is ran on the same server.
- I'll likely change the gamemode for it in the near future.

# Update [2019-03-23]
- Changed bases of 2TDM to go from top to bottom instead of only the center.
- Added Spawner, branches off of Director.
- Made Factory branches off of Spawner.
- Added Auto-Spawner, branches off of Spawner.

# Update [2019-03-19]
- Made traps more accurate.
- Removed WeDeploy as it had been discontinued.
- Fixed a memory leak that caused server crashes, credit to [&.](https://www.reddit.com/user/CrazyDave2345) for telling me to investigate it.
- Fixed another bug that caused the server to crash due to the Discord Bot.

# Gamemode [2019-03-10]
- Swapped gamemodes of DVI FFA and Heroku 2TDM.

# Gamemode [2019-03-09]
- Replaced 3 Team Maze Domination on Heroku with 2TDM.

# Update [2019-03-04]
- Added Twister, branches off of Artillery.
- Nerfed ram stats.
- Added new messages on the loading screen.

# Gamemode [2019-02-04]
- Replaced the FFA Glitch with a different FFA server.

# Gamemode [2019-02-01]
- Added a second FFA server on US West.

# Update [2019-01-21]
- Added a class tree, press T to show.
- Added some more links to the left menu.

# Gamemode Poll [2019-01-21] What team gamemodes do you like?
- 5, 2019-01-28T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Gamemode [2019-01-16]
- Removed the OpenShift servers from the server list as they have expired.

# Update [2019-01-04]
- Added a new server selector.

# Patch [2019-01-04]
- Replaced the old outdated Twitter feed with a referral link to Linode.

# Gamemode [2019-01-03]
- Added a WeDeploy server, currently the gamemode is 4TDM.

# Gamemode [2019-01-02]
- Added back 3 Team Maze Domination as the bandwidth have reset!
- Added a BuyVM server, currently the gamemode is Maze Mothership.
- Added party links.

# Update [2018-12-31]
- Renamed Hurricane to Cyclone.
- Added Overdrive, upgraded from Overseer.

# Update [2018-12-29]
- Added a slightly better server selector.
- Thanks to all the donors of the game, we now have a new domain for the game at [arras.io](http://arras.io/)!

# Update [2018-12-26]
- Replaced the free Codeanywhere server with a Heroku server.

# Update [2018-12-25]
- Merry Christmas everyone! I've put up some Christmas lights around the maze walls.
- Added Hurricane, upgraded from Hexa Tank and Gunner.
- I've temporarily replaced the old US West server with a free OpenShift server, and the Europe server with a free Codeanywhere server.

# Balance [2018-12-24]
- More balance changes.
- Servers now restart every 10 hours, unless someone in the server have a high score.

# Patch [2018-12-23]
- Unfortunately, the Europe server ran out of bandwidth for this month.
- Added the [one-time donation link](https://arras-lb.glitch.me/donate) to the options menu.
- Various balance changes.

# Gamemode [2018-12-22]
- The OpenShift servers seems to have been experiencing some severe connection issues.
- Fortunately, today I've received a $50 donation. Donations like these will keep the game going, and even the smallest donations can still have an impact.
- In the meantime, I've added 4 Glitch servers. Although they might be slow, it's hopeful better than nothing.

# Gamemode [2018-12-17]
- Unfortunately, the US West server ran out of bandwidth for this month.
- OpenShift has announced that from now on, old projects will expire in 30 days, while new projects expire 60 days after they were created. This means that from now on, the US East servers will need to be remade every two month.
- In order to keep all of the servers up at all time, you can donate to me on [Patreon](https://www.patreon.com/arras) so I can upgrade the US West server to have more bandwidth.
- I will likely be adding a one-time donation page in the near future.

# Update [2018-12-14]
- Invisible tanks can now see themselves when invisible.
- Fixed bug where the "Press N to level up instantly." is falsely shown.
- Optimized the servers so hopefully they will be less laggy.

# Patch [2018-12-10]
- Fixed bug where traps don't get killed while touching walls.

# Update [2018-12-09]
- Added option to separate health and shield bars. Click on the view options button to access.
- You now respawn with half of your points.

# Update [2018-12-08]
- Predator can now right click to move its camera.

# Patch [2018-11-29]
- Fixed minimap to make tank movements buttery smooth.
- Fixed bug where FFA reverted to Maze.

# Gamemode [2018-11-28]
- Replaced Open 3TDM with 3 Team Maze Domination!

# Gamemode [2018-11-27]
- Ended Thanksgiving event.
- Replaced 4 Team Domination with 4TDM.
- Replaced Maze with FFA.
- 3 Team Maze Domination coming very soon!

# Event [2018-11-23]
- Happy Thanksgiving to everyone! I know it's a day too late, but I've made the motherships look like turkeys.

# Update [2018-11-23]
- Add 2 Team Maze Mothership in the new US West server.
- In this gamemode, there will *not* be an insta-level up button, but there are more polygons, and the polygons give more points.
- The motherships need to navigate the maze and fight the opposing teams.
- Due to technical difficulties, I was unable to update the gamemode for the US East servers.

# Update [2018-11-20]
- Traps now die instantly when touching walls.
- I'll be changing the gamemodes once I get the maps ready.

# Patch [2018-11-18]
- Added a [proxy server](http://arras-proxy.surge.sh/) because some people can't seem to play on the new link.
- Fixed minimap maze color for Midnight theme.
- I will update the gamemodes pretty soon.
- Unfortunately, I screwed up while reading the database and accidentally erased people who voted for all three of the winning team gamemodes which are:
- 4TDM
- 2 Team Maze Mothership
- 3 Team Open Maze Domination

# Gamemode Poll [2018-11-12] What flavor of FFA do you like?
- 4, 2018-11-18T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2018-11-12] What team gamemodes do you like?
- 3, 2018-11-18T00:00:00.000Z, table
- |::**With Maze**|::**No Maze**
- **Number of Teams**|**2**|**3**|**4**|**2**|**3**|**4**
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Gamemode [2018-11-06]
- Replaced FFA with Maze!
- FFA except there are walls everywhere.

# Patch [2018-11-05]
- Added back minimap to show teammates and bosses, credit to [&.](https://www.reddit.com/user/CrazyDave2345) for helping to make it faster.
- Note that if you own a private server, you need to go [here](https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md) to keep your server working!

# Balance [2018-11-03]
- Nerfed Musket and Carrier.

# Update [2018-10-31]
- Added Pumpkin Skeleton theme, credit to [Road](https://www.reddit.com/user/Road-to-100k).
- You can find the theme by clicking view options. It's recommended for it to be used with glass mode.
- Added Musket, upgraded from Twin and Rifle.
- Thanks to our patrons on [Patreon](https://www.patreon.com/arras), we now have a new domain for the game at [arras.cx](http://arras.cx/)!

# Gamemode [2018-08-22]
- Added Open 3TDM to replace 2TDM.
- Added 4 Teams Domination to replace Mothership.
- Take over three of the five dominators to win the game!

# Patch [2018-08-20]
- Added Malefictor, upgraded from Underseer.
- Press R to stop the drones from moving and turn invisible.
- Added Swarmer, upgraded from Destroyer.

# Gamemode Poll [2018-08-22] Which flavor of Domination do you like the most?
- 2, 2018-08-23T00:00:00.000Z, any
- 2 Teams Domination
- 4 Teams Domination

# Gamemode Poll [2018-08-22] Which flavor of Open TDM do you like the most?
- 1, 2018-08-23T00:00:00.000Z, any
- Open 2TDM
- Open 3TDM
- Open 4TDM

# Gamemode Poll [2018-08-19] What gamemodes do you like?
- 0, 2018-08-22T00:00:00.000Z, any
- FFA
- TDM
- Open TDM (TDM without bases)
- Domination
- Mothership

# Balance [2018-08-17]
- Added more base protectors to 2TDM.
- Increased map size of all gamemodes.
- Nerfed Triplet.
- Buffed Mega-3.
- Buffed Spreadshot.
- Nerfed drone range again.
- Buffed Booster acceleration but nerfed speed.

# Balance [2018-08-16]
- Changed AIs' range mechanism.
- Nerfed drone range.

# Gamemode [2018-08-07]
- Removed 4TDM to help with lag issues because the server is less powerful than expected.

# Gamemode [2018-08-06]
- Added 2TDM and 4TDM!
- Thanks to our patrons on [Patreon](https://www.patreon.com/arras) for allowing us a second server!

# Update [2018-08-06]
- Added mobile support!
- Various balance changes.

# Update [2018-07-19]
- Added Rifle, upgraded from Sniper.

# Gamemode [2018-07-12]
- Nerfed Shotgun.
- Replaced Portal 4TDM.
- Added experimental gamemode Portal Mothership.
- Motherships spawn on opposing sides of the arena.
- In the middle of both is a portal.
- Motherships cannot enter the portal.

# Gamemode [2018-07-04]
- Replaced 4TDM.
- Added experimental gamemode Portal 4TDM.
- One side of the arena is normal 4TDM, the other is Maze 4TDM.
- In the middle of both is a portal.
- Nerfed certain bosses.

# Patch [2018-07-03]
- Added Eagle, branches off of Tri-Angle and Pounder.
- Moved Shotgun to upgrade from Pounder at Tier 3.
- Moved Conqueror to upgrade from Destroyer instead.
- Changed Conqueror to have Destroyer bullet but with slower reload.

# Patch [2018-07-02]
- Renamed Hepta-Trapper to Septa-Trapper.
- Renamed Snipe Guard to Bushwhacker again.
- Renamed Tri-Builder to Architect.

# Update [2018-07-02]
- Various balance changes.
- If you have a private server, make sure to go [here](https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md) and do the required changes to keep your server working!

# Patch [2018-06-29]
- Moved Bulwark, now upgraded from Twin and Trap Guard.
- Optimizations so the servers will be less laggy.
- You should now be able to restore scores even after disconnections from server overloading.

# Gamemode [2018-06-28]
- Increased knockback.
- Changed FFA Maze back to FFA.
- Added Bulwark, upgraded from Twin and Trapper.
- Added a limit on how fast you can respawn.

# Patch [2018-06-26]
- Prediction & other debug information are now hidden unless L is pressed.
- Latency and client/server speed are still visible by default.

# Update [2018-06-26]
- Added Trapper, upgraded from Basic.
- Added Tri-Trapper, branches off of Trapper.
- Added Hepta-Trapper, branches off of Tri-Trapper.
- Added Auto-Overseer, branches off of Overseer.
- Made Conqueror barrels smaller.
- Renamed old Trapper to Builder.
- Changed class tree.

# Patch [2018-06-26]
- Fixed bug where leaderboard and upgrade choices are missing.
- Reverted keybinds due to confusion. Click view options for detail.

# Balance [2018-06-25]
- Buffed Skimmer range.

# Patch [2018-06-25]
- Made upgrades three columns.
- Change keybinds. Click view options for detail.

# Gamemode [2018-06-25]
- Replaced Mothership with Maze.
- FFA except there are obstacles everywhere.
- Added Pounder, upgraded from Basic.
- Moved classes like Trappers and Destroyers to upgrade from it.

# Patch [2018-06-24]
- Fixed UI zoom glitch.
- Added [Patreon](https://www.patreon.com/arras) page!

# Balance [2018-06-23]
- Nerfed Trappers.
- Increased knockback.

# Balance [2018-06-11]
- Nerfed Mothership.
- Nerfed Barricade.

# Gamemode [2018-06-11]
- Temporarily replaced FFA with Mothership.
- Destroy the enemy mothership to win the game!

# Update [2018-06-11]
- Tanks now lasts for 15 seconds instead of 8 seconds if a player disconnected.
- Added experimental tank recovery feature.
- If a player joins back during the time before the tank is automatically destroyed, they will spawn as their old tank.

# Update [2018-06-11]
- Buffed bosses.
- Added Barricade, upgraded from Minigun and Trapper.

# Gamemode [2018-06-03]
- Changed the 2 TDM Domination server to 4 TDM.
- Added M for maximizing stats.
- Added Z to toggle video recorder.

# Update [2018-06-02]
- Added Tri-Trapper, upgraded from Trapper and Flank Guard.
- Added Conqueror, upgraded from Trapper and Destroyer.
- Added Auto-Assassin, upgraded from Assassin.

# Balance [2018-06-02]
- Nerfed drones.
- Nerfed Manager.
- Gunner-Trapper now branches off from Gunner, Trapper, and Trap Guard.
- Doubled the size of the arena.
- Buffed bosses.
- Made bosses spawn more often.

# Update [2018-06-01]
- Added Manager, upgraded from Director.
- Added Stalker, upgraded from Assassin.
- Added Landmine, upgraded from Smasher.

# Gamemode [2018-05-21]
- Changed the 4 TDM Domination server to 2 TDM Domination.

# Balance [2018-05-21]
- Nerfed Health Regen and Body Damage effectiveness.
- Buffed drones slightly.

# Balance [2018-05-08]
- Nerfed Carrier.

# Balance [2018-05-07]
- Nerfed ram stats.
- Nerfed Booster health.
- Buffed Sniper bullet speed slightly.

# Patch [2018-05-05]
- Moved base protectors in Domination to the edge of the map.
- Various nerfs and buffs.

# Gamemode [2018-04-29]
- Replaced 4TDM with 4 Team Domination.
- Take over 3 dominator to win the game!
- Replaced 2TDM with FFA.

# Update [2018-04-28]
- Added Banshee, upgraded from Auto-3 and Overseer.

# Gamemode [2018-04-04]
- Added 2 TDM gamemode with server selector.

# Update [2018-04-01]
- Added Master.

# Patch [2018-03-31]
- Added back pushing for same team.
- Limited drone repel distance.

# Update [2018-03-31]
- Prevented drones from pushing.
- Engineers' oldest turret will now disappear when there are more than six turrets.

# Update [2018-03-31]
- Added back pushing for same team.
- Limited drone repel distance.

# Update [2018-03-30]
- Added reverse mouse and reverse tank keys.
- Various nerfs and buffs.

# Update [2018-03-29]
- Added Auto-Cruiser, upgraded from Cruiser.
- Added Surfer, upgraded from Tri-Angle.
- Added Cropduster, upgraded from Minigun.

# Balance [2018-03-29]
- Nerfed Dual damage slightly.

# Balance [2018-03-26]
- Nerfed swarm drones reload.
- Buffed most tanks reload slightly.

# Balance [2018-03-25]
- Buffed base protectors.
- Nerfed shields again.

# Patch [2018-03-25]
- Added base protectors.
- Nerfed shields.

# Patch [2018-03-25]
- Arena is now 2x bigger.
- Shapes spawn 62% less often.
- Bases added in corners.

# Balance [2018-03-23]
- Nerfed sentries.

# Update [2018-03-22]
- Arras.io is back!
- Removed tokens.
