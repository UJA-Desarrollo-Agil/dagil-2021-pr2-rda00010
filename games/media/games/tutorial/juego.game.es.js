// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>¿Nada es tan bonito como en sueños o ningún sueño es más bonito que lo que puedes hacer en realidad?</h1>\
        <p>Despierto sudada y temblando.\
        Respiro profundamente varias veces para calmarme, abriendo mucho la boca para no hacer el menor ruido.\
        Estoy mareada. La luz de la luna me ilumina la cara. Escucho un ruido.\
        Creo que viene de debajo de mi cama, tengo miedo. Realmente estoy asustada.\
        <a href='mirar'>¿Me asomo?</a>\
        ¿Cómo me trago el miedo?\
        <a href='nomirar'>¿O ese ruido es fruto de mi imaginación?</a></p>"
    )
    ,


    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    })
    ,
    mirar: new undum.SimpleSituation(
        "<p>Pienso. El miedo es como el dolor, hay que sentirlo para acabar con él.\
        Hay que sentir el miedo para aprender a vencerlo.\
        Asomo, curiosa y temblorosa, el espejo de mano debajo de la cama y miro a los ojos a mi perrito.\
        Son los ojos más bellos y peligrosos que he visto jamás. No sé si estoy lo suficientemente cansada\
        <a href='domir'>como para volverme a dormir.</a>\
        <a href='nomirar'>Miro la luna,</a>\
        está preciosa.\
        </p>",
         {
            heading: "<<Deja de hablarle al miedo y dejará de escucharte>>.",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
nomirar: new undum.SimpleSituation(
        "<p>Mi amiga una vez me aconsejó que si algo me impedía contar ciertas cosas, mirase hace la luna y se lo confesara a ella,\
        tal y como ella decía a menudo.<<Incluso si no quieres contárselo a nadie, o si no puedes por otras circunstancias,\
        o si ya no tiene sentido, aunque no sentimiento, a algo que debió decirse pero no se dijo.\
        Para evitar que ese sentimiento se enquiste, díselo a la luna. Es imposible no confiar en ella. Ella no juzga ni aconseja,\
        solo escucha>>\
        </p>",
         {
            heading: "Continúo mirando la luna.",
            diplayOrder: 2,
            tags: ["topic"]
        }
),
domir: new undum.SimpleSituation(
        "<p>Apago la luz y vuelvo a dormir\
        </p>",
         {
            heading: "Buenas noches.",
            diplayOrder: 2,
            tags: ["topic"]
        }
)
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "mirar", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "nomirar", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "dormir",{priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>Buenas noches.</p>");
};
