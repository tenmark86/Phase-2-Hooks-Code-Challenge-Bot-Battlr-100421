import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, enlistBot, deleteBot}) {
  // Your code here

  const mapBots = bots.map(bot => 
    <BotCard 
    key={bot.id}
    bot={bot}
    clickEvent={enlistBot}
    deleteBot={deleteBot}
    />)

  return (
    <div className="ui four column grid">
      <div className="row">
        {mapBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;