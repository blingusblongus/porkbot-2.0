const display = document.querySelector('.display__text');

display.innerHTML = test();

$(document).on('touchend click', 'body', function(e){
    display.innerHTML = test();
})

function test() {
    
    const prefixes = ["Yarr,", "Listen up,", "Avast,", "Incoming transmission,", 'Ahoy there,', 'Shudder ye rudder,', 'Blisterin\' barnacles,'];
    const addresses = ["mateys,", "crew,", "ensign,", "ye landlubbers,", "freebooters,", "privateers,", "ye old salts,", "scallywags,", "ye seadogs,", "ye seadoges,"];
    const commands = ["pack your duffles", "batten down the hatches", 'heave ho', 'get ready to rock', 'prepare to plunder', 'grab your black jacks', 'hoist the Jolly Roger', 'prepare for warp speed', 'weigh anchor', 'run out the long nines', 'throw \'em in the brig', 'set a course for Funkytown', 'arm photon torpedos', 'drink up, me hearties', 'set phasers to stun', 'get ready to dock', 'man the helm', 'fire when ready', 'fire at will', 'weigh anchor', 'hoist the sails', 'walk the plank'];
    const suffixes = ['Yarr!', 'Shiver me timbers!', 'Blimey!', 'Thar she blows!', 'Yo ho ho!', 'A l\'abordage!', 'Land, Ho!'];
    
    let commandSeed = Math.floor(Math.random()*(commands.length - 1));
    
    let prefix = rand(prefixes);
    let address = rand(addresses);
    let command1 = commands[commandSeed];
    commands.splice(commandSeed, 1);
    let command2 = commands[Math.floor(Math.random()*(commands.length - 1))];
    let suffix = rand(suffixes);
    let venue = 'The Bowery Electric';
    let date = 'Friday';
    let porkMessage = rand([`Porky's will be soon be docking at ${venue}. Catch us there on ${date}`, `Porky's is en route to ${venue}. Rendezvous with us on ${date}`]);
    
    return `${prefix} ${address} ${command1} and ${command2}! ${porkMessage}! ${suffix}`;
}

function rand(arr){
    const denom = arr.length;   
    return arr[Math.floor(Math.random()*denom)];
}
